import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../../components/Seo'
import GoogleReviews from '../../components/GoogleReviews'
import { getReviewsByTags } from '../../data/googleReviews'
import { getDistrict, getService, getLocalContent, getServicesForDistrict, districts } from '../../data/localPages'
import { createLocalBusinessSchema } from '../../utils/schemaHelpers'

// ─── Heading Varyant Helpers ────────────────────────────
const headingVariants = {
  serviceDetail: {
    1: (d, s) => <>{d} Bölgesinde Profesyonel <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.name} Hizmetimiz</span></>,
    2: (d, s) => <>{d} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Gösterisi</span> &amp; Organizasyonu</>,
    3: (d, s) => <>Neden {d} İçin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Best Event {s.name}</span>?</>,
  },
  faq: {
    1: (d, s) => <>{d} {s.name} Hakkında <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sık Sorulan Sorular</span></>,
    2: (d, s) => <>{d} {s.shortName} Organizasyonu — <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Merak Edilenler</span></>,
    3: (d, s) => <>{d} Bölgesi <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.name} SSS</span></>,
  },
  localStory: {
    1: (d, s) => <>{d} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Gösterisi</span> Deneyimimiz</>,
    2: (d, s) => <>{d} Bölgesinde Gerçek Bir <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Hikayesi</span></>,
    3: (d, s) => <>{d} Etkinliklerinden: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Anısı</span></>,
  },
  orgScenario: {
    1: (d, s) => <>{d} İçin Özel <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Organizasyonu</span> Kurgusu</>,
    2: (d, s) => <>{d} Bölgesine Özel <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Etkinlik Planımız</span></>,
    3: (d, s) => <>{d} {s.shortName} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Organizasyon Senaryomuz</span></>,
  },
  eventTips: {
    1: (d, s) => <>{d} Bölgesinde <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.name} Organizasyonu</span> İpuçları</>,
    2: (d, s) => <>{d} Etkinlik Rehberi: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Planlarken</span></>,
    3: (d, s) => <>{d} İçin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Organizasyon</span> Tavsiyeleri</>,
  },
  serviceProcess: {
    1: (d, s) => <>{d} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.name}</span> Nasıl İşliyor?</>,
    2: (d, s) => <>{d} Bölgesinde <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Sürecimiz</span></>,
    3: (d, s) => <>{s.name} Adım Adım: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{d} Deneyimi</span></>,
  },
  whyChooseUs: {
    1: (d, s) => <>{d} {s.name} İçin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Neden Best Event?</span></>,
    2: (d, s) => <>{d} Bölgesinde {s.shortName} İçin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Bizi Tercih Edin</span></>,
    3: (d, s) => <>Best Event ile {d} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Farkı</span></>,
  },
}

function getH2(section, variant, districtName, service) {
  const v = headingVariants[section]
  if (!v) return null
  const fn = v[variant] || v[1]
  return fn(districtName, service)
}

// ─── Section sırası mapping ─────────────────────────────
const orderMap = {
  A: ['serviceDetail', 'localStory', 'eventTips', 'whyChooseUs', 'midCta', 'reviews', 'faq', 'orgScenario', 'serviceProcess'],
  B: ['orgScenario', 'serviceProcess', 'midCta', 'serviceDetail', 'reviews', 'localStory', 'faq', 'eventTips', 'whyChooseUs'],
  C: ['faq', 'serviceDetail', 'whyChooseUs', 'eventTips', 'localStory', 'midCta', 'reviews', 'serviceProcess', 'orgScenario'],
  D: ['localStory', 'orgScenario', 'midCta', 'eventTips', 'serviceDetail', 'reviews', 'serviceProcess', 'whyChooseUs', 'faq'],
}

// ─── Shared animation props ─────────────────────────────
const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }
const sectionH2Style = { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }

// ═══════════════════════════════════════════════════════════
// SECTION COMPONENTS
// ═══════════════════════════════════════════════════════════

