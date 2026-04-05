// Google Ads & Analytics Tracking Utility
// Bu dosya tüm conversion tracking ve event tracking işlemlerini yönetir

// ==========================================
// GOOGLE ADS CONVERSION TRACKING
// ==========================================

const ADS_CONVERSIONS = {
  phone: 'AW-17885091470/Jfb1CIKwjIAcEI6to9BC',
  whatsapp: 'AW-17885091470/lcecCNG-goAcEI6to9BC',
  form: 'AW-17885091470/NuSjCM7GjIAcEI6to9BC'
}

const recentConversions = new Map()
const isDev = typeof import.meta !== 'undefined' && import.meta.env?.DEV

const debugLog = (...args) => {
  if (isDev) {
    console.log(...args)
  }
}

const shouldTrackConversion = (key, ttlMs = 1500) => {
  if (!key) return true

  const now = Date.now()
  const lastTrackedAt = recentConversions.get(key)

  if (lastTrackedAt && now - lastTrackedAt < ttlMs) {
    return false
  }

  recentConversions.set(key, now)
  return true
}

/**
 * Google Ads Conversion Tracking
 * @param {string} sendTo - Google Ads send_to değeri
 * @param {number} value - Conversion değeri (TL)
 * @param {string} dedupeKey - Yakın zamanlı çift tetiklemeleri engeller
 */
export const trackGoogleAdsConversion = (sendTo, value = 0, dedupeKey = '') => {
  if (typeof window !== 'undefined' && window.gtag && shouldTrackConversion(dedupeKey)) {
    window.gtag('event', 'conversion', {
      'send_to': sendTo,
      'value': value,
      'currency': 'TRY'
    })
    debugLog(`[Google Ads] Conversion tracked: ${sendTo}, Value: ${value} TRY`)
  }
}

// ==========================================
// GOOGLE ANALYTICS 4 (GA4) EVENT TRACKING
// ==========================================

/**
 * GA4 Event Tracking
 * @param {string} eventName - Event adı
 * @param {object} params - Event parametreleri
 */
export const trackGA4Event = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
    debugLog(`[GA4] Event tracked: ${eventName}`, params)
  }
}

// ==========================================
// PREDEFINED CONVERSION EVENTS
// ==========================================

/**
 * WhatsApp Click Tracking
 * @param {string} serviceName - Hizmet adı (örn: "Yüz Boyama")
 * @param {string} pageUrl - Sayfa URL'i
 */
export const trackWhatsAppClick = (serviceName, pageUrl, meta = {}) => {
  const dedupeKey = `whatsapp:${pageUrl}:${meta.linkUrl || ''}`
  if (!shouldTrackConversion(dedupeKey)) {
    return
  }

  trackGoogleAdsConversion(ADS_CONVERSIONS.whatsapp, 0)

  // GA4 Event
  trackGA4Event('whatsapp_click', {
    service_name: serviceName,
    page_url: pageUrl,
    page_path: meta.pagePath || '',
    page_type: meta.pageType || 'other',
    link_url: meta.linkUrl || '',
    link_text: meta.linkText || '',
    event_category: 'engagement',
    event_label: 'WhatsApp CTA',
    value: 1
  })
}

/**
 * Phone Click Tracking (Tıkla ve Ara)
 * @param {string} serviceName - Hizmet adı
 * @param {string} pageUrl - Sayfa URL'i
 */
export const trackPhoneClick = (serviceName, pageUrl, meta = {}) => {
  const dedupeKey = `phone:${pageUrl}:${meta.linkUrl || ''}`
  if (!shouldTrackConversion(dedupeKey)) {
    return
  }

  trackGoogleAdsConversion(ADS_CONVERSIONS.phone, 0)

  // GA4 Event
  trackGA4Event('phone_click', {
    service_name: serviceName,
    page_url: pageUrl,
    page_path: meta.pagePath || '',
    page_type: meta.pageType || 'other',
    link_url: meta.linkUrl || '',
    link_text: meta.linkText || '',
    event_category: 'engagement',
    event_label: 'Phone CTA',
    value: 1
  })
}

/**
 * Form Submit Tracking
 * @param {string} formName - Form adı (örn: "Contact Form")
 * @param {string} serviceName - Hizmet adı
 */
