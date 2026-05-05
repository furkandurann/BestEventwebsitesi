/**
 * Chunk Recovery - 2026 Google Standards
 * Tek, temiz strateji: lazy import retry + fallback
 * Sonsuz döngü yok, agresif cache wipe yok.
 */

const CHUNK_ERROR_PATTERNS = [
  'failed to fetch dynamically imported module',
  'importing a module script failed',
  'loading chunk',
  'chunkloaderror',
  'dynamically imported module',
  'error loading dynamically imported module',
]

function getErrorMessage(err) {
  if (!err) return ''
  if (typeof err === 'string') return err.toLowerCase()
  if (typeof err.message === 'string') return err.message.toLowerCase()
  return ''
}

export function isChunkError(err) {
  const msg = getErrorMessage(err)
  return CHUNK_ERROR_PATTERNS.some(p => msg.includes(p))
}
