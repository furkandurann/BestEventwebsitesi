import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../../components/Seo'
import QuickServiceQuote from '../../components/QuickServiceQuote'
import RelatedBlogPosts from '../../components/RelatedBlogPosts'
import { createFAQSchema, createImageObjectSchema, createServiceSchema } from '../../utils/schemaHelpers'
import { generateSrcSet } from '../../utils/responsiveImage'
import { getServiceDetailEntryBySlugAsync } from '../../data/serviceDetailPages.async'

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const [detail, setDetail] = useState(null)
  const [canonicalPath, setCanonicalPath] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    setIsLoading(true)

    getServiceDetailEntryBySlugAsync(slug).then((entry) => {
      if (!isMounted) return

      setDetail(entry?.detail || null)
      setCanonicalPath(entry?.canonicalPath || '')
      setIsLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [slug])

  if (isLoading) {
    return <div className="min-h-[60vh] bg-[#05070d]" />
  }

  if (!detail) {
    return <Navigate to="/organizasyonlar/cocuk-etkinlikleri" replace />
  }
  const faqSchema = createFAQSchema(detail.faqData)
  const serviceSchema = createServiceSchema(
    detail.title,
    detail.description,
    canonicalPath,
    detail.parentServiceName
  )
  const imageGallerySchema = createImageObjectSchema(
    (detail.gallery || [detail.heroImage]).map((src) => ({
      src,
      alt: `${detail.title} görseli`
    }))
  )

  const schema = [
    serviceSchema,
    faqSchema,
    imageGallerySchema,
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://bestevent.com.tr' },
        { '@type': 'ListItem', position: 2, name: detail.parentServiceName, item: `https://bestevent.com.tr${detail.parentServicePath}` },
        { '@type': 'ListItem', position: 3, name: detail.title, item: `https://bestevent.com.tr${canonicalPath}` }
      ]
    }
  ].filter(Boolean)

  return (
    <>
      <Seo
        title={detail.seoTitle}
        description={detail.description}
        keywords={detail.keywords}
        image={detail.heroImage}
        canonicalPath={canonicalPath}
        schema={schema}
      />

      <section className="relative isolate overflow-hidden bg-[#05070d]">
        <div className="absolute inset-0">
          <img
            src={detail.heroImage}
            srcSet={generateSrcSet(detail.heroImage)}
            sizes="100vw"
            alt={detail.title}
            className="h-full w-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#05070d]/75 to-[#05070d]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            {detail.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            {detail.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 md:text-lg">
            {detail.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {detail.quickFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/85 md:text-sm"
              >
                {fact}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to={detail.parentServicePath}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {detail.parentServiceName} Sayfasına Dön
            </Link>
            <a
              href={`https://wa.me/905307309009?text=${encodeURIComponent(detail.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#25D366]/35 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-[#D8FFE7] transition hover:bg-[#25D366]/20"
            >
              WhatsApp&apos;tan Fiyat Al
            </a>
          </div>
        </div>
      </section>

      <QuickServiceQuote
        eyebrow="Hızlı Teklif"
        title={`${detail.title} için net ve hızlı fiyat dönüşü`}
        description={detail.intro}
        bullets={detail.quickFacts}
        whatsappText={detail.whatsappText}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/80">
              Hizmet Detayı
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {detail.intro}
            </p>

            <div className="mt-10 space-y-10">
              {detail.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.items && (
                    <ul className="mt-5 space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 leading-7">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            {detail.gallery.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src={image}
                  srcSet={generateSrcSet(image)}
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  alt={`${detail.title} görsel ${index + 1}`}
                  className="aspect-[4/3] w-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  width={900}
                  height={675}
                />
              </div>
            ))}

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Ana Sahip Sayfa
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                {detail.parentServiceName}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Bu sayfa alt hizmet detayını anlatır. Paket yapısı, tüm hizmet kapsamı ve genel rezervasyon akışı için ana hizmet sayfası esas referans noktasıdır.
              </p>
              <Link
                to={detail.parentServicePath}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ana Hizmet Sayfasını Aç
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#07111f] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/75">
            İlgili Sayfalar
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {detail.relatedLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 text-white transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <p className="text-lg font-semibold tracking-tight">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Bu alt hizmeti ana paket ve ilgili destek sayfalarla birlikte değerlendirin.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sss" className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-800/70">
            Sık Sorulan Sorular
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {detail.title} Hakkında SSS
          </h2>
          <div className="mt-10 space-y-4">
            {detail.faqData.map((faq) => (
              <div key={faq.question} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedBlogPosts servicePath={detail.relatedServicePath} />
    </>
  )
}

export default ServiceDetailPage
