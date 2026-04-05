import { trackWhatsAppClick, trackPhoneClick } from './tracking'

const TRACKED_PATH_PATTERNS = [
  /^\/organizasyonlar(\/|$)/,
  /^\/blog(\/|$)/
]

const getPageContext = (pathname) => {
  if (TRACKED_PATH_PATTERNS[1].test(pathname)) {
    return 'blog'
  }

  if (TRACKED_PATH_PATTERNS[0].test(pathname)) {
    return pathname.split('/').length > 3 ? 'district_service' : 'service'
  }

  return 'other'
}

/**
 * Global Click Tracking
 * Document uzerinde tum wa.me ve tel: linklerini otomatik takip eder.
 * Boylece her bileşene tek tek tracking eklemek gerekmez.
 */
let cleanupGlobalTracking = null

export function initGlobalClickTracking() {
  if (typeof document === 'undefined') {
    return () => {}
  }

  if (cleanupGlobalTracking) {
    return cleanupGlobalTracking
  }

  const handleDocumentClick = (e) => {
    const link = e.target.closest('a[href]')
    if (!link) return

    const href = link.getAttribute('href') || ''
    const pagePath = window.location.pathname
    const pageType = getPageContext(pagePath)

    if (pageType === 'other') {
      return
    }

    const pageUrl = window.location.href

    // WhatsApp linkleri
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      trackWhatsAppClick(pagePath, pageUrl, {
        pagePath,
        pageType,
        linkUrl: href,
        linkText: (link.textContent || '').trim().slice(0, 120)
      })
    }

    // Telefon linkleri
    if (href.startsWith('tel:')) {
      trackPhoneClick(pagePath, pageUrl, {
        pagePath,
        pageType,
        linkUrl: href,
        linkText: (link.textContent || '').trim().slice(0, 120)
      })
    }
  }

  document.addEventListener('click', handleDocumentClick)

  cleanupGlobalTracking = () => {
    document.removeEventListener('click', handleDocumentClick)
    cleanupGlobalTracking = null
  }

  return cleanupGlobalTracking
}
