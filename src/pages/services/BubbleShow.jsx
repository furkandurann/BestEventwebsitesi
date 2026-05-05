import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema, createImageObjectSchema, createHowToSchema } from '../../utils/schemaHelpers'
import AuthorExpertise from '../../components/AuthorExpertise'
import AdHero from '../../components/AdHero'
import LocationHeroShowcase from '../../components/LocationHeroShowcase'
import HorizontalPhotoSlider from '../../components/HorizontalPhotoSlider'
import ExitIntentPopup from '../../components/ExitIntentPopup'
import RelatedServices from '../../components/RelatedServices'
import TrustSection from '../../components/TrustSection'
import GoogleReviews from '../../components/GoogleReviews'
import { getReviewsByTags } from '../../data/googleReviews'
import DistrictLinksGrid from '../../components/DistrictLinksGrid'
import RelatedBlogPosts from '../../components/RelatedBlogPosts'
import DeferredContentAccordion from '../../components/DeferredContentAccordion'
import { generateSrcSet } from '../../utils/responsiveImage'
import { trackFormSubmit } from '../../utils/tracking'

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
    trackFormSubmit('Bubble Show WhatsApp Form', 'bubble-show')

    const message = `🫧 *Bubble Show Gösterisi Talebi*

📝 *Ad Soyad:* ${formData.name || 'Belirtilmedi'}

📍 *Adres:* ${formData.address || 'Belirtilmedi'}
📅 *Tarih:* ${formData.date || 'Belirtilmedi'}
🕐 *Saat:* ${formData.time || 'Belirtilmedi'}
📋 *Notlar:* ${formData.notes || 'Belirtilmedi'}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/905307309009?text=${encodedMessage}`, '_blank')
  }

  const heroShowcaseSlides = [
    {
      src: '/content/images/bubbleshow/anabubblee.webp',
      alt: 'Bubble show gösterisi İstanbul sahne girişi',
      tag: 'Bubble Show Sahnesi',
      title: 'Dev sabun balonlarıyla açılış etkisi',
      description: 'Bubble show açılışında kullanılan büyük sabun balonları, çocuk etkinliğine ilk saniyeden itibaren görsel hareket ve yüksek merak duygusu kazandırır.',
      href: '/hizmet-detay/dev-sabun-balonlari-acilis-gosterisi'
    },
    {
      src: '/content/images/bubbleshow/bubbleshowslider2.webp',
      alt: 'Köpük şov organizasyonu İstanbul',
      tag: 'Sabun Balonları',
      title: 'Işığı yakalayan saydam balon katmanları',
      description: 'Farklı boyuttaki sabun balonları ışıkla birleştiğinde sahnede fotoğraf değeri yüksek, estetik ve akıcı bir show görünümü oluşur.'
    },
    {
      src: '/content/images/bubbleshow/bubbleshowslider3.webp',
      alt: 'Dev balon gösterisi İstanbul çocuk etkinliği',
      tag: 'Dev Balon Deneyimi',
      title: 'Çocukların içine girebildiği dev balon anı',
      description: 'Dev balon deneyimi bubble show kiralama sayfasında en çok merak edilen bölümlerden biridir; çocuklar gösterinin merkezine geçer ve içerikle doğrudan etkileşime girer.',
      href: '/hizmet-detay/cocuklarin-icine-girebildigi-dev-balon-deneyimi'
    },
    {
      src: '/content/images/bubbleshow/bubbleshowslider5.webp',
      alt: 'İnteraktif bubble show İstanbul',
      tag: 'İnteraktif Bubble Show',
      title: 'Seyirden katılıma geçen canlı oyun akışı',
      description: 'İnteraktif bubble show akışı köpük patlatma, ritim takibi ve kısa sahne görevleriyle çocukların enerjisini sürekli canlı tutar.'
    },
    {
      src: '/content/images/bubbleshow/anabubbleee.webp',
      alt: 'LED ışıklı bubble show kiralama İstanbul',
      tag: 'LED ve Müzik',
      title: 'Müzik eşliğinde ışıklı bubble show finali',
      description: 'LED ışıklar ve ritimli müzikle desteklenen final bölümü, bubble show organizasyonunu hem görsel hem video açısından daha güçlü bir içerik alanına dönüştürür.',
      href: '/hizmet-detay/isikli-bubble-show-finali'
    }
  ]

  // Slider 1: Dev Balon Gösterileri
  const slider1Images = [
    { src: '/content/images/bubbleshow/bubbleshowhero.webp', alt: 'Dev balon gösterisi İstanbul' },
    { src: '/content/images/bubbleshow/anabubble.webp', alt: 'Dev sabun köpükleri gösterisi' },
    { src: '/content/images/bubbleshow/bubbleshowslider3.webp', alt: 'Dev balonlar çocuk partisi' },
    { src: '/content/images/bubbleshow/bubbleshowslideranahero.webp', alt: 'Bubble show dev balon performansı' },
  ]

  // Slider 2: Işıklı & Neon Bubble Show
  const slider2Images = [
    { src: '/content/images/bubbleshow/bubbleshownattive.webp', alt: 'Işıklı bubble show gösterisi' },
    { src: '/content/images/bubbleshow/bubbleshowslider5.webp', alt: 'Neon köpük şov' },
    { src: '/content/images/bubbleshow/anabubblee.webp', alt: 'LED ışıklı balon show' },
    { src: '/content/images/bubbleshow/anabubbleee.webp', alt: 'Renkli bubble show performansı' },
  ]

  // Slider 3: İnteraktif Çocuk Katılımı
  const slider3Images = [
    { src: '/content/images/ahunundogumgunu/bubbleshowgosterisi.webp', alt: 'Çocuklarla interaktif bubble show' },
    { src: '/content/images/ahunundogumgunu/anaherobubbleshowgosterisi.webp', alt: 'Çocuklar dev balonun içinde' },
    { src: '/content/images/bubbleshow/IMG_3293.webp', alt: 'Bubble show çocuk etkileşimi' },
    { src: '/content/images/bubbleshow/IMG_1748.webp', alt: 'Köpük gösterisi çocuk katılımı' },
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
      question: "Bubble show fiyatları ne kadar?",
      answer: "Bubble show kiralama hizmetimiz ₺7.000'den başlayan fiyatlarla sunulmaktadır. Fiyat; gösteri süresi (20-40 dk), mekan tipi (iç/dış mekan), katılımcı sayısı ve ek efektlere (LED ışık, UV neon, duman baloncukları) göre değişmektedir. Palyaço ekleme ₺2.500'den, sihirbaz ekleme ₺7.000'den başlayan fiyatlarla kombine edilebilir. Size özel teklif almak için 05307309009 numarasından bize ulaşabilirsiniz."
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

  const howToSchema = createHowToSchema(
    'Bubble Show Gösterisi Akışı — 5 Bölüm',
    'İstanbul\'da profesyonel bubble show kiralama gösterisinin 5 bölümü: dev sabun balonları açılışı, ışıklı balon katmanları, dev balon deneyimi, interaktif oyun akışı ve LED finali.',
    heroShowcaseSlides.map(slide => ({
      title: slide.title || slide.tag,
      description: slide.description,
      image: slide.src,
      alt: slide.alt,
      href: slide.href
    })),
    'PT1H'
  )

  const serviceSchema = createServiceSchema(
    'Bubble Show Gösterisi | Bubble Show Organizasyonu Kiralama',
    'Istanbul\'da bubble show gösterisi, organizasyonu ve kiralama. Bubble show etkinliği için profesyonel hizmet.',
    '/organizasyonlar/bubble-show',
    'Bubble Show Gösterileri ve Köpük Şov Organizasyonu',
    '7000'
  )
  const faqSchema = createFAQSchema(faqData)

  const imageGallerySchema = createImageObjectSchema([
    { src: '/content/images/bubbleshow/bubbleshowslider2.webp', alt: 'Bubble show gösterisi İstanbul' },
    { src: '/content/images/ahunundogumgunu/bubbleshowgosterisi.webp', alt: 'Çocuk doğum günü bubble show partisi' },
  ])

  return (
    <>
      <Seo
        title="Bubble Show Gösterisi | Bubble Show Organizasyonu Kiralama"
        description="Istanbul'da bubble show gösterisi, organizasyonu ve kiralama. Bubble show etkinliği için profesyonel hizmet. ☎ 05307309009"
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
          howToSchema,
          imageGallerySchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Çocuk Etkinlikleri", "item": "https://bestevent.com.tr/organizasyonlar/cocuk-etkinlikleri" },
              { "@type": "ListItem", "position": 3, "name": "Bubble Show Kiralama", "item": "https://bestevent.com.tr/organizasyonlar/bubble-show" }
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
              "telephone": "+905307309009",
              "contactType": "Rezervasyon",
              "areaServed": "TR",
              "availableLanguage": ["Turkish", "English"]
            },
            "sameAs": [
              "https://www.instagram.com/besteventorganizasyon/",
              "https://www.instagram.com/palyacogezegenii/",
              "https://www.facebook.com/besteventorganizasyon",
              "https://www.linkedin.com/company/besteventorganizasyon",
              "https://g.co/kgs/bestevent"
            ]
          },
        ]}
      />

      <AdHero
        title="Bubble Show Kiralama İstanbul"
        backgroundImage="/content/images/bubbleshow/anabubblee.webp"
        subtitle="Doğum günü ve çocuk partileri için göz alıcı köpük gösterisi"
        primaryLabel="WhatsApp'tan Teklif Al"
        whatsappMessage="Merhaba, bubble show kiralama hakkında bilgi almak istiyorum."
        quickFacts={['10+ Yıl Tecrübe', 'Hijyenik Köpük', '5⭐ Google Yorumu', 'Aynı Gün Rezervasyon']}
        ctaNote="📞 Hızlı yanıt — mesajınıza dakikalar içinde dönüş"
      />

      <main className="overflow-x-hidden scroll-smooth">
        <LocationHeroShowcase
          title="Bubble Show İstanbul"
          description="Dev sabun balonlarından ışıklı sahne anlarına, interaktif oyunlardan final fotoğraflarına; bubble show akışı tek kurguda ilerliyor."
          slides={heroShowcaseSlides}
          eyebrow="İstanbul Bubble Show Gösterisi"
        />

        {/* 45 Dakika Bubble Show — Gösteri Akışı */}
        <section className="py-20 sm:py-28 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.06),_transparent_50%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-xs text-purple-400 mb-4 font-medium">45 Dakika Profesyonel Gösteri</p>
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.025em' }}>
                Bir Köpük Gösterisi Değil, Büyülü Bir Deneyim
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: 'Dev Çember Balonun İçine Girin',
                  text: 'Dev sabun çemberi yavaşça yükselir — aileler ve çocuklar balonun içine alınır. Herkesin nefesini tuttuğu, etkinliğin en çok fotoğraflanan anı.',
                  accent: 'border-purple-500/20',
                },
                {
                  num: '02',
                  title: 'Binlerce Baloncuk Havada Uçuşur',
                  text: 'Baloncuk makinası devreye girer — binlerce mini baloncuk havada dans eder, ışıkla buluşur. Çocuklar koşarak baloncukları yakalar, kahkahalar salonu sarar.',
                  accent: 'border-pink-500/20',
                },
                {
                  num: '03',
                  title: 'Köpükten Taçlar ve Figürler',
                  text: 'Çocukların başına köpükten taçlar yapılır — prenses, kral, unicorn. Kalp, yıldız ve özel aparatlarla sıradan sabun balonları sanata dönüşür.',
                  accent: 'border-cyan-500/20',
                },
                {
                  num: '04',
                  title: 'LED Işıklı Final Gösterisi',
                  text: 'Renkli LED ışıklar ve ritimli müzik eşliğinde dev balonlar sahnede süzülür. Gösterinin finali, çocukların "bir daha, bir daha!" diye bağırdığı muhteşem kapanış.',
                  accent: 'border-blue-500/20',
                },
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${item.accent} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300`}>
                  <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{item.num}</span>
                  <h3 className="text-white font-bold text-lg mt-3 mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-white/50 text-sm">Doğum günleri, okul şenlikleri, AVM etkinlikleri ve kurumsal organizasyonlarda İstanbul'un en çok tercih edilen bubble show gösterisi.</p>
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

        {/* Tematik Slider 1: Dev Balon Gösterileri */}
        <HorizontalPhotoSlider images={slider1Images} title="Dev Balon Gösterileri" />

        {/* Features Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.06),_transparent_50%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.3em] text-xs text-purple-400 mb-4 font-medium">Neden Bizi Tercih Etmelisiniz</p>
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.025em' }}>
                Bubble Show Gösterimizin Özellikleri
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" strokeDasharray="2 2" /><path d="M12 3c0 3-2 5-2 9s2 6 2 9" /></>,
                  title: '3+ Metre Dev Sabun Köpükleri',
                  text: 'Profesyonel ekipmanlarımız ile 3 metreden büyük dev sabun köpükleri oluşturuyoruz. Gökyüzüne yükselen devasa balonlar, etkinliğinize büyülü bir atmosfer katıyor.',
                  accent: 'from-purple-500 to-pink-500',
                },
                {
                  icon: <path d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: 'İçine Girilebilen Dev Balonlar',
                  text: 'Çocuklar dev balonun içine girerek unutulmaz anlar yaşıyor. En sevilen aktivitemiz!',
                  accent: 'from-pink-500 to-rose-400',
                },
                {
                  icon: <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
                  title: 'LED Işık & Müzik Eşliği',
                  text: 'Renkli LED ışık efektleri ve ritimli müzikler ile büyüleyici bir atmosfer.',
                  accent: 'from-blue-500 to-purple-500',
                },
                {
                  icon: <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
                  title: '%100 Güvenli Solüsyon',
                  text: 'Çocuk dostu, toksik olmayan FDA onaylı köpük solüsyonları kullanıyoruz. Cildiniz için tamamen güvenli.',
                  accent: 'from-green-500 to-emerald-400',
                },
                {
                  icon: <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />,
                  title: '2-12 Yaş Her Gruba Özel Aktiviteler',
                  text: 'Her yaş grubuna uygun özel aktiviteler tasarlıyoruz. Küçükler için güvenli mini balonlar, büyükler için dev köpük duvarları ve interaktif gösteriler.',
                  accent: 'from-orange-500 to-amber-400',
                },
              ].map((feature, i) => (
                <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center shadow-lg`}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1.5">{feature.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tematik Slider 2: Işıklı & Neon Bubble Show */}
        <HorizontalPhotoSlider images={slider2Images} title="Işıklı & Neon Bubble Show" />

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

            {/* Photos Grid - 3 Interactive Photos with srcSet */}
            <div className="grid md:grid-cols-3 gap-6 mb-16 items-center" style={{ maxWidth: '1200px', margin: '0 auto 4rem' }}>
              <div className="overflow-hidden rounded-2xl border-2 border-pink-500/30 shadow-lg hover:shadow-pink-500/50 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="/content/images/ahunundogumgunu/bubbleshowgosterisi.webp"
                  srcSet={generateSrcSet("/content/images/ahunundogumgunu/bubbleshowgosterisi.webp")}
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                  srcSet={generateSrcSet("/content/images/bubbleshow/bubbleshowslider5.webp")}
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                  srcSet={generateSrcSet("/content/images/ahunundogumgunu/anaherobubbleshowgosterisi.webp")}
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                {[
                  'Çocuklar gösterinin parçası olur',
                  'Dev balonların içine girerler',
                  'Köpük tünellerinden geçerler',
                  'Köpük patlatma oyunları oynarlar',
                  'Unutulmaz bir gösteri olarak hatırlanır'
                ].map((text, i) => (
                  <div key={i} className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl p-5 hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                        {i + 1}
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
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
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

        {/* Tematik Slider 3: İnteraktif Çocuk Katılımı */}
        <HorizontalPhotoSlider images={slider3Images} title="İnteraktif Çocuk Katılımı" />

        {/* İstanbul'un En İyisi — Güven Bandı */}
        <section className="py-12 bg-gradient-to-r from-purple-950/40 via-black to-pink-950/40 border-y border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center">
              <div>
                <p className="text-3xl font-black text-white">45 dk</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Gösteri Süresi</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">5.000+</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Başarılı Etkinlik</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">Dev Balon</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">İçine Girilebilir</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">2-12 Yaş</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Tüm Yaş Grupları</p>
              </div>
            </div>
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
                Bilgileriniz güvenle saklanır ve sadece rezervasyon için kullanılır
              </p>
            </div>
          </div>
        </section>

        <TrustSection />

        {/* SEO Hizmet Detayları — Bubble Show Mor/Pembe/Mavi Tema */}
        <section className="relative py-24 sm:py-28 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.08),_transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.06),_transparent_50%)] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.3em] text-xs text-purple-400 mb-4 font-medium">İstanbul Bubble Show Hizmetleri</p>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Bubble Show Kiralama Hizmetlerimiz
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: 'Doğum Günü Bubble Show',
                  text: 'Çocuğunuzun doğum günü partisi için doğum günü bubble show kiralama hizmetimiz, 3-12 yaş arası misafirleri sahnenin yıldızı yapar. Köpük şovu içinde dev köpük baloncuklar, ışık efektleri ve müzik koordinasyonu — bubble show kiralama paketlerimiz tüm İstanbul ilçelerine gönderim yapar.',
                  accent: 'border-purple-500/20',
                  tag: 'border-purple-500/30 text-purple-300',
                },
                {
                  num: '02',
                  title: 'Çocuk Bubble Show & Köpük Gösterisi',
                  text: 'Çocuk bubble show hizmetimiz, klasik köpük gösterisi anlayışının ötesinde profesyonel sahne deneyimi sunar. Sabun köpük şovu sırasında çocuklar pasif izleyici değil — köpüklerin içinde durabilir, dev baloncuklarla etkileşime girer. Kreş etkinliği, AVM organizasyonu, okul partisinde tercih ediliyor.',
                  accent: 'border-pink-500/20',
                  tag: 'border-pink-500/30 text-pink-300',
                },
                {
                  num: '03',
                  title: 'Bubble Show Fiyatları & Paketler',
                  text: 'Bubble show fiyatları; gösteri süresi, etkinlik tipi, misafir sayısı ve tercih edilen köpük show paketine göre belirlenir. Köpük show kiralama detayları için WhatsApp\'tan hızlı teklif alın; bubble şov hizmeti kataloğu dakikalar içinde iletilir. Standart, premium ve kurumsal organizasyon paketleri mevcuttur.',
                  accent: 'border-blue-500/20',
                  tag: 'border-blue-500/30 text-blue-300',
                },
                {
                  num: '04',
                  title: 'Premium Bubble Show & Kurumsal',
                  text: 'İstanbul bubble show kiralama denildiğinde akla gelen profesyonel bubble show ekibimiz, 10+ yıl sahne deneyimiyle fark yaratır. AVM açılışı, fuar, gala, ürün lansmanı, şirket aile günü için yapılandırılır. Premium bubble show paketinde 5⭐ Google yorumu ve hijyenik köpük garantisi.',
                  accent: 'border-cyan-500/20',
                  tag: 'border-cyan-500/30 text-cyan-300',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group p-7 rounded-2xl border ${item.accent} bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      {item.num}
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${item.tag} font-medium`}>
                      Hizmet
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 leading-tight">{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-white/40 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                Bubble show kiralama İstanbul hizmetimiz tüm ilçelere (Kadıköy, Ataşehir, Üsküdar, Beşiktaş, Şişli, Bakırköy, Pendik, Maltepe, Beylikdüzü, Ümraniye) gönderim yapmaktadır.
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
        <GoogleReviews reviews={getReviewsByTags(['bubbleshow', 'genel'])} title="Bubble Show Müşteri Yorumları" serviceName="Bubble Show Kiralama İstanbul" serviceUrl="/organizasyonlar/bubble-show" />

        <DeferredContentAccordion serviceKey="bubble-show" />

        <RelatedServices currentService="bubble-show" />

        <RelatedBlogPosts servicePath="/organizasyonlar/bubble-show" />

        <AuthorExpertise serviceName="Bubble Show Kiralama" />
      </main>

      {/* Exit Intent Popup */}
      <ExitIntentPopup pageName="Bubble Show" />
    </>
  )
}

export default BubbleShow
