import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import HeroSlider from '../components/HeroSlider'
import Seo from '../components/Seo'
import OptimizedImage from '../components/OptimizedImage'

const Home = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Best Event - Etkinlik Organizasyonu',
    image: 'https://www.bestevent.com.tr/content/images/slider/konfeti.webp',
    '@id': 'https://www.bestevent.com.tr',
    url: 'https://www.bestevent.com.tr',
    telephone: '+905349306799',
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Şemsettin Günaltay Cad. No:175',
      addressLocality: 'Kadıköy',
      addressRegion: 'Istanbul',
      postalCode: '34000',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.9872,
      longitude: 29.0301
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '22:00'
    },
    sameAs: ['https://instagram.com/palyacogezegenii'],
    areaServed: [
      'Kadıköy',
      'Üsküdar',
      'Ataşehir',
      'Ümraniye',
      'Şişli',
      'Maslak',
      'Sarıyer',
      'Beylikdüzü',
      'Başakşehir',
      'Kartal',
      'Istanbul'
    ]
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Best Event',
    url: 'https://www.bestevent.com.tr',
    logo: 'https://www.bestevent.com.tr/content/images/slider/konfeti.webp',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+90-534-930-67-99',
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English']
      }
    ],
    sameAs: ['https://instagram.com/palyacogezegenii']
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Best Event',
    url: 'https://www.bestevent.com.tr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.bestevent.com.tr/organizasyonlar?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'İstanbul\'da hangi etkinlik hizmetleri sunuyorsunuz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Palyaço kiralama, kostümlü karakterler (Elsa, Pamuk Prenses, Spiderman, Batman), sihirbaz kiralama, profesyonel yüz boyaması, konsept doğum günü organizasyonu, kurumsal etkinlikler, canlı müzik ve dans gösterileri sunuyoruz.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hangi bölgelerde hizmet veriyorsunuz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kadıköy, Üsküdar, Ataşehir, Ümraniye, Şişli, Maslak, Sarıyer, Beylikdüzü, Başakşehir, Kartal ve tüm İstanbul genelinde hizmet vermekteyiz.'
        }
      },
      {
        '@type': 'Question',
        name: 'Etkinlik rezervasyonu için kaç gün önceden haber vermem gerekir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Etkinlik rezervasyonu için en az 1 hafta önceden haber vermenizi öneririz. Ancak acil durumlar için de elimizden geleni yaparız. 0534 930 67 99 numarasından bize ulaşabilirsiniz.'
        }
      },
      {
        '@type': 'Question',
        name: 'Fiyat teklifleri nasıl alınır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WhatsApp üzerinden 0534 930 67 99 numarasından veya iletişim formumuzu doldurarak ücretsiz fiyat teklifi alabilirsiniz. Etkinlik detaylarınızı paylaştığınızda size özel teklif hazırlıyoruz.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kurumsal etkinlikler için özel paketleriniz var mı?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Evet, kurumsal etkinlikler için özel paketlerimiz bulunmaktadır. Şirket içi organizasyonlar, ekip kaynaştırma etkinlikleri, lansman ve gala organizasyonları için profesyonel hizmet sunuyoruz.'
        }
      }
    ]
  }

  return (
    <main className="wall-bg wall-grain text-white">
      <Seo
        title="İstanbul Etkinlik Organizasyonu | Best Event | Palyaço, Sihirbaz"
        description="İstanbul'da profesyonel etkinlik organizasyonu. Palyaço kiralama, sihirbaz, kostümlü karakterler (Elsa, Pamuk Prenses, Spiderman), konsept doğum günü, kurumsal etkinlikler, canlı müzik ve dans gösterileri. Kadıköy, Üsküdar, Ataşehir ve tüm İstanbul'da hizmet. ☎ 0534 930 67 99"
        keywords={[
          'istanbul etkinlik organizasyonu',
          'palyaço kiralama istanbul',
          'sihirbaz kiralama istanbul',
          'elsa kiralama istanbul',
          'pamuk prenses kiralama',
          'spiderman kiralama',
          'batman kiralama',
          'kostümlü karakter kiralama',
          'konsept doğum günü istanbul',
          'çocuk etkinlikleri istanbul',
          'kurumsal etkinlik organizasyonu',
          'profesyonel yüz boyaması istanbul',
          'kadıköy etkinlik organizasyonu',
          'üsküdar palyaço kiralama',
          'ataşehir sihirbaz kiralama',
          'canlı müzik organizasyonu istanbul',
          'dans gösterisi istanbul',
          'oryantal dans istanbul',
          'trio kiralama istanbul',
          'açılış organizasyonu istanbul'
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [localBusinessSchema, organizationSchema, websiteSchema, faqSchema]
        }}
      />

      {/* HERO (tek büyük hero) */}
      <section className="relative min-h-[88vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <HeroSlider />
        </div>
      </section>

      {/* Siyah nefes katmanı */}
      <div className="w-full h-[8vh] bg-black" />

      {/* Manifesto + kartlar */}
      <section className="relative bg-black min-h-[120vh] md:min-h-[140vh] py-[18vh] px-6 md:px-10 pt-24 md:pt-28">
        <div className="text-center">
          {/* Mini H1 - SEO için, görsel olarak küçük */}
          <h1 className="text-center text-[clamp(1.25rem,1.8vw,1.6rem)] font-medium text-white/70 mb-32 tracking-wide">
            İstanbul Etkinlik Organizasyonu
          </h1>

          {/* Ana Slogan - Görsel olarak dominant */}
          <p className="text-white font-extrabold tracking-[-0.02em] leading-[0.95] text-[clamp(2.6rem,6vw,5.5rem)] max-w-[16ch] mx-auto text-center">
            Etkinliği değil ; <br /> Etkiyi yaratıyoruz
          </p>
        </div>

        <div className="mt-[29vh] max-w-6xl mx-auto text-center">
          {/* Supporting line */}
          <p className="font-medium text-[clamp(1.15rem,1.9vw,1.35rem)] text-[#e5e5e5] text-center mt-[4.5rem] mb-[3.5rem] max-w-[950px] mx-auto tracking-[0.25px] opacity-92 animate-fade-in">
            ve bunu her gün yapıyoruz
          </p>

          {/* 4 kart */}
          <div className="mt-[6.25rem] md:mt-[8.75rem] grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardImage
              title="Çocuk Etkinlikleri"
              desc="Konsept doğum günleri, palyaço, sihirbaz, bubble show, kostümlü karakterler."
              cta="Detayları Keşfet"
              to="/organizasyonlar/cocuk-etkinlikleri"
              img="/content/images/Anasayfa/vodafonekurumsal.webp"
              altText="İstanbul çocuk etkinlikleri - Palyaço, sihirbaz kiralama, kostümlü karakter ve konsept doğum günü organizasyonu - Best Event"
              fetchpriority="high"
            />
            <CardImageNoLink
              title="Kurumsal Etkinlikler"
              desc="Lansman, gala, festival ve premium sahne prodüksiyonları."
              img="/content/images/referanslar/sencard.webp"
              altText="İstanbul kurumsal etkinlik organizasyonu - Lansman, gala ve festival etkinlikleri - Best Event"
              fetchpriority="high"
            />
            <CardImage
              title="Müzik Etkinlikleri"
              desc="Canlı müzik, DJ, trio band ve profesyonel sahne performansları."
              cta="Detayları Keşfet"
              to="/organizasyonlar/muzik-etkinlikleri"
              img="/content/images/music/musiketkinlikleri.webp"
              altText="İstanbul canlı müzik organizasyonu - DJ, trio band ve profesyonel müzisyen kiralama - Best Event"
              fetchpriority="high"
            />
            <CardImage
              title="Dans Etkinlikleri"
              desc="Oryantal, luxury dance girl, flamenko ve modern dans gösterileri."
              cta="Detayları Keşfet"
              to="/organizasyonlar/dans-etkinlikleri"
              img="/content/images/dance/dansanagorsel1.webp"
              altText="İstanbul dans gösterileri - Oryantal dans, flamenko ve modern dans etkinlikleri - Best Event"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      {/* === KÖPRÜ METİN BÖLÜMÜ (Kartlar → Yaptık) | Film şeridine dokunma === */}
      <section className="w-full bg-black/90 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* H2 */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            Binlerce organizasyonu başarıyla
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

        {/* Cinema-Strip - AYNI KALACAK */}
        <CinemaStrip />
      </section>

      {/* Final CTA - Apple Minimal */}
      <section className="pt-24 pb-28 bg-black/90 relative">
        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Ana başlık */}
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-[680px] mx-auto text-center mb-6">
            Etkinliğiniz için tek bir mesaj yeter.
          </h2>

          {/* Alt açıklama */}
          <p className="text-lg text-gray-300 max-w-xl mx-auto text-center mb-10">
            Hayal ettiğiniz atmosferi yazın; gerisini kusursuz şekilde biz tamamlayalım.
          </p>

          {/* CTA butonu */}
          <Link
            to="/iletisim"
            className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold py-4 px-10 text-lg mx-auto shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:bg-white/90 transition"
          >
            WhatsApp'tan Yaz
          </Link>

          {/* Contact Buttons Row */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>

            {/* Phone Button */}
            <a
              href="tel:+905349306799"
              className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

// Küçük bileşenler
function CardImage({ title, desc, cta, to, img, altText, fetchpriority }) {
  return (
    <Link
      to={to}
      className="group relative rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500"
    >
      <div className="aspect-[16/11] w-full bg-black/60 overflow-hidden">
        {img && (
          <OptimizedImage
            src={img}
            alt={altText || title}
            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            loading={fetchpriority === 'high' ? 'eager' : 'lazy'}
            fetchpriority={fetchpriority}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      <div className="p-8 sm:p-10 text-left">
        <h4
          className="text-white"
          style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Poppins, sans-serif',
            marginBottom: '0.75rem'
          }}
        >
          {title}
        </h4>
        <p
          className="text-white/60"
          style={{
            fontSize: 'clamp(1rem, 1.7vw, 1.15rem)',
            lineHeight: '1.55',
            letterSpacing: '-0.011em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Poppins, sans-serif',
            marginBottom: '1.5rem'
          }}
        >
          {desc}
        </p>
        <div
          className="text-blue-400 group-hover:text-blue-300 inline-flex items-center gap-1.5"
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.1rem)',
            fontWeight: 500,
            letterSpacing: '-0.015em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Poppins, sans-serif'
          }}
        >
          {cta} <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
        </div>
      </div>
    </Link>
  )
}

