/**
 * Environment Variables Utility
 * Centralized access to environment variables with fallbacks
 */

// Site Configuration
export const SITE_CONFIG = {
  url: import.meta.env.VITE_SITE_URL || 'https://www.bestevent.com.tr',
  name: import.meta.env.VITE_SITE_NAME || 'Best Event',
  description: import.meta.env.VITE_SITE_DESCRIPTION || 'İstanbul\'da profesyonel etkinlik organizasyonu',
}

// Contact Information
export const CONTACT_INFO = {
  phone: import.meta.env.VITE_PHONE_NUMBER || '905349306799',
  email: import.meta.env.VITE_EMAIL || 'info@bestevent.com.tr',
  address: import.meta.env.VITE_ADDRESS || 'İstanbul, Türkiye',
}

// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  number: import.meta.env.VITE_WHATSAPP_NUMBER || '905349306799',
  defaultMessage: import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE || 'Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum',
  getLink: (customMessage) => {
    const message = encodeURIComponent(customMessage || WHATSAPP_CONFIG.defaultMessage)
    return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${message}`
  },
}

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  enabled: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  gaId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
  gtmId: import.meta.env.VITE_GTM_ID || '',
  fbPixelId: import.meta.env.VITE_FB_PIXEL_ID || '',
}

// Error Tracking
export const ERROR_TRACKING = {
  sentryDsn: import.meta.env.VITE_SENTRY_DSN || '',
  enabled: !!import.meta.env.VITE_SENTRY_DSN,
}

// API Configuration
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || '',
  apiKey: import.meta.env.VITE_API_KEY || '',
}

// Build Information
export const BUILD_INFO = {
  date: import.meta.env.VITE_BUILD_DATE || new Date().toISOString().split('T')[0],
  version: import.meta.env.VITE_BUILD_VERSION || '1.0.0',
}

// Feature Flags
export const FEATURE_FLAGS = {
  analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  pwa: import.meta.env.VITE_ENABLE_PWA !== 'false', // Default true
  serviceWorker: import.meta.env.VITE_ENABLE_SERVICE_WORKER !== 'false', // Default true
  webVitals: import.meta.env.VITE_ENABLE_WEB_VITALS !== 'false', // Default true
  performanceMonitoring: import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING === 'true',
  debug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  mockData: import.meta.env.VITE_ENABLE_MOCK_DATA === 'true',
}

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: import.meta.env.VITE_INSTAGRAM_URL || '',
  facebook: import.meta.env.VITE_FACEBOOK_URL || '',
  twitter: import.meta.env.VITE_TWITTER_URL || '',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
}

// SEO Configuration
export const SEO_CONFIG = {
  defaultOgImage: import.meta.env.VITE_DEFAULT_OG_IMAGE || '/assets/images/og-image.jpg',
  twitterHandle: import.meta.env.VITE_TWITTER_HANDLE || '@bestevent',
}

// Environment Detection
export const IS_DEV = import.meta.env.DEV
export const IS_PROD = import.meta.env.PROD
export const MODE = import.meta.env.MODE

// Debug Logger (only in development or when debug flag is enabled)
export const logger = {
  log: (...args) => {
    if (IS_DEV || FEATURE_FLAGS.debug) {
      console.log('[Best Event]', ...args)
    }
  },
  warn: (...args) => {
    if (IS_DEV || FEATURE_FLAGS.debug) {
      console.warn('[Best Event]', ...args)
    }
  },
  error: (...args) => {
    console.error('[Best Event]', ...args)
  },
}

// Validation: Check for required environment variables
export function validateEnv() {
  const errors = []
  
  // Check critical variables
  if (!CONTACT_INFO.phone) {
    errors.push('Missing VITE_PHONE_NUMBER')
  }
  
  if (!WHATSAPP_CONFIG.number) {
    errors.push('Missing VITE_WHATSAPP_NUMBER')
  }
  
  if (errors.length > 0) {
    logger.error('Environment validation failed:', errors)
    if (IS_PROD) {
      throw new Error(`Missing required environment variables: ${errors.join(', ')}`)
    }
  } else {
    logger.log('Environment validation passed')
  }
  
  return errors.length === 0
}

// Auto-validate on import in production
if (IS_PROD) {
  validateEnv()
}

// Export all as default
export default {
  SITE_CONFIG,
  CONTACT_INFO,
  WHATSAPP_CONFIG,
  ANALYTICS_CONFIG,
  ERROR_TRACKING,
  API_CONFIG,
  BUILD_INFO,
  FEATURE_FLAGS,
  SOCIAL_LINKS,
  SEO_CONFIG,
  IS_DEV,
  IS_PROD,
  MODE,
  logger,
  validateEnv,
}
