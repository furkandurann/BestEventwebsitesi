import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Seo from '../../components/Seo'

// Clown FAQ Section Component
function ClownFAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.05),_transparent_50%)] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-400 mb-4 font-medium">
            Sıkça Sorulan Sorular
          </p>
          <h2 
            className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.025em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Merak Ettikleriniz
          </h2>
          <p 
            className="text-gray-300 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6',
              letterSpacing: '-0.015em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
            }}
          >
            Palyaço kiralama hakkında en çok sorulan sorular
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient Glow on Active */}
              {openIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
              )}
              
              {/* Accordion Item */}
              <div className={`relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border ${
                openIndex === index ? 'border-purple-500/30' : 'border-white/10'
              }`}>
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group/button"
                >
                  <div className="flex-1">
                    <h3 
                      className={`font-bold transition-colors ${
                        openIndex === index 
                          ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                          : 'text-white group-hover/button:text-purple-400'
                      }`}
                      style={{
                        fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                        lineHeight: '1.4',
                        letterSpacing: '-0.015em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 rotate-180' 
                      : 'bg-white/10 group-hover/button:bg-purple-500/20'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-colors ${
                        openIndex === index ? 'text-white' : 'text-gray-300'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="pt-4 border-t border-white/10">
                      <p 
                        className="text-gray-300 leading-relaxed"
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                          lineHeight: '1.7',
                          letterSpacing: '-0.01em',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p 
            className="text-gray-300 mb-6"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
            }}
          >
            Başka sorularınız mı var?
          </p>
          <a
            href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
            }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp ile Sorun
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const ClownRental = () => {
  const faqData = [
    {
      question: 'Palyaço kiralama hizmetinizde deneyiminiz nedir?',
      answer: 'İstanbul\'da 10 yılı aşkın süredir yüzlerce ailenin doğum günü ve etkinliklerini başarıyla tasarlıyoruz. 5.000\'den fazla etkinlik deneyimimizle her yaş grubuna uygun aktiviteleri planlıyor, çocukları ilk karşılamadan son fotoğrafa kadar mutlu bir deneyime taşıyoruz.'
    },
    {
      question: 'Etkinliğe ne zaman gelirsiniz?',
      answer: 'Ekiplerimiz etkinlik başlangıcından 15 dakika önce alanda olur. Hazırlıklarını sessizce tamamlar ve çocukları karşılamaya hazır bekler. Söz verdiğimiz saatlerde, her zaman.'
    },
    {
      question: 'İki saatlik palyaço etkinliğinde neler var?',
      answer: 'Hizmetimiz sadece bir gösteri değil; uçtan uca bir deneyimdir: Tanışma & Yüz Boyama, Yaş Grubuna Uygun Grup Oyunları, Kar Spreyi & Konfeti Gösterisi, Sosis Balonlar ve Pinyata Finali, Veda Fotoğrafı. Her etkinlik atmosferi, çocukların yaş aralığına göre özelleştirilir.'
    },
    {
      question: 'Hangi yaş gruplarına hizmet veriyorsunuz?',
      answer: '3–5 Yaş, 6–8 Yaş ve 9–12 Yaş grupları için özel aktivite planlarımız var. Yumuşak ve sevimli oyunlardan, enerjik grup aktivitelerine ve interaktif mini şovlara kadar tüm içerikler yaşa göre tasarlanır.'
    },
    {
      question: 'Yüz boyama malzemeleriniz güvenli mi?',
      answer: 'Playdoh\'un en yüksek kalitede serilerini kullanmaktayız. Hijyen ve kalite önceliğimizdir. Her etkinlikten sonra tüm malzemeler yıkanır ve temizlenir.'
    },
    {
      question: 'Animatörleriniz deneyimli mi?',
      answer: 'Çalışanlarımız 19-28 yaş aralığında, güler yüzlü ve profesyonel ekip üyelerimizdir. Yüksek iletişim becerisi ve enerjik yapılarıyla çocuklarınıza unutulmaz anlar yaşatırlar.'
    },
    {
      question: 'Hangi bölgelere hizmet veriyorsunuz?',
      answer: 'Tüm İstanbul\'a palyaço kiralama hizmeti sunuyoruz. Kadıköy, Beşiktaş, Şişli, Bakırköy, Ataşehir ve İstanbul\'un tüm ilçelerinde profesyonel palyaço organizasyonu yapıyoruz.'
    }
  ]

  const heroSlides = [
    {
      src: '/content/images/palyaco/palyaconattiveguleryuz.webp',
      alt: 'Palyaço güler yüzlü animatörler'
    },
    {
      src: '/content/images/palyaco/palyacoanaherogrupoyunlari.webp',
      alt: 'Palyaço grup oyunları'
    },
    {
      src: '/content/images/palyaco/palyacokarsoleni.webp',
      alt: 'Palyaço kar gösterisi'
    },
    {
      src: '/content/images/palyaco/palyacogrupoyunlari.webp',
      alt: 'Palyaço interaktif etkinlik'
    }
  ]

  const eventFlow = [
    {
      id: 'greeting',
      number: '1',
      title: 'Tanışma ve Karşılama',
      description: 'Palyaço ekibimiz çocuklarla samimi bir karşılama seremonisi ile tanışır',
      image: '/content/images/palyaco/palyacoonemlifoto.webp',
      alt: 'Palyaço kiralama İstanbul tanışma seremonisi - Best Event'
    },
    {
      id: 'facepainting',
      number: '2',
      title: 'Yüz Boyama',
      description: 'Minnie Mouse, Spiderman, kedi, köpek, tavşan, Batman ve daha fazlası. Renkli karakterler yüz boyama ile canlanıyor',
      image: '/content/images/palyaco/yuzboyamapalyaco.webp',
      alt: 'Palyaço etkinliği yüz boyama İstanbul - Best Event'
    },
    {
      id: 'games',
      number: '3',
      title: 'Eğlenceli Grup Oyunları',
      description: 'Tüm çocukların katıldığı interaktif grup oyunları ve yarışmalar',
      image: '/content/images/palyaco/palyacogrupoyunlari.webp',
      alt: 'Palyaço kiralama grup oyunları İstanbul - Best Event'
    },
    {
      id: 'balloon',
      number: '4',
      title: 'Sosis Balon Şekillendirme',
      description: 'Renkli sosis balon ile kedi, köpek, kalp, kılıç yapımı',
      image: '/content/images/palyaco/palyacososisbalon.webp',
      alt: 'Palyaço organizasyonu balon şekillendirme - Best Event'
    },
    {
      id: 'happyface',
      number: '5',
      title: 'Palyaçonun Güler Yüzü',
      description: 'Çocukların mutluluğunu yansıtan neşeli anlar',
      image: '/content/images/palyaco/palyacooguleryuzzafotograf.webp',
      alt: 'Palyaço kiralama fotoğraf çekimi İstanbul - Best Event'
    },
    {
      id: 'snowshow',
      number: '6',
      title: 'Kar Show\'u Finali',
      description: 'Büyülü kar show gösterisi ile etkinliğin en heyecanlı anı',
      image: '/content/images/palyaco/palyacokarsoleni.webp',
      alt: 'Palyaço etkinliği kar show İstanbul - Best Event'
    },
    {
      id: 'farewell',
      number: '7',
      title: 'Son Hatıra Fotoğrafı',
      description: 'Unutulmaz günün son fotoğrafı ile duygusal veda',
      image: '/content/images/palyaco/palyacoonemlifotografa.webp',
      alt: 'Palyaço etkinliği veda fotoğrafı İstanbul - Best Event'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Seo
        title="Palyaço Kiralama İstanbul | +5000 Başarılı Etkinlik | Best Event"
        description="İstanbul'da profesyonel palyaço kiralama hizmeti. Son 2 yılda +5000 etkinlik. Tanışma, yüz boyama, grup oyunları, kar show'u. Hemen rezervasyon: 0530 730 90 09"
        keywords={[
          'palyaço kiralama istanbul',
          'palyaço organizasyonu',
          'palyaço etkinliği',
          'çocuk palyaçosu',
          'doğum günü palyaço',
          'profesyonel palyaço kiralama',
          'istanbul palyaço',
          'palyaço kiralama fiyatları'
        ]}
        canonicalPath="/organizasyonlar/palyaco-kiralama"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Palyaço Kiralama İstanbul",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BestEvent",
              "areaServed": [
                "Kadıköy", "Üsküdar", "Maltepe", "Ataşehir", "Ümraniye", "Kartal", "Pendik", "Beykoz",
                "Beşiktaş", "Şişli", "Bakırköy", "Beylikdüzü", "Esenyurt", "Başakşehir", "Sarıyer",
                "Fatih", "Beyoğlu", "Kağıthane", "Güngören", "Bahçelievler", "İstanbul"
              ]
            },
            "serviceType": "Palyaço Kiralama",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          },
          {
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
          }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.3em] text-xs sm:text-sm text-orange-300 mb-4 font-medium"
            >
              İstanbul'un Her Yerindeyiz
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white mb-3"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.025em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Palyaço Kiralama İstanbul
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: '1.6',
                letterSpacing: '-0.01em',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Şehrin her noktasında eğlenceli palyaço şovları ve animasyonlar.
            </motion.p>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop
            centeredSlides
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            speed={900}
            spaceBetween={18}
            slidesPerView={1.05}
            breakpoints={{
              768: { slidesPerView: 1.15 },
              1024: { slidesPerView: 1.35 }
            }}
            className="h-[60vh] sm:h-[65vh] md:h-[68vh]"
          >
            {heroSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />
                  <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-lg">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/80 mb-2">Palyaço Organizasyonu</p>
                    <p className="text-lg font-semibold" style={{ letterSpacing: '-0.01em' }}>
                      {slide.alt}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Brand Impact Section - Palyaço Gezegeni */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-br from-purple-950/40 via-black to-pink-950/40 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* BestEvent Bilgisi */}
            <h2 
              className="font-bold mb-8 text-white px-4 text-center"
              style={{
                fontSize: 'clamp(1.41rem, 3.74vw, 2.48rem)',
                lineHeight: '1.35',
                letterSpacing: '-0.015em',
                fontWeight: '700',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>
                Yüksek{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
                  iletişim becerisi
                </span>
              </span>
              , Enerjik ve güler yüzlü animatörler ile
            </h2>

            {/* Ana Mesaj */}
            <p 
              className="text-white mb-12 text-center mx-auto"
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
                lineHeight: '1.5',
                letterSpacing: '-0.02em',
                fontWeight: '600',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              12 Yıldır Sektöre Damga Vurduk
            </p>

            {/* İstatistikler */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <div>
                <p 
                  style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                    lineHeight: '1.4',
                    letterSpacing: '-0.015em',
                    fontWeight: '500',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    color: '#E5E5E5'
                  }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>+5000</span>
                  {' '}Kiralama
                </p>
              </div>

              <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="block sm:hidden w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div>
                <p 
                  className="text-white font-bold"
                  style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                    lineHeight: '1.4',
                    letterSpacing: '-0.015em',
                    fontWeight: '700',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                  }}
                >
                  Binlerce{' '}
                  <span 
                    className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                  >
                    Mutlu Çocuk
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Flow Section */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-orange-900/40 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-400 mb-4 font-medium">
              Etkinlik Süreci
            </p>
            <h2 
              className="font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(1.875rem, 5vw, 3rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.025em',
                fontWeight: '700',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Palyaço Etkinliği Nasıl İlerler?
            </h2>
            <p 
              className="text-zinc-300 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                lineHeight: '1.6',
                letterSpacing: '-0.01em',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Tanışmadan vedaya kadar unutulmaz anlar
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventFlow.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500">
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="aspect-[4/3] w-full bg-black/60 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.alt}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 
                      className="text-white font-bold mb-3"
                      style={{
                        fontSize: 'clamp(1.3125rem, 2vw, 1.5625rem)',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-zinc-300"
                      style={{
                        fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                        lineHeight: '1.55',
                        letterSpacing: '-0.005em',
                        fontWeight: '500',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Palyaço Etkinliği Fotoğraf Şeridi - CinemaStrip */}
      <section className="w-full bg-black/90 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* H2 */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            Binlerce palyaço etkinliğini başarıyla
          </h2>

          {/* H3 */}
          <p className="text-lg md:text-xl text-gray-300 mb-20 text-center">
            Tam zamanında<br />
            Tam yerinde<br />
            Eksiksiz
          </p>

          {/* Yaptık */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10">
            Yaptık ;
          </h2>
        </div>

        {/* Cinema-Strip */}
        <PalyacoCinemaStrip />
      </section>

      {/* Apple-Style Contact Section */}
      <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Eyebrow Text */}
            <p 
              className="uppercase tracking-[0.3em] text-orange-400 mb-6 font-medium"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              İstanbul'un her yerindeyiz
            </p>

            {/* Premium Title with Orange Gradient */}
            <h2 
              className="font-bold mb-16"
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

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  {/* Orange Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    {/* Icon with Orange Accent */}
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-400 transition-colors group-hover:text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    
                    {/* Text */}
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

              {/* Phone Button */}
              <motion.a
                href="tel:+905307309009"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  {/* Orange Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    {/* Icon with Orange Accent */}
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-400 transition-colors group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    
                    {/* Text */}
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
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <ClownFAQSection faqs={faqData} />

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 px-6 bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 
              className="font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              İstanbul'da Hizmet Bölgelerimiz
            </h2>
            
            <div className="max-w-5xl mx-auto text-center space-y-4">
              <p 
                className="leading-relaxed"
                style={{ 
                  fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)', 
                  lineHeight: '1.7',
                  color: '#E5E5E5',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                İstanbul'un her bölgesinde profesyonel palyaço kiralama hizmeti sunuyoruz: 
                <strong className="text-white"> Kadıköy, Üsküdar, Maltepe, Ataşehir, Ümraniye, Kartal, Pendik, Beykoz, Beşiktaş, Şişli, Bakırköy, Beylikdüzü, Esenyurt, Başakşehir, Sarıyer, Fatih, Beyoğlu, Kağıthane, Güngören, Bahçelievler</strong> ve İstanbul'un tüm ilçelerinde yanınızdayız.
              </p>
              <p 
                className="leading-relaxed"
                style={{ 
                  fontSize: 'clamp(1rem, 1.9vw, 1.0625rem)', 
                  lineHeight: '1.7',
                  color: '#9CA3AF',
                  fontWeight: '500',
                  letterSpacing: '-0.01em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                Ayrıca <strong className="text-white">Antalya</strong> ve yaz sezonunda <strong className="text-white">Bodrum, Çeşme, Alanya, Side</strong> gibi tatil bölgelerinde de hizmet vermekteyiz.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

// Cinema Strip Component
function PalyacoCinemaStrip() {
  const scrollContainerRef = useRef(null)

  const scrollImages = [
    { file: 'palyacoanaherogrupoyunlari.JPG', alt: 'Palyaço etkinliği grup oyunları İstanbul - Best Event' },
    { file: 'yuzboyamapalyaco.jpg', alt: 'Palyaço yüz boyama etkinliği İstanbul - Best Event' },
    { file: 'palyacogrupoyunlari.jpg', alt: 'Palyaço kiralama grup oyunları - Best Event' },
    { file: 'palyacososisbalon.jpg', alt: 'Palyaço sosis balon şekillendirme İstanbul - Best Event' },
    { file: 'palyacooguleryuzzafotograf.jpeg', alt: 'Palyaço etkinliği güler yüz fotoğrafları - Best Event' },
    { file: 'palyacokarsoleni.jpeg', alt: 'Palyaço kar show gösterisi İstanbul - Best Event' },
    { file: 'palyacoonemlifotografa.jpg', alt: 'Palyaço etkinliği hatıra fotoğrafı - Best Event' },
    { file: 'palyacoonemlifotografguleryız.jpg', alt: 'Palyaço organizasyonu mutlu çocuklar - Best Event' },
    { file: 'palyacosevgidoluonemli.jpg', alt: 'Palyaço kiralama sevgi dolu anlar - Best Event' },
    { file: 'palyaconattiveguleryuz.jpg', alt: 'Palyaço etkinliği pozitif enerji - Best Event' },
    { file: 'palyacogrupoyunlarii.jpg', alt: 'Palyaço grup aktiviteleri İstanbul - Best Event' },
    { file: 'MST04316.JPG', alt: 'Palyaço organizasyonu profesyonel hizmet - Best Event' },
    { file: 'MST04321.JPG', alt: 'Palyaço kiralama etkinlik fotoğrafları - Best Event' },
    { file: 'MST04344.JPG', alt: 'Palyaço etkinliği çocuk mutluluğu - Best Event' },
    { file: 'IMG_1881.JPG', alt: 'Palyaço kiralama İstanbul başarılı organizasyon - Best Event' }
  ]

  // Dinamik hesaplama - fotoğraf sayısı değiştiğinde otomatik güncellenir
  const IMAGE_WIDTH = 450  // px
  const GAP = 24           // gap-6 = 1.5rem = 24px
  const imageCount = scrollImages.length
  const totalWidth = (IMAGE_WIDTH * imageCount) + (GAP * (imageCount - 1))

  // Triple images for smoother infinite loop
  const allImages = [...scrollImages, ...scrollImages, ...scrollImages]

  // Sadece otomatik scroll
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const scrollSpeed = 2.0 // px per frame (x4 hız)
    let animationFrameId
    
    const autoScroll = () => {
      container.scrollLeft += scrollSpeed
      
      // Başa dön (seamless loop)
      if (container.scrollLeft >= totalWidth) {
        container.scrollLeft = 0
      }
      
      animationFrameId = requestAnimationFrame(autoScroll)
    }
    
    animationFrameId = requestAnimationFrame(autoScroll)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [totalWidth])

  return (
    <div className="relative w-screen -mx-6 md:-mx-10">
      <div 
        ref={scrollContainerRef}
        className="overflow-hidden scrollbar-hide"
      >
        <div className="flex gap-6">
          {allImages.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
            >
              <img
                src={`/content/images/palyaco/${item.file}`}
                alt={item.alt}
                className="h-72 w-[450px] object-cover rounded-2xl brightness-[1.15] contrast-[1.08] saturate-[1.1]"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default ClownRental