function CardImageNoLink({ title, desc, img, altText, fetchpriority }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-white/[0.08]">
      <div className="aspect-[16/11] w-full bg-black/60 overflow-hidden">
        {img && (
          <OptimizedImage
            src={img}
            alt={altText || title}
            className="w-full h-full object-cover opacity-95"
            loading={fetchpriority === 'high' ? 'eager' : 'lazy'}
            fetchpriority={fetchpriority}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      <div className="p-8 sm:p-10 text-left">
        <h4
          className="text-white"
          style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Poppins, sans-serif',
            marginBottom: '0.75rem'
          }}
        >
          {title}
        </h4>
        <p
          className="text-white/60"
          style={{
            fontSize: 'clamp(1rem, 1.7vw, 1.15rem)',
            lineHeight: '1.55',
            letterSpacing: '-0.011em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Poppins, sans-serif'
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}

function StatBox({ big, small }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-7 shadow-soft animate-fade-in">
      <div className="text-3xl sm:text-4xl font-semibold">{big}</div>
      <div className="mt-2 text-white/60 text-sm uppercase tracking-wider">{small}</div>
    </div>
  )
}

function CinemaStrip() {
  const stripRef = useRef(null)
  const isPausedRef = useRef(false)
  const translateXRef = useRef(0)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const baseImages = [
    { file: 'IMG_1879 2_LE_upscale_strong_x4_tone_enhance_30_color_enhance_30.webp', alt: 'Özel doğum günü organizasyonu ve etkinlik İstanbul - Best Event' },
    { file: 'MST04619.webp', alt: 'Profesyonel etkinlik organizasyonu İstanbul - Best Event çalışma referansı' },
    { file: 'MST04637.webp', alt: 'Etkinlik ve organizasyon hizmetleri İstanbul - Best Event portfolio' },
    { file: 'pexels-maksgelatin-5046522.webp', alt: 'Özel etkinlik organizasyonu ve kutlama İstanbul - Best Event' },
    { file: 'pexels-tima-miroshnichenko-5805041.webp', alt: 'Etkinlik organizasyonu ve profesyonel hizmetler İstanbul - Best Event' },
    { file: 'vodafone1.jpeg', alt: 'Vodafone kurumsal etkinlik organizasyonu İstanbul - Best Event referans çalışması' },
    { file: 'sencard3.jpg', alt: 'SenCard kurumsal organizasyon etkinliği İstanbul - Best Event portfolio' },
    { file: 'kocholdıng1.jpg', alt: 'Koç Holding kurumsal etkinlik ve organizasyon İstanbul - Best Event' },
    { file: 'dansanagorsel1.jpeg', alt: 'Profesyonel dans gösterisi İstanbul - Oryantal dans etkinliği - Best Event' },
    { file: 'dansgirl.jpeg', alt: 'Modern dans gösterisi ve dans etkinliği organizasyonu İstanbul - Best Event' },
    { file: 'allianz1.jpeg', alt: 'Allianz kurumsal etkinlik organizasyonu İstanbul - Best Event referans' },
    { file: 'anabubbleeklee.JPG', alt: 'Bubble show etkinliği İstanbul - Best Event' },
    { file: 'bandoekle.jpg', alt: 'Bando ve müzik gösterisi İstanbul - Best Event' },
    { file: 'ekle.JPG', alt: 'Etkinlik organizasyonu İstanbul - Best Event' },
    { file: 'ekleee.jpg', alt: 'Özel etkinlik organizasyonu İstanbul - Best Event' },
    { file: 'eklee.jpg', alt: 'Profesyonel etkinlik hizmeti İstanbul - Best Event' },
    { file: 'sencard2ekle.webp', alt: 'SenCard kurumsal etkinlik İstanbul - Best Event' },
    { file: 'vodafone3ekle.JPG', alt: 'Vodafone kurumsal organizasyon İstanbul - Best Event' },
    { file: '360selfie.jpeg', alt: '360 derece selfie standı kiralama İstanbul - İnteraktif fotoğraf çekimi etkinliği - Best Event' },
    { file: '360selifee.jpeg', alt: '360 selfie booth etkinlik hizmeti İstanbul - Özel anlar için fotoğraf çözümleri - Best Event' },
    { file: 'heryasauygunbubbleshowpartisi.webp', alt: 'Her yaşa uygun bubble show partisi İstanbul - Köpük gösterisi ve eğlence organizasyonu - Best Event' },
    { file: 'sihirbazlıkgosterisivekomedishow.jpg', alt: 'Sihirbazlık gösterisi ve komedi show İstanbul - Eğlenceli etkinlik organizasyonu - Best Event' },
    { file: 'vedafotograf.webp', alt: 'Veda partisi organizasyonu İstanbul - Özel anlar için profesyonel etkinlik hizmeti - Best Event' },
  ]

  // Shuffle images on component mount
  const [scrollImages] = useState(() => shuffleArray(baseImages))

  const IMAGE_WIDTH = 450
  const GAP = 24
  const imageCount = scrollImages.length
  const totalWidth = (IMAGE_WIDTH * imageCount) + (GAP * (imageCount - 1))
  const allImages = [...scrollImages, ...scrollImages, ...scrollImages]

  // Optimized scroll - Direct DOM manipulation (NO state updates!)
  useEffect(() => {
    const scrollSpeed = 8.0 // 16x faster scroll speed
    let animationFrameId

    const autoScroll = () => {
      if (!isPausedRef.current && !isDraggingRef.current && stripRef.current) {
        translateXRef.current -= scrollSpeed

        // Reset seamlessly
        if (Math.abs(translateXRef.current) >= totalWidth) {
          translateXRef.current = 0
        }

        // Direct DOM update - NO React re-render!
        stripRef.current.style.transform = `translate3d(${translateXRef.current}px, 0, 0)`
      }

      animationFrameId = requestAnimationFrame(autoScroll)
    }

    animationFrameId = requestAnimationFrame(autoScroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [totalWidth])

  // Manual scroll handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true
    startXRef.current = e.pageX
    scrollLeftRef.current = translateXRef.current
    if (stripRef.current) {
      stripRef.current.style.cursor = 'grabbing'
    }
  }

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return
    e.preventDefault()
    const x = e.pageX
    const walk = (x - startXRef.current) * 2
    translateXRef.current = scrollLeftRef.current + walk

    // Reset if needed
    if (Math.abs(translateXRef.current) >= totalWidth) {
      translateXRef.current = 0
      scrollLeftRef.current = 0
    } else if (translateXRef.current > 0) {
      translateXRef.current = -totalWidth
      scrollLeftRef.current = -totalWidth
    }

    if (stripRef.current) {
      stripRef.current.style.transform = `translate3d(${translateXRef.current}px, 0, 0)`
    }
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
    if (stripRef.current) {
      stripRef.current.style.cursor = 'grab'
    }
  }

  const handleTouchStart = (e) => {
    isDraggingRef.current = true
    startXRef.current = e.touches[0].pageX
    scrollLeftRef.current = translateXRef.current
  }

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return
    const x = e.touches[0].pageX
    const walk = (x - startXRef.current) * 2
    translateXRef.current = scrollLeftRef.current + walk

    if (Math.abs(translateXRef.current) >= totalWidth) {
      translateXRef.current = 0
      scrollLeftRef.current = 0
    } else if (translateXRef.current > 0) {
      translateXRef.current = -totalWidth
      scrollLeftRef.current = -totalWidth
    }

    if (stripRef.current) {
      stripRef.current.style.transform = `translate3d(${translateXRef.current}px, 0, 0)`
    }
  }

  const handleTouchEnd = () => {
    isDraggingRef.current = false
  }

  const scrollManual = (direction) => {
    const distance = 500
    if (direction === 'left') {
      translateXRef.current += distance
      if (translateXRef.current > 0) {
        translateXRef.current = -totalWidth
      }
    } else {
      translateXRef.current -= distance
      if (Math.abs(translateXRef.current) >= totalWidth) {
        translateXRef.current = 0
      }
    }
    if (stripRef.current) {
      stripRef.current.style.transform = `translate3d(${translateXRef.current}px, 0, 0)`
    }
  }

  return (
    <div className="relative w-screen -mx-6 md:-mx-10">
      {/* Scroll Buttons */}
      <button
        onClick={() => scrollManual('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Sola kaydır"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => scrollManual('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Sağa kaydır"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        className="overflow-hidden"
        onMouseEnter={() => { isPausedRef.current = true }}
        onMouseLeave={() => { isPausedRef.current = false }}
      >
        <div
          ref={stripRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {allImages.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
            >
              <OptimizedImage
                src={`/content/images/Anasayfa/anasayfascroll/${item.file}`}
                alt={item.alt}
                className="h-72 w-[450px] object-cover rounded-2xl brightness-[1.15] contrast-[1.08] saturate-[1.1]"
                loading="lazy"
                sizes="450px"
                style={
                  item.file === 'kocholdıng1.jpg'
                    ? { objectPosition: 'center 30%' }
                    : item.file === 'sencard3.jpg'
                    ? { objectPosition: 'center 70%' }
                    : item.file === 'allianz1.jpeg'
                    ? { objectPosition: 'center 70%' }
                    : item.file === 'anabubbleeklee.JPG'
                    ? { objectPosition: '40% center' }
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home
