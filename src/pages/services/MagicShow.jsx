import { useState, useEffect } from 'react'
import Seo from '../../components/Seo'
import MagicShowHeroSlider from '../../components/MagicShowHeroSlider'
import HorizontalPhotoSlider from '../../components/HorizontalPhotoSlider'

const MagicShow = () => {
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
        'send_to': 'AW-162-567-1131/magic-show-whatsapp',
        'value': 1.0,
        'currency': 'TRY',
        'event_callback': () => {
          console.log('Magic Show WhatsApp conversion tracked')
        }
      })
    }

    const message = `🎭 *Sihirbaz Gösterisi Talebi*

📝 *Ad Soyad:* ${formData.name || 'Belirtilmedi'}
📞 *Telefon:* ${formData.phone || 'Belirtilmedi'}
📍 *Adres:* ${formData.address || 'Belirtilmedi'}
📅 *Tarih:* ${formData.date || 'Belirtilmedi'}
🕐 *Saat:* ${formData.time || 'Belirtilmedi'}
📋 *Notlar:* ${formData.notes || 'Belirtilmedi'}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/905307309009?text=${encodedMessage}`, '_blank')
  }

  // Product Showcase Images (Apple-style)
  const showcaseImages = [
    { src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp', alt: 'Sihirbaz gösterisi organizasyonu' },
    { src: '/content/images/sihirbaz/sihirbazhero.webp', alt: 'Sihirbaz gösterisi istanbul' },
    { src: '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.webp', alt: 'Istanbul sihirbaz kiralama' },
    { src: '/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp', alt: 'Sihirbazlık etkinliği' },
    { src: '/content/images/ahunundogumgunu/ilktemas.webp', alt: 'Istanbul sihirbaz gösterisi' }
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
    // Only prevent default for touch, not mouse
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
    // Only prevent default for touch
    if (e.type.includes('touch')) {
      e.preventDefault()
    }
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
    const offset = clientX - dragStart
    setDragOffset(offset)
  }

  const handleDragEnd = (e) => {
    if (!isDragging) return
    // Only prevent default for touch
    if (e.type.includes('touch')) {
      e.preventDefault()
    }
    setIsDragging(false)
    
    // Threshold for slide change (100px)
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0 && currentSlide > 0) {
        // Dragged right -> go to previous slide
        setCurrentSlide(prev => prev - 1)
      } else if (dragOffset < 0 && currentSlide < showcaseImages.length - 1) {
        // Dragged left -> go to next slide
        setCurrentSlide(prev => prev + 1)
      }
    }
    
    setDragOffset(0)
  }

  // Slider 1: Sihirbazlık Gösterileri
  const slider1Images = [
    { src: '/content/images/sihirbaz/sihirbazhero.webp', alt: 'Profesyonel sihirbaz kiralama İstanbul' },
    { src: '/content/images/sihirbaz/IMG_3293.webp', alt: 'Sihirbaz gösterileri İstanbul' },
    { src: '/content/images/sihirbaz/IMG_4800.webp', alt: 'Magic show organizasyonu' },
    { src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp', alt: 'Komedi ve sihirbazlık gösterisi' },
  ]

  // Slider 2: İnteraktif Gösteriler
  const slider2Images = [
    { src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisiilecocuklarıngozundekisaskinlik.webp', alt: 'İnteraktif sihirbaz gösterisi çocuklar' },
    { src: '/content/images/ahunundogumgunu/ilktemas.webp', alt: 'Sihirbaz ile ilk temas' },
    { src: '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.webp', alt: 'İnanılmaz sihirbazlık gösterileri' },
    { src: '/content/images/sihirbaz/IMG_3293.webp', alt: 'Çocuklarla interaktif sihir' },
  ]

  // Slider 3: Canlı Hayvanlar
  const slider3Images = [
    { src: '/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp', alt: 'Canlı güvercin ile sihir gösterisi' },
    { src: '/content/images/ahunundogumgunu/tavsanveguvercınleetkilesim.webp', alt: 'Tavşan ve güvercin etkileşimi' },
    { src: '/content/images/ahunundogumgunu/canlıguvercingosterisi.webp', alt: 'Canlı güvercin sihir numaraları' },
    { src: '/content/images/ahunundogumgunu/31.webp', alt: 'Hayvan sihirleri' },
  ]

  const faqData = [
    {
      question: "Sihirbaz kiralama hizmeti ne kadar sürer?",
      answer: "Standart sihirbaz kiralama gösterilerimiz 30-45 dakika arası sürmektedir. Talebe göre 60 dakikaya kadar uzatılabilir. Küçük çocuklar için 20-30 dakikalık kısa versiyonlar da mevcuttur."
    },
    {
      question: "Sihirbaz gösterileri hangi yaş grubu için uygundur?",
      answer: "Sihirbaz gösterilerimiz 3-12 yaş arası çocuklar için idealdir. Farklı yaş grupları için içerik özelleştirmesi yapıyoruz. Daha küçük çocuklar için basit ve renkli numaralar, büyük çocuklar için daha karmaşık illüzyonlar sunuyoruz."
    },
    {
      question: "Çocuklar sihirbaz gösterisine katılabilir mi?",
      answer: "Evet! Sihirbaz gösterilerimiz interaktiftir. Çocuklar sahneye davet edilir, sihir numaralarına yardımcı olurlar. Bu, gösteriyi daha eğlenceli ve unutulmaz kılar."
    },
    {
      question: "İstanbul'un hangi bölgelerine sihirbaz kiralama hizmeti veriyorsunuz?",
      answer: "İstanbul'un tüm ilçelerine sihirbaz kiralama hizmeti veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik, Beylikdüzü, Sarıyer, Beşiktaş, Şişli, Bakırköy başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz."
    },
    {
      question: "Sihirbaz kiralama malzeme ve ekipmanları siz mi getiriyorsunuz?",
      answer: "Evet, tüm sihir malzemeleri, ses sistemi, ışık ekipmanları ve sahne aksesuarlarını biz sağlıyoruz. Sizin herhangi bir şey temin etmenize gerek yoktur."
    },
    {
      question: "Sihirbaz kiralama fiyatları nedir?",
      answer: "Fiyatlarımız gösteri süresine, katılımcı sayısına ve lokasyona göre değişiklik gösterir. Detaylı fiyat bilgisi için bizi arayın: 0530 730 90 09"
    },
    {
      question: "Sihirbaz gösterileri ile birlikte başka hizmetler alabilir miyiz?",
      answer: "Evet! Sihirbaz gösterileri ile birlikte palyaço, bubble show, yüz boyama, balon şekillendirme ve daha birçok çocuk etkinliği hizmetini paket olarak alabilirsiniz."
    },
    {
      question: "Sihirbaz kiralama için ne kadar önceden rezervasyon yapmam gerekir?",
      answer: "Yoğun dönemlerde (hafta sonları, doğum günü sezonları) en az 2 hafta önceden rezervasyon yapmanızı öneririz. Ancak acil durumlar için de son dakika rezervasyonları değerlendiririz."
    }
  ]

  return (
    <>
      <Seo
        title="Istanbul Sihirbaz Gösterisi | Sihirbazlık Organizasyonu Kiralama ve Etkinliği"
        description="Istanbul'da sihirbaz gösterisi, organizasyonu ve kiralama. Sihirbazlık etkinliği için profesyonel hizmet. ☎ 0530 730 90 09"
        keywords={[
          'istanbul sihirbaz gösterisi',
          'sihirbazlık organizasyonu',
          'sihirbaz kiralama',
          'sihirbazlık etkinliği',
          'istanbul sihirbaz'
        ]}
        image="/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp"
        canonicalPath="/organizasyonlar/magic-show"
        schema={[
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
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BestEvent - Sihirbaz Kiralama",
            "image": "https://bestevent.com.tr/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp",
            "telephone": "+90-530-730-9009",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressRegion": "İstanbul",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.9872",
              "longitude": "29.0301"
            },
            "areaServed": [
              {"@type": "City", "name": "Kadıköy"},
              {"@type": "City", "name": "Üsküdar"},
              {"@type": "City", "name": "Maltepe"},
              {"@type": "City", "name": "Kartal"},
              {"@type": "City", "name": "Ataşehir"},
              {"@type": "City", "name": "İstanbul"}
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sihirbaz Kiralama İstanbul",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BestEvent",
              "areaServed": [
                "Kadıköy", "Üsküdar", "Maltepe", "Kartal", "Ataşehir", "Pendik", "Erenköy",
                "Beylikdüzü", "Sarıyer", "Beşiktaş", "Şişli", "Bakırköy", "İstanbul"
              ]
            },
            "serviceType": "Sihirbaz Gösterileri ve Magic Show Organizasyonu",
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
          },
          {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": "https://bestevent.com.tr/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp",
            "description": "İstanbul sihirbaz gösterisi - komedi magic show",
            "name": "Sihirbazlık Gösterisi İstanbul"
          }
        ]}
      />

      <main className="overflow-x-hidden scroll-smooth">
        {/* Hero Slider */}
        <MagicShowHeroSlider />

        {/* Brand Impact Section - H1 + Slogan */}
        <section className="py-20 sm:py-28 px-6 bg-gradient-to-br from-blue-950/40 via-black to-cyan-950/40 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              {/* H1 SEO Başlık */}
              <h1 
                className="font-bold mb-8 text-white px-4 text-center"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                İstanbul'da Profesyonel{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                  Sihirbazlık Gösterisi
                </span>
                {' '}ve Sihirbaz Kiralama
              </h1>

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

        {/* Why Us Section - Navy Background with White Card */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-black to-indigo-950">
          <div className="max-w-4xl mx-auto px-6">
            {/* White Card/Frame - 20% Narrower */}
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
                Neden İstanbul'un En Çok Tercih Edilen Sihirbaz Gösterisiyiz?
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
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Magic Show</span> gösterimiz, klasik sihirbazlık anlayışının ötesine geçerek{' '}
                  <span className="font-bold text-gray-900">sihirbazlık gösterisi ile komedi show'u</span>{' '}
                  birleştiren özel bir sahne deneyimi sunar. Gösteri boyunca sadece şaşırtmakla kalmaz, aynı zamanda çocukları ve aileleri{' '}
                  <span className="font-bold text-gray-900">kahkahaya boğan</span>{' '}
                  eğlenceli bir performans sergiler. Canlı tavşanlı ve güvercinli interaktif sihirbazlık gösterileri, profesyonel sunumla birleşerek bugüne kadar %100 memnuniyetle sunulmuş, çocuklara unutulmaz anlar yaşatmıştır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Magicians Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-black to-indigo-950">
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
              İstanbul'un En İyi Sihirbazlarıyla Tanışın
            </h2>

            {/* Photos Grid - Two Magicians Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {/* Gülben Photo */}
              <img 
                src="/content/images/sihirbaz/gulbenergensihirbaz.JPG"
                alt="Gülben Ergen ile sihirbaz gösterisi"
                className="w-full rounded-3xl shadow-2xl"
              />
              
              {/* Magic Show & Comedy Photo */}
              <img 
                src="/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp"
                alt="Sihirbazlık gösterisi ve komedi show"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>

            {/* Features List */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    Komedi show + profesyonel illüzyonları birleştirir
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    Canlı tavşanlı ve güvercinli sihir gösterileri yapar
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    Çocukları, bebekleri ve yetişkinleri aynı anda güldürür
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    İzleyiciyi sahneye dahil eden interaktif bir performans sunar
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 text-2xl flex-shrink-0">✓</span>
                  <p 
                    className="text-white font-medium"
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.5',
                      letterSpacing: '-0.015em',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                    }}
                  >
                    Türkçe ve İngilizce show seçenekleri sunar
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
                Bu özellikleri sayesinde gösterimiz, <span className="font-bold text-white">İstanbul genelinde en çok tavsiye edilen sihirbazlık show'u olmuştur.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Experience Section - "İzle-Geç DEĞİLDİR" */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-black to-indigo-950">
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
              Bu Bir <span className="italic">"İzle-Geç"</span> Gösterisi <span className="text-cyan-400">DEĞİLDİR!</span>
            </h2>

            {/* Photos Grid - 3 Interactive Photos (Spotlight Center) */}
            <div className="grid md:grid-cols-3 gap-6 mb-16 items-center" style={{ maxWidth: '1200px', margin: '0 auto 4rem' }}>
              {/* Photo 1: Çocukların gözündeki şaşkınlık */}
              <div className="overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img 
                  src="/content/images/ahunundogumgunu/sihirbazlıkgosterisiilecocuklarıngozundekisaskinlik.webp"
                  alt="Sihirbazlık gösterisi ile çocukların gözündeki şaşkınlık"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Photo 2: Tavşan ve güvercin etkileşimi (CENTER SPOTLIGHT) */}
              <div className="overflow-hidden rounded-xl border-4 border-cyan-400/60 shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/60 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img 
                  src="/content/images/ahunundogumgunu/tavsanveguvercınleetkilesim.webp"
                  alt="Tavşan ve güvercin ile etkileşim"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo 3: Güvercin ile ilk temas */}
              <div className="overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img 
                  src="/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp"
                  alt="Çocukların güvercin ile ilk teması"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Features List - Gradient Numbered Cards */}
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-4">
                {/* Item 1 */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-sm"
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
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-sm"
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
                      Çocuklar sahneye çıkar
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-sm"
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
                      Güvercin ve tavşanla etkileşime girerler
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-sm"
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
                      Komedi show ile kahkaha kaçınılmaz olur
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-sm"
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
                Bu da gösteriyi <span className="font-bold text-white">sıradan sihirbazlık gösterilerinden ayırır.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Light White with Subtle Blue */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.05),transparent_50%)]"></div>
          
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 
              className="font-semibold leading-tight mb-8 bg-gradient-to-r from-gray-800 via-blue-700 to-cyan-700 bg-clip-text text-transparent"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                lineHeight: '1.3',
                letterSpacing: '-0.015em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Eğer sen de unutulmaz bir sihirbazlık deneyimi yaşamak istiyorsan hemen iletişime geç
            </h2>

            {/* Animated Chevron Down */}
            <a 
              href="#rezervasyon"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/10 backdrop-blur-sm border border-blue-600/20 hover:bg-blue-600/20 hover:border-blue-600/30 transition-all duration-300 group"
              aria-label="Rezervasyon formuna git"
            >
              <svg 
                className="w-6 h-6 text-blue-600 animate-bounce" 
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
        <section id="rezervasyon" className="bg-gradient-to-br from-blue-950 via-black to-indigo-950 border-t border-white/5">
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

              {/* Bilgi Mesajı - Direkt Form Üstünde */}
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
        <section className="py-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100">
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
        <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
          <div className="max-w-5xl mx-auto px-4">
            <h2 
              className="font-bold text-white mb-12 text-center"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                lineHeight: '1.35',
                letterSpacing: '-0.015em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Hangi Bölgelerde Sihirbaz Kiralama Hizmeti Veriyoruz?
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                'Kadıköy', 'Erenköy', 'Üsküdar', 'Maltepe', 'Kartal', 'Ataşehir',
                'Pendik', 'Beylikdüzü', 'Sarıyer', 'Beşiktaş', 'Şişli', 'Bakırköy',
                'Beykoz', 'Çekmeköy', 'Sultanbeyli', 'Tuzla', 'Sancaktepe', 'Ümraniye'
              ].map((region, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center text-white font-medium hover:bg-white/20 transition-all"
                >
                  {region}
                </div>
              ))}
            </div>

            <p 
              className="text-white/90 text-center leading-relaxed"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.7',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              İstanbul'un tüm ilçelerine profesyonel sihirbaz kiralama ve sihirbaz gösterileri hizmeti sunuyoruz. 
              Listelenmemiş bir bölgede misiniz? Bizimle iletişime geçin, size yardımcı olalım!
            </p>
          </div>
        </section>

      </main>
    </>
  )
}

export default MagicShow
