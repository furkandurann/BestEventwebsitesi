const SITE_URL = 'https://bestevent.com.tr'
const BUSINESS_PHONE = '+905307309009'

// === CANONICAL ENTITY OBJECTS (Entity SEO - @id anchoring) ===

export const organizationEntity = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Best Event",
  "alternateName": "Best Event Organizasyon",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    "url": `${SITE_URL}/logo.png`,
    "contentUrl": `${SITE_URL}/logo.png`,
    "width": 512,
    "height": 512,
    "caption": "Best Event Logo"
  },
  "image": { "@id": `${SITE_URL}/#logo` },
  "sameAs": [
    "https://www.instagram.com/besteventorganizasyon/",
    "https://www.instagram.com/palyacogezegenii/",
    "https://www.facebook.com/besteventorganizasyon",
    "https://www.linkedin.com/company/besteventorganizasyon",
    "https://g.co/kgs/bestevent"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": BUSINESS_PHONE,
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": ["Turkish", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+905307309009",
      "contactType": "sales",
      "areaServed": "TR",
      "availableLanguage": ["Turkish"]
    }
  ],
  "foundingDate": "2018",
  "slogan": "Hayalinizdeki etkinligi gercege donusturuyoruz",
  "knowsAbout": [
    "Etkinlik Organizasyonu",
    "Cocuk Dogum Gunu Organizasyonu",
    "Palyaco Kiralama",
    "Bubble Show",
    "Sihirbaz Gosterisi",
    "Kostumlu Karakter Kiralama",
    "Maskot Kiralama",
    "Kurumsal Etkinlik",
    "Acilis Organizasyonu"
  ]
}

export const localBusinessEntity = {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "Best Event - Etkinlik Organizasyonu",
  "url": SITE_URL,
  "telephone": BUSINESS_PHONE,
  "email": "besteventturkiye@gmail.com",
  "priceRange": "$$",
  "image": `${SITE_URL}/content/images/slider/konfeti.webp`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Semsettin Gunaltay Caddesi No:175",
    "addressLocality": "Erenköy",
    "addressRegion": "Istanbul",
    "postalCode": "34738",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.9872,
    "longitude": 29.0301
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "217",
    "bestRating": "5",
    "worstRating": "1"
  },
  "parentOrganization": { "@id": `${SITE_URL}/#organization` }
}

export const websiteEntity = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "Best Event",
  "description": "Istanbul etkinlik organizasyonu, dogum gunu, palyaco, sihirbaz, bubble show kiralama",
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "inLanguage": "tr-TR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}

// === BASE PROVIDER (used in per-page schemas) ===

const baseProvider = {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "Best Event",
  "url": SITE_URL,
  "telephone": BUSINESS_PHONE,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Istanbul",
    "addressRegion": "Istanbul",
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

// === SCHEMA CREATORS ===

export const createServiceSchema = (name, description, canonicalPath, serviceType = 'Etkinlik Organizasyonu', startingPrice = null) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${canonicalPath}/#service`,
  "name": name,
  "description": description,
  "provider": baseProvider,
  "areaServed": {
    "@type": "City",
    "name": "Istanbul"
  },
  "serviceType": serviceType,
  "url": `${SITE_URL}${canonicalPath}`,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "217",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "TRY",
    ...(startingPrice && {
      "price": startingPrice,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": startingPrice,
        "priceCurrency": "TRY",
        "unitText": "etkinlik başına"
      }
    })
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
  "@id": `${SITE_URL}/organizasyonlar/${serviceSlug}/${districtSlug}/#localbusiness`,
  "name": `Best Event - ${districtName} ${serviceName}`,
  "description": `${districtName} bolgesinde profesyonel ${serviceName.toLowerCase()} hizmeti. Best Event ile unutulmaz etkinlikler.`,
  "url": `${SITE_URL}/organizasyonlar/${serviceSlug}/${districtSlug}`,
  "telephone": BUSINESS_PHONE,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": districtName,
    "addressRegion": "Istanbul",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": lat,
    "longitude": lng
  },
  "areaServed": {
    "@type": "Place",
    "name": `${districtName}, Istanbul`
  },
  "parentOrganization": { "@id": `${SITE_URL}/#organization` }
})

