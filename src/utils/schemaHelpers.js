const SITE_URL = 'https://bestevent.com.tr'
const BUSINESS_PHONE = '+905307309009'

const baseProvider = {
  "@type": "LocalBusiness",
  "name": "Best Event",
  "url": SITE_URL,
  "telephone": BUSINESS_PHONE,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İstanbul",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "217",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export const createServiceSchema = (name, description, canonicalPath, serviceType = 'Etkinlik Organizasyonu') => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": baseProvider,
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "serviceType": serviceType,
  "url": `${SITE_URL}${canonicalPath}`,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "TRY"
  }
})

export const createFAQSchema = (faqData) => {
  if (!faqData || faqData.length === 0) return null
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export const createLocalBusinessSchema = (districtName, serviceName, serviceSlug, districtSlug, lat, lng) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Best Event - ${districtName} ${serviceName}`,
  "description": `${districtName} bölgesinde profesyonel ${serviceName.toLowerCase()} hizmeti. Best Event ile unutulmaz etkinlikler.`,
  "url": `${SITE_URL}/organizasyonlar/${serviceSlug}/${districtSlug}`,
  "telephone": BUSINESS_PHONE,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": districtName,
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": lat,
    "longitude": lng
  },
  "areaServed": {
    "@type": "Place",
    "name": `${districtName}, İstanbul`
  },
  "provider": baseProvider
})
