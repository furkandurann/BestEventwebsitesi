import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Seo from './Seo'
import { getBlogBySlugAsync } from '../data/blogPosts.async'
import PillarLink from './PillarLink'
import SiloNavigation from './SiloNavigation'

// Pillar service path → İsim eşleştirmesi
const pillarServiceNames = {
  '/organizasyonlar/palyaco-kiralama': 'Palyaço Kiralama',
  '/organizasyonlar/magic-show': 'Sihirbaz Gösterisi',
  '/organizasyonlar/bubble-show': 'Bubble Show',
  '/organizasyonlar/yuz-boyama': 'Yüz Boyama',
  '/organizasyonlar/kostumlu-karakterler': 'Kostümlü Karakterler',
  '/organizasyonlar/maskot-kiralama': 'Maskot Kiralama',
  '/organizasyonlar/pamuk-seker': 'Pamuk Şeker',
  '/organizasyonlar/full-paket-organizasyon': 'Doğum Günü Organizasyonu',
  '/organizasyonlar/cocuk-etkinlikleri': 'Çocuk Etkinlikleri',
  '/organizasyonlar/noel-baba-kiralama': 'Noel Baba Kiralama',
  '/organizasyonlar/dogum-gunu-organizasyonu': 'Doğum Günü Organizasyonu'
}

const kingServiceLinks = [
  { path: '/organizasyonlar/konsept-dogum-gunu', label: 'Konsept Doğum Günü Hizmeti' },
  { path: '/organizasyonlar/dogum-gunu-organizasyonu', label: 'Doğum Günü Organizasyonu' },
  { path: '/organizasyonlar/kostumlu-karakterler', label: 'Kostümlü Karakterler' },
  { path: '/organizasyonlar/maskot-kiralama', label: 'Maskot Kiralama' },
  { path: '/organizasyonlar/palyaco-kiralama', label: 'Palyaço Kiralama' },
  { path: '/organizasyonlar/magic-show', label: 'Sihirbaz Gösterisi' },
  { path: '/organizasyonlar/pamuk-seker', label: 'Pamuk Şeker' },
  { path: '/organizasyonlar/yuz-boyama', label: 'Yüz Boyama' },
  { path: '/organizasyonlar/noel-baba-kiralama', label: 'Noel Baba Kiralama' },
]

const serviceSlugFromPath = (servicePath) => {
  const raw = String(servicePath || '').trim().toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '')
  const pathWithoutPrefix = raw.replace(/^organizasyonlar\//, '')
  const map = {
    'sihirbaz-kiralama': 'magic-show',
    'bubble-show-kiralama': 'bubble-show',
    'profesyonel-yuz-boyama': 'yuz-boyama',
    'profesyonel-makyaj': 'yuz-boyama',
    'dogum-gunu': 'dogum-gunu-organizasyonu',
    'pamuk-seker-arabasi-kiralama': 'pamuk-seker',
  }
  return map[pathWithoutPrefix] || pathWithoutPrefix || 'cocuk-etkinlikleri'
}

const formatDistrict = (value) => {
  const raw = String(value || '').trim().toLowerCase()
  if (!raw) return ''
  return raw
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
    .replace(/İ/g, 'İ')
}

const normalizeDistrictSlug = (value) => {
  const raw = String(value || '').trim().toLowerCase().replace(/\/+$/g, '')
  if (!raw) return ''
  return raw
}

