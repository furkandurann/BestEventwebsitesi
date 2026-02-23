import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import Seo from '../../components/Seo'
import FAQSection from '../../components/FAQSection'
import '../../styles/christmas-theme.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const SantaClausRental = () => {
  const [selectedTab, setSelectedTab] = useState('standard')
  
  // WhatsApp Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    notes: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendWhatsAppMessage = () => {
    const message = `🎅 *Noel Baba Kiralama Talebi*

📝 *Ad Soyad:* ${formData.name || 'Belirtilmedi'}
📞 *Telefon:* ${formData.phone || 'Belirtilmedi'}
📍 *Adres:* ${formData.address || 'Belirtilmedi'}
📅 *Tarih:* ${formData.date || 'Belirtilmedi'}
🕐 *Saat:* ${formData.time || 'Belirtilmedi'}
📋 *Notlar:* ${formData.notes || 'Belirtilmedi'}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/905307309009?text=${encodedMessage}`, '_blank')
  }

  // FAQ Verileri
  const faqs = [
    {
      question: 'Noel Baba kiralama hizmeti nasıl çalışır?',
      answer: 'İletişim numaramızdan rezervasyon yaparak etkinlik tarihinizi, saatinizi ve paket tercihinizi belirtebilirsiniz. Ekibimiz size özel bir organizasyon planı hazırlar.'
    },
    {
      question: 'Private ve Standart paket arasındaki fark nedir?',
      answer: 'Private pakette İstanbul\'un tek özel kostümlü Noel Baba\'sı, profesyonel sahne sanatçısı, Kar Kızı ve yeni yıl oyunları bulunur. Standart pakette ise animatör eşliğinde Noel Baba karakteri, hediye dağıtımı ve kar yağdırma hizmeti verilir.'
    },
    {
      question: 'Hediyeleri kim hazırlıyor?',
      answer: 'Hediyeler ebeveynler tarafından hazırlanır. Noel Baba\'mız bu hediyeleri büyük bir coşku ve tören eşliğinde çocuklarınıza dağıtır.'
    },
    {
      question: 'Hangi bölgelere hizmet veriyorsunuz?',
      answer: 'İstanbul\'un tüm ilçelerine hizmet vermekteyiz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
    },
    {
      question: 'Kaç kişilik etkinliklere hizmet veriyorsunuz?',
      answer: 'Küçük aile kutlamalarından büyük kurumsal etkinliklere kadar her ölçekte hizmet vermekteyiz.'
    },
    {
      question: 'Rezervasyon için ne kadar önceden başvurmalıyım?',
      answer: 'Yılbaşı dönemi çok yoğun geçtiği için en az 1-2 hafta önceden rezervasyon yapmanızı öneriyoruz. Kontenjan dolmadan yerini ayırtmak için hemen iletişime geçin!'
    },
    {
      question: 'Süsleme hizmeti de veriyor musunuz?',
      answer: 'Evet! Noel Baba kiralama hizmetimize ek olarak Noel temalı süsleme hizmeti de sunuyoruz. Çam ağacı, ışıklandırma ve dekorasyon malzemeleriyle mekanınızı büyülü bir atmosfere dönüştürüyoruz.'
    },
    {
      question: 'Etkinlik ne kadar sürer?',
      answer: 'Standart etkinlikler genellikle 1-2 saat arası sürer. Private paket için süre ihtiyaca göre özelleştirilebilir.'
    }
  ]

  // Fotoğraf Galerisi
  const privatePhotos = [
    '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.44.jpeg',
    '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45.jpeg',
    '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45 (1).jpeg'
  ]

  const standardPhotos = [
    '/content/images/noelbaba/noelbabastandart/noelannestandart.webp',
    '/content/images/noelbaba/noelbabastandart/7BDA73F5-5BE9-419C-AD20-98CB8A679C51.webp',
    '/content/images/noelbaba/noelbabastandart/8B071122-174A-4DFE-AFBB-E1A5108E1009 2.jpg',
    '/content/images/noelbaba/noelbabastandart/8211BF23-166D-4080-B7CD-AA8C757CDB59 2.jpg'
  ]

  const decorationPhotos = [
    '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.44.jpeg',
    '/content/images/noelbaba/noelbabastandart/7BDA73F5-5BE9-419C-AD20-98CB8A679C51.webp'
  ]

  return (
    <>
      <Seo 
        title="Istanbul Noel Baba Gösterisi | Noel Baba Organizasyonu Kiralama ve Etkinliği"
        description="Istanbul'da noel baba gösterisi, organizasyonu ve kiralama. Noel baba etkinliği için profesyonel hizmet. ☎ 0530 730 90 09"
        keywords={[
          'istanbul noel baba gösterisi',
          'noel baba organizasyonu',
          'noel baba kiralama',
          'noel baba etkinliği',
          'istanbul noel baba'
        ]}
        ogImage="/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45.jpeg"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Noel Baba Kiralama İstanbul",
            "description": "İstanbul'un en özel Noel Baba kiralama ve yılbaşı organizasyonu hizmeti",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Best Event",
              "telephone": "+905307309009",
              "areaServed": {
                "@type": "City",
                "name": "İstanbul"
              }
            },
            "serviceType": "Noel Baba Kiralama ve Yılbaşı Organizasyonu",
            "offers": [
              {
                "@type": "Offer",
                "name": "Private Noel Baba Paketi",
                "description": "İstanbul'un tek özel kaftanlı Noel Baba, profesyonel sahne sanatçısı, Kar Kızı, yeni yıl oyunları",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Standart Noel Baba Paketi",
                "description": "Noel Baba karakteri, hediye dağıtımı, balon hediye, kar yağdırma efekti",
                "availability": "https://schema.org/InStock"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          },
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Yılbaşı Noel Baba Organizasyonu",
            "description": "Profesyonel Noel Baba kiralama ve yılbaşı organizasyonu hizmeti",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "İstanbul",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İstanbul",
                "addressCountry": "TR"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Best Event",
              "url": "https://bestevent.com.tr"
            }
          }
        ]}
      />

      {/* Cinematic Hero Slider - Noel Baba */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-black">
        {/* Kar Animasyonu */}
        <div className="snow-container absolute inset-0 z-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="snowflake">❄</div>
          ))}
        </div>

        {/* Preload first image */}
        <link rel="preload" as="image" href="/content/images/noelbaba/noelbabastandart/7BDA73F5-5BE9-419C-AD20-98CB8A679C51.webp" fetchpriority="high" />
        
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: false,
          }}
          fadeEffect={{
            crossFade: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          loop={true}
          preloadImages={false}
          lazy={{
            loadPrevNext: true,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: true,
          }}
          className="h-full w-full"
        >
          {[
            { src: '/content/images/noelbaba/noelbabastandart/7BDA73F5-5BE9-419C-AD20-98CB8A679C51.webp', alt: 'Noel Baba kiralama İstanbul - Best Event' },
            { src: '/content/images/noelbaba/noelbabastandart/8B071122-174A-4DFE-AFBB-E1A5108E1009 2.webp', alt: 'Noel Baba organizasyonu İstanbul - Best Event' },
            { src: '/content/images/noelbaba/noelbabastandart/noelannestandart.webp', alt: 'Noel Baba ve Kar Kızı - Best Event' },
          ].map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="absolute inset-0 h-full w-full cinematic-slide">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover cinematic-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchpriority={index === 0 ? 'high' : 'low'}
                  width="1920"
                  height="1080"
                  decoding={index === 0 ? 'sync' : 'async'}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center px-6 max-w-5xl">
            <h1 
              className="font-bold text-white mb-6 drop-shadow-2xl"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                fontWeight: '700',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)'
              }}
            >
              <span className="bg-gradient-to-r from-red-300 via-white to-green-300 bg-clip-text text-transparent">
                İstanbul'un En Büyülü
              </span>
              <br />
              Noel Baba Organizasyonu
            </h1>
            <p 
              className="text-white/90 mb-8 drop-shadow-lg"
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                lineHeight: '1.6',
                letterSpacing: '-0.01em',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                textShadow: '0 2px 10px rgba(0,0,0,0.7)'
              }}
            >
              12 Yıldır Yılbaşı Büyüsünü Yaşatıyoruz
            </p>
          </div>
        </div>

        {/* Kar Animasyonu ve Swiper Styling */}
        <style>{`
          /* Kar animasyonu - Daha yoğun */
          .snow-container {
            overflow: hidden;
          }

          .snowflake {
            position: absolute;
            top: -10px;
            color: white;
            font-size: clamp(12px, 2.5vw, 24px);
            animation: fall linear infinite;
            opacity: 0.9;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.9);
          }

          @keyframes fall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.9;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0.3;
            }
          }

          .snowflake:nth-child(1) { left: 2%; animation-duration: 11s; animation-delay: 0s; }
          .snowflake:nth-child(2) { left: 8%; animation-duration: 13s; animation-delay: 0.5s; }
          .snowflake:nth-child(3) { left: 15%; animation-duration: 9s; animation-delay: 1s; }
          .snowflake:nth-child(4) { left: 22%; animation-duration: 15s; animation-delay: 0.3s; }
          .snowflake:nth-child(5) { left: 28%; animation-duration: 10s; animation-delay: 1.5s; }
          .snowflake:nth-child(6) { left: 35%; animation-duration: 14s; animation-delay: 0.8s; }
          .snowflake:nth-child(7) { left: 42%; animation-duration: 12s; animation-delay: 1.2s; }
          .snowflake:nth-child(8) { left: 48%; animation-duration: 16s; animation-delay: 0.2s; }
          .snowflake:nth-child(9) { left: 55%; animation-duration: 11s; animation-delay: 1.8s; }
          .snowflake:nth-child(10) { left: 62%; animation-duration: 13s; animation-delay: 0.6s; }
          .snowflake:nth-child(11) { left: 68%; animation-duration: 9s; animation-delay: 1.4s; }
          .snowflake:nth-child(12) { left: 75%; animation-duration: 15s; animation-delay: 0.4s; }
          .snowflake:nth-child(13) { left: 82%; animation-duration: 10s; animation-delay: 1.6s; }
          .snowflake:nth-child(14) { left: 88%; animation-duration: 14s; animation-delay: 0.9s; }
          .snowflake:nth-child(15) { left: 95%; animation-duration: 12s; animation-delay: 1.1s; }
          .snowflake:nth-child(16) { left: 5%; animation-duration: 13s; animation-delay: 0.7s; }
          .snowflake:nth-child(17) { left: 18%; animation-duration: 11s; animation-delay: 1.3s; }
          .snowflake:nth-child(18) { left: 45%; animation-duration: 16s; animation-delay: 0.5s; }
          .snowflake:nth-child(19) { left: 72%; animation-duration: 10s; animation-delay: 1.7s; }
          .snowflake:nth-child(20) { left: 92%; animation-duration: 14s; animation-delay: 0.1s; }

          /* Swiper pagination */
          .swiper-pagination {
            bottom: 2.5rem !important;
            z-index: 30 !important;
          }
          .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            background: rgba(255, 255, 255, 0.6) !important;
            opacity: 1 !important;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          .swiper-pagination-bullet-active {
            width: 32px !important;
            border-radius: 5px !important;
            background: rgba(255, 255, 255, 1) !important;
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.4) !important;
          }

          /* Dramatic Ken Burns effect - GPU optimized */
          .cinematic-slide {
            opacity: 1;
            will-change: transform;
          }
          
          .swiper-slide-active .cinematic-image {
            animation: dramaticZoom 25s ease-out forwards;
            transform-origin: center center;
          }
          
          @keyframes dramaticZoom {
            0% {
              transform: scale(1) translateZ(0);
            }
            100% {
              transform: scale(1.08) translateZ(0);
            }
          }
          
          /* Hardware acceleration */
          .cinematic-image {
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            -webkit-transform: translateZ(0);
          }
          
          /* Smooth transitions */
          .swiper-slide {
            transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
        `}</style>
      </div>

      {/* Brand Impact Section - H1 */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-br from-red-950/40 via-black to-green-950/40 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ana Başlık - H1 */}
          <h1
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
              İstanbul{' '}
              <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent font-bold">
                Noel Baba Kiralama
              </span>
            </span>
            {' '}ve Noel Baba Organizasyonu
          </h1>

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
            12 Yıldır Yılbaşı Büyüsünü Yaşatıyoruz
          </p>

          {/* İstatistikler */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-400 font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>+1000</span>
                {' '}Noel Baba Etkinliği
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
                  className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent font-bold"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                >
                  Mutlu Çocuk
                </span>
              </p>
            </div>
          </div>

          {/* Ek Hizmetler - Konfeti & Volkan Partisi */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-2xl mr-2">🎊</span>
              <span className="text-white font-semibold" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>
                Konfeti Partisi
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-2xl mr-2">🌋</span>
              <span className="text-white font-semibold" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>
                Volkan Partisi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Section - Kırmızı Arka Plan + Beyaz Çerçeve */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Beyaz Çerçeve */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2
              className="font-extrabold text-center mb-8"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                lineHeight: '1.3',
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                color: '#1a1a1a'
              }}
            >
              Neden İstanbul'da En Çok Tercih Edilen{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Noel Baba Kiralama
              </span>{' '}
              Hizmetiyiz?
            </h2>
            <p
              className="text-gray-800 text-center leading-relaxed"
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
                lineHeight: '1.9',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              <strong className="text-red-700 font-bold">Best Event</strong>, İstanbul'da yıllardır yüzlerce başarılı yılbaşı organizasyonuna imza atmış profesyonel bir etkinlik firmasıdır. Noel Baba kiralama hizmetimiz, bugüne kadar <strong className="text-gray-900">tek bir memnuniyetsizlik yaşamadan</strong> sunulmuş; çocuklardan yetişkinlere kadar herkesin yılbaşı ruhunu hissettiği <strong className="text-gray-900">özel bir etkinlik deneyimi</strong> sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Apple-style Slider - Noel Baba Fotoğrafları */}
      <section className="relative w-full bg-black overflow-hidden pt-4 md:pt-8 pb-8 md:pb-12">
        <div className="w-full mx-auto px-0">
          <div 
            className="relative overflow-x-auto overflow-y-hidden mx-auto"
            style={{
              width: '100vw',
              height: 'clamp(520px, 78vh, 680px)',
              marginTop: 'clamp(8px, 1vw, 12px)',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div 
              className="flex h-full gap-10 md:gap-16 user-select-none"
              style={{ 
                paddingLeft: 'clamp(2%, 3%, 4%)',
                paddingRight: 'clamp(10%, 12%, 15%)'
              }}
            >
              {[
                { src: '/content/images/noelbaba/noelbabastandart/8211BF23-166D-4080-B7CD-AA8C757CDB59 2.webp', alt: 'Noel baba gösterisi organizasyonu' },
                { src: '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45.jpeg', alt: 'Noel baba gösterisi istanbul' },
                { src: '/content/images/noelbaba/noelbabastandart/noelannestandart.webp', alt: 'Istanbul noel baba kiralama' }
              ].map((image, index) => (
                <div 
                  key={index} 
                  className="flex-none flex items-center justify-center"
                  style={{ 
                    width: 'clamp(94%, 96%, 98%)', 
                    height: '100%',
                    scrollSnapAlign: 'center'
                  }}
                >
                  <div 
                    className="relative w-full h-full overflow-hidden"
                    style={{
                      borderRadius: 'clamp(40px, 4.5vw, 48px)',
                      backgroundColor: '#000',
                      aspectRatio: '4/5'
                    }}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover select-none"
                      style={{
                        objectPosition: '50% 20%'
                      }}
                      draggable="false"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profesyonel Noel Baba Section - Noel Temalı */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-red-900 via-red-800 to-green-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">🌟</span>
            <h2
              className="font-bold text-white mb-4"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                lineHeight: '1.3',
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Profesyonel Noel Baba ile Gerçek Bir Yılbaşı Deneyimi
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              Noel Baba karakterlerimiz ile fark yaratan özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎭', text: 'Gerçekçi ve yüksek kaliteli Noel Baba kostümü kullanır' },
              { icon: '💬', text: 'Çocuklarla birebir iletişim kurar, sohbet eder' },
              { icon: '🎁', text: 'Hediye dağıtımı ve fotoğraf çekimlerine eşlik eder' },
              { icon: '🎪', text: 'Etkinliğin konseptine uygun interaktif bir performans sunar' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <p
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1.0625rem)',
                      lineHeight: '1.6',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p
              className="text-white/90 italic"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.7',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Bu yaklaşım sayesinde Noel Baba gösterilerimiz, İstanbul genelinde{' '}
              <strong className="text-white not-italic">en çok tavsiye edilen yılbaşı etkinliklerinden</strong>{' '}
              biri olmuştur.
            </p>
          </div>
        </div>
      </section>

      {/* Kampanya Banner - %25 İndirim */}
      <section className="py-6 bg-gradient-to-r from-red-600 via-green-700 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg md:text-xl animate-pulse">
            %25 indirim son 4 gün
          </p>
        </div>
      </section>

      {/* Paket Seçimi - Başlık Kaldırıldı */}
      <section className="py-16 bg-gradient-to-b from-red-900 via-green-900 to-red-800">
        <div className="container mx-auto px-4">
          {/* Tab Seçimi - Daha Net Tıklanabilir */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full shadow-2xl p-2 border-2 border-white/30">
              <button
                onClick={() => setSelectedTab('standard')}
                className={`px-8 py-4 rounded-full font-bold text-base transition-all duration-300 relative ${
                  selectedTab === 'standard'
                    ? 'bg-white text-red-700 shadow-2xl scale-110'
                    : 'text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                <span className="relative z-10">🎄 Standart Noel Baba</span>
                {selectedTab === 'standard' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-700/20 rounded-full blur-xl"></div>
                )}
              </button>
              <button
                onClick={() => setSelectedTab('private')}
                className={`px-8 py-4 rounded-full font-bold text-base transition-all duration-300 relative $

{
                  selectedTab === 'private'
                    ? 'bg-white text-red-700 shadow-2xl scale-110'
                    : 'text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                <span className="relative z-10">⭐ Private Noel Baba</span>
                {selectedTab === 'private' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full blur-xl"></div>
                )}
              </button>
            </div>
          </div>

          {/* Paket İçeriği - Apple Standartları */}
          <div className="max-w-6xl mx-auto">
            {selectedTab === 'standard' && (
              <div className="space-y-12">
                {/* Standart Kart */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Görsel */}
                    <div>
                      <img 
                        src="/content/images/noelbaba/noelbabastandart/noelannestandart.webp"
                        alt="Standart Noel Baba"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                      />
                    </div>

                    {/* İçerik */}
                    <div className="flex flex-col justify-center">
                      <div className="inline-block self-start bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-lg">
                        🎄 STANDART
                      </div>
                      
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Standart Noel Baba
                      </h3>
                      
                      <h4 className="text-lg font-medium text-green-600 mb-6">
                        Neşeli Kutlama
                      </h4>
                      
                      <p className="text-sm text-gray-700 leading-relaxed mb-8">
                        Çocuklarınızın yüzündeki gülücükleri görmek için ideal paket. 
                        Profesyonel animatörümüz Noel Baba kostümüyle çocuklarınıza hediyelerini dağıtacak, 
                        balonlar verecek ve büyülü kar yağdıracak.
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">🎅</span>
                          <span className="text-gray-700 text-sm">Noel Baba karakteri</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">🎁</span>
                          <span className="text-gray-700 text-sm">Hediye dağıtımı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">🎈</span>
                          <span className="text-gray-700 text-sm">Balon hediye</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">❄️</span>
                          <span className="text-gray-700 text-sm">Kar yağdırma efekti</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">📸</span>
                          <span className="text-gray-700 text-sm">Fotoğraf çektirme</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery - Sadece Standart Fotoğraflar */}
                <div>
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    📸 Standart Galeri
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {standardPhotos.map((photo, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square bg-white/10 backdrop-blur-sm">
                        <img 
                          src={photo}
                          alt={`Standart Noel Baba ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'private' && (
              <div className="space-y-12">
                {/* Ana Kart */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Görsel */}
                    <div>
                      <img 
                        src="/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45.jpeg"
                        alt="Private Noel Baba"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        style={{ objectPosition: '40% center' }}
                      />
                    </div>

                    {/* İçerik - Apple Tipografi */}
                    <div className="flex flex-col justify-center">
                      <div className="inline-block self-start bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-lg">
                        ⭐ PREMIUM
                      </div>
                      
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Private Noel Baba
                      </h3>
                      
                      <h4 className="text-lg font-medium text-red-600 mb-6">
                        Kostüm değil Kaftan!
                      </h4>
                      
                      <p className="text-sm text-gray-700 leading-relaxed mb-8">
                        Yeni yıl tatillerinde Noel Baba ve Kar Kızı'nın size misafir olmasını istiyorsanız — hemen arayın!
                      </p>

                      <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-6 mb-6">
                        <h5 className="font-bold text-base text-gray-900 mb-4">
                          🎄 Programda sizi neler bekliyor?
                        </h5>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Yeni yıl karakterleriyle çocuklarınız gerçek bir kış masalına adım atacak. 
                          Noel Baba, Kar Kızı ve yılbaşı kahramanımız; sevilen yeni yıl oyunlarını ve 
                          danslarını birlikte oynatacak, kendi masalsı sırlarını paylaşacak, çocukların 
                          şiirlerini ve şarkılarını dinleyecek ve ebeveynlerin hazırladığı hediyeleri dağıtacak.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">✨</span>
                          <span className="text-gray-700 text-sm">İstanbul'un tek özel kaftanı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">🎭</span>
                          <span className="text-gray-700 text-sm">Profesyonel sahne sanatçısı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">🎅</span>
                          <span className="text-gray-700 text-sm">Noel Baba + Kar Kızı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">🎪</span>
                          <span className="text-gray-700 text-sm">Yeni yıl oyunları ve dansları</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">🎁</span>
                          <span className="text-gray-700 text-sm">Hediye dağıtımı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">❄️</span>
                          <span className="text-gray-700 text-sm">Kar yağdırma efekti</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Private Fotoğraf Kartları - Farklı Açıklamalar */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Fotoğraf 1 */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src={privatePhotos[0]}
                      alt="Özel Kaftan Detayı"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-base text-gray-900 mb-2">
                        Özel Kaftan Detayı
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        İstanbul'da sadece bizde olan özel dikim kaftan. Premium kumaş 
                        ve el işçiliği ile hazırlanmış, çocukların gözlerini kamaştıracak 
                        muhteşem detaylar.
                      </p>
                    </div>
                  </div>

                  {/* Fotoğraf 2 */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src={privatePhotos[1]}
                      alt="Sahne Sanatçısı Performansı"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-base text-gray-900 mb-2">
                        Sahne Sanatçısı Performansı
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Animatör değil, profesyonel sahne sanatçısı. Yılların deneyimi 
                        ve tiyatro eğitimi ile çocuklarınıza unutulmaz bir performans sunuyor.
                      </p>
                    </div>
                  </div>

                  {/* Fotoğraf 3 */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src={privatePhotos[2]}
                      alt="Kar Kızı ile Büyülü Anlar"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-base text-gray-900 mb-2">
                        Kar Kızı ile Büyülü Anlar
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Noel Baba'nın yanında Kar Kızı da etkinliğinizde. İkili performans 
                        ile çocukların hayal dünyası gerçeğe dönüşüyor, masalsı anlar yaşanıyor.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gallery - Sadece Private Fotoğraflar */}
                <div>
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    📸 Private Galeri
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {privatePhotos.map((photo, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square bg-white/10 backdrop-blur-sm">
                        <img 
                          src={photo}
                          alt={`Private Noel Baba ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Beyaz Arka Plan */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 
            className="font-semibold leading-tight mb-8 bg-gradient-to-r from-gray-800 via-red-700 to-green-700 bg-clip-text text-transparent"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              lineHeight: '1.3',
              letterSpacing: '-0.015em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Sizde unutulmaz bir Noel Baba etkinliği yaşamak istiyorsanız hemen iletişime geçin
          </h2>

          <a 
            href="#rezervasyon"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600/10 backdrop-blur-sm border border-red-600/20 hover:bg-red-600/20 hover:border-red-600/30 transition-all duration-300 group"
            aria-label="Rezervasyon formuna git"
          >
            <svg 
              className="w-6 h-6 text-red-600 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* WhatsApp Form Section */}
      <section id="rezervasyon" className="bg-gradient-to-br from-red-950 via-black to-green-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#128C7E] to-[#075E54] border-2 border-[#25D366]/30 px-6 py-6 md:px-7 md:py-7 shadow-[0_20px_60px_rgba(37,211,102,0.25)] relative">
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <div className="relative">
                <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-[#25D366] rounded-full animate-ping"></div>
              </div>
              <span className="text-[10px] text-[#DCF8C6] font-medium">Çevrimiçi</span>
            </div>

            <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/20">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">WhatsApp Rezervasyon</p>
              </div>
            </div>

            <p className="text-[#DCF8C6] text-xs mb-6 leading-relaxed">
              WhatsApp Rezervasyon formunu gönderdiğinizde çevrimiçi rezervasyon sorumlumuza mesaj gelir ve size anında geri dönüş yapılır
            </p>

            <div className="grid gap-4">
              <div>
                <label className="block text-xs text-white/90 font-medium mb-1.5">Ad Soyad</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors"
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              
              <div>
                <label className="block text-xs text-white/90 font-medium mb-1.5">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>
              
              <div>
                <label className="block text-xs text-white/90 font-medium mb-1.5">Etkinlik Adresi</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors"
                  placeholder="İlçe, mahalle"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-white/90 font-medium mb-1.5">Tarih</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/90 font-medium mb-1.5">Saat</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-white/90 font-medium mb-1.5">Notlar</label>
                <textarea
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors resize-none"
                  placeholder="Örn: Kaç kişilik etkinlik, paket tercihi"
                />
              </div>
            </div>
            
            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-white text-[#128C7E] font-bold text-sm md:text-base py-3.5 shadow-lg hover:shadow-xl hover:bg-[#DCF8C6] transition-all duration-300 flex items-center justify-center gap-2 group"
              onClick={sendWhatsAppMessage}
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp'a Gönder ve Anında Yanıt Al
            </button>

            <p className="text-xs text-center text-[#DCF8C6] mt-4">
              🔒 Bilgileriniz güvenle saklanır ve sadece rezervasyon için kullanılır
            </p>
          </div>
        </div>
      </section>

      {/* FAQ - Kırmızı Temalı */}
      <section className="py-16 bg-gradient-to-b from-red-700 via-green-800 to-red-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              ❓ Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-base text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-16 bg-gradient-to-b from-red-900 to-green-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              📍 Hizmet Bölgelerimiz
            </h2>
            <p className="text-base text-white/80 max-w-2xl mx-auto">
              İstanbul'un tüm ilçelerinde Noel Baba kiralama hizmeti
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            {/* Avrupa Yakası */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Avrupa Yakası
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Beyoğlu', 'Beşiktaş', 'Şişli', 'Kadıköy', 'Bakırköy', 'Fatih', 'Sarıyer', 'Kağıthane', 'Eyüpsultan', 'Zeytinburnu', 'Bahçelievler', 'Bağcılar', 'Güngören', 'Esenler', 'Bayrampaşa', 'Gaziosmanpaşa', 'Sultangazi', 'Başakşehir', 'Avcılar', 'Küçükçekmece', 'Beylikdüzü', 'Esenyurt', 'Büyükçekmece', 'Arnavutköy'].map((ilce) => (
                  <span key={ilce} className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full">
                    {ilce}
                  </span>
                ))}
              </div>
            </div>

            {/* Anadolu Yakası */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Anadolu Yakası
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Kadıköy', 'Üsküdar', 'Ataşehir', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla', 'Ümraniye', 'Beykoz', 'Çekmeköy', 'Sancaktepe', 'Sultanbeyli', 'Şile', 'Adalar'].map((ilce) => (
                  <span key={ilce} className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full">
                    {ilce}
                  </span>
                ))}
              </div>
            </div>

            {/* Bilgi Notu */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/70 text-sm text-center">
                Tüm ilçelere ücretsiz ulaşım sağlıyoruz. Özel lokasyonlar için bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO İçerik Bölümü */}
      <section className="py-12 bg-gradient-to-b from-green-900 to-red-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              İstanbul'da Profesyonel Noel Baba Kiralama
            </h2>
            <div className="text-white/80 text-sm leading-relaxed space-y-4">
              <p>
                <strong>Best Event</strong> olarak İstanbul genelinde profesyonel Noel Baba kiralama ve yılbaşı organizasyonu hizmeti sunuyoruz.
                Yılbaşı döneminde çocuklarınızın gözlerindeki ışıltıyı görmek istiyorsanız, doğru adrestesiniz.
              </p>
              <p>
                <strong>Private Noel Baba</strong> paketimiz ile İstanbul'un tek özel kaftanlı Noel Baba'sını etkinliğinize davet edebilirsiniz.
                Profesyonel sahne sanatçımız, Kar Kızı eşliğinde çocuklarınıza unutulmaz anlar yaşatacak.
              </p>
              <p>
                Kurumsal yılbaşı partileri, okul etkinlikleri, AVM organizasyonları ve özel ev kutlamaları için
                <strong> Standart</strong> ve <strong>Private</strong> olmak üzere iki farklı paket seçeneğimiz bulunmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Kırmızı Temalı */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-green-700 to-red-800 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🎅 Hemen Rezervasyon Yaptırın!
          </h2>
          <p className="text-base text-white/90 mb-8 max-w-xl mx-auto">
            Sınırlı kontenjan! Çocuklarınızın rüyalarını gerçeğe dönüştürmek için bugün iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905307309009"
              className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              📞 Hemen Ara
            </a>
            <a 
              href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* İlgili Hizmetler - Kırmızı Temalı */}
      <section className="py-12 bg-gradient-to-b from-red-950 to-green-950">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center text-white mb-6">
            Diğer Çocuk Etkinlikleri
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/organizasyonlar/cocuk-etkinlikleri" className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full shadow hover:bg-white/20 transition-all text-sm">
              🎪 Çocuk Etkinlikleri
            </Link>
            <Link to="/organizasyonlar/palyaco-kiralama" className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full shadow hover:bg-white/20 transition-all text-sm">
              🤡 Palyaço Kiralama
            </Link>
            <Link to="/organizasyonlar/maskot-kiralama" className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full shadow hover:bg-white/20 transition-all text-sm">
              🐻 Maskot Kiralama
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SantaClausRental
