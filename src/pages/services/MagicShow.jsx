import { Suspense, lazy, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema, createImageObjectSchema, createHowToSchema } from '../../utils/schemaHelpers'
import AuthorExpertise from '../../components/AuthorExpertise'
import AdHero from '../../components/AdHero'
import LocationHeroShowcase from '../../components/LocationHeroShowcase'
import DeferredContentAccordion from '../../components/DeferredContentAccordion'
import { getReviewsByTags } from '../../data/googleReviews'
import { generateSrcSet } from '../../utils/responsiveImage'
import { trackFormSubmit } from '../../utils/tracking'
import LazySection from '../../components/LazySection'
import QuickServiceQuote from '../../components/QuickServiceQuote'

const RelatedServices = lazy(() => import('../../components/RelatedServices'))
const TrustSection = lazy(() => import('../../components/TrustSection'))
const GoogleReviews = lazy(() => import('../../components/GoogleReviews'))
const DistrictLinksGrid = lazy(() => import('../../components/DistrictLinksGrid'))
const RelatedBlogPosts = lazy(() => import('../../components/RelatedBlogPosts'))

const MagicShow = () => {
  // WhatsApp Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    guestCount: '',
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
    trackFormSubmit('Magic Show WhatsApp Form', 'magic-show')

    const message = `🎭 *Sihirbaz Gösterisi Talebi*

📝 *Ad Soyad:* ${formData.name || 'Belirtilmedi'}
📞 *Telefon:* ${formData.phone || 'Belirtilmedi'}
📍 *Adres:* ${formData.address || 'Belirtilmedi'}
👥 *Kişi Sayısı:* ${formData.guestCount || 'Belirtilmedi'}
📅 *Tarih:* ${formData.date || 'Belirtilmedi'}
🕐 *Saat:* ${formData.time || 'Belirtilmedi'}
📋 *Notlar:* ${formData.notes || 'Belirtilmedi'}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/905307309009?text=${encodedMessage}`, '_blank')
  }

  const heroShowcaseSlides = [
    {
      src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp',
      alt: 'Kart numaraları ile yakın plan sihirbaz gösterisi İstanbul',
      tag: 'Kart Numaraları',
      title: 'Yakın plan kart numaraları ve şaşkınlık anları',
      description: 'Kart numaraları, çocukların sihri göz hizasında yaşadığı bölüm olur; sahne uzakta kalmaz, herkes kendini numaranın içindeymiş gibi hisseder.',
      href: '/hizmet-detay/kart-numaralari-ve-yakin-plan-sihir'
    },
    {
      src: '/content/images/sihirbaz/sihirbazhero.webp',
      alt: 'Sahne illüzyonları ile sihirbaz kiralama İstanbul',
      tag: 'İllüzyon',
      title: 'Büyük sahne illüzyonları ve final etkisi',
      description: 'Işık, tempo ve sahne hakimiyetiyle kurulan illüzyon akışı; doğum günü ve kurumsal etkinliklerde güçlü açılış ve final ritmi oluşturur.',
      href: '/hizmet-detay/sahne-illuzyonlari-ve-final-numaralari'
    },
    {
      src: '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.webp',
      alt: 'Sandalye ve masa uçurma sihir numarası İstanbul',
      tag: 'Uçurma Numarası',
      title: 'Sandalye ve masa uçurma ile yüksek gerilim',
      description: 'Sandalye ve masa uçurma numaraları sahne enerjisini anında yükseltir; çocuklar klasik sihir değil büyük illüzyon izlediklerini hisseder.',
      href: '/hizmet-detay/sandalye-ve-masa-ucurma-sihir-numarasi'
    },
    {
      src: '/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp',
      alt: 'Güvercinli sihirbaz gösterisi İstanbul',
      tag: 'Güvercin Numaraları',
      title: 'Canlı güvercinle ilk temas ve sürpriz etki',
      description: 'Güvercinli sihir numaraları çocukların dikkatini ilk saniyede toplar; görsel hafızada kalan zarif ve güçlü bir sahne hissi bırakır.',
      href: '/hizmet-detay/canli-guvercinli-sihirbaz-gosterisi'
    },
    {
      src: '/content/images/ahunundogumgunu/ilktemas.webp',
      alt: 'Tavşanlı sihirbaz kiralama gösterisi İstanbul',
      tag: 'Tavşan Sürprizi',
      title: 'Tavşanlı klasik numaralara modern yorum',
      description: 'Tavşanlı final anları, ailelerin en çok fotoğrafladığı bölüm olur ve sihirbaz gösterisine hem nostaljik hem premium bir dokunuş ekler.',
      href: '/hizmet-detay/tavsanli-sihirbaz-gosterisi'
    }
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
      question: "Sihirbaz kiralama fiyatları ne kadar?",
      answer: "Sihirbaz kiralama hizmetimiz ₺7.000'den başlayan fiyatlarla sunulmaktadır. Fiyat; gösteri süresi (30-60 dk), katılımcı sayısı, lokasyon ve gösteri içeriğine (sahne illüzyonu, yakın plan sihir, güvercinli/tavşanlı numaralar) göre değişmektedir. Palyaço ekleme ₺2.500'den, bubble show ekleme ₺7.000'den başlayan fiyatlarla kombine edilebilir. Size özel teklif almak için 05307309009 numarasından bize ulaşabilirsiniz."
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

  const howToSchema = createHowToSchema(
    'Sihirbaz Kiralama Gösteri Akışı — 5 Bölüm',
    'İstanbul\'da profesyonel sihirbaz kiralama gösterisinin 5 bölümü: yakın plan kart numaraları, sahne illüzyonları, uçurma numaraları, güvercinli sihir ve tavşanlı final.',
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
    'Sihirbaz Gösterisi | Sihirbaz Organizasyonu Kiralama',
    'Istanbul\'da sihirbaz gösterisi, organizasyonu ve kiralama. Sihirbazlık etkinliği için profesyonel hizmet.',
    '/organizasyonlar/magic-show',
    'Sihirbaz Gösterileri ve Magic Show Organizasyonu',
    '7000'
  )
  const faqSchema = createFAQSchema(faqData)

  const imageGallerySchema = createImageObjectSchema([
    { src: '/content/images/sihirbaz/sihirbazhero.webp', alt: 'Sihirbazlık gösterisi İstanbul' },
  ])

  return (
    <>
      <Seo
        title="Sihirbaz Gösterisi | Sihirbaz Organizasyonu Kiralama"
        description="Istanbul'da sihirbaz gösterisi, organizasyonu ve kiralama. Sihirbazlık etkinliği için profesyonel hizmet. ☎ 05307309009"
        keywords={[
          'istanbul sihirbaz gösterisi',
          'sihirbazlık organizasyonu',
          'sihirbaz kiralama',
          'sihirbazlık etkinliği',
          'istanbul sihirbaz',
          'illüzyonist',
          'sahne gösterisi',
          'sihir numaraları',
          'kart hilesi',
          'tavşan şapka',
          'yakın plan sihirbazlık',
          'masa başı sihir',
          'çocuk gösterisi'
        ]}
        image="/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp"
        canonicalPath="/organizasyonlar/magic-show"
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
              { "@type": "ListItem", "position": 3, "name": "Sihirbaz Kiralama", "item": "https://bestevent.com.tr/organizasyonlar/magic-show" }
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
        title="Sihirbaz Kiralama İstanbul"
        backgroundImage="/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp"
        subtitle="Profesyonel sahne sihirbazlığı ve yakın plan illüzyonlar"
        primaryLabel="WhatsApp'tan Bilgi Al"
        whatsappMessage="Merhaba, sihirbaz kiralama için bilgi almak istiyorum."
        quickFacts={['10+ Yıl Tecrübe', 'Canlı Tavşan & Güvercin', '5⭐ Google Yorumu', 'Aynı Gün Rezervasyon']}
        ctaNote="📞 Hızlı yanıt — mesajınıza dakikalar içinde dönüş"
      />

      <main className="overflow-x-hidden scroll-smooth">
        <LocationHeroShowcase
          title="Sihirbaz Kiralama İstanbul"
          description="Sahne numaralarından çocuk katılımlı illüzyonlara, yakın plan sihirbazlıktan final şovuna; tüm akış tek gösteride birleşiyor."
          slides={heroShowcaseSlides}
          eyebrow="İstanbul Sihirbaz Gösterisi"
        />

        {/* 45 Dakika Sihir — Gösteri Akışı */}
        <section className="py-20 sm:py-28 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.06),_transparent_50%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-xs text-purple-400 mb-4 font-medium">45 Dakika Profesyonel Gösteri</p>
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.025em' }}>
                Her Saniyesi Planlanmış, Nefes Kesen Bir Akış
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: 'Şapkadan Tavşan Sürprizi',
                  text: 'Önce sahte bir tavşan çıkar — çocuklar ters köşe olur, kahkahalar yükselir. Ardından gerçek tavşan sahneye çıktığında heyecan çığlıkları bütün salonu sarar. Çocuklar tavşanla doğrudan etkileşime girer.',
                  accent: 'border-purple-500/20',
                },
                {
                  num: '02',
                  title: 'Güvercin Dönüşümü',
                  text: 'Hiç beklenmeyen bir anda sahte güvercin gerçek güvercine dönüşür. Çocukların şaşkınlık dolu çığlıkları her taraftan duyulur — gösterinin en çok fotoğraflanan anı.',
                  accent: 'border-pink-500/20',
                },
                {
                  num: '03',
                  title: 'Masa Uçurma İllüzyonu',
                  text: 'Sihirbazımız masayı yerden kaldırır — havada süzülen masa sahne enerjisini zirveye taşır. Büyük illüzyon izlediklerini hisseden çocuklar ağızları açık kalır.',
                  accent: 'border-blue-500/20',
                },
                {
                  num: '04',
                  title: 'Kola Suya Dönüşür, Çiçekler Renk Değiştirir',
                  text: 'Yakın plan numaralarla çocuklar sihri göz hizasında yaşar. Kola bir anda suya dönüşür, çiçekler saniyeler içinde renk değiştirir — her numara yeni bir "nasıl yaptı?" sorusu doğurur.',
                  accent: 'border-cyan-500/20',
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
              <p className="text-white/50 text-sm">Doğum günleri, okul etkinlikleri, AVM organizasyonları ve kurumsal etkinliklerde tercih edilen profesyonel sihirbazlık gösterisi.</p>
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
                  <span className="font-bold text-gray-900">sahne gösterisi ile komedi show'u</span>{' '}
                  birleştiren özel bir çocuk gösterisi deneyimi sunar. Deneyimli illüzyonist kadromuz, sihir numaraları ve kart hilesi performanslarıyla sadece şaşırtmakla kalmaz, aynı zamanda çocukları ve aileleri{' '}
                  <span className="font-bold text-gray-900">kahkahaya boğan</span>{' '}
                  eğlenceli bir performans sergiler. Tavşan şapka numarası, yakın plan sihirbazlık ve masa başı sihir gösterileri, profesyonel sunumla birleşerek bugüne kadar %100 memnuniyetle sunulmuş, çocuklara unutulmaz anlar yaşatmıştır.
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
                src="/content/images/sihirbaz/gulbenergensihirbaz.webp"
                srcSet={generateSrcSet("/content/images/sihirbaz/gulbenergensihirbaz.webp")}
                sizes="(max-width: 1024px) 100vw, 800px"
                alt="Gülben Ergen ile sihirbaz gösterisi"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
                className="w-full rounded-3xl shadow-2xl"
              />
              
              {/* Magic Show & Comedy Photo */}
              <img
                src="/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp"
                srcSet={generateSrcSet("/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp")}
                sizes="(max-width: 1024px) 100vw, 800px"
                alt="Sihirbazlık gösterisi ve komedi show"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
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
                  srcSet={generateSrcSet("/content/images/ahunundogumgunu/sihirbazlıkgosterisiilecocuklarıngozundekisaskinlik.webp")}
                  sizes="(max-width: 1024px) 100vw, 800px"
                  alt="Sihirbazlık gösterisi ile çocukların gözündeki şaşkınlık"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Photo 2: Tavşan ve güvercin etkileşimi (CENTER SPOTLIGHT) */}
              <div className="overflow-hidden rounded-xl border-4 border-cyan-400/60 shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/60 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="/content/images/ahunundogumgunu/tavsanveguvercınleetkilesim.webp"
                  srcSet={generateSrcSet("/content/images/ahunundogumgunu/tavsanveguvercınleetkilesim.webp")}
                  sizes="(max-width: 1024px) 100vw, 800px"
                  alt="Tavşan ve güvercin ile etkileşim"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo 3: Güvercin ile ilk temas */}
              <div className="overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer" style={{ transform: 'scale(1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp"
                  srcSet={generateSrcSet("/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp")}
                  sizes="(max-width: 1024px) 100vw, 800px"
                  alt="Çocukların güvercin ile ilk teması"
                  loading="lazy"
                  decoding="async"
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
                <p className="text-3xl font-black text-white">%100</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Canlı Hayvan Etkileşimi</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">2-12 Yaş</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Tüm Yaş Grupları</p>
              </div>
            </div>
          </div>
        </section>

        {/* İlgili Blog Yazıları - Internal Links for SEO */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-950 via-black to-indigo-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <h3
              className="font-semibold text-white/80 mb-6 text-center"
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                letterSpacing: '-0.015em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              İlgili Blog Yazıları
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/blog/sihirbaz-gosterisi-istanbul"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300/60 transition-colors text-sm sm:text-base"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
              >
                Sihirbaz Gösterisi Deneyimlerimiz
              </Link>
              <span className="hidden sm:inline text-white/20">|</span>
              <Link
                to="/blog/sihirbaz-gokturk-at-ciftligi"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300/60 transition-colors text-sm sm:text-base"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
              >
                Göktürk At Çiftliğinde Sihirbaz Gösterisi
              </Link>
              <span className="hidden sm:inline text-white/20">|</span>
              <Link
                to="/blog/sihirbaz-kiralama-rehberi"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300/60 transition-colors text-sm sm:text-base"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
              >
                Sihirbaz Kiralama Rehberi
              </Link>
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
                Tarih + ilçe + kişi sayısı bilgilerinizi gönderdiğinizde çevrimiçi rezervasyon sorumlumuza mesaj gider ve size hızlı fiyat dönüşü yapılır.
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

                <div>
                  <label className="block text-xs text-white/90 font-medium mb-1.5">Kişi Sayısı</label>
                  <input
                    type="text"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors"
                    placeholder="Örn: 15 çocuk, 25 davetli"
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

        <LazySection minHeight={180}>
          <Suspense fallback={<div style={{ minHeight: 180 }} />}>
            <TrustSection />
          </Suspense>
        </LazySection>

        {/* SEO Hizmet Detayları — Sihirbaz Mor/Pembe Tema */}
        <section className="relative py-24 sm:py-28 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.08),_transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.06),_transparent_50%)] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.3em] text-xs text-purple-400 mb-4 font-medium">İstanbul Sihirbaz Hizmetleri</p>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Sihirbaz Kiralama Hizmetlerimiz
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: 'Doğum Günü Sihirbazı',
                  text: 'Çocuğunuzun doğum günü partisi için doğum günü sihirbaz kiralama hizmetimiz, 4-12 yaş arası misafirleri 45 dakikalık akışla gösterinin içine çeker. Canlı tavşan, güvercin, masa uçurma ve yakın plan kart numaralarını tek programda birleştiriyor; doğum günü sihirbaz organizasyonu kişiselleştirilebilir.',
                  accent: 'border-purple-500/20',
                  tag: 'border-purple-500/30 text-purple-300',
                },
                {
                  num: '02',
                  title: 'Çocuk Sihirbaz Gösterisi & Animatör Sihirbaz',
                  text: 'Çocuk sihirbaz hizmetimiz klasik animatör sihirbaz konseptinin ötesinde profesyonel sahne deneyimi sunar. Çocuk sihirbaz gösterisi sırasında çocuklar aktif katılımcı; sahneye davet edilir, numaranın parçası olur. Okul etkinliği, AVM organizasyonu, kreş partisinde tercih ediliyor.',
                  accent: 'border-pink-500/20',
                  tag: 'border-pink-500/30 text-pink-300',
                },
                {
                  num: '03',
                  title: 'Sihirbaz Kiralama Fiyatları',
                  text: 'Sihirbaz kiralama fiyatları; gösteri süresi, etkinlik tipi, misafir sayısı ve tercih edilen sihirbaz şov paketine göre belirlenir. Sihirbaz fiyatları için WhatsApp\'tan hızlı teklif alın; sihirbaz hizmeti kataloğu dakikalar içinde iletilir. 45 dakikalık standart, premium illüzyon ve kurumsal organizasyon paketleri.',
                  accent: 'border-blue-500/20',
                  tag: 'border-blue-500/30 text-blue-300',
                },
                {
                  num: '04',
                  title: 'Profesyonel Sihirbaz Show & Kurumsal',
                  text: 'İstanbul sihirbaz kiralama denildiğinde akla gelen profesyonel sihirbaz şov ekibimiz, 10+ yıl sahne deneyimiyle fark yaratır. Mağaza açılışı, fuar, gala, ürün lansmanı, şirket aile günü için yapılandırılır. İllüzyonist kiralama, magic show kiralama: 5⭐ Google yorumu ve sözleşmeli güvence.',
                  accent: 'border-cyan-500/20',
                  tag: 'border-cyan-500/30 text-cyan-300',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group p-7 rounded-2xl border ${item.accent} bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
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
                Sihirbaz kiralama İstanbul hizmetimiz, tüm ilçelere (Kadıköy, Ataşehir, Üsküdar, Beşiktaş, Şişli, Bakırköy, Pendik, Maltepe ve diğerleri) gönderim yapmaktadır.
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
        <LazySection minHeight={240}>
          <Suspense fallback={<div style={{ minHeight: 240 }} />}>
            <DistrictLinksGrid
              lpServiceSlug="sihirbaz-kiralama"
              serviceName="Sihirbaz Kiralama"
              title="Hangi Bölgelerde Sihirbaz Kiralama Hizmeti Veriyoruz?"
            />
          </Suspense>
        </LazySection>

        {/* Google Müşteri Yorumları */}
        <LazySection minHeight={240}>
          <Suspense fallback={<div style={{ minHeight: 240 }} />}>
            <GoogleReviews reviews={getReviewsByTags(['sihirbaz', 'genel'])} title="Sihirbaz Kiralama Müşteri Yorumları" serviceName="Sihirbaz Kiralama İstanbul" serviceUrl="/organizasyonlar/magic-show" />
          </Suspense>
        </LazySection>

        <LazySection minHeight={280}>
          <Suspense fallback={<div style={{ minHeight: 280 }} />}>
            <DeferredContentAccordion serviceKey="magic-show" />
          </Suspense>
        </LazySection>

        <LazySection minHeight={220}>
          <Suspense fallback={<div style={{ minHeight: 220 }} />}>
            <RelatedServices currentService="magic-show" />
          </Suspense>
        </LazySection>

        <LazySection minHeight={220}>
          <Suspense fallback={<div style={{ minHeight: 220 }} />}>
            <RelatedBlogPosts servicePath="/organizasyonlar/magic-show" />
          </Suspense>
        </LazySection>

        <AuthorExpertise serviceName="Sihirbaz Kiralama" />
      </main>
    </>
  )
}

export default MagicShow
