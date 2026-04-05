import { useState } from 'react'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import CaseStudyCard from '../components/CaseStudyCard'
import { caseStudies } from '../data/caseStudies'

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('tumumu')

  const filters = [
    { key: 'tumumu', label: 'Tumumu', count: caseStudies.length },
    { key: 'kurumsal', label: 'Kurumsal', count: caseStudies.filter(cs => cs.clientType === 'kurumsal').length },
    { key: 'ozel', label: 'Ozel', count: caseStudies.filter(cs => cs.clientType === 'ozel').length }
  ]

  const filteredStudies = activeFilter === 'tumumu'
    ? caseStudies
    : caseStudies.filter(cs => cs.clientType === activeFilter)

  const caseStudiesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Vaka Analizi | Best Event Referanslar ve Basari Hikayeleri",
      "description": "Best Event'in Istanbul'daki kurumsal ve ozel etkinlik organizasyonlarindan vaka analizleri. Vodafone, Koc Holding, SenCard, Halkbank referanslari.",
      "url": "https://bestevent.com.tr/vaka-analizi",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": caseStudies.length,
        "itemListElement": caseStudies.map((cs, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://bestevent.com.tr/vaka-analizi/${cs.slug}`,
          "name": cs.title
        }))
      },
      "publisher": {
        "@type": "Organization",
        "name": "Best Event",
        "url": "https://bestevent.com.tr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bestevent.com.tr/content/images/slider/konfeti.webp"
        }
      }
    }
  ]

  return (
    <>
      <Seo
        title="Vaka Analizi | Best Event Referanslar ve Basari Hikayeleri"
        description="Best Event'in Istanbul'daki kurumsal ve ozel etkinlik organizasyonlarindan vaka analizleri. Vodafone, Koc Holding, SenCard, Halkbank gibi markalara sunulan profesyonel organizasyon hizmetleri."
        keywords="vaka analizi, referanslar, kurumsal etkinlik, ozel organizasyon, istanbul, best event, vodafone, koc holding, sencard, halkbank"
        canonicalPath="/vaka-analizi"
        schema={caseStudiesSchema}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-black">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4"
            >
              Referanslar & Basari Hikayeleri
            </motion.p>
            <h1
              className="font-bold tracking-tight text-white mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em'
              }}
            >
              Vaka Analizi
            </h1>
            <p
              className="text-gray-400 max-w-2xl mx-auto mb-8"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: 1.6
              }}
            >
              Istanbul'un onde gelen markalari icin gerceklestirdigimiz etkinliklerden
              detayli vaka analizleri ve basari hikayeleri
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12"
            >
              {[
                { value: '5000+', label: 'Etkinlik' },
                { value: '1000+', label: 'Kurumsal Proje' },
                { value: '%98', label: 'Memnuniyet' },
                { value: '10+', label: 'Yil Deneyim' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 py-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[#1d1d1f] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-[#fbfbfd]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Client Logos Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 py-6 border-b border-gray-200"
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium w-full text-center mb-2">
              Guvendikleri Markalar
            </p>
            {['Vodafone', 'Koc Holding', 'SenCard', 'Halkbank'].map((brand, index) => (
              <span
                key={index}
                className="text-gray-400 font-semibold text-lg tracking-wide hover:text-gray-600 transition-colors"
              >
                {brand}
              </span>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>

          {/* Bos Durum */}
          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Bu kategoride henuz vaka analizi bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-white font-bold mb-6"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                letterSpacing: '-0.02em'
              }}
            >
              Sizin Icin de Unutulmaz Bir Etkinlik Planlayalim
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Kurumsal veya ozel etkinliginiz icin profesyonel organizasyon hizmeti alin.
              Istanbul'un her ilcesinde hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/905307309009?text=Merhaba%2C%20kurumsal%20etkinlik%20organizasyonu%20hakkinda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-green-500/25 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp ile Iletisim
              </a>
              <a
                href="tel:+905307309009"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border border-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                05307309009
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies
