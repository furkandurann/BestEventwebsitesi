import { useEffect, useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getConceptDetailEntryBySlugAsync } from '../../data/catalogData.async'
import Seo from '../../components/Seo'
import TrustSection from '../../components/TrustSection'
import { generateSrcSet } from '../../utils/responsiveImage'

const districts = ['Kadıköy','Beşiktaş','Bakırköy','Ataşehir','Beylikdüzü','Sarıyer','Üsküdar','Maltepe','Kartal','Pendik','Şişli','Fatih','Beyoğlu','Zeytinburnu','Küçükçekmece','Başakşehir']

const ConceptDetail = () => {
  const { slug } = useParams()
  const [concept, setConcept] = useState(null)
  const [relatedItems, setRelatedItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    setIsLoading(true)

    getConceptDetailEntryBySlugAsync(slug).then((entry) => {
      if (!isMounted) return

      setConcept(entry?.concept || null)
      setRelatedItems(entry?.relatedItems || [])
      setIsLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [slug])

  if (isLoading) {
    return <div className="min-h-screen bg-white" />
  }

  if (!concept) {
    return <Navigate to="/organizasyonlar/konsept-dogum-gunu" replace />
  }

  const faqSchema = concept.faqs && concept.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": concept.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  } : null

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${concept.name} Konsept Doğum Günü Süsleme İstanbul`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "BestEvent",
        "telephone": "+905307309009",
        "address": { "@type": "PostalAddress", "addressLocality": "İstanbul", "addressCountry": "TR" }
      },
      "serviceType": "Konsept Doğum Günü Pano Süsleme",
      "areaServed": { "@type": "City", "name": "İstanbul" },
      "image": concept.heroImage,
      "description": concept.seoDescription
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
        { "@type": "ListItem", "position": 2, "name": "Konsept Doğum Günü", "item": "https://bestevent.com.tr/organizasyonlar/konsept-dogum-gunu" },
        { "@type": "ListItem", "position": 3, "name": `${concept.name} Konsept`, "item": `https://bestevent.com.tr/konsept/${concept.slug}` }
      ]
    },
    ...(faqSchema ? [faqSchema] : [])
  ]

  return (
    <>
      <Seo
        title={concept.seoTitle || `${concept.name} Konsept Doğum Günü | BestEvent`}
        description={concept.seoDescription}
        keywords={concept.seoKeywords}
        image={concept.heroImage}
        canonicalPath={`/konsept/${concept.slug}`}
        schema={schema}
      />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={concept.heroImage}
            srcSet={generateSrcSet(concept.heroImage)}
            sizes="100vw"
            alt={`${concept.name} konsept doğum günü süsleme İstanbul`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            {concept.name} Konsept Doğum Günü
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
          >
            {concept.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <a href="https://wa.me/905307309009" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all">
              WhatsApp ile Ulaşın
            </a>
            <a href="tel:+905307309009" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all">
              05307309009
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* TANITIM */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">{concept.name} Doğum Günü Süsleme Hizmeti</h2>
            {concept.longDescription && concept.longDescription.split('\n\n').map((p, i) => (
              <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6">{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GORSEL 1 */}
      {concept.images && concept.images[0] && (
        <section className="w-full bg-gray-50 py-4">
          <div className="max-w-5xl mx-auto px-4">
            <img src={concept.images[0]} srcSet={generateSrcSet(concept.images[0])} sizes="(max-width:1024px) 100vw, 1024px" alt={`${concept.name} konsept süsleme örneği`} className="w-full rounded-2xl shadow-lg" loading="lazy" decoding="async" />
          </div>
        </section>
      )}

      {/* NEDEN BIZI SECMELISINIZ + OZELLIKLER */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">Neden BestEvent {concept.name} Konsept Süsleme?</h2>
            {concept.whyChoose && concept.whyChoose.split('\n\n').map((p, i) => (
              <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6">{p}</p>
            ))}
          </motion.div>
          {concept.features && concept.features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {concept.features.map((feat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-100">
                  <span className="text-green-500 font-bold mr-2">&#10003;</span>
                  <span className="text-gray-700 font-medium">{feat}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* GORSEL 2 */}
      {concept.images && concept.images[1] && (
        <section className="w-full bg-gray-50 py-4">
          <div className="max-w-5xl mx-auto px-4">
            <img src={concept.images[1]} srcSet={generateSrcSet(concept.images[1])} sizes="(max-width:1024px) 100vw, 1024px" alt={`${concept.name} pano süsleme detayı`} className="w-full rounded-2xl shadow-lg" loading="lazy" decoding="async" />
          </div>
        </section>
      )}

      {/* KURULUM SURECI + SENARYOLAR */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">{concept.name} Pano Kurulum Süreci</h2>
            {concept.setupProcess && concept.setupProcess.split('\n\n').map((p, i) => (
              <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">{p}</p>
            ))}
          </motion.div>
          {concept.eventScenarios && concept.eventScenarios.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {concept.eventScenarios.map((scenario, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <p className="text-gray-200 leading-relaxed">{scenario}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* GORSEL 3 */}
      {concept.images && concept.images[2] && (
        <section className="w-full bg-gray-50 py-4">
          <div className="max-w-5xl mx-auto px-4">
            <img src={concept.images[2]} srcSet={generateSrcSet(concept.images[2])} sizes="(max-width:1024px) 100vw, 1024px" alt={`${concept.name} doğum günü dekorasyon`} className="w-full rounded-2xl shadow-lg" loading="lazy" decoding="async" />
          </div>
        </section>
      )}

      {/* EBEVEYN REHBERI */}
      {concept.parentTips && (
        <section className="py-16 sm:py-20" style={{ background: concept.gradient || 'linear-gradient(135deg, #667eea, #764ba2)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Parti Hazırlığı İçin İpuçları</h3>
              {concept.parentTips.split('\n\n').map((p, i) => (
                <p key={i} className="text-white/90 text-lg leading-relaxed mb-4">{p}</p>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* BILGILER */}
      {concept.funFacts && concept.funFacts.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Biliyor Muydunuz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {concept.funFacts.map((fact, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{fact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GUVEN */}
      <TrustSection />

      {/* KOSTUMLU KARAKTER ve HIZMET BOLGELERI */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">Bu Konseptle Birlikte</h2>

          {concept.relatedCharacters && concept.relatedCharacters.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Kostümlü Karakter Hizmetleri</h3>
              <div className="flex flex-wrap gap-3">
                {concept.relatedCharacters.map((charSlug, i) => (
                  <Link key={i} to={`/karakter/${charSlug}`} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors border border-gray-200 shadow-sm">
                    {charSlug.replace(/-/g, ' ').replace('istanbul', '').replace('kiralama', 'Kiralama').replace('kostum', 'Kostüm')}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hizmet Bölgelerimiz</h3>
            <div className="flex flex-wrap gap-2">
              {districts.map((d, i) => (
                <span key={i} className="bg-white px-3 py-1.5 rounded-full text-sm text-gray-600 border border-gray-200">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      {concept.faqs && concept.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight">{concept.name} Konsept Doğum Günü Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              {concept.faqs.map((faq, i) => (
                <details key={i} className="group bg-white/10 rounded-xl border border-white/10" open={i < 2}>
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-white hover:text-pink-200 transition-colors">
                    <span>{faq.q}</span>
                    <span className="ml-4 text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-300 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ILISKILI KONSEPTLER */}
      {relatedItems.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benzer Konseptler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map(item => (
                <Link key={item.id} to={`/konsept/${item.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                    <img src={item.heroImage} srcSet={generateSrcSet(item.heroImage)} sizes="(max-width:640px) 100vw, 33vw" alt={`${item.name} konsept doğum günü`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-bold text-white">{item.name} Konsept</h3>
                      <p className="text-white/70 text-sm mt-1 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{concept.name} Konsept Doğum Günü Organizasyonu</h2>
          <p className="text-gray-300 text-lg mb-8">Hayalinizdeki {concept.name} temalı partiyi birlikte planlayalım. Hemen iletişime geçin!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/905307309009" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg shadow-green-500/25">
              WhatsApp ile Ulaşın
            </a>
            <a href="tel:+905307309009" className="inline-flex items-center gap-2 bg-white text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all">
              05307309009
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConceptDetail
