import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import Seo from '../../components/Seo'
import NarrativeSection from '../../components/NarrativeSection'
import OptimizedImage from '../../components/OptimizedImage'

// Simplified Rabbit Animation (CSS only)
function JumpingRabbit() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none animate-bounce">
      <div className="text-8xl filter drop-shadow-2xl">🐰</div>
    </div>
  )
}

const MagicShow = () => {
  const faqData = [
    {
      question: "Magic show gösterisi ne kadar sürer?",
      answer: "Standart magic show gösterilerimiz 30-45 dakika arası sürmektedir. Talebe göre 60 dakikaya kadar uzatılabilir. Küçük çocuklar için 20-30 dakikalık kısa versiyonlar da mevcuttur."
    },
    {
      question: "Hangi yaş grubu için uygundur?",
      answer: "Magic show gösterilerimiz 3-12 yaş arası çocuklar için idealdir. Farklı yaş grupları için içerik özelleştirmesi yapıyoruz. Daha küçük çocuklar için basit ve renkli numaralar, büyük çocuklar için daha karmaşık illüzyonlar sunuyoruz."
    },
    {
      question: "Çocuklar gösteriye katılabilir mi?",
      answer: "Evet! Gösterilerimiz interaktiftir. Çocuklar sahneye davet edilir, sihir numaralarına yardımcı olurlar. Bu, gösteriyi daha eğlenceli ve unutulmaz kılar."
    },
    {
      question: "Hangi bölgelere hizmet veriyorsunuz?",
      answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz."
    },
    {
      question: "Malzeme ve ekipmanları siz mi getiriyorsunuz?",
      answer: "Evet, tüm sihir malzemeleri, ses sistemi, ışık ekipmanları ve sahne aksesuarlarını biz sağlıyoruz. Sizin herhangi bir şey temin etmenize gerek yoktur."
    },
    {
      question: "Fiyatlar nedir?",
      answer: "Fiyatlarımız gösteri süresine, katılımcı sayısına ve lokasyona göre değişiklik gösterir. Detaylı fiyat bilgisi için bizi arayın: 0534 930 67 99"
    }
  ]

  const heroSlides = [
    {
      src: '/content/images/sihirbaz/sihirbazhero.jpeg',
      alt: 'İstanbul sihirbazlık gösterisi sahne',
    },
    {
      src: '/content/images/sihirbaz/IMG_3293.jpeg',
      alt: 'Çocuklar için magic show',
    },
    {
      src: '/content/images/sihirbaz/IMG_4864.jpeg',
      alt: 'Güvercinli sihirbaz gösterisi',
    },
  ]

  return (
    <>
      <Seo
        title="İstanbul Magic Show Organizasyonu | Sihirbaz Kiralama | Best Event"
        description="İstanbul'un en iyi magic show organizasyonu. Tüm İstanbul'da profesyonel sihirbaz kiralama. Kadıköy, Maltepe, Üsküdar. ☎ 0534 930 67 99"
        keywords={[
          'magic show istanbul',
          'sihirbaz kiralama',
          'magic show organizasyonu',
          'çocuk magic show',
          'sihir gösterisi',
          'istanbul sihirbaz',
          'profesyonel sihirbaz kiralama'
        ]}
        canonicalPath="/organizasyonlar/magic-show"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Magic Show İstanbul",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BestEvent",
              "areaServed": [
                "Kadıköy", "Üsküdar", "Maltepe", "Kartal", "Ataşehir", "Pendik", "Erenköy",
                "Beylikdüzü", "Sarıyer", "Beşiktaş", "Şişli", "Bakırköy", "İstanbul"
              ]
            },
            "serviceType": "Magic Show Organizasyonu",
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

      {/* Jumping Rabbit Animation */}
      <JumpingRabbit />

      <main className="overflow-x-hidden scroll-smooth">
        {/* Hero Slider */}
        <section className="relative overflow-hidden bg-black min-h-[65vh] md:min-h-[72vh] max-h-[820px] flex items-center">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            loop
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            speed={1200}
            className="absolute inset-0 h-full w-full"
          >
            {heroSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16 sm:py-20 md:py-24">
            <h1
              className="font-bold text-white animate-fade-in"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.025em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Sihirbazlık Gösterisi
            </h1>
          </div>
        </section>

        {/* Brand Impact Section - Magic Show (Blue Theme) */}
        <section className="py-20 sm:py-28 px-6 bg-gradient-to-br from-blue-950/40 via-black to-cyan-950/40 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
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
                  Profesyonel{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                    sihirbazlar
                  </span>
                </span>
                , büyüleyici illüzyonlar ile
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
                10+ Yıldır Sihirli Anlar Yaratıyoruz
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>+5000</span>
                    {' '}Gösteri
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
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                    >
                      Büyülenmiş Çocuk
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Tüm İstanbul Magic Show */}
        <NarrativeSection
          eyebrow="10+ YIL DENEYİM"
          title="Tüm İstanbul Magic Show Organizasyonu"
          body="Best Event olarak İstanbul'un her bölgesinde profesyonel magic show gösterileri sunuyoruz. Deneyimli sihirbazlarımız, interaktif gösteriler ve çocukları büyüleyen sihir numaraları ile unutulmaz anlar yaratıyoruz. Kadıköy'den Beylikdüzü'ne, Üsküdar'dan Sarıyer'e kadar tüm İstanbul'da hizmetinizdeyiz."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <OptimizedImage
            src="/content/images/sihirbaz/IMG_3293.jpeg"
            alt="İstanbul magic show organizasyonu"
            className="object-contain max-h-[80vh] w-auto"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 80vh"
          />
        </div>

        {/* Section 2: İstanbul'un En İyi Sihirbazı */}
        <NarrativeSection
          eyebrow="PROFESYONEL SİHİRBAZ"
          title="İstanbul'un En İyi Sihirbazlık Gösterileri"
          body="10+ yıllık deneyimimiz ve 5000+ başarılı etkinliğimiz ile İstanbul'un en güvenilir magic show organizasyon firmasıyız. Profesyonel sihirbazlarımız klasik sihir numaraları, büyük illüzyonlar, hayvan sihirleri ve interaktif performanslarla çocukları büyülüyor. Her gösteri 30-60 dakika sürer ve yaş grubuna göre özelleştirilir."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <OptimizedImage
            src="/content/images/sihirbaz/sihirbazhero.jpeg"
            alt="İstanbul'un en iyi sihirbazlık gösterileri"
            className="object-contain max-h-[80vh] w-auto"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 80vh"
          />
        </div>

        {/* Section 3: Profesyonel Sihirbaz Kiralama */}
        <NarrativeSection
          eyebrow="PROFESYONEL EKİP"
          title="Profesyonel Sihirbaz Kiralama"
          body="Deneyimli ve sertifikalı sihirbazlarımız çocuklarla iletişimde uzman profesyonellerdir. Her yaş grubuna özel içerik hazırlıyoruz: 3-12 yaş arası çocuklar için eğlenceli ve anlaşılır numaralar, yetişkinler için daha karmaşık illüzyonlar. Tüm malzemelerimiz, ses sistemi, ışık ekipmanları ve sahne aksesuarlarını biz sağlıyoruz."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <OptimizedImage
            src="/content/images/sihirbaz/IMG_4800.jpeg"
            alt="Profesyonel sihirbaz kiralama"
            className="object-contain max-h-[80vh] w-auto"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 80vh"
          />
        </div>

        {/* Section 4: Tavşan ve Güvercin Sihirleri */}
        <NarrativeSection
          eyebrow="HAYVAN SİHİRLERİ"
          title="Tavşan ve Güvercin ile Klasik Sihir Gösterileri"
          body="Profesyonel sihirbazlarımız klasik tavşan ve güvercin sihirleriyle çocukları büyülüyor. Şapkadan tavşan çıkarma, güvercin dönüşümleri ve hayvan illüzyonları ile gösterilerimiz daha renkli ve eğlenceli hale geliyor. Tüm hayvanlarımız eğitimli, sevimli ve çocuklarla iletişime açıktır. Bu klasik sihir numaraları, çocukların en çok sevdiği ve hatırladığı anlar arasındadır."
          />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <OptimizedImage
            src="/content/images/sihirbaz/IMG_4864.jpeg"
            alt="Tavşan ve güvercin ile klasik sihir gösterileri"
            className="object-contain max-h-[80vh] w-auto"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 80vh"
          />
        </div>

        {/* Section 5: İnteraktif Magic Show */}
        <NarrativeSection
          eyebrow="İNTERAKTİF DENEYİM"
          title="İnteraktif Magic Show Deneyimi"
          body="Çocukların aktif katılımıyla interaktif magic show deneyimi sunuyoruz. Çocuklar sahneye davet edilir, sihir numaralarına yardımcı olurlar ve kendileri de küçük sihirler yapmayı öğrenirler. Komedi ve eğlence odaklı sunum ile hem çocuklar hem yetişkinler eğlenir. Bu interaktif yaklaşım gösteriyi daha unutulmaz kılar."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <OptimizedImage
            src="/content/images/sihirbaz/IMG_8855.PNG"
            alt="İnteraktif magic show deneyimi"
            className="object-contain max-h-[80vh] w-auto"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 80vh"
          />
        </div>

        {/* Section 6: Kadıköy Sihirbaz */}
        <NarrativeSection
          eyebrow="KADIKÖY BÖLGESİ"
          title="Kadıköy Sihirbaz Organizasyonu"
          body="Kadıköy, Erenköy, Fenerbahçe, Göztepe ve Moda'da profesyonel magic show hizmeti sunuyoruz. Doğum günü partileri, okul etkinlikleri, açılış organizasyonları için ideal. Minimum 3x4 metre alan yeterlidir, açık hava veya kapalı mekanda gösteri yapılabilir. Profesyonel ses sistemi ve sahne ekipmanlarını biz getiriyoruz."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/sihirbaz/IMG_4864.jpeg"
            alt="Kadıköy sihirbaz organizasyonu"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Sıkça Sorulan Sorular
            </h2>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm animate-fade-in"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Hemen Rezervasyon Yapın!</h2>
            <p className="text-2xl mb-10 text-white/90">
              Çocuklarınız için unutulmaz magic show deneyimi yaratın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+905349306799"
                className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
              >
                📞 0534 930 67 99
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default MagicShow