export const createImageObjectSchema = (images) => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "image": images.map(img => ({
    "@type": "ImageObject",
    "contentUrl": `${SITE_URL}${img.src}`,
    "name": img.alt,
    "description": img.description || img.alt,
    "width": img.width || 1920,
    "height": img.height || 1080
  }))
})

// === NEW: Event Schema (for Case Studies) ===

export const createEventSchema = (caseStudy) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${SITE_URL}/vaka-analizi/${caseStudy.slug}/#event`,
  "name": caseStudy.eventName,
  "description": caseStudy.description,
  "startDate": caseStudy.date,
  "endDate": caseStudy.endDate || caseStudy.date,
  "location": {
    "@type": "Place",
    "name": caseStudy.venueName,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": caseStudy.district,
      "addressRegion": "Istanbul",
      "addressCountry": "TR"
    }
  },
  "organizer": { "@id": `${SITE_URL}/#organization` },
  "performer": { "@id": `${SITE_URL}/#organization` },
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "image": caseStudy.images?.map(img => `${SITE_URL}${img}`) || [],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "TRY"
  },
  ...(caseStudy.mentions && caseStudy.mentions.length > 0 && {
    "mentions": caseStudy.mentions
  })
})

// === NEW: WebPage Schema (for every page) ===

export const createWebPageSchema = (title, description, canonicalPath) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${canonicalPath}/#webpage`,
  "url": `${SITE_URL}${canonicalPath}`,
  "name": title,
  "description": description,
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "about": { "@id": `${SITE_URL}/#organization` },
  "inLanguage": "tr-TR"
})

export const createJobPostingSchema = (job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "@id": `${SITE_URL}${job.path}/#job`,
  "title": job.shortTitle,
  "description": job.seoDescription,
  "datePosted": "2026-03-18",
  "validThrough": job.validThrough,
  "employmentType": job.employmentType || job.workModel,
  "hiringOrganization": {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "Best Event",
    "sameAs": SITE_URL,
    "logo": `${SITE_URL}/logo.png`
  },
  "industry": "Etkinlik Organizasyonu",
  "occupationalCategory": job.occupationalCategory,
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Istanbul",
      "addressRegion": "Istanbul",
      "addressCountry": "TR"
    }
  },
  "applicantLocationRequirements": {
    "@type": "Country",
    "name": "TR"
  },
  "workHours": job.workHours,
  "responsibilities": job.responsibilities.join(' | '),
  "qualifications": job.requirements.join(' | '),
  "skills": job.skills.join(', '),
  "experienceRequirements": job.experienceRequirements,
  "jobBenefits": job.benefits.join(' | '),
  "directApply": true,
  "url": `${SITE_URL}${job.path}`,
  "identifier": {
    "@type": "PropertyValue",
    "name": "Best Event Kariyer",
    "value": job.identifier
  },
  ...(job.image && { "image": `${SITE_URL}${job.image}` })
})

// === NEW: BlogPosting Schema Helper ===

export const createBlogPostingSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${SITE_URL}/blog/${post.slug}/#article`,
  "headline": post.title,
  "description": post.excerpt || post.description,
  "image": post.image ? `${SITE_URL}${post.image}` : undefined,
  "datePublished": post.dateISO || post.date,
  "dateModified": post.dateModified || post.dateISO || post.date,
  "author": {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`
  },
  "publisher": {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "Best Event",
    "logo": { "@id": `${SITE_URL}/#logo` }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/${post.slug}/#webpage`
  },
  "inLanguage": "tr-TR",
  ...(post.primaryKeyword && { "keywords": post.primaryKeyword })
})

/**
 * HowTo Schema — adım adım hizmet akışları için
 * Google SERP'te görsel adımlarla zengin snippet oluşturur
 * @param {string} name - "Palyaço Kiralama Etkinlik Akışı"
 * @param {string} description - Kısa açıklama
 * @param {Array} steps - [{ title, description, image }]
 * @param {string} totalTime - ISO 8601 süre: "PT2H" (2 saat)
 */
export const createHowToSchema = (name, description, steps, totalTime = 'PT2H') => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": name,
  "description": description,
  "totalTime": totalTime,
  "tool": [],
  "supply": [],
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.title,
    "text": step.description,
    "url": step.href ? `${SITE_URL}${step.href}` : undefined,
    ...(step.image && {
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}${step.image}`,
        ...(step.alt && { "name": step.alt })
      }
    })
  }))
})
