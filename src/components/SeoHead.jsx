import { Helmet } from 'react-helmet-async'

export default function SeoHead({ title, description, image, url, schema }) {
  const siteName = 'BestEvent'

  return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        
        {/* Preload LCP hero (desktop) */}
        {image?.src1920 && (
          <link
            rel="preload"
            as="image"
            href={image.src1920}
            imagesrcset={`${image.src1280} 1280w, ${image.src1920} 1920w`}
            imagesizes="100vw"
            fetchpriority="high"
          />
        )}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image?.src1200 && <meta property="og:image" content={image.src1200} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image?.src1200 && <meta name="twitter:image" content={image.src1200} />}

        {/* JSON-LD Schema */}
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Helmet>
  )
}