// ─── FAQ Accordion ───────────────────────────────────────
function FAQSection({ faqs, districtName, service, variant }) {
  const [openIndex, setOpenIndex] = useState(0)

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.05),_transparent_50%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-400 mb-4 font-medium">
            Sıkça Sorulan Sorular
          </p>
          <h2
            className="font-bold text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2', letterSpacing: '-0.025em' }}
          >
            {getH2('faq', variant, districtName, service)}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group"
            >
              {openIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
              )}

              <div className={`relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border ${
                openIndex === index ? 'border-purple-500/30' : 'border-white/10'
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group/button"
                >
                  <h3
                    className={`font-bold transition-colors flex-1 ${
                      openIndex === index
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                        : 'text-white group-hover/button:text-purple-400'
                    }`}
                    style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: '1.4' }}
                  >
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 rotate-180'
                      : 'bg-white/10'
                  }`}>
                    <svg className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-gray-300 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section (Final) ────────────────────────────────
function CTASection({ districtName, serviceName, ctaClosing }) {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-black to-purple-950/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.08),_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp}>
          <h2
            className="font-bold text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.2' }}
          >
            {districtName} {serviceName} İçin
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Hemen Teklif Alın</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            {ctaClosing || `${districtName} ve çevresinde profesyonel ${serviceName.toLowerCase()} hizmeti için hemen bizi arayın veya WhatsApp'tan yazın. Ücretsiz keşif ve fiyat teklifi sunuyoruz.`}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/905307309009?text=${encodeURIComponent(`Merhaba, ${districtName} bölgesinde ${serviceName} hakkında bilgi almak istiyorum`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp ile Ulaşın
            </a>
            <a
              href="tel:+905307309009"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-amber-500/60"
              style={{
                background: 'linear-gradient(135deg, #b8860b 0%, #daa520 25%, #ffd700 50%, #daa520 75%, #b8860b 100%)',
                color: '#1a0f00'
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0530 730 90 09
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Local Story Section ────────────────────────────────
function LocalStorySection({ content, districtName, service, variant }) {
  if (!content.localStory) return null

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.06),_transparent_50%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-8" style={sectionH2Style}>
            {getH2('localStory', variant, districtName, service)}
          </h2>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-gray-300 leading-relaxed text-lg">{content.localStory}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Organization Scenario Section ──────────────────────
function OrgScenarioSection({ content, districtName, service, variant }) {
  if (!content.organizationScenario) return null

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(219,39,119,0.05),_transparent_50%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-8" style={sectionH2Style}>
            {getH2('orgScenario', variant, districtName, service)}
          </h2>
          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-500/20 rounded-2xl p-6 sm:p-8">
            <p className="text-gray-300 leading-relaxed text-lg">{content.organizationScenario}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Why Choose Us Section ──────────────────────────────
function WhyChooseUsSection({ content, districtName, service, variant }) {
  if (!content.whyChooseUs || content.whyChooseUs.length === 0) return null

  const icons = ['🎯', '⚡', '💎', '🏆', '🔒']

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-10 text-center" style={sectionH2Style}>
            {getH2('whyChooseUs', variant, districtName, service)}
          </h2>
          <div className={`grid grid-cols-1 ${content.whyChooseUs.length <= 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-5`}>
            {content.whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-purple-500/20 transition-colors"
              >
                <div className="text-3xl mb-3">{icons[i % icons.length]}</div>
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Event Tips Section ─────────────────────────────────
function EventTipsSection({ content, districtName, service, variant }) {
  if (!content.eventTips) return null

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-8" style={sectionH2Style}>
            {getH2('eventTips', variant, districtName, service)}
          </h2>
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-lg">💡</div>
              <p className="text-gray-300 leading-relaxed text-lg">{content.eventTips}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Service Process Section ────────────────────────────
function ServiceProcessSection({ content, districtName, service, variant }) {
  if (!content.serviceProcess) return null

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-8" style={sectionH2Style}>
            {getH2('serviceProcess', variant, districtName, service)}
          </h2>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-gray-300 leading-relaxed text-lg">{content.serviceProcess}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Mid CTA Banner ─────────────────────────────────────
function MidCtaSection({ content, districtName, serviceName }) {
  return (
    <section className="py-10 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-y border-purple-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white text-lg font-medium mb-4">
          {content.midCtaText || `${districtName} bölgesinde ${serviceName.toLowerCase()} için organizasyonunuzu şimdi planlayalım!`}
        </p>
        <a
          href="https://wa.me/905307309009"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp'tan Bilgi Alın
        </a>
      </div>
    </section>
  )
}

// ─── Service Detail Section ─────────────────────────────
function ServiceDetailSection({ content, district, service, variant }) {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sol: İçerik */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold text-white mb-6" style={sectionH2Style}>
              {getH2('serviceDetail', variant, district.name, service)}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {content.uniqueContent}
            </p>

            {/* Hizmet Kapsamı */}
            <h3 className="text-xl font-bold text-white mb-4">Hizmet Kapsamımız</h3>
            <ul className="space-y-3 mb-8">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Pillar sayfaya link */}
            <Link
              to={service.pillarUrl}
              className="group/pillar block mt-6 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-purple-400 mb-1 uppercase tracking-wider">Ana Hizmet Sayfamız</p>
                  <h4 className="text-base font-bold text-white group-hover/pillar:text-purple-300 transition-colors">
                    {service.name} Hizmeti — Fiyatlar ve Paketler
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    İstanbul genelinde {service.shortName.toLowerCase()} organizasyonu detayları
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/15 group-hover/pillar:bg-purple-500/25 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-purple-400 group-hover/pillar:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Sağ: Bölge Bilgisi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Bölge Kartı */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {district.name} Hizmet Bölgemiz
              </h3>
              <p className="text-gray-400 mb-4">{district.description}</p>

              {/* Local Insight */}
              {district.localInsight && (
                <p className="text-gray-400 mb-4 text-sm italic border-l-2 border-purple-500/30 pl-3">
                  {district.localInsight}
                </p>
              )}

              {/* Mahalleler */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Hizmet Verdiğimiz Mahalleler</h4>
                <div className="flex flex-wrap gap-2">
                  {district.neighborhoods.map(n => (
                    <span key={n} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Etkinlik Mekanları */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Popüler Etkinlik Alanları</h4>
                <div className="flex flex-wrap gap-2">
                  {district.eventVenues.map(v => (
                    <span key={v} className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-300 text-xs font-medium">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hızlı Bilgi Kartları */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10+</div>
                <div className="text-gray-400 text-sm">Yıl Deneyim</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5000+</div>
                <div className="text-gray-400 text-sm">Etkinlik</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5.0</div>
                <div className="text-gray-400 text-sm">Google Puan</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{service.duration}</div>
                <div className="text-gray-400 text-sm">Gösteri Süresi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Anchor Text Varyasyon Helper ──────────────────────
function getAnchorVariant(districtSlug) {
  let hash = 0
  for (let i = 0; i < districtSlug.length; i++) {
    hash = ((hash << 5) - hash) + districtSlug.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash) % 3
}

// ─── Service Back Link (Üst - Hero'dan sonra) ─────────
function ServiceBackLinkTop({ district, service }) {
  const variant = getAnchorVariant(district.slug)

  const paragraphs = [
    <>
      {district.name} bölgesinde <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">{service.name} hizmetimiz hakkında detaylı bilgi</Link> almak için ana hizmet sayfamızı ziyaret edebilirsiniz. Fiyatlandırma, paket seçenekleri ve İstanbul genelindeki hizmet kapsamımızı inceleyerek organizasyonunuzu daha bilinçli planlayabilirsiniz.
    </>,
    <>
      Organizasyonunuzu planlarken <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">profesyonel {service.shortName} organizasyonu sayfamızı</Link> incelemenizi öneriyoruz. {district.name} dahil İstanbul'un tüm ilçelerinde sunduğumuz hizmet detayları, müşteri yorumları ve rezervasyon bilgilerine buradan ulaşabilirsiniz.
    </>,
    <>
      {district.name} ve çevresindeki etkinlikleriniz için <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">Best Event {service.name} hizmeti</Link> kapsamındaki tüm paket ve fiyat seçeneklerini inceleyebilirsiniz. 10 yılı aşkın deneyimimizle İstanbul'un her köşesinde kaliteli organizasyon sunuyoruz.
    </>
  ]

  return (
    <section className="py-10 bg-gradient-to-b from-black to-zinc-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <div className="bg-zinc-900/30 border border-purple-500/15 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-lg">
                {service.icon}
              </div>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                {paragraphs[variant]}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Service Back Link (Alt - CTA'dan önce) ────────────
function ServiceBackLinkBottom({ district, service }) {
  const variant = getAnchorVariant(district.slug)

  const paragraphs = [
    <>
      İstanbul genelinde sunduğumuz <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">İstanbul {service.shortName} kiralama hizmetimizin</Link> tüm detaylarına ana sayfamızdan ulaşabilirsiniz. {district.name} dışındaki bölgelerde de aynı kalitede profesyonel organizasyon gerçekleştiriyoruz.
    </>,
    <>
      {district.name} bölgesinde edindiğimiz deneyimi İstanbul'un dört bir yanına taşıyoruz. <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">{service.name} kiralama ve organizasyon</Link> hizmetimizin kapsamını, referanslarımızı ve güncel paket fiyatlarını incelemek için ana hizmet sayfamızı ziyaret edin.
    </>,
    <>
      Profesyonel ekibimiz {district.name} ve İstanbul'un tüm ilçelerinde hizmet vermektedir. <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">{service.name} hizmet sayfamızda</Link> paket karşılaştırması yapabilir, müşteri deneyimlerini okuyabilir ve size en uygun organizasyon planını belirleyebilirsiniz.
    </>
  ]

  // Alt paragraf için farklı varyant (üsttekiyle çakışmasın)
  const bottomVariant = (variant + 1) % 3

  return (
    <section className="py-10 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <div className="group block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/30 to-indigo-950/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
              {paragraphs[bottomVariant]}
            </p>
            <Link
              to={service.pillarUrl}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
            >
              {service.name} Sayfasına Git
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Diğer Semtler ──────────────────────────────────────
function OtherDistrictsSection({ currentDistrict, serviceSlug, serviceName }) {
  const otherDistricts = districts.filter(d => d.slug !== currentDistrict).slice(0, 12)

  return (
    <section className="py-16 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            İstanbul'un Diğer Bölgelerinde <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{serviceName}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {otherDistricts.map(district => (
              <Link
                key={district.slug}
                to={`/organizasyonlar/${serviceSlug}/${district.slug}`}
                className="block px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200 text-center text-sm font-medium"
              >
                {district.name} {serviceName}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Aynı Semtteki Diğer Hizmetler ─────────────────────
function OtherServicesSection({ districtSlug, districtName, currentServiceSlug }) {
  const otherServices = getServicesForDistrict(districtSlug).filter(s => s.slug !== currentServiceSlug)

  if (otherServices.length === 0) return null

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            {districtName} Bölgesindeki <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Diğer Hizmetlerimiz</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map(service => (
              <Link
                key={service.slug}
                to={`/organizasyonlar/${service.slug}/${districtSlug}`}
                className="group block p-6 bg-zinc-900/50 border border-white/10 rounded-2xl hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    {districtName} {service.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{service.description}</p>
                <div className="mt-3 flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// ANA COMPONENT: LocalLandingPage
// ═══════════════════════════════════════════════════════════
const LocalLandingPage = () => {
  const { service: serviceSlug, district: districtSlug } = useParams()

  const district = getDistrict(districtSlug)
  const service = getService(serviceSlug)
  const content = getLocalContent(districtSlug, serviceSlug)

  // Geçersiz semt veya hizmet → 404
  if (!district || !service || !content) {
    return <Navigate to="/404" replace />
  }

  const variant = content.headingVariant || 1
  const sectionOrder = content.sectionOrder || 'A'

  const pageTitle = `${district.name} ${service.name} | Profesyonel ${service.shortName} Hizmeti | Best Event`
  const pageDescription = `${district.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti. ${district.neighborhoods.slice(0, 4).join(', ')} ve çevresinde 10+ yıl deneyim, 5000+ etkinlik. Hemen teklif alın! ☎ 0530 730 90 09`

  // Schema Markup
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': `${district.name} ${service.name}`,
      'description': content.intro,
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Best Event',
        'telephone': '+905307309009',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Şemsettin Günaltay Caddesi No:175',
          'addressLocality': district.name,
          'addressRegion': 'İstanbul',
          'postalCode': '34738',
          'addressCountry': 'TR'
        }
      },
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': `${district.name}, İstanbul`
      },
      'serviceType': service.name,
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'TRY',
        'priceRange': service.priceRange
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': content.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a
        }
      }))
    },
    createLocalBusinessSchema(district.name, service.name, serviceSlug, districtSlug, district.lat, district.lng)
  ]

  // Google Reviews tag mapping
  const reviewTagMap = {
    'palyaco-kiralama': ['palyaco', 'genel'],
    'bubble-show-kiralama': ['bubbleshow', 'genel'],
    'sihirbaz-kiralama': ['sihirbaz', 'genel'],
    'dogum-gunu-organizasyonu': ['dogumgunu', 'genel'],
    'pamuk-seker-arabasi-kiralama': ['pamukseker', 'genel'],
    'profesyonel-yuz-boyama': ['yuzboyama', 'genel'],
    'popcorn-arabasi-kiralama': ['pamukseker', 'genel']
  }
  const reviewTags = reviewTagMap[serviceSlug] || ['genel']

  // Section map — her section key'ine karşılık gelen component
  const sectionComponents = {
    serviceDetail: (
      <ServiceDetailSection
        key="serviceDetail"
        content={content}
        district={district}
        service={service}
        variant={variant}
      />
    ),
    localStory: (
      <LocalStorySection
        key="localStory"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    orgScenario: (
      <OrgScenarioSection
        key="orgScenario"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    whyChooseUs: (
      <WhyChooseUsSection
        key="whyChooseUs"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    eventTips: (
      <EventTipsSection
        key="eventTips"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    serviceProcess: (
      <ServiceProcessSection
        key="serviceProcess"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    midCta: (
      <MidCtaSection
        key="midCta"
        content={content}
        districtName={district.name}
        serviceName={service.name}
      />
    ),
    reviews: (
      <GoogleReviews
        key="reviews"
        reviews={getReviewsByTags(reviewTags)}
        title={`${district.name} ${service.shortName} Müşteri Yorumları`}
      />
    ),
    faq: (
      <FAQSection
        key="faq"
        faqs={content.faqs}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
  }

  // Section sırasını belirle
  const sections = (orderMap[sectionOrder] || orderMap.A).map(key => sectionComponents[key])

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={[
          `${district.name.toLowerCase()} ${service.name.toLowerCase()}`,
          `${district.name.toLowerCase()} ${service.shortName.toLowerCase()} kiralama`,
          ...service.keywords,
          district.name.toLowerCase(),
          'istanbul',
          'organizasyon'
        ]}
        schema={schemas}
      />

      {/* ── Hero Section (her zaman ilk) ── */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-b from-purple-950/40 via-black to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_50%)] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-400 mb-4 font-medium">
              {district.name} Bölgesi
            </p>
            <h1
              className="font-bold text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}
            >
              {district.name}{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {service.name}
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8">
              {content.intro}
            </p>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/905307309009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Ücretsiz Teklif Alın
              </a>
              <a
                href="tel:+905307309009"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0530 730 90 09
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Üst Kontekstüel Back Link ── */}
      <ServiceBackLinkTop district={district} service={service} />

      {/* ── Dinamik Section Sırası ── */}
      {sections}

      {/* ── Alt Kontekstüel Back Link ── */}
      <ServiceBackLinkBottom district={district} service={service} />

      {/* ── Aynı Semtteki Diğer Hizmetler (her zaman sonlarda) ── */}
      <OtherServicesSection
        districtSlug={districtSlug}
        districtName={district.name}
        currentServiceSlug={serviceSlug}
      />

      {/* ── Diğer Semtler (her zaman sonlarda) ── */}
      <OtherDistrictsSection
        currentDistrict={districtSlug}
        serviceSlug={serviceSlug}
        serviceName={service.name}
      />

      {/* ── Final CTA (her zaman son) ── */}
      <CTASection
        districtName={district.name}
        serviceName={service.name}
        ctaClosing={content.ctaClosing}
      />
    </>
  )
}

export default LocalLandingPage
