import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema } from '../../utils/schemaHelpers'
import AdHero from '../../components/AdHero'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import QuickQuoteForm from '../../components/QuickQuoteForm'
import ExitIntentPopup from '../../components/ExitIntentPopup'
import RelatedServices from '../../components/RelatedServices'
import GoogleReviews from '../../components/GoogleReviews'
import { getReviewsByTags } from '../../data/googleReviews'
import DistrictLinksGrid from '../../components/DistrictLinksGrid'
import RelatedBlogPosts from '../../components/RelatedBlogPosts'
import 'swiper/css'
import 'swiper/css/effect-fade'

const BubbleShow = () => {
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
    // Google Ads Conversion Tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-162-567-1131/bubble-show-whatsapp',
        'value': 1.0,
        'currency': 'TRY',
        'event_callback': () => {
          console.log('Bubble Show WhatsApp conversion tracked')
        }
      })
    }

    const message = `🫧 *Bubble Show Gösterisi Talebi*

📝 *Ad Soyad:* ${formData.name || 'Belirtilmedi'}

📍 *Adres:* ${formData.address || 'Belirtilmedi'}
📅 *Tarih:* ${formData.date || 'Belirtilmedi'}
🕐 *Saat:* ${formData.time || 'Belirtilmedi'}
📋 *Notlar:* ${formData.notes || 'Belirtilmedi'}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/905307309009?text=${encodedMessage}`, '_blank')
  }

  // Product Showcase Images (Apple-style)
  const showcaseImages = [
    '/content/images/bubbleshow/anabubblee.webp',
    '/content/images/bubbleshow/bubbleshowslider2.webp',
    '/content/images/bubbleshow/bubbleshowslider3.webp',
    '/content/images/bubbleshow/bubbleshowslider5.webp',
    '/content/images/bubbleshow/anabubbleee.webp'
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  // Auto-slide functionality with play/pause
  useEffect(() => {
    if (!isPlaying || isDragging) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [showcaseImages.length, isPlaying, isDragging])

  // Enhanced drag handlers for mouse and touch
  const handleDragStart = (e) => {
    if (e.type.includes('touch')) {
      e.preventDefault()
    }
    setIsDragging(true)
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
    setDragStart(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    if (e.type.includes('touch')) {
      e.preventDefault()
    }
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
    const offset = clientX - dragStart
    setDragOffset(offset)
  }

  const handleDragEnd = (e) => {
    if (!isDragging) return
    if (e.type.includes('touch')) {
      e.preventDefault()
    }
    setIsDragging(false)
    
    // Threshold for slide change (100px)
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1)
      } else if (dragOffset < 0 && currentSlide < showcaseImages.length - 1) {
        setCurrentSlide(prev => prev + 1)
      }
    }
    
    setDragOffset(0)
  }

  const heroSlides = [
    { src: '/content/images/bubbleshow/anabubblee.webp', alt: 'Istanbul bubble show gösterisi organizasyonu' },
    { src: '/content/images/bubbleshow/bubbleshowslider2.webp', alt: 'Bubble show gösterisi istanbul' },
    { src: '/content/images/bubbleshow/bubbleshowslider3.webp', alt: 'Istanbul bubble show kiralama' },
    { src: '/content/images/bubbleshow/bubbleshowslider5.webp', alt: 'Bubble show etkinliği' }
  ]

  const faqData = [
    {
      question: "Bubble show gösterisi ne kadar sürer?",
      answer: "Standart bubble show gösterilerimiz 20-30 dakika arası sürmektedir. Talebe göre 40 dakikaya kadar uzatılabilir. Küçük etkinlikler için 15 dakikalık express versiyonlar da mevcuttur."
    },
    {
      question: "Bubble show için hangi yaş grubu uygundur?",
      answer: "Bubble show gösterileri 2-12 yaş arası çocuklar için idealdir. Küçük bebekler için pasif izleme, büyük çocuklar için interaktif katılım şeklinde özelleştirilir. Yetişkin etkinlikleri için de özel gösteriler yapabiliyoruz."
    },
    {
      question: "İç mekanda bubble show yapılabilir mi?",
      answer: "Evet! Bubble show hem iç hem dış mekanlarda yapılabilir. İç mekan için minimum 4x4 metre alan ve 2.5 metre tavan yüksekliği yeterlidir. Zemin su geçirmez veya silinebilir olmalıdır."
    },
    {
      question: "Sabun köpükleri zararlı mı? Alerjik reaksiyona neden olur mu?",
      answer: "Kullandığımız sabun köpüğü solüsyonları tamamen çocuk dostu, toksik olmayan ve alerjik reaksiyon riski minimum ürünlerdir. Hassas cildi olan çocuklar için önceden bilgi vermenizi öneriyoruz."
    },
    {
      question: "Hangi bölgelere bubble show hizmeti veriyorsunuz?",
      answer: "İstanbul'un tüm ilçelerine bubble show hizmeti veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz."
    },
    {
      question: "Bubble show fiyatları nedir?",
      answer: "Fiyatlarımız gösteri süresine, mekan tipine ve katılımcı sayısına göre değişiklik gösterir. Detaylı fiyat bilgisi için bizi arayın: 0530 730 90 09"
    },
    {
      question: "Bubble show ile birlikte başka hizmetler alabilir miyiz?",
      answer: "Evet! Bubble show ile birlikte palyaço, sihirbaz, yüz boyama, balon şekillendirme ve daha birçok çocuk etkinliği hizmetini paket olarak alabilirsiniz."
    },
    {
      question: "Bubble show için ne kadar önceden rezervasyon yapmam gerekir?",
      answer: "Yoğun dönemlerde (hafta sonları, doğum günü sezonları) en az 2 hafta önceden rezervasyon yapmanızı öneririz. Ancak acil durumlar için de son dakika rezervasyonları değerlendiririz."
    }
  ]

  const serviceSchema = createServiceSchema(
    'Bubble Show Gösterisi | Köpük Şov Organizasyonu Kiralama',
    'Istanbul\'da bubble show gösterisi, organizasyonu ve kiralama. Bubble show etkinliği için profesyonel hizmet.',
    '/organizasyonlar/bubble-show',
    'Bubble Show Gösterileri ve Köpük Şov Organizasyonu'
  )
  const faqSchema = createFAQSchema(faqData)

  return (
    <>
      <Seo
        title="Bubble Show Gösterisi | Köpük Şov Organizasyonu Kiralama"
        description="Istanbul'da bubble show gösterisi, organizasyonu ve kiralama. Bubble show etkinliği için profesyonel hizmet. ☎ 0530 730 90 09"
        keywords={[
          'istanbul bubble show gösterisi',
          'bubble show organizasyonu',
          'bubble show kiralama',
          'bubble show etkinliği',
          'istanbul bubble show',
          'köpük gösterisi',
          'sabun baloncuğu',
          'dev balon',
          'foam party',
          'baloncuk makinesi',
          'ışıklı balon show',
          'neon bubble',
          'interaktif gösteri'
        ]}
        image="/content/images/bubbleshow/anabubblee.webp"
        canonicalPath="/organizasyonlar/bubble-show"
        schema={[
          serviceSchema,
          faqSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Bubble Show", "item": "https://bestevent.com.tr/organizasyonlar/bubble-show" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BestEvent",
            "description": "İstanbul'un profesyonel etkinlik organizasyon firması",
            "url": "https://bestevent.com.tr",
            "logo": "https://bestevent.com.tr/content/images/slider/konfeti.webp",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-530-730-9009",
              "contactType": "Rezervasyon",
              "areaServed": "TR",
              "availableLanguage": ["Turkish", "English"]
            },
            "sameAs": [
              "https://www.instagram.com/bestevent"
            ]
          }
        ]}
      />

      <AdHero
        title="Bubble Show Kiralama İstanbul"
        backgroundImage="/content/images/bubbleshow/anabubblee.webp"
      />

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
                    fetchPriority={idx === 0 ? 'high' : undefined}
                    width={1200}
                    height={800}
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
              Bubble Show Gösterisi
            </h1>
          </div>
        </section>

        {/* Brand Impact Section - H1 + Slogan */}
        <section className="py-20 sm:py-28 px-6 bg-gradient-to-br from-purple-950/40 via-black to-pink-950/40 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              {/* H1 SEO Başlık */}
              <h2 
                className="font-bold mb-8 text-white px-4 text-center"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                İstanbul'da Profesyonel{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                  Bubble Show Gösterisi
                </span>
                {' '}ve Köpük Şov Kiralama
              </h2>

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
                10+ Yıldır Renkli ve Büyülü Anlar Yaratıyoruz
              </p>

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
                      className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                    >
                      Mutlu Çocuk
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apple iPhone "Pixel Perfect" Style - Full Screen Cards */}
        <section className="relative w-full bg-black overflow-hidden pt-4 md:pt-8 pb-8 md:pb-12">
          <div className="w-full mx-auto px-0">
            {/* Slider Container - Full Screen Portrait Cards */}
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
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {/* Slides Track - Right Peek Only */}
              <div 
                className="flex h-full gap-10 md:gap-16 user-select-none"
                style={{ 
                  paddingLeft: 'clamp(2%, 3%, 4%)',
                  paddingRight: 'clamp(10%, 12%, 15%)'
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {showcaseImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-none flex items-center justify-center"
                    style={{ 
                      width: 'clamp(94%, 96%, 98%)', 
                      height: '100%',
                      scrollSnapAlign: 'center'
                    }}
                  >
                    {/* Large Portrait Card - FULL BLEED */}
                    <div 
                      className="relative w-full h-full overflow-hidden"
                      style={{
                        borderRadius: 'clamp(40px, 4.5vw, 48px)',
                        backgroundColor: '#000',
                        aspectRatio: '4/5'
                      }}
                    >
                      <img
                        src={image}
                        alt={`Bubble Show Gösterisi ${index + 1}`}
                        className="w-full h-full object-contain select-none"
                        loading="lazy"
                        width={960}
                        height={1200}
                        draggable="false"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section - Purple Background with White Card */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-950 via-black to-pink-950">
          <div className="max-w-4xl mx-auto px-6">
            {/* White Card/Frame */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 
                className="font-extrabold text-gray-900 mb-8"
                style={{
                  fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                  lineHeight: '1.15',
                  letterSpacing: '-0.025em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                Neden İstanbul'un En Çok Tercih Edilen Bubble Show Gösterisiyiz?
              </h2>
              
              <div className="space-y-6">
                <p 
                  className="text-gray-800 font-medium"
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                    lineHeight: '1.5',
                    letterSpacing: '-0.015em',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                  }}
                >
                  <span className="font-bold text-gray-900">Best Event</span>, İstanbul'da yıllardır yüzlerce başarılı etkinliğe imza atmış profesyonel bir organizasyon firmasıdır. 
                  Çocuk doğum günlerinden kurumsal etkinliklere kadar, her organizasyonda deneyimli ekibiyle güvenle tercih edilir.
                </p>
                
              <p 
                className="text-gray-800 font-medium"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.015em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Bubble Show Organizasyonu ve Kiralama</span> kapsamımız, klasik köpük gösterisi anlayışının ötesine geçerek{' '}
                <span className="font-bold text-gray-900">dev balon ve sabun baloncuğu ile interaktif gösteri</span>{' '}
                sunan özel bir sahne etkinliği sunar. Profesyonel baloncuk makinesi ve foam party ekipmanlarıyla çocukların{' '}
                <span className="font-bold text-gray-900">içine girebildiği dev balonlar</span>{' '}
                ile eğlenceli bir performans sergiler. Işıklı balon show ve neon bubble efektleri, köpük tünelleri ve müzik eşliğinde profesyonel sunumla birleşerek bugüne kadar %100 memnuniyetle sunulmuş, çocuklara unutulmaz anlar yaşatmıştır. İster doğum günü etkinliği, ister kurumsal organizasyon olsun, bubble show kiralama talebinizi profesyonel ekibimizle karşılıyoruz.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-950 via-black to-pink-950">
          <div className="max-w-5xl mx-auto px-6">
            {/* Heading */}
            <h2 
              className="font-extrabold text-white mb-10 text-center"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.025em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Bubble Show Gösterimizin Özellikleri
            </h2>

            {/* Photos Grid - Two Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <img
                src="/content/images/bubbleshow/anabubble.webp"
                alt="Dev sabun köpükleri gösterisi"
                loading="lazy"
                width={600}
                height={400}
                className="w-full rounded-3xl shadow-2xl"
              />
              
              <img
                src="/content/images/bubbleshow/bubbleshowslider3.webp"
                alt="İnteraktif bubble show deneyimi"
                loading="lazy"
                width={600}
                height={400}
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>

            {/* Features List */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-pink-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    3+ metre çapında dev sabun köpükleri
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-pink-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    Çocukların içine girebileceği dev balonlar
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-pink-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    Renkli LED ışık efektleri ve müzik eşliğinde gösteri
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-pink-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    Çocuk dostu, toksik olmayan FDA onaylı köpük solüsyonları
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-pink-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    2-12 yaş her yaş grubu için özel aktiviteler
                  </p>
                </div>
              </div>

              {/* Closing Statement */}
              <p 
                className="text-white/90 text-center mt-10"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.015em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                Bu özellikleri sayesinde gösterimiz, <span className="font-bold text-white">İstanbul genelinde en çok tavsiye edilen bubble show olmuştur.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Experience Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-950 via-black to-pink-950">
          <div className="max-w-5xl mx-auto px-6">
            {/* Heading */}
            <h2 
              className="font-extrabold text-white mb-10 text-center"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.025em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Bu Bir <span className="italic">"İzle-Geç"</span> Gösterisi <span className="text-pink-400">DEĞİLDİR!</span>
            </h2>

            {/* Photos Grid - 3 Interactive Photos */}
            <div className="grid md:grid-cols-3 gap-6 mb-16 items-center" style={{ maxWidth: '1200px', margin: '0 auto 4rem' }}>
              <div className="overflow-hidden rounded-2xl border-2 border-pink-500/30 shadow-lg hover:shadow-pink-500/50 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="/content/images/ahunundogumgunu/bubbleshowgosterisi.webp"
                  alt="Bubble show interaktif deneyim"
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="overflow-hidden rounded-xl border-4 border-pink-400/60 shadow-2xl shadow-pink-400/30 hover:shadow-pink-400/60 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="/content/images/bubbleshow/bubbleshowslider5.webp"
                  alt="Çocuklar bubble show ile eğleniyor"
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border-2 border-pink-500/30 shadow-lg hover:shadow-pink-500/50 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="/content/images/ahunundogumgunu/anaherobubbleshowgosterisi.webp"
                  alt="Dev köpükler ile çocuklar"
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Features List - Gradient Numbered Cards */}
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-4">
                {/* Item 1 */}
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl p-5 hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold text-white text-sm"
                    >
                      1
                    </span>
                    <p 
                      className="text-white font-medium pt-1"
                      style={{
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.5',
                        letterSpacing: '-0.015em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      Çocuklar gösterinin parçası olur
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl p-5 hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold text-white text-sm"
                    >
                      2
                    </span>
                    <p 
                      className="text-white font-medium pt-1"
                      style={{
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.5',
                        letterSpacing: '-0.015em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      Dev balonların içine girerler
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl p-5 hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold text-white text-sm"
                    >
                      3
                    </span>
                    <p 
                      className="text-white font-medium pt-1"
                      style={{
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.5',
                        letterSpacing: '-0.015em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      Köpük tünellerinden geçerler
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl p-5 hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold text-white text-sm"
                    >
                      4
                    </span>
                    <p 
                      className="text-white font-medium pt-1"
                      style={{
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.5',
                        letterSpacing: '-0.015em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      Köpük patlatma oyunları oynarlar
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl p-5 hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold text-white text-sm"
                    >
                      5
                    </span>
                    <p 
                      className="text-white font-medium pt-1"
                      style={{
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.5',
                        letterSpacing: '-0.015em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      Unutulmaz bir gösteri olarak hatırlanır
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing Statement */}
              <p 
                className="text-white/90 text-center mt-10"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.015em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                Bu da gösteriyi <span className="font-bold text-white">sıradan bubble show gösterilerinden ayırır.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Quick Quote Form Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
          <div className="max-w-2xl mx-auto px-6">
            <QuickQuoteForm service="bubble-show" />
          </div>
        </section>

        {/* Final CTA Section - Light White with Subtle Purple */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-purple-50 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.05),transparent_50%)]"></div>
          
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 
              className="font-semibold leading-tight mb-8 bg-gradient-to-r from-gray-800 via-purple-700 to-pink-700 bg-clip-text text-transparent"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                lineHeight: '1.3',
                letterSpacing: '-0.015em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Eğer sen de unutulmaz bir bubble show deneyimi yaşamak istiyorsan hemen iletişime geç
            </h2>

            {/* Animated Chevron Down */}
            <a 
              href="#rezervasyon"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/10 backdrop-blur-sm border border-purple-600/20 hover:bg-purple-600/20 hover:border-purple-600/30 transition-all duration-300 group"
              aria-label="Rezervasyon formuna git"
            >
              <svg 
                className="w-6 h-6 text-purple-600 animate-bounce" 
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

        {/* CTA + FORM - WhatsApp Theme */}
        <section id="rezervasyon" className="bg-gradient-to-br from-purple-950 via-black to-pink-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            {/* WhatsApp Form - Tek Kolon */}
            <div className="rounded-3xl bg-gradient-to-br from-[#128C7E] to-[#075E54] border-2 border-[#25D366]/30 px-6 py-6 md:px-7 md:py-7 shadow-[0_20px_60px_rgba(37,211,102,0.25)] relative">
              {/* Online Badge - Blinking */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-[#25D366] rounded-full animate-ping"></div>
                </div>
                <span className="text-[10px] text-[#DCF8C6] font-medium">Çevrimiçi</span>
              </div>

              {/* Form Header */}
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

              {/* Bilgi Mesajı */}
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
                    placeholder="Örn: Kaç kişilik gösteri, özel istekler"
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

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
          <div className="max-w-3xl mx-auto px-4">
            <h2 
              className="font-bold text-gray-900 mb-12 text-center"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                lineHeight: '1.35',
                letterSpacing: '-0.015em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Sıkça Sorulan Sorular
            </h2>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
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

        {/* Hizmet Bölgeleri Section */}
        <DistrictLinksGrid
          lpServiceSlug="bubble-show-kiralama"
          serviceName="Bubble Show"
          title="Hangi Bölgelerde Bubble Show Hizmeti Veriyoruz?"
        />

        {/* İlgili Blog Yazıları - Internal Links */}
        <section className="py-12 px-6 bg-black/40">
          <div className="max-w-4xl mx-auto">
            <h3
              className="text-white/80 font-semibold mb-6 text-center"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              İlgili Blog Yazıları
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/blog/bubble-show-istanbul"
                className="text-purple-300 hover:text-purple-200 underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors text-sm sm:text-base"
              >
                Bubble Show Deneyimlerimiz
              </Link>
              <span className="text-white/20 hidden sm:inline">|</span>
              <Link
                to="/blog/bubble-show-ne-kadar-su-harcar"
                className="text-purple-300 hover:text-purple-200 underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors text-sm sm:text-base"
              >
                Bubble Show Ne Kadar Su Harcar?
              </Link>
              <span className="text-white/20 hidden sm:inline">|</span>
              <Link
                to="/blog/bubble-show-kiralama-rehberi"
                className="text-purple-300 hover:text-purple-200 underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors text-sm sm:text-base"
              >
                Bubble Show Kiralama Rehberi
              </Link>
            </div>
          </div>
        </section>

        {/* Google Müşteri Yorumları */}
        <GoogleReviews reviews={getReviewsByTags(['bubbleshow', 'genel'])} title="Bubble Show Müşteri Yorumları" />

        <RelatedServices currentService="bubble-show" />

        <RelatedBlogPosts servicePath="/organizasyonlar/bubble-show" />
      </main>

      {/* Exit Intent Popup */}
      <ExitIntentPopup pageName="Bubble Show" />
    </>
  )
}

export default BubbleShow
