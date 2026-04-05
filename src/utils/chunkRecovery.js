const RECOVERY_FLAG = 'bestevent:chunk-recovery-attempted'

const CHUNK_ERROR_PATTERNS = [
  'failed to fetch dynamically imported module',
  'importing a module script failed',
  'loading chunk',
  'chunkloaderror',
  'dynamically imported module',
]

function getErrorMessage(errorLike) {
  if (!errorLike) return ''

  if (typeof errorLike === 'string') {
    return errorLike.toLowerCase()
  }

  if (typeof errorLike.message === 'string') {
    return errorLike.message.toLowerCase()
  }

  if (typeof errorLike.reason?.message === 'string') {
    return errorLike.reason.message.toLowerCase()
  }

  if (typeof errorLike.reason === 'string') {
    return errorLike.reason.toLowerCase()
  }

  return ''
}

export function isRecoverableChunkError(errorLike) {
  const message = getErrorMessage(errorLike)
  return CHUNK_ERROR_PATTERNS.some((pattern) => message.includes(pattern))
}

export function recoverFromChunkErrorOnce() {
  if (typeof window === 'undefined') return false

  try {
    if (window.sessionStorage.getItem(RECOVERY_FLAG) === '1') {
      return false
    }

    window.sessionStorage.setItem(RECOVERY_FLAG, '1')
    window.location.reload()
    return true
  } catch {
    window.location.reload()
    return true
  }
}

export function clearChunkRecoveryFlag() {
  if (typeof window === 'undefined') return

  try {
    window.sessionStorage.removeItem(RECOVERY_FLAG)
  } catch {
    // sessionStorage erişimi engelliyse sessizce geç
  }
}
