import pkg from '../package.json'

export async function register() {
  // Only run on the Node.js runtime (server-side), not in the Edge runtime or browser
  if (process.env.NEXT_RUNTIME !== 'nodejs') return

  const { NodeSDK } = await import('@opentelemetry/sdk-node')
  const { OTLPTraceExporter } = await import('@opentelemetry/exporter-trace-otlp-http')
  const { OTLPMetricExporter } = await import('@opentelemetry/exporter-metrics-otlp-http')
  const { PeriodicExportingMetricReader } = await import('@opentelemetry/sdk-metrics')
  const { HostMetrics } = await import('@opentelemetry/host-metrics')
  const { resourceFromAttributes } = await import('@opentelemetry/resources')
  const { getNodeAutoInstrumentations } = await import('@opentelemetry/auto-instrumentations-node')

  const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT
  const ingestionKey = process.env.SIGNOZ_INGESTION_KEY

  if (!endpoint) {
    // Import lazily to keep the module graph clean at startup
    const { default: logger } = await import('@/lib/logger')
    logger.warn('OTEL_EXPORTER_OTLP_ENDPOINT is not set — tracing disabled')
    return
  }

  // Map NODE_ENV to semconv well-known values for deployment.environment.name.
  // The spec defines: development | production | staging | test
  // (not "dev" / "prod" — using the wrong strings breaks grouping in backends).
  const deploymentEnvMap: Record<string, string> = {
    production: 'production',
    development: 'development',
    test: 'test'
  }
  const deploymentEnvironment = deploymentEnvMap[process.env.NODE_ENV ?? ''] ?? process.env.NODE_ENV ?? 'development'

  // Map process.arch to semconv well-known values: amd64 | arm64 | arm32 | …
  // Node.js reports: x64 | arm64 | arm | ia32 | mips | …
  const archMap: Record<string, string> = {
    x64: 'amd64',
    arm64: 'arm64',
    arm: 'arm32'
  }
  const hostArch = archMap[process.arch] ?? process.arch

  // Base resource attributes — always present.
  const baseAttributes: Record<string, string> = {
    'service.name': process.env.OTEL_SERVICE_NAME ?? 'devsnorte-landing-page',
    // Bumping package.json version is all you need to update this.
    'service.version': pkg.version,
    // Semconv well-known value, not the raw NODE_ENV string.
    'deployment.environment.name': deploymentEnvironment,
    // Node.js runtime — mirrors the Erlang process.runtime.* trio.
    // Invaluable for spotting Node version regressions across upgrades.
    'process.runtime.name': 'nodejs',
    'process.runtime.version': process.versions.node,
    'process.runtime.description': `Node.js ${process.versions.node} (V8 ${process.versions.v8})`,
    // Always-present host attribute; mapped to semconv well-known values.
    'host.arch': hostArch
  }

  // Optional attributes — only added when the env var is present.
  // Fly.io injects FLY_* automatically on every Machine; RELEASE_COMMIT is
  // baked into the Docker image at build time via --build-arg GIT_COMMIT=<sha>
  // (see Dockerfile). Falls back to absent when built without it.
  const optionalAttributes: Array<[string, string | undefined]> = [
    // host.name = machine ID lets you filter traces by host in any
    // OTel-compatible backend (e.g. {"host.name": "1850926c203908"}).
    ['host.name', process.env.FLY_MACHINE_ID],
    // host.id — spec: "For Cloud, this must be the instance_id assigned
    // by the cloud provider." Same value as host.name, different semconv slot.
    ['host.id', process.env.FLY_MACHINE_ID],
    // service.instance.id — tells apart instances of the same service
    // (e.g. during a blue/green deploy when two machines run simultaneously).
    ['service.instance.id', process.env.FLY_MACHINE_ID],
    // vcs.repository.ref.revision = git SHA baked in by Dockerfile ARG.
    // Lets you jump straight from a trace to the exact commit in GitHub.
    ['vcs.repository.ref.revision', process.env.RELEASE_COMMIT],
    // fly.image_ref = the full Docker image tag for this deployment.
    // Unique per `fly deploy`; lets you correlate traces to a specific
    // artifact even when multiple deploys share the same semver.
    ['fly.image_ref', process.env.FLY_IMAGE_REF],
    ['fly.region', process.env.FLY_REGION],
    ['fly.machine.id', process.env.FLY_MACHINE_ID],
    ['fly.machine.version', process.env.FLY_MACHINE_VERSION],
    ['fly.alloc.id', process.env.FLY_ALLOC_ID],
    ['fly.public.ip', process.env.FLY_PUBLIC_IP],
    ['fly.primary.region', process.env.PRIMARY_REGION]
  ]

  const attributes = optionalAttributes
    .filter((entry): entry is [string, string] => !!entry[1])
    .reduce<Record<string, string>>((acc, [k, v]) => ({ ...acc, [k]: v }), baseAttributes)

  // Shared headers for both trace and metric exporters
  const otlpHeaders: Record<string, string> = ingestionKey ? { 'signoz-ingestion-key': ingestionKey } : {}

  const traceExporter = new OTLPTraceExporter({
    url: `${endpoint}/v1/traces`,
    headers: otlpHeaders
  })

  const metricReader = new PeriodicExportingMetricReader({
    // Export every 60 s — matches a sensible dashboard resolution without
    // flooding the backend. Tune down to 15_000 if you want finer granularity.
    exportIntervalMillis: 60_000,
    exporter: new OTLPMetricExporter({
      url: `${endpoint}/v1/metrics`,
      headers: otlpHeaders
    })
  })

  const sdk = new NodeSDK({
    resource: resourceFromAttributes(attributes),
    traceExporter,
    metricReader,
    instrumentations: [
      getNodeAutoInstrumentations({
        // fs instrumentation is very noisy in Next.js — disable it
        '@opentelemetry/instrumentation-fs': { enabled: false }
      })
    ]
  })

  sdk.start()

  // HostMetrics reads from the OS after the SDK has registered the global
  // MeterProvider. Collects: CPU, memory, network I/O, and filesystem usage.
  new HostMetrics().start()
}
