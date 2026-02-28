import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { getCharacterBySlug, allCostumedCharacters } from '../../data/costumedCharactersData'
import { getMascotBySlug } from '../../data/mascotsData'
import NarrativeSection from '../../components/NarrativeSection'
import Seo from '../../components/Seo'
import RelatedBlogPosts from '../../components/RelatedBlogPosts'

const CharacterDetail = () => {
  const { slug } = useParams()

  // Try character first, then mascot
  let character = getCharacterBySlug(slug)
  let isMascot = false

  if (!character) {
    character = getMascotBySlug(slug)
    isMascot = true
  }

  // 404 if neither character nor mascot found
  if (!character) {
    return <Navigate to="/hizmetler" replace />
  }

  // Resolve related characters
  const relatedItems = (character.relatedCharacters || [])
    .map(relSlug => {
      const found = allCostumedCharacters.find(c => c.slug === relSlug)
      return found || null
    })
    .filter(Boolean)

  // Has new data fields?
  const hasNewData = !!character.longDescription

  return (
    <>
      <Seo
        title={character.seoTitle || `${character.name} Kiralama İstanbul | Doğum Günü - BestEvent`}
        description={character.seoDescription || `İstanbul'da ${character.name} kostümlü karakter kiralama. Profesyonel animatör, hijyenik kostüm. Doğum günü ve etkinlikler için.`}
        keywords={[`${character.name.toLowerCase()} kiralama istanbul`, 'kostümlü karakter kiralama', 'doğum günü animatörü istanbul', 'çocuk etkinlik organizasyonu', `${character.name.toLowerCase()} organizasyon`, 'karakter performansı', 'kostüm animasyonu', 'doğum günü karakteri', 'çocuk animasyonu', 'karakter etkileşimi']}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${character.name} Kostümlü Karakter Kiralama İstanbul`,
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
          "serviceType": "Kostümlü Karakter Organizasyonu",
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
        {character.id === 'palyaco' ? (
          /* Palyaço Hero Slider */
          <div className="absolute inset-0">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              speed={1100}
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              loop
              className="h-full w-full bg-black"
            >
              {[
                '/content/images/palyaco/palyacoanaherogrupoyunlari.webp',
                '/content/images/palyaco/palyaconattiveenbas.webp',
                '/content/images/palyaco/palyaconattive3yuzboyamasi.webp',
                '/content/images/palyaco/cocuklarinyuzundekiheyecan.webp',
                '/content/images/palyaco/palyacogrupoyunlari.webp',
                '/content/images/palyaco/palyaconattive1.webp'
              ].map((img, index) => (
                <SwiperSlide key={index} className="relative h-full w-full bg-black">
                  <div
                    className="absolute inset-0 bg-cover bg-center hero-image-mobile-wide"
                    style={{ backgroundImage: `url('${img}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div
            className={`absolute inset-0 bg-cover hero-image-mobile-wide ${character.id === 'minnie-mouse' ? 'minnie-mouse-hero-bg' : 'bg-center'}`}
            style={{
              backgroundImage: `url('${character.heroImage}')`,
              ...(character.id === 'minnie-mouse' && { backgroundPosition: 'center 25%' })
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          </div>
        )}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}
          >
            {character.name}
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
      {/* DATA-DRIVEN SECTIONS (new fields) */}
      {/* ═══════════════════════════════════════════════════════ */}

      {hasNewData ? (
        <>
          {/* Character Story — longDescription */}
          <NarrativeSection
            eyebrow={character.id === 'palyaco' ? "PROFESYONEL ORGANİZASYON" : `${character.name.toUpperCase()} KİRALAMA`}
            title={
              character.headingVariant === 1
                ? `${character.name} ile Unutulmaz Bir Organizasyon`
                : character.headingVariant === 2
                ? `Neden ${character.name} Kiralama?`
                : `${character.name} — Çocukların Favorisi`
            }
            body={character.longDescription}
          />

          {/* First image */}
          {character.images?.[0] && (
            <div className="w-full flex justify-center items-center bg-white py-8">
              <img
                src={character.images[0]}
                alt={`${character.name} kiralama İstanbul - organizasyon`}
                className="object-contain max-h-[80vh] w-auto"
                loading="lazy"
              />
            </div>
          )}

          {/* Activity Details — activityDetails + features */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                  AKTİVİTE DETAYLARI
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                  {character.headingVariant === 1
                    ? `${character.name} Gösterisi Nasıl İlerliyor?`
                    : character.headingVariant === 2
                    ? `${character.name} Performans Programı`
                    : `${character.name} ile Neler Yapılır?`
                  }
                </h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  {character.activityDetails}
                </p>

                {/* Features grid */}
                {character.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {character.features.map((feat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-3"
                      >
                        <span className="text-orange-500 text-lg">✓</span>
                        <span className="text-gray-800 font-medium">{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Second image */}
          {character.images?.[1] && (
            <div className="w-full flex justify-center items-center bg-white py-8">
              <img
                src={character.images[1]}
                alt={`${character.name} organizasyon İstanbul - etkinlik`}
                className="object-contain max-h-[80vh] w-auto"
                loading="lazy"
              />
            </div>
          )}

          {/* Event Scenarios — 3 cards */}
          {character.eventScenarios && character.eventScenarios.length > 0 && (
            <section className="py-20 bg-black">
              <div className="max-w-6xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-14"
                >
                  <p className="uppercase tracking-[0.3em] text-orange-400 mb-4 font-medium text-sm">
                    ORGANİZASYON SENARYOLARI
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                    {character.name} Hangi Etkinliklerde Yer Alır?
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {character.eventScenarios.map((scenario, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
                    >
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xl mb-6">
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
          {character.images?.[2] && (
            <div className="w-full flex justify-center items-center bg-white py-8">
              <img
                src={character.images[2]}
                alt={`${character.name} doğum günü İstanbul`}
                className="object-contain max-h-[80vh] w-auto"
                loading="lazy"
              />
            </div>
          )}

          {/* Parent Tips */}
          {character.parentTips && (
            <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
              <div className="max-w-4xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                    EBEVEYN İPUÇLARI
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                    {character.name} Partisi İçin Hazırlık Rehberi
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {character.parentTips}
                  </p>
                </motion.div>
              </div>
            </section>
          )}

          {/* Fun Facts — 3 cards */}
          {character.funFacts && character.funFacts.length > 0 && (
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-14"
                >
                  <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                    BİLİYOR MUYDUNUZ?
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                    {character.name} Hakkında Eğlenceli Bilgiler
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {character.funFacts.map((fact, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 border border-orange-100"
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
        /* FALLBACK: Legacy generic narrative sections for characters without new data */
        <>
          {character.images && character.images.map((image, index) => {
            const palyacoSections = [
              {
                eyebrow: "PROFESYONEL ORGANİZASYON",
                title: "İstanbul'un En İyi Palyaço Organizasyonu",
                body: "Best Event olarak İstanbul'da 10+ yıldır profesyonel palyaço organizasyonu sunuyoruz. Deneyimli animatörlerimiz çocukları güldürüyor, eğlendiriyor ve unutulmaz anlar yaratıyor. Kadıköy, Üsküdar, Ataşehir, Beylikdüzü ve İstanbul'un tüm ilçelerinde faaliyet gösteriyoruz."
              },
              {
                eyebrow: "YÜZ BOYAMA",
                title: "Profesyonel Yüz Boyama Aktivitesi",
                body: "Palyaçomuz profesyonel yüz boyama sanatçısıdır. Kelebek, kaplan, süper kahraman, prenses ve daha birçok tasarımla çocukların yüzlerini renklendiriyoruz."
              },
              {
                eyebrow: "GRUP OYUNLARI",
                title: "Eğlenceli Grup Oyunları",
                body: "Müzikli sandalye, balon patlatma, hazine avı, dans yarışması ve daha birçok eğlenceli grup oyunu ile çocukları bir arada tutuyoruz."
              },
              {
                eyebrow: "DENEYİMLİ EKİP",
                title: "Çocuklarla İletişimde Uzman",
                body: "Palyaçomuz çocuklarla iletişimde uzman, deneyimli bir animatördür. Her yaş grubuna uygun aktiviteler ve oyunlar düzenler."
              },
              {
                eyebrow: "İSTANBUL GENELİ",
                title: "İstanbul'da Her Bölgeye",
                body: "Palyaço organizasyonumuz İstanbul'un her bölgesinde mevcuttur. Kadıköy, Kartal, Maltepe, Üsküdar, Ataşehir, Şişli, Maslak, Beylikdüzü, Başakşehir, Sarıyer ve daha fazlası."
              }
            ];

            const sections = character.id === 'palyaco' ? palyacoSections : [
              {
                eyebrow: "PROFESYONEL ORGANİZASYON",
                title: "İstanbul'un En İyi Kostümlü Karakter Organizasyonu",
                body: `Best Event olarak İstanbul'da 10+ yıldır profesyonel kostüm animasyonu ve karakter performansı hizmeti sunuyoruz. ${character.name} organizasyonumuz, kaliteli kostümler, deneyimli animatörler ve unutulmaz doğum günü karakteri performanslarıyla çocuk animasyonu alanında fark yaratır.`
              },
              {
                eyebrow: "DENEYİMLİ EKİP",
                title: "Çocuklarla İletişimde Uzman",
                body: `Karakterlerimiz, karakter etkileşimi konusunda deneyimli profesyonel animatörler tarafından canlandırılır. ${character.name} kostümümüz hijyenik, güvenli ve her etkinlik öncesi dezenfekte edilir. Çocuk animasyonu sürecinde doğal ve samimi bir karakter performansı sergilenir.`
              },
              {
                eyebrow: "İSTANBUL GENELİ",
                title: "İstanbul'da Her Bölgeye",
                body: `${character.name} organizasyonumuz İstanbul'un her bölgesinde mevcuttur. Kadıköy, Kartal, Maltepe, Üsküdar, Ataşehir, Şişli, Maslak, Beylikdüzü, Başakşehir, Sarıyer ve daha fazlası.`
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
                <div className="w-full flex justify-center items-center bg-white py-8">
                  <img
                    src={image}
                    alt={`${character.name} organizasyon İstanbul - ${section.title}`}
                    className="object-contain max-h-[80vh] w-auto"
                  />
                </div>
              </div>
            );
          })}
        </>
      )}


      {/* Apple-Style Reservation CTA - SADECE PALYAÇO İÇİN */}
      {character.id === 'palyaco' && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                Hemen Rezervasyon Yaptır
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', lineHeight: '1.5', fontWeight: '400' }}>
                Çocuğunuzun doğum gününü unutulmaz kılmak için profesyonel ekibimizle hemen iletişime geçin
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-12 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3 min-h-[60px]"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </motion.a>

                <motion.a
                  href="tel:+905307309009"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                  aria-label="Telefon ile Ara"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.a>
              </div>

              <p className="text-base text-gray-400 mt-8" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: '400' }}>
                0530 730 90 09
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section — Data-driven when available */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="relative overflow-hidden bg-[#0b0b0f] rounded-[32px] border border-gray-200/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-16 text-center">
              <p
                className="uppercase tracking-[0.3em] text-orange-400 mb-6 font-medium"
                style={{
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                İstanbul'un her yerindeyiz
              </p>

              <h2
                className="font-bold mb-14"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  background: 'linear-gradient(to right, #FFFFFF, #FF7F50)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Hemen Rezervasyon Yap
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
                <motion.a
                  href={`https://wa.me/905307309009?text=Merhaba ${character.name} kiralama hakkında bilgi almak istiyorum`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto"
                >
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center gap-3">
                      <svg className="w-7 h-7 flex-shrink-0 text-orange-400 transition-colors group-hover:text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span
                        className="font-semibold text-white"
                        style={{
                          fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                          letterSpacing: '-0.01em',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                        }}
                      >
                        WhatsApp
                      </span>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+905307309009"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto"
                >
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center gap-3">
                      <svg className="w-7 h-7 flex-shrink-0 text-orange-400 transition-colors group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span
                        className="font-semibold text-white"
                        style={{
                          fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                          letterSpacing: '-0.01em',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                        }}
                      >
                        0530 730 90 09
                      </span>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </section>

          <div className="space-y-4 mt-12">
            {(character.faqs && character.faqs.length > 0 ? character.faqs.map(f => ({ question: f.q, answer: f.a })) : [
              {
                question: `${character.name} kiralama hizmeti neleri kapsıyor?`,
                answer: `${character.name} kiralama hizmetimizde profesyonel kostüm, animatör performansı, çocuklarla etkileşim, fotoğraf çekimi ve dans gösterisi yer almaktadır.`
              },
              {
                question: `${character.name} organizasyonu kaç saat sürer?`,
                answer: `${character.name} organizasyonu standart olarak 1-2 saat sürmektedir. İhtiyacınıza göre süre uzatılabilir.`
              },
              {
                question: `İstanbul'un hangi bölgelerinde ${character.name} kiralama veriyorsunuz?`,
                answer: `Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beylikdüzü ve İstanbul'un tüm ilçelerinde ${character.name} kiralama hizmeti veriyoruz.`
              },
              {
                question: "Ulaşım ve ekipmanlar dahil mi?",
                answer: `Evet, ${character.name} organizasyonunda ulaşım ve tüm ekipmanlar hizmetimize dahildir. Ekibimiz tüm malzemeleri ile birlikte adresinize gelir.`
              },
              {
                question: `${character.name} kostümü hijyenik mi?`,
                answer: `Evet, tüm kostümlerimiz her etkinlik öncesi profesyonel standartta temizlenir ve dezenfekte edilir. Çocukların sağlığı bizim için en önemli önceliktir.`
              },
              {
                question: "Erken rezervasyon indirimi var mı?",
                answer: "Evet, erken rezervasyonlarda özel indirimler mevcuttur. Detaylı bilgi ve fiyat için: 0530 730 90 09"
              }
            ]).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line" style={{ fontSize: 'clamp(0.938rem, 2vw, 1.063rem)', lineHeight: '1.7' }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* FAQPage Schema */}
          {character.faqs && character.faqs.length > 0 && (
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": character.faqs.map(f => ({
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* RELATED CHARACTERS — Cross-link system */}
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
              <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                BENZERİ KARAKTERLERİ KEŞFEDİN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                Diğer Kostümlü Karakterler
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
                    to={`/karakter/${rel.slug}`}
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={rel.heroImage}
                        alt={`${rel.name} kiralama İstanbul`}
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
                to="/organizasyonlar/kostumlu-karakterler"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Tüm Kostümlü Karakterler →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* DISTRICT LINKS — Internal link system to LP pages */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
            İstanbul'un Her Bölgesinde Faaliyet Gösteriyoruz
          </h2>
          <p className="text-xl text-white mb-8" style={{ lineHeight: '1.7' }}>
            {character.name} organizasyonumuz İstanbul'un tüm ilçelerinde mevcuttur
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

          <div className="mt-8">
            <Link
              to="/hizmet-bolgeleri"
              className="inline-block text-white/90 hover:text-white underline underline-offset-4 text-lg transition-colors"
            >
              Tüm hizmet bölgelerini görüntüle →
            </Link>
          </div>
        </div>
      </section>

      {/* EK SEO BÖLÜMÜ - SADECE PALYAÇO İÇİN */}
      {character.id === 'palyaco' && (
        <>
          {/* Palyaço Aktiviteleri Detay */}
          <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Palyaço Kiralama Aktiviteleri
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
                  Palyaço kiralama hizmetimizde grup oyunları, yüz boyama, sosis balon ve birçok eğlenceli aktivite bulunmaktadır
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/content/images/palyaco/palyacogrupoyunlari.webp" alt="Palyaço Kiralama Grup Oyunları İstanbul" className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Grup Oyunları</h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                      <strong>Palyaço kiralama</strong> hizmetimizde çocuklar <strong>grup oyunları</strong> ile birlikte eğlenir. Müzikli sandalye, balon patlatma, yarışmalar ve daha fazlası!
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✅ Müzikli sandalye oyunu</li>
                      <li>✅ Balon patlatma yarışması</li>
                      <li>✅ Dans ve hareket oyunları</li>
                      <li>✅ Takım oyunları ve yarışmalar</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/content/images/palyaco/palyaconattive3yuzboyamasi.webp" alt="Palyaço Yüz Boyama İstanbul" className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Yüz Boyama</h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                      Profesyonel <strong>yüz boyama</strong> ile çocuklar sevdikleri karakterlere dönüşürler. Hijyenik ve cilt dostu boyalarla güvenli hizmet.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✅ Kelebek, kaplan, prenses tasarımları</li>
                      <li>✅ Dermatolojik test edilmiş boyalar</li>
                      <li>✅ Her çocuğa özel tasarım</li>
                      <li>✅ Profesyonel yüz boyama sanatçısı</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/content/images/palyaco/palyaconattive1.webp" alt="Palyaço Sosis Balon İstanbul" className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sosis Balon Şekillendirme</h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                      <strong>Sosis balon</strong> şekillendirme ile çocuklara köpek, kılıç, çiçek gibi şekiller yapıyoruz. Her çocuk partiden balon hediye ile ayrılır!
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✅ Köpek, kedi, tavşan şekilleri</li>
                      <li>✅ Kılıç, taç ve kalp tasarımları</li>
                      <li>✅ Rengarenk balon seçenekleri</li>
                      <li>✅ Her çocuğa hediye balon</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/content/images/palyaco/palyacoonemlifotografguleryız.webp" alt="Palyaço Güler Yüz İstanbul" className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Palyaço Organizasyon</h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                      Profesyonel <strong>palyaço organizasyon</strong> ekibimiz ile doğum günlerinizi unutulmaz kılıyoruz. 10+ yıl deneyim ve 5000+ mutlu müşteri!
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✅ Deneyimli palyaço ekibi</li>
                      <li>✅ Komple organizasyon hizmeti</li>
                      <li>✅ İstanbul'un her bölgesinde</li>
                      <li>✅ %98 müşteri memnuniyeti</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Palyaço Kiralama Süreci */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Palyaço Kiralama Süreci
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
                  4 basit adımda palyaço kiralama ile unutulmaz bir doğum günü organizasyonu yapabilirsiniz
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { step: 1, title: 'Rezervasyon', text: 'Palyaço kiralama için bizimle iletişime geçin. Tarih, saat ve mekan bilgilerinizi paylaşın.', gradient: 'from-purple-600 to-pink-600', bg: 'from-purple-50 to-pink-50' },
                  { step: 2, title: 'Program Hazırlama', text: 'Çocuğun yaşına göre grup oyunları, yüz boyama ve aktiviteler planlıyoruz.', gradient: 'from-blue-500 to-purple-600', bg: 'from-blue-50 to-purple-50' },
                  { step: 3, title: 'Etkinlik Günü', text: 'Palyaço organizasyon ekibimiz gelir ve çocukları profesyonel aktivitelerle eğlendirir.', gradient: 'from-pink-500 to-orange-500', bg: 'from-pink-50 to-orange-50' },
                  { step: 4, title: 'Mutlu Son', text: 'Mutlu çocuklar, memnun aileler. 5000+ başarılı palyaço kiralama deneyimi!', gradient: 'from-green-500 to-teal-500', bg: 'from-green-50 to-teal-50' }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`bg-gradient-to-br ${item.bg} rounded-2xl p-8 shadow-lg`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-r ${item.gradient}`}>
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-bold ml-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                    </div>
                    <p className="text-gray-700" style={{ lineHeight: '1.7' }}>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Palyaço Kiralama Fiyatları */}
          <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                  Palyaço Kiralama Paketleri
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
                  İhtiyacınıza uygun palyaço organizasyon paketlerimizi keşfedin
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Temel Paket</h3>
                  <div className="text-4xl font-bold mb-6" style={{ background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>900₺'den</div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>✅ 45-60 dakika palyaço gösterisi</li>
                    <li>✅ Grup oyunları</li>
                    <li>✅ Temel aktiviteler</li>
                    <li>✅ Pasta töreni animasyonu</li>
                  </ul>
                  <a href="tel:+905307309009" className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Hemen Ara</a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl transform scale-105">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full inline-block mb-4 font-bold">EN POPÜLER</div>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Standart Paket</h3>
                  <div className="text-4xl font-bold text-white mb-6">₺₺₺</div>
                  <ul className="space-y-3 text-white mb-8">
                    <li>✅ 60 dakika palyaço gösterisi</li>
                    <li>✅ Yüz boyama</li>
                    <li>✅ Sosis balon şekillendirme</li>
                    <li>✅ Grup oyunları</li>
                    <li>✅ Ses sistemi</li>
                  </ul>
                  <a href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum" target="_blank" rel="noopener noreferrer" className="block text-center bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">WhatsApp ile Sor</a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Premium Paket</h3>
                  <div className="text-4xl font-bold mb-6" style={{ background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>₺₺₺₺</div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>✅ 90 dakika palyaço gösterisi</li>
                    <li>✅ 2 profesyonel palyaço</li>
                    <li>✅ Yüz boyama + Sosis balon</li>
                    <li>✅ Kapsamlı grup oyunları</li>
                    <li>✅ Profesyonel ses sistemi</li>
                    <li>✅ Sürpriz hediyeler</li>
                  </ul>
                  <a href="tel:+905307309009" className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Hemen Ara</a>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
                <p className="text-white/90 text-lg" style={{ lineHeight: '1.7' }}>
                  * Fiyatlar lokasyona ve etkinlik süresine göre değişiklik gösterebilir. Detaylı bilgi için: <strong>0530 730 90 09</strong>
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <RelatedBlogPosts servicePath="/organizasyonlar/kostumlu-karakterler" />
    </>
  )
}

export default CharacterDetail
