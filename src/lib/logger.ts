import pino from 'pino'

// Single shared logger instance for the whole app.
//
// In production this emits newline-delimited JSON to stdout, which the
// Fly log shipper picks up and forwards to SigNoz.
//
// When @opentelemetry/instrumentation-pino is active (it is — it's included
// in getNodeAutoInstrumentations), it automatically merges the active OTel
// context into every record:
//   { "trace_id": "abc…", "span_id": "def…", "trace_flags": "01", … }
//
// That gives the Fly log shipper — and SigNoz — everything it needs to
// correlate log lines with the trace they belong to.
const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  // Redact secrets that might leak into log payloads.
  redact: ['req.headers.authorization', 'req.headers.cookie'],
})

export default logger