const BlogDetail = ({
  children,
  content,
  relatedServicePath,
  relatedServiceName,
  faqData,
  slug: slugProp,
  blog: blogProp,
  indexable = true,
  soft404 = false
}) => {
  const params = useParams()
  const slug = slugProp || params.slug
  const [blog, setBlog] = useState(blogProp || null)
  const [isLoading, setIsLoading] = useState(!blogProp)

  useEffect(() => {
    let isMounted = true

    if (blogProp) {
      setBlog(blogProp)
      setIsLoading(false)
      return () => {
        isMounted = false
      }
    }

    setIsLoading(true)

    getBlogBySlugAsync(slug).then((item) => {
      if (!isMounted) return

      setBlog(item || null)
      setIsLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [blogProp, slug])

  if (isLoading) {
    return <div className="min-h-[60vh] bg-white" />
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog bulunamadı</h1>
          <Link to="/blog" className="text-red-600 hover:text-red-700 font-semibold">
            ← Blog sayfasına dön
          </Link>
        </div>
      </div>
    )
  }

  const schemaArray = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.excerpt,
      "image": `https://bestevent.com.tr${blog.image}`,
      "datePublished": blog.dateISO || "2026-01-01",
      "dateModified": blog.dateISO || "2026-01-01",
      "author": {
        "@type": "Organization",
        "name": "BestEvent",
        "url": "https://bestevent.com.tr"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BestEvent",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bestevent.com.tr/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://bestevent.com.tr/blog/${slug}`
      }
    }
  ]

  if (faqData && faqData.length > 0) {
    schemaArray.push({
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
    })
  }

  const safeServiceSlug = serviceSlugFromPath(blog.pillarService)
  const relatedDistricts = Array.isArray(blog.relatedDistricts) ? blog.relatedDistricts : []
  const districtLinks = Array.from(
    new Set(
      relatedDistricts
        .map(normalizeDistrictSlug)
        .filter(Boolean)
    )
  )
    .map((districtSlug) => ({
      slug: districtSlug,
      label: formatDistrict(districtSlug),
    }))
    .filter(link => link.slug && link.label)
    .slice(0, 6)

  return (
    <>
      <Seo
        title={`${blog.title} | Best Event Blog`}
        description={blog.excerpt}
        keywords={`${blog.title}, ${blog.category}, istanbul, etkinlik, organizasyon, kiralama, gösteri`}
        image={blog.image}
        canonicalPath={`/blog/${slug}`}
        indexable={indexable}
        schema={schemaArray}
      />

      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            width={1200}
            height={630}
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
              <span className="text-white/80 text-sm">
                {blog.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {blog.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              {children || content}
            </div>

            {districtLinks.length > 0 && (
              <section className="mb-8 p-6 rounded-2xl border border-gray-200 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bölge Bazlı Rehberlik</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Bu yazıyla ilgili semt bazlı içerikler ve hizmet sayfaları:
                </p>
                <div className="flex flex-wrap gap-2">
                  {districtLinks.map(({ slug, label }) => (
                    <Link
                      key={slug}
                      to={`/organizasyonlar/${safeServiceSlug}/${slug}`}
                      className="inline-flex text-sm px-4 py-2 rounded-full border border-gray-300 bg-gray-50 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                      {label} için {safeServiceSlug.replace('-', ' ')} Hizmeti
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {soft404 && (
              <section className="mb-8 p-6 rounded-2xl border border-yellow-300 bg-yellow-50 text-sm text-yellow-900">
                <strong>Not:</strong> Bu sayfanın içerik derinliği sınırlı. İlgili ana başlıklar, hizmet ve semt sayfalarına yönlendirilerek daha güçlü içerik akışıyla geliştirilebilir.
              </section>
            )}

            <section className="mt-8 mb-8 p-6 rounded-2xl border border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ana Sayfa ve Kral Hizmetler</h3>
              <p className="text-sm text-gray-600 mb-4">
                Ana sinyalin korunması için önce anasayfa ve satış odağındaki ana hizmet sayfalarımıza yönelin.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors"
                >
                  Türkiye&apos;de en çok tercih edilen etkinlik hizmetleri
                </Link>
                <Link
                  to="/organizasyonlar/dogum-gunu-organizasyonu"
                  className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors"
                >
                  Doğum Günü Organizasyonu için Ana Sayfa
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {kingServiceLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="inline-flex text-sm px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* Pillar Service Link - Blog yazısını pillar sayfasına bağla */}
            {blog.pillarService && (
              <PillarLink
                servicePath={blog.pillarService}
                serviceName={pillarServiceNames[blog.pillarService] || relatedServiceName || 'Hizmet'}
              />
            )}

            {/* Silo Navigation - Aynı konudaki diğer blog yazıları */}
            <SiloNavigation
              currentSlug={slug}
              subCategory={blog.subCategory}
              relatedBlogSlugs={blog.relatedBlogs}
            />
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Etkinliğinizi Planlayalım!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Profesyonel organizasyon, kiralama ve gösteri hizmetleri için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905307309009"
              className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts & Service */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            İlgili Hizmetler ve Yazılar
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServicePath && (
              <Link to={relatedServicePath} className="bg-purple-600 text-white px-5 py-2.5 rounded-full shadow hover:shadow-lg transition-all text-sm font-semibold hover:bg-purple-700">
                {relatedServiceName || pillarServiceNames[relatedServicePath] || 'Hizmet'} Hizmeti →
              </Link>
            )}
            <Link to="/blog" className="bg-white text-gray-700 px-5 py-2.5 rounded-full shadow hover:shadow-lg transition-all text-sm font-semibold hover:bg-gray-100">
              ← Tüm Bloglar
            </Link>
            <Link to="/organizasyonlar/cocuk-etkinlikleri" className="bg-white text-gray-700 px-5 py-2.5 rounded-full shadow hover:shadow-lg transition-all text-sm font-semibold hover:bg-gray-100">
              Çocuk Etkinlikleri
            </Link>
            <Link to="/iletisim" className="bg-red-600 text-white px-5 py-2.5 rounded-full shadow hover:shadow-lg transition-all text-sm font-semibold hover:bg-red-700">
              İletişim
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetail
