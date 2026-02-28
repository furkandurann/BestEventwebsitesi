import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getMascotBySlug, allMascots } from '../../data/mascotsData'
import Seo from '../../components/Seo'
import NarrativeSection from '../../components/NarrativeSection'

const MascotDetail = () => {
  const { slug } = useParams()
  const mascot = getMascotBySlug(slug)

  // 404 if mascot not found
  if (!mascot) {
    return <Navigate to="/organizasyonlar/maskot-kiralama" replace />
  }

  // Resolve related mascots
  const relatedItems = (mascot.relatedMascots || [])
    .map(relSlug => {
      const found = allMascots.find(m => m.slug === relSlug)
      return found || null
    })
    .filter(Boolean)

  // Has new data fields?
  const hasNewData = !!mascot.longDescription

  return (
    <>
      <Seo
        title={mascot.seoTitle || `${mascot.name} Maskot Kiralama İstanbul | BestEvent`}
        description={mascot.seoDescription || `İstanbul'da ${mascot.name} koca kafalı maskot kiralama. Profesyonel performans sanatçısı, hijyenik kostüm. Doğum günü ve etkinlikler.`}
        keywords={[`${mascot.name.toLowerCase()} maskot kiralama istanbul`, 'koca kafalı maskot kiralama', 'maskot organizasyonu istanbul', 'doğum günü maskot', `${mascot.name.toLowerCase()} organizasyon`]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${mascot.name} Maskot Kiralama İstanbul`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "BestEvent",
            "telephone": "+905307309009",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressCountry": "TR"
            }
          },
          "serviceType": "Maskot Organizasyonu",
          "areaServed": {
            "@type": "City",
            "name": "İstanbul"
          }
        }}
      />

      {/* Hero Section - Full Screen */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${mascot.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}
          >
            {mascot.name}
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* DATA-DRIVEN SECTIONS */}
      {/* ═══════════════════════════════════════════════════════ */}

      {hasNewData ? (
        <>
          {/* Mascot Story — longDescription */}
          <NarrativeSection
            eyebrow={`${mascot.name.toUpperCase()} MASKOT KİRALAMA`}
            title={
              mascot.headingVariant === 1
                ? `${mascot.name} Koca Kafalı Maskot ile Unutulmaz Parti`
                : mascot.headingVariant === 2
                ? `Neden ${mascot.name} Maskot Kiralama?`
                : `${mascot.name} — Çocukların Gözdesi`
            }
            body={mascot.longDescription}
          />

          {/* First image */}
          {mascot.images?.[0] && (
            <section className="w-full bg-white py-4">
              <div className="max-w-7xl mx-auto px-4">
                <img
                  src={mascot.images[0]}
                  alt={`${mascot.name} maskot kiralama İstanbul - organizasyon`}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)' }}
                />
              </div>
            </section>
          )}

          {/* Activity Details — activityDetails + features */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="uppercase tracking-[0.3em] text-pink-500 mb-4 font-medium text-sm">
                  PERFORMANS DETAYLARI
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                  {mascot.headingVariant === 1
                    ? `${mascot.name} Maskot Gösterisi Nasıl İlerliyor?`
                    : mascot.headingVariant === 2
                    ? `${mascot.name} Maskot Performans Programı`
                    : `${mascot.name} ile Neler Yapılır?`
                  }
                </h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  {mascot.activityDetails}
                </p>

                {mascot.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mascot.features.map((feat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-3"
                      >
                        <span className="text-pink-500 text-lg">✓</span>
                        <span className="text-gray-800 font-medium">{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Second image */}
          {mascot.images?.[1] && (
            <section className="w-full bg-white py-4">
              <div className="max-w-7xl mx-auto px-4">
                <img
                  src={mascot.images[1]}
                  alt={`${mascot.name} maskot organizasyon İstanbul - etkinlik`}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)' }}
                />
              </div>
            </section>
          )}

          {/* Event Scenarios — 3 cards */}
          {mascot.eventScenarios && mascot.eventScenarios.length > 0 && (
            <section className="py-20 bg-black">
              <div className="max-w-6xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-14"
                >
                  <p className="uppercase tracking-[0.3em] text-pink-400 mb-4 font-medium text-sm">
                    ORGANİZASYON SENARYOLARI
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                    {mascot.name} Maskot Hangi Etkinliklerde Yer Alır?
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {mascot.eventScenarios.map((scenario, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
                    >
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-xl mb-6">
                        {i + 1}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{scenario}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Third image */}
          {mascot.images?.[2] && (
            <section className="w-full bg-white py-4">
              <div className="max-w-7xl mx-auto px-4">
                <img
                  src={mascot.images[2]}
                  alt={`${mascot.name} maskot doğum günü İstanbul`}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)' }}
                />
              </div>
            </section>
          )}

          {/* Parent Tips */}
          {mascot.parentTips && (
            <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
              <div className="max-w-4xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="uppercase tracking-[0.3em] text-pink-500 mb-4 font-medium text-sm">
                    EBEVEYN İPUÇLARI
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                    {mascot.name} Maskot Partisi İçin Hazırlık Rehberi
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {mascot.parentTips}
                  </p>
                </motion.div>
              </div>
            </section>
          )}

          {/* Fun Facts — 3 cards */}
          {mascot.funFacts && mascot.funFacts.length > 0 && (
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-14"
                >
                  <p className="uppercase tracking-[0.3em] text-pink-500 mb-4 font-medium text-sm">
                    BİLİYOR MUYDUNUZ?
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                    {mascot.name} Hakkında Eğlenceli Bilgiler
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {mascot.funFacts.map((fact, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl p-8 border border-pink-100"
                    >
                      <div className="text-4xl mb-4">💡</div>
                      <p className="text-gray-700 leading-relaxed">{fact}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        /* FALLBACK: Legacy generic narrative sections */
        <>
          {mascot.images && mascot.images.map((image, index) => {
            const sections = [
              {
                eyebrow: "PROFESYONEL ORGANİZASYON",
                title: "İstanbul'un En İyi Maskot Organizasyonu",
                body: `Best Event olarak İstanbul'da 10+ yıldır profesyonel maskot organizasyonu sunuyoruz. ${mascot.name} maskot organizasyonumuz, koca kafalı kaliteli kostümler ve deneyimli performans sanatçılarıyla çocukların doğum günlerini masala dönüştürür.`
              },
              {
                eyebrow: "DENEYİMLİ EKİP",
                title: "Çocuklarla İletişimde Uzman",
                body: `Maskotlarımız, çocuklarla etkileşimde deneyimli profesyonel performans sanatçıları tarafından canlandırılır. ${mascot.name} kostümümüz hijyenik, güvenli ve her etkinlik öncesi dezenfekte edilir.`
              },
              {
                eyebrow: "İSTANBUL GENELİ",
                title: "Tüm İstanbul'da Kapınıza Geliyoruz",
                body: `${mascot.name} maskot organizasyonumuz İstanbul'un her bölgesinde mevcuttur. Kadıköy, Kartal, Maltepe, Üsküdar, Ataşehir, Şişli, Maslak, Beylikdüzü, Başakşehir, Sarıyer ve daha fazlası.`
              }
            ];

            const section = sections[index] || sections[sections.length - 1];

            return (
              <div key={index}>
                <NarrativeSection
                  eyebrow={section.eyebrow}
                  title={section.title}
                  body={section.body}
                />
                <section className="w-full bg-white py-4">
                  <div className="max-w-7xl mx-auto px-4">
                    <img
                      src={image}
                      alt={`${mascot.name} maskot organizasyon İstanbul - ${section.title}`}
                      className="w-full h-auto rounded-lg"
                      style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)' }}
                    />
                  </div>
                </section>
              </div>
            );
          })}
        </>
      )}

      {/* FAQ Section — Data-driven when available */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Sıkça Sorulan Sorular
          </h2>

          <div className="space-y-6">
            {(mascot.faqs && mascot.faqs.length > 0 ? mascot.faqs.map(f => ({ question: f.q, answer: f.a })) : [
              {
                question: `${mascot.name} maskot organizasyonu kaç saat sürer?`,
                answer: `${mascot.name} maskot organizasyonu standart olarak 60-90 dakika sürmektedir. İhtiyacınıza göre süre uzatılabilir.`
              },
              {
                question: `İstanbul'un hangi bölgelerinde ${mascot.name} maskot organizasyonu veriyorsunuz?`,
                answer: `Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beylikdüzü ve İstanbul'un tüm ilçelerinde ${mascot.name} maskot organizasyonu veriyoruz.`
              },
              {
                question: `${mascot.name} maskot kostümü kaliteli mi?`,
                answer: `Evet, tüm ${mascot.name} maskot kostümlerimiz profesyonel standartlarda, hijyenik ve düzenli olarak yenilenir.`
              },
              {
                question: 'Maskot içindeki kişi profesyonel mi?',
                answer: `Evet! ${mascot.name} maskotumuz deneyimli performans sanatçıları tarafından canlandırılır.`
              },
              {
                question: 'Ulaşım size mi ait?',
                answer: `Evet, ${mascot.name} maskot organizasyonunda ulaşım bize aittir. Ekibimiz tüm ekipmanlarla birlikte adresinize gelir.`
              },
              {
                question: 'Fiyatlar nedir?',
                answer: `${mascot.name} maskot organizasyon fiyatları süre ve lokasyona göre değişir. Detaylı fiyat bilgisi için: 0530 730 90 09`
              }
            ]).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-xl text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQPage Schema — data-driven */}
        {mascot.faqs && mascot.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": mascot.faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            })}
          </script>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* RELATED MASCOTS — Cross-link system */}
      {/* ═══════════════════════════════════════════════════════ */}
      {relatedItems.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="uppercase tracking-[0.3em] text-pink-500 mb-4 font-medium text-sm">
                BENZERİ MASKOTLARI KEŞFEDİN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                Diğer Koca Kafalı Maskotlar
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedItems.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Link
                    to={`/maskot/${rel.slug}`}
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={rel.heroImage}
                        alt={`${rel.name} maskot kiralama İstanbul`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {rel.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {rel.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/organizasyonlar/maskot-kiralama"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Tüm Maskotları Görüntüle →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* DISTRICT LINKS — Internal link system to LP pages */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
            İstanbul'un Her Bölgesinde Hizmet Veriyoruz
          </h2>
          <p className="text-xl text-white/90 mb-8" style={{ lineHeight: '1.7' }}>
            {mascot.name} maskot kiralama hizmeti İstanbul'un tüm ilçelerinde mevcuttur
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'Kadıköy', slug: 'kadikoy' },
              { name: 'Beşiktaş', slug: 'besiktas' },
              { name: 'Şişli', slug: 'sisli' },
              { name: 'Beylikdüzü', slug: 'beylikduzu' },
              { name: 'Üsküdar', slug: 'uskudar' },
              { name: 'Maltepe', slug: 'maltepe' },
              { name: 'Kartal', slug: 'kartal' },
              { name: 'Ataşehir', slug: 'atasehir' },
              { name: 'Pendik', slug: 'pendik' },
              { name: 'Sarıyer', slug: 'sariyer' },
              { name: 'Bakırköy', slug: 'bakirkoy' },
              { name: 'Ümraniye', slug: 'umraniye' },
              { name: 'Başakşehir', slug: 'basaksehir' },
              { name: 'Maslak', slug: 'maslak' },
              { name: 'Esenyurt', slug: 'esenyurt' },
              { name: 'Fatih', slug: 'fatih' }
            ].map((district, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={`/organizasyonlar/palyaco-kiralama/${district.slug}`}
                  className="block py-3 px-4 bg-white/20 backdrop-blur-sm text-white rounded-lg shadow-sm font-medium hover:bg-white/30 transition-all"
                >
                  {district.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <Link
            to="/hizmet-bolgeleri"
            className="inline-block text-white/90 hover:text-white underline underline-offset-4 text-lg transition-colors"
          >
            Tüm hizmet bölgelerini görüntüle →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>Hemen {mascot.name} Rezervasyonu Yapın!</h2>
          <p className="text-xl mb-10 text-white/95 text-center max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
            {mascot.name} ile çocuğunuzun hayalindeki doğum gününü gerçekleştirin
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/905307309009?text=Merhaba! ${mascot.name} maskot organizasyon hakkında bilgi almak istiyorum`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
            >
              WhatsApp
            </a>
            <a
              href="tel:+905307309009"
              className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
            >
              0530 730 90 09
            </a>
          </div>
        </div>
      </section>

    </>
  )
}

export default MascotDetail
