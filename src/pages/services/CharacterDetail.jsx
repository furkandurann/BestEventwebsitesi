import { useEffect, useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { getCharacterDetailEntryBySlugAsync } from '../../data/catalogData.async'
import Seo from '../../components/Seo'
import AdHero from '../../components/AdHero'
import RelatedBlogPosts from '../../components/RelatedBlogPosts'
import { generateSrcSet } from '../../utils/responsiveImage'

const CharacterDetail = () => {
  const { slug } = useParams()
  const [character, setCharacter] = useState(null)
  const [relatedItems, setRelatedItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    setIsLoading(true)

    getCharacterDetailEntryBySlugAsync(slug).then((entry) => {
      if (!isMounted) return

      setCharacter(entry?.character || null)
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

  // 404 if neither character nor mascot found
  if (!character) {
    return <Navigate to="/organizasyonlar/kostumlu-karakterler" replace />
  }

  const hasNewData = !!character.longDescription
  const seoArticle = character.seoArticle || {}

  return (
    <>
      <Seo
        title={character.seoTitle || `${character.name} Kostümlü Karakter Kiralama İstanbul`}
        description={character.seoDescription || `İstanbul'da ${character.name} kostümlü karakter kiralama. Profesyonel animatör, hijyenik kostüm. Doğum günü ve etkinlikler için.`}
        keywords={[`${character.name.toLowerCase()} kiralama istanbul`, `${character.name.toLowerCase()} kostümlü karakter kiralama`, 'kostümlü karakter kiralama istanbul', 'doğum günü animatörü istanbul', 'çocuk etkinlik organizasyonu', `${character.name.toLowerCase()} doğum günü`, 'karakter performansı istanbul', 'çocuk partisi karakter', 'istanbul organizasyon', 'çocuk animasyonu']}
        image={character.heroImage}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${character.name} Kostümlü Karakter Kiralama İstanbul`,
            "description": character.seoDescription || `İstanbul'da ${character.name} kostümlü karakter kiralama hizmeti.`,
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
            "serviceType": "Kostümlü Karakter Kiralama",
            "areaServed": {
              "@type": "City",
              "name": "İstanbul"
            }
          },
          ...(character.faqs && character.faqs.length > 0 ? [{
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
          }] : [])
        ]}
      />

      {/* ═══ PAZARLAMA HEROSU — AdHero ═══ */}
      <AdHero
        title={`${character.name} Kostümlü Karakter Kiralama İstanbul`}
        backgroundImage={character.heroImage}
        subtitle="İstanbul'un Her Semtine Gönderim"
      />

      <main className="overflow-x-hidden">

        {/* ═══════════════════════════════════════════════════════ */}
        {/* BÖLÜM 1: KARAKTER TANITIMI — Tam genişlik hero görsel + H1 */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="relative">
          {/* Karakter hero görseli */}
          <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            {character.id === 'palyaco' ? (
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                speed={1100}
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                loop
                className="h-full w-full"
              >
                {character.images.slice(0, 6).map((img, index) => (
                  <SwiperSlide key={index} className="relative h-full w-full">
                    <img
                      src={img}
                      srcSet={generateSrcSet(img)}
                      sizes="100vw"
                      alt={`${character.name} kiralama İstanbul - görsel ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : undefined}
                      decoding="async"
                      width={1200}
                      height={800}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <>
                <img
                  src={character.heroImage}
                  srcSet={generateSrcSet(character.heroImage)}
                  sizes="100vw"
                  alt={`${character.name} kostümlü karakter kiralama İstanbul`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={character.id === 'minnie-mouse' ? { objectPosition: 'center 25%' } : undefined}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1200}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </>
            )}
            {/* H1 overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="max-w-5xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.15' }}
                >
                  {character.name} Kostümlü Karakter Kiralama
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-xl text-white/80 max-w-3xl"
                >
                  {character.description}
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* BÖLÜM 2: ANA İÇERİK — SEO Odaklı Zengin Metin */}
        {/* ═══════════════════════════════════════════════════════ */}
        {hasNewData && (
          <>
            {/* Giriş Paragrafı */}
            <section className="py-16 md:py-24 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                    {character.name.toUpperCase()} KİRALAMA İSTANBUL
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                    {character.name} ile Unutulmaz Bir Organizasyon
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p className="text-lg leading-[1.85]">{character.longDescription}</p>
                    {seoArticle.intro && <p className="text-lg leading-[1.85]">{seoArticle.intro}</p>}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* İlk Görsel — Tam genişlik */}
            {character.images?.[0] && (
              <div className="w-full bg-gray-50">
                <div className="max-w-6xl mx-auto">
                  <img
                    src={character.images[0]}
                    srcSet={generateSrcSet(character.images[0])}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt={`${character.name} kiralama İstanbul - profesyonel kostüm`}
                    className="w-full h-auto object-cover rounded-none md:rounded-2xl md:my-4"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            )}

            {/* Neden Tercih Edilmeli */}
            {seoArticle.whyChoose && (
              <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                      NEDEN {character.name.toUpperCase()}?
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                      Neden {character.name} Kostümlü Karakter Kiralama?
                    </h2>
                    <div className="text-lg text-gray-700 leading-[1.85] space-y-6">
                      <p>{seoArticle.whyChoose}</p>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Aktivite Detayları + Features */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                    AKTİVİTE DETAYLARI
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                    {character.name} Gösterisi Nasıl İlerliyor?
                  </h2>
                  <p className="text-lg text-gray-700 mb-10 leading-[1.85]">
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

            {/* İkinci Görsel */}
            {character.images?.[1] && (
              <div className="w-full bg-gray-50">
                <div className="max-w-6xl mx-auto">
                  <img
                    src={character.images[1]}
                    srcSet={generateSrcSet(character.images[1])}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt={`${character.name} organizasyon İstanbul - etkinlik`}
                    className="w-full h-auto object-cover rounded-none md:rounded-2xl md:my-4"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            )}

            {/* Doğum Günü Organizasyonu Bölümü */}
            {seoArticle.birthdaySection && (
              <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                      DOĞUM GÜNÜ ORGANİZASYONU
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                      {character.name} ile Doğum Günü Partisi
                    </h2>
                    <div className="text-lg text-gray-700 leading-[1.85] space-y-6">
                      <p>{seoArticle.birthdaySection}</p>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Etkinlik Senaryoları — 3 kart */}
            {character.eventScenarios && character.eventScenarios.length > 0 && (
              <section className="py-16 md:py-24 bg-black">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

            {/* Üçüncü Görsel */}
            {character.images?.[2] && (
              <div className="w-full bg-gray-50">
                <div className="max-w-6xl mx-auto">
                  <img
                    src={character.images[2]}
                    srcSet={generateSrcSet(character.images[2])}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt={`${character.name} doğum günü İstanbul`}
                    className="w-full h-auto object-cover rounded-none md:rounded-2xl md:my-4"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            )}

            {/* Kostüm ve Profesyonellik */}
            {seoArticle.costumeSection && (
              <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                      PROFESYONEL HİZMET
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                      {character.name} Kostümü ve Profesyonel Performans
                    </h2>
                    <div className="text-lg text-gray-700 leading-[1.85] space-y-6">
                      <p>{seoArticle.costumeSection}</p>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Dördüncü Görsel */}
            {character.images?.[3] && (
              <div className="w-full bg-gray-50">
                <div className="max-w-6xl mx-auto">
                  <img
                    src={character.images[3]}
                    srcSet={generateSrcSet(character.images[3])}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt={`${character.name} çocuk etkinliği İstanbul`}
                    className="w-full h-auto object-cover rounded-none md:rounded-2xl md:my-4"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            )}

            {/* İstanbul Hizmet Bölgeleri SEO */}
            {seoArticle.istanbulSection && (
              <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                      İSTANBUL GENELİ HİZMET
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                      İstanbul'da {character.name} Kiralama Hizmeti
                    </h2>
                    <div className="text-lg text-gray-700 leading-[1.85] space-y-6">
                      <p>{seoArticle.istanbulSection}</p>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Ebeveyn İpuçları */}
            {character.parentTips && (
              <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-pink-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                      EBEVEYN İPUÇLARI
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                      {character.name} Partisi İçin Hazırlık Rehberi
                    </h2>
                    <div className="text-lg text-gray-700 leading-[1.85] space-y-6">
                      <p>{character.parentTips}</p>
                      {seoArticle.parentTipsExtended && <p>{seoArticle.parentTipsExtended}</p>}
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Beşinci Görsel */}
            {character.images?.[4] && (
              <div className="w-full bg-gray-50">
                <div className="max-w-6xl mx-auto">
                  <img
                    src={character.images[4]}
                    srcSet={generateSrcSet(character.images[4])}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt={`${character.name} parti organizasyonu İstanbul`}
                    className="w-full h-auto object-cover rounded-none md:rounded-2xl md:my-4"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            )}

            {/* Fiyatlandırma ve Rezervasyon */}
            {seoArticle.pricingSection && (
              <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                      FİYAT VE REZERVASYON
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                      {character.name} Kiralama Fiyatı ve Rezervasyon
                    </h2>
                    <div className="text-lg text-gray-700 leading-[1.85] space-y-6">
                      <p>{seoArticle.pricingSection}</p>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Eğlenceli Bilgiler — 3 kart */}
            {character.funFacts && character.funFacts.length > 0 && (
              <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                  >
                    <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                      BİLİYOR MUYDUNUZ?
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
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
        )}

        {/* Fallback for characters without new data */}
        {!hasNewData && character.images && character.images.map((image, index) => (
          <div key={index}>
            <section className="py-16 bg-white">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {character.name} Organizasyonu
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Best Event olarak İstanbul'da profesyonel {character.name} organizasyonu sunuyoruz. Deneyimli animatörlerimiz ve kaliteli kostümlerimizle çocuklara unutulmaz anlar yaşatıyoruz.
                </p>
              </div>
            </section>
            <div className="w-full bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <img
                  src={image}
                  srcSet={generateSrcSet(image)}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  alt={`${character.name} organizasyon İstanbul`}
                  className="w-full h-auto object-cover rounded-none md:rounded-2xl md:my-4"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        ))}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* PALYAÇO ÖZEL BÖLÜMLER */}
        {/* ═══════════════════════════════════════════════════════ */}
        {character.id === 'palyaco' && (
          <>
            {/* Palyaço Rezervasyon CTA */}
            <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-20">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.1' }}>
                    Hemen Rezervasyon Yaptır
                  </h2>
                  <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                    Çocuğunuzun doğum gününü unutulmaz kılmak için profesyonel ekibimizle hemen iletişime geçin
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                      href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-12 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                    >
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="tel:+905307309009"
                      className="bg-red-500 hover:bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                      aria-label="Telefon ile Ara"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-white/70 mt-6">05307309009</p>
                </motion.div>
              </div>
            </section>

            {/* Palyaço Aktiviteleri */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
              <div className="max-w-6xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Palyaço Kiralama Aktiviteleri
                  </h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Palyaço kiralama hizmetimizde grup oyunları, yüz boyama, sosis balon ve birçok eğlenceli aktivite
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { img: '/content/images/palyaco/palyacogrupoyunlari.webp', title: 'Grup Oyunları', desc: 'Müzikli sandalye, balon patlatma, yarışmalar ve dans oyunları ile çocuklar bir arada eğlenir.', items: ['Müzikli sandalye oyunu', 'Balon patlatma yarışması', 'Dans ve hareket oyunları', 'Takım oyunları ve yarışmalar'] },
                    { img: '/content/images/palyaco/palyacoyuzboyama2.webp', title: 'Yüz Boyama', desc: 'Profesyonel yüz boyama ile çocuklar sevdikleri karakterlere dönüşürler.', items: ['Kelebek, kaplan, prenses tasarımları', 'Dermatolojik test edilmiş boyalar', 'Her çocuğa özel tasarım', 'Profesyonel yüz boyama sanatçısı'] },
                    { img: '/content/images/palyaco/palyaconattivee.webp', title: 'Sosis Balon Şekillendirme', desc: 'Sosis balon ile köpek, kılıç, çiçek gibi şekiller yapıyoruz.', items: ['Köpek, kedi, tavşan şekilleri', 'Kılıç, taç ve kalp tasarımları', 'Rengarenk balon seçenekleri', 'Her çocuğa hediye balon'] },
                    { img: '/content/images/palyaco/palyacoonemlifotografguleryız.webp', title: 'Palyaço Organizasyon', desc: 'Profesyonel palyaço organizasyon ekibimiz ile doğum günlerinizi unutulmaz kılıyoruz.', items: ['Deneyimli palyaço ekibi', 'Komple organizasyon hizmeti', "İstanbul'un her bölgesinde", '%98 müşteri memnuniyeti'] }
                  ].map((card, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <img src={card.img} srcSet={generateSrcSet(card.img)} sizes="(max-width: 768px) 100vw, 400px" alt={`Palyaço ${card.title} İstanbul`} className="w-full h-64 object-cover" loading="lazy" decoding="async" width={600} height={256} />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{card.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">{card.desc}</p>
                        <ul className="space-y-2 text-gray-700">
                          {card.items.map((item, j) => <li key={j}>✅ {item}</li>)}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Palyaço Kiralama Paketleri */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
              <div className="max-w-6xl mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Palyaço Kiralama Paketleri
                  </h2>
                  <p className="text-lg text-white/90 max-w-3xl mx-auto">
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
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl transform md:scale-105">
                    <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full inline-block mb-4 font-bold text-sm">EN POPÜLER</div>
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
                <p className="text-white/80 text-center mt-10 text-lg">
                  * Fiyatlar lokasyona ve etkinlik süresine göre değişiklik gösterebilir. Detaylı bilgi için: <strong>05307309009</strong>
                </p>
              </div>
            </section>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* REZERVASYON CTA — Tüm karakterler */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden bg-[#0b0b0f] rounded-[32px] border border-gray-200/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>
              <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-16 text-center">
                <p className="uppercase tracking-[0.3em] text-orange-400 mb-6 font-medium text-sm">
                  İstanbul'un her yerindeyiz
                </p>
                <h2
                  className="font-bold mb-14"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontFamily: 'Poppins, sans-serif',
                    background: 'linear-gradient(to right, #FFFFFF, #FF7F50)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Hemen Rezervasyon Yap
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
                  <a
                    href={`https://wa.me/905307309009?text=${encodeURIComponent(`Merhaba, ${character.name} kostümlü karakter kiralama hakkında bilgi almak istiyorum`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full sm:w-auto"
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center justify-center gap-3">
                        <svg className="w-7 h-7 flex-shrink-0 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span className="font-semibold text-white text-lg">WhatsApp</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+905307309009"
                    className="group relative w-full sm:w-auto"
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center justify-center gap-3">
                        <svg className="w-7 h-7 flex-shrink-0 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="font-semibold text-white text-lg">05307309009</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* FAQ BÖLÜMÜ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                SIK SORULAN SORULAR
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                {character.name} Kiralama Hakkında Sorular
              </h2>
            </motion.div>

            <div className="space-y-4">
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
                  answer: `Evet, ${character.name} organizasyonunda ulaşım ve tüm ekipmanlar hizmetimize dahildir.`
                },
                {
                  question: `${character.name} kostümü hijyenik mi?`,
                  answer: "Evet, tüm kostümlerimiz her etkinlik öncesi profesyonel standartta temizlenir ve dezenfekte edilir."
                },
                {
                  question: "Erken rezervasyon indirimi var mı?",
                  answer: "Evet, erken rezervasyonlarda özel indirimler mevcuttur. Detaylı bilgi ve fiyat için: 05307309009"
                }
              ]).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* İLGİLİ KARAKTERLER */}
        {/* ═══════════════════════════════════════════════════════ */}
        {relatedItems.length > 0 && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
              >
                <p className="uppercase tracking-[0.3em] text-orange-500 mb-4 font-medium text-sm">
                  BENZERİ KARAKTERLERİ KEŞFEDİN
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
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
                    <Link to={`/karakter/${rel.slug}`} className="block group">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                          src={rel.heroImage}
                          srcSet={generateSrcSet(rel.heroImage)}
                          sizes="(max-width: 768px) 100vw, 400px"
                          alt={`${rel.name} kostümlü karakter kiralama İstanbul`}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                          width={400}
                          height={256}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {rel.name}
                          </h3>
                          <p className="text-white/80 text-sm">{rel.title}</p>
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
        {/* İLÇE LİNKLERİ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
              İstanbul'un Her Bölgesinde Faaliyet Gösteriyoruz
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {character.name} kostümlü karakter kiralama hizmetimiz İstanbul'un tüm ilçelerinde mevcuttur
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

        <RelatedBlogPosts servicePath="/organizasyonlar/kostumlu-karakterler" />
      </main>
    </>
  )
}

export default CharacterDetail
