export async function register() {
  // Only run on the Node.js runtime (server-side), not in the Edge runtime or browser
  if (process.env.NEXT_RUNTIME !== 'nodejs') return

  const { NodeSDK } = await import('@opentelemetry/sdk-node')
  const { OTLPTraceExporter } = await import('@opentelemetry/exporter-trace-otlp-http')
  const { resourceFromAttributes } = await import('@opentelemetry/resources')
  const { getNodeAutoInstrumentations } = await import('@opentelemetry/auto-instrumentations-node')

  const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT
  const ingestionKey = process.env.SIGNOZ_INGESTION_KEY
  const serviceName = process.env.OTEL_SERVICE_NAME ?? 'devsnorte-landing-page'

  if (!endpoint) {
    console.warn('[otel] OTEL_EXPORTER_OTLP_ENDPOINT is not set — tracing disabled')
    return
  }

  const traceExporter = new OTLPTraceExporter({
    url: `${endpoint}/v1/traces`,
    headers: {
      ...(ingestionKey ? { 'signoz-ingestion-key': ingestionKey } : {})
    }
  })

  const sdk = new NodeSDK({
    resource: resourceFromAttributes({
      'service.name': serviceName
    }),
    traceExporter,
    instrumentations: [
      getNodeAutoInstrumentations({
        // fs instrumentation is very noisy in Next.js — disable it
        '@opentelemetry/instrumentation-fs': { enabled: false }
      })
    ]
  })

  sdk.start()
}
