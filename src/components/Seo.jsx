import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.bestevent.com.tr'
const DEFAULT_IMAGE = '/content/images/slider/konfeti.jpg'

const Seo = ({
  title,
  description = '',
  keywords = [],
  image = DEFAULT_IMAGE,
  canonicalPath = '',
  schema = null,
  type = 'website'
}) => {
  const { pathname } = useLocation()
  const canonical = `${SITE_URL}${canonicalPath || pathname}`
  const keywordString = Array.isArray(keywords) ? keywords.join(', ') : keywords

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywordString && <meta name="keywords" content={keywordString} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={`${SITE_URL}${image}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      {image && <meta name="twitter:image" content={`${SITE_URL}${image}`} />}

      {/* Geo Tags */}
      <meta name="geo.region" content="TR-34" />
      <meta name="geo.placename" content="Istanbul" />
      <meta name="geo.position" content="40.9872;29.0301" />
      <meta name="ICBM" content="40.9872, 29.0301" />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

export default Seo