export const trackFormSubmit = (formName, serviceName = '') => {
  const pageKey = typeof window !== 'undefined' ? window.location.pathname : 'server'

  // Google Ads Conversion
  trackGoogleAdsConversion(ADS_CONVERSIONS.form, 0, `form:${formName}:${serviceName}:${pageKey}`)
  
  // GA4 Event
  trackGA4Event('form_submit', {
    form_name: formName,
    service_name: serviceName,
    event_category: 'lead_generation',
    event_label: 'Form Submission',
    value: 100
  })
}

/**
 * Service Page View Tracking
 * @param {string} serviceName - Hizmet adı
 * @param {string} serviceCategory - Hizmet kategorisi
 */
export const trackServicePageView = (serviceName, serviceCategory = '') => {
  // GA4 Event (Google Ads'e conversion değil, sadece engagement)
  trackGA4Event('service_view', {
    service_name: serviceName,
    service_category: serviceCategory,
    event_category: 'page_view',
    event_label: 'Service Page',
    value: 10
  })
}

/**
 * CTA Button Click Tracking (Generic)
 * @param {string} ctaText - CTA button text
 * @param {string} ctaLocation - CTA'nın sayfadaki konumu (örn: "hero", "footer")
 */
export const trackCTAClick = (ctaText, ctaLocation, serviceName = '') => {
  trackGA4Event('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    service_name: serviceName,
    event_category: 'engagement',
    event_label: 'CTA Click'
  })
}

/**
 * Related Service Click Tracking
 * @param {string} fromService - Mevcut hizmet
 * @param {string} toService - Tıklanan ilgili hizmet
 */
export const trackRelatedServiceClick = (fromService, toService) => {
  trackGA4Event('related_service_click', {
    from_service: fromService,
    to_service: toService,
    event_category: 'navigation',
    event_label: 'Internal Link'
  })
}

// ==========================================
// FACEBOOK PIXEL (OPSIYONEL)
// ==========================================

/**
 * Facebook Pixel Event Tracking
 * @param {string} eventName - Event adı
 * @param {object} params - Event parametreleri
 */
export const trackFacebookPixel = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
    debugLog(`[Facebook Pixel] Event tracked: ${eventName}`, params)
  }
}

// ==========================================
// SETUP FUNCTIONS
// ==========================================

/**
 * Initialize Google Ads
 * NOT: Bu fonksiyon index.html'de çağrılmalı
 */
export const initializeGoogleAds = (conversionId) => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', conversionId)
  }
}

/**
 * Initialize Google Analytics 4
 */
export const initializeGA4 = (measurementId) => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', measurementId)
  }
}

// ==========================================
// USAGE INSTRUCTIONS
// ==========================================

/*
KULLANIM ÖRNEĞİ:

1. index.html'de Google Ads ve GA4'ü initialize edin:
   <script>
     // Google Ads Conversion ID'nizi buraya yazın
     initializeGoogleAds('AW-XXXXXXXXX')
     // Google Analytics 4 Measurement ID'nizi buraya yazın
     initializeGA4('G-XXXXXXXXXX')
   </script>

2. Component'lerde import edin:
   import { trackWhatsAppClick, trackPhoneClick } from '../utils/tracking'

3. Event handler'larda kullanın:
   <a 
     href="https://wa.me/905307309009" 
     onClick={() => trackWhatsAppClick('Yüz Boyama', window.location.href)}
   >
     WhatsApp
   </a>

4. Google Ads'te conversion action'ları oluşturun:
   - WhatsApp Click: whatsapp_conversion
   - Phone Click: phone_conversion
   - Form Submit: form_submit_conversion

5. Conversion tracking kodlarını güncelleyin:
   - 'AW-XXXXXXXXX' yerine kendi conversion ID'nizi yazın
   - Her conversion için ayrı label kullanın

GOOGLE ADS CONVERSION SETUP:
1. Google Ads → Tools & Settings → Conversions
2. "+ New conversion action" → Website
3. Conversion name: "WhatsApp Click"
4. Category: "Lead"
5. Value: "50 TRY" (her lead için)
6. Count: "One" (her tıklama için bir kez)
7. Save ve conversion ID & label'ı kopyalayın
8. Bu dosyadaki ilgili fonksiyona yapıştırın

GA4 SETUP:
1. Google Analytics → Admin → Data Streams
2. Web stream seçin → Measurement ID'yi kopyalayın (G-XXXXXXXXXX)
3. initializeGA4() fonksiyonuna yapıştırın
4. Events → Custom definitions → Create custom events
5. Event name'leri bu dosyadaki event name'lerle eşleştirin
*/
