import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://bestevent.com.tr'
const DEFAULT_IMAGE = '/content/images/slider/konfeti.webp'

const Seo = ({
  title,
  description = '',
  image = DEFAULT_IMAGE,
  canonicalPath = '',
  schema = null,
  indexable = true,
  type = 'website',
  publishedTime = null
}) => {
  const { pathname } = useLocation()
  const normalizePath = (value) => {
    const raw = String(value || '').split(/[?#]/)[0].trim()
    const withLeadingSlash = raw.startsWith('/') ? raw : `/${raw}`
    const lower = withLeadingSlash.toLowerCase()
    const withoutTrailing = lower === '/' ? '/' : lower.replace(/\/+$/, '')
    return withoutTrailing || '/'
  }

  const normalizedPath = normalizePath(canonicalPath || pathname)
  const canonical = indexable ? `${SITE_URL}${normalizedPath}` : null
  const fullImageUrl = image?.startsWith('http') ? image : `${SITE_URL}${image}`

  const isTestDomain = typeof window !== 'undefined' && window.location.hostname === 'test.bestevent.com.tr'
  const robotsContent = isTestDomain || !indexable
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  return (
    <Helmet defer={false}>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* SEO Meta Tags */}
      <meta name="robots" content={robotsContent} />
      <meta name="theme-color" content="#1e3a8a" />
      <meta httpEquiv="content-language" content="tr" />
      {indexable && canonical && <link rel="canonical" href={canonical} />}

      {/* Hreflang Tags for Language */}
      {indexable && canonical && <link rel="alternate" hrefLang="tr" href={canonical} />}
      {indexable && canonical && <link rel="alternate" hrefLang="x-default" href={canonical} />}

      {/* Open Graph / Facebook */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {indexable && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="BestEvent - İstanbul Etkinlik Organizasyonu" />
      {image && <meta property="og:image" content={fullImageUrl} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      {image && <meta name="twitter:image" content={fullImageUrl} />}

      {/* Geo Tags */}
      <meta name="geo.region" content="TR-34" />
      <meta name="geo.placename" content="Istanbul" />
      <meta name="geo.position" content="40.9872;29.0301" />
      <meta name="ICBM" content="40.9872, 29.0301" />

      {/* Structured Data */}
      {schema && Array.isArray(schema)
        ? schema.map((s, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))
        : schema && (
            <script type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          )
      }
    </Helmet>
  )
}

export default Seo
