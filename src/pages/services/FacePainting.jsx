import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema } from '../../utils/schemaHelpers'
import RelatedServices from '../../components/RelatedServices'
import { trackWhatsAppClick, trackPhoneClick, trackServicePageView } from '../../utils/tracking'
import DistrictLinksGrid from '../../components/DistrictLinksGrid'
import RelatedBlogPosts from '../../components/RelatedBlogPosts'
import AuthorExpertise from '../../components/AuthorExpertise'

const heroImages = [
  '/content/images/profesyonelmakeup/profesyonelkopyasiistanbul.webp',
  '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligi.webp',
  '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp',
  '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligibeyoglu.webp',
  '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligii.webp',
  '/content/images/profesyonelmakeup/IMG_7513.webp',
  '/content/images/profesyonelmakeup/profesyonel.webp',
  '/content/images/profesyonelmakeup/profesyonelmakeupistanbul.webp',
  '/content/images/profesyonelmakeup/bdffc833-ebbf-4a9f-9395-c2b8d75520ed.webp'
]

const highlights = [
  {
    title: 'FDA onaylı, su bazlı ve cilt dostu boyalar',
    desc: 'Hipoalerjenik seçenekler, suyla kolay temizlik, hassas ciltler için ön test.',
    img: '/content/images/profesyonelmakeup/profesyonelmakeupistanbul.webp'
  },
  {
    title: '100+ karakter ve tema',
    desc: 'Süper kahraman, prenses, unicorn, hayvan ve özel gün temaları.',
    img: '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligi.webp'
  },
  {
    title: '5-10 dk hızlı uygulama',
    desc: 'Kısa bekleme süresi; 20+ çocuk için ek sanatçı ile akıcı akış.',
    img: '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp'
  },
  {
    title: 'Hijyen protokolü',
    desc: 'Tek kullanımlık ped, steril fırçalar, her çocuk için ayrı malzeme.',
    img: '/content/images/profesyonelmakeup/profesyonel.webp'
  },
  {
    title: 'İstanbul geneli yerinde hizmet',
    desc: 'Tüm ilçelerde adrese geliyoruz; ekipman ve boyalar bizden.',
    img: '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligii.webp'
  }
]


const faqs = [
  {
    question: 'Yüz boyama güvenli mi? Alerjik reaksiyon olur mu?',
    answer:
      'FDA onaylı, su bazlı ve cilt dostu boyalar kullanıyoruz. Hassas ciltler için hipoalerjenik alternatifler sunuyoruz; isterseniz ön test yapıyoruz.'
  },
  {
    question: 'Uygulama ne kadar sürer?',
    answer:
      'Her çocuk için ortalama 5-10 dakika. Basit tasarımlar 3-5 dk, detaylı tasarımlar 10-15 dk sürebilir.'
  },
  {
    question: 'Boyalar nasıl temizlenir?',
    answer:
      'Su bazlı ürünler su ve sabunla kolayca çıkar. Islak mendil veya makyaj temizleyici ile de silebilirsiniz.'
  },
  {
    question: 'Kaç yaş için uygun?',
    answer:
      'Genellikle 2-12 yaş için ideal. Daha küçük çocuklar için el boyama alternatifi sunuyoruz; yetişkinler için de uygulanabilir.'
  },
  {
    question: 'Hangi bölgelere geliyorsunuz?',
    answer:
      "İstanbul'un tüm ilçelerine; Kadıköy, Üsküdar, Maltepe, Pendik, Beylikdüzü, Bakırköy, Şişli, Sarıyer ve daha fazlası."
  },
  {
    question: 'Fiyatlar nasıl?',
    answer:
      'Süre, lokasyon ve katılımcı sayısına göre değişir. 20+ çocuk için ek sanatçı önerilir. Detaylı bilgi için arayabilirsiniz: 05307309009'
  }
]

const FacePainting = () => {
  // Track page view on mount
  useEffect(() => {
    trackServicePageView('Profesyonel Yüz Boyama', 'Çocuk Etkinlikleri')
  }, [])

  const serviceSchema = createServiceSchema(
    'Profesyonel Yüz Boyama | İstanbul Face Painting',
    'İstanbul\'da profesyonel yüz boyama: FDA onaylı boyalar, 100+ tasarım, hijyen protokolü. Çocuk etkinlikleri, doğum günü ve festivaller için yerinde hizmet.',
    '/organizasyonlar/yuz-boyama',
    'Yüz Boyama'
  )
  const faqSchema = createFAQSchema(faqs)

  return (
    <>
      <Seo
        title="Profesyonel Yüz Boyama | İstanbul Face Painting | Best Event"
        description="İstanbul'da profesyonel yüz boyama: FDA onaylı boyalar, 100+ tasarım, hijyen protokolü. Çocuk etkinlikleri, doğum günü ve festivaller için yerinde hizmet."
        keywords={[
          'yüz boyama istanbul',
          'face painting',
          'çocuk yüz boyama',
          'fda onaylı yüz boyası',
          'yüz boyama fiyatları',
          'profesyonel yüz boyama',
          'istanbul face painting',
          'yüz boyama sanatçısı',
          'çocuk makyajı',
          'glitter tattoo',
          'vücut boyama',
          'geçici dövme',
          'festivalde yüz boyama',
          'doğum gününde yüz boyama'
        ]}
        canonicalPath="/organizasyonlar/yuz-boyama"
        schema={[
          serviceSchema,
          faqSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Yüz Boyama", "item": "https://bestevent.com.tr/organizasyonlar/yuz-boyama" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BestEvent",
            "url": "https://bestevent.com.tr",
            "logo": "https://bestevent.com.tr/logo.png",
            "sameAs": [
              "https://www.instagram.com/besteventorganizasyon/",
              "https://www.instagram.com/palyacogezegenii/",
              "https://www.facebook.com/besteventorganizasyon",
              "https://www.linkedin.com/company/besteventorganizasyon",
              "https://g.co/kgs/bestevent"
            ]
          }
        ]}
      />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="bg-black py-10 px-6">
          <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,0.55)] min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
              <img
                src={heroImages[0]}
                alt="Profesyonel yüz boyama uygulaması"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/60" />
              <div className="absolute inset-0 border border-white/10 rounded-[28px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-16">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-bold text-white mb-3"
                style={{
                  fontSize: 'clamp(2.6rem, 6vw, 4.6rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                Profesyonel Yüz Boyama İstanbul
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Palyaço istatistik bloğu */}
        <section className="bg-gradient-to-b from-[#0c0c10] to-black py-16 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <div className="space-y-3 max-w-3xl mx-auto">
                <h2
                  className="text-white font-semibold"
                  style={{
                    fontSize: 'clamp(1.9rem, 4.5vw, 2.9rem)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                  }}
                >
                  İstanbul Yüz Boyama Hizmet Kalitesi: FDA Onaylı Boyalar ve Fırçalar
                </h2>

                <p
                  className="text-white/90 text-center mx-auto"
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.6rem)',
                    lineHeight: '1.5',
                    letterSpacing: '-0.02em',
                    fontWeight: 600
                  }}
                >
                  <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
                    Çocukların sağlığını önemsiyoruz
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div className="text-center">
                  <p
                    className="text-white font-semibold"
                    style={{
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
                      lineHeight: '1.35',
                      letterSpacing: '-0.012em'
                    }}
                  >
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold"
                      style={{ fontSize: 'clamp(1.7rem, 3.1vw, 2.2rem)' }}
                    >
                      +7000
                    </span>{' '}
                    Kiralama ve Etkinlik
                  </p>
                </div>

                <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                <div className="block sm:hidden w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="text-center">
                  <p
                    className="text-white font-semibold"
                    style={{
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
                      lineHeight: '1.35',
                      letterSpacing: '-0.012em'
                    }}
                  >
                    Binlerce{' '}
                    <span
                      className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold"
                      style={{ fontSize: 'clamp(1.7rem, 3.1vw, 2.2rem)' }}
                    >
                      Mutlu Çocuk
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)', letterSpacing: '-0.02em' }}
            >
              Yüz Boyama Kiralama Hizmet Görselleri İstanbul
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {heroImages.map((src, idx) => {
                const altTexts = [
                  'Profesyonel yüz boyama kelebek tasarımı',
                  'Çocuk yüz boyama süper kahraman deseni',
                  'İstanbul yüz boyama doğum günü etkinliği',
                  'Prenses temalı yüz boyama uygulaması',
                  'Renkli yüz boyama festival çalışması',
                  'Glitter detaylı yüz boyama tasarımı',
                  'Hayvan figürlü çocuk yüz boyama',
                  'Profesyonel makeup artist yüz boyama',
                  'Yüz boyama galeri çocuk etkinliği'
                ]
                return (
                  <div key={idx} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <img src={src} alt={altTexts[idx] || `Yüz boyama uygulama ${idx + 1}`} className="w-full h-56 object-cover" loading="lazy" width={400} height={224} />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-gradient-to-br from-[#0b0b0f] via-[#0f0d14] to-[#0b0b0f] py-16 px-6 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className="font-bold text-white mb-4"
                  style={{
                    fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
                    lineHeight: '1.15',
                    letterSpacing: '-0.02em',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                  }}
                >
                  İstanbul Yüz Boyama Kiralama ile Partilerinizi Renklendiriyoruz
                </h2>
                <p className="text-white/75" style={{ lineHeight: '1.7', fontSize: '1rem' }}>
                  Profesyonel yüz boyama sanatçısı kadromuzla istediğiniz zaman istediğiniz yerde oluyoruz; hijyen protokolüyle hızlı ve şık face painting deneyimi sunuyoruz. Doğum gününde yüz boyama, festivalde yüz boyama, glitter tattoo ve geçici dövme uygulamalarıyla etkinliklerinize renk katıyoruz.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 text-white flex gap-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-sm"
                  >
                    {item.img && (
                      <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" width={80} height={80} />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3
                        className="font-semibold text-lg mb-2 text-white"
                        style={{ letterSpacing: '-0.01em', lineHeight: '1.35' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-white/85 text-sm" style={{ lineHeight: '1.65' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Kapsamı */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#0c0c0f] to-black border-t border-white/10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="uppercase tracking-[0.26em] text-xs text-orange-300 mb-3 font-medium">Hizmetler</p>
              <h2
                className="font-bold text-white mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.7rem)', letterSpacing: '-0.02em' }}
              >
                Yüz Boyama Hizmet Paketleri ve Kiralama Fiyat Seçenekleri
              </h2>
              <p className="text-white/75" style={{ lineHeight: '1.7' }}>
                Doğum günü, okul festivali, açılış ve kurumsal etkinliklere uygun; 20+ çocuk için ek sanatçı desteği ile beklemeyi azaltıyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-white font-semibold text-lg mb-2">FDA Onayı</h3>
                <p className="text-white/70 text-sm" style={{ lineHeight: '1.6' }}>
                  Su bazlı, hipoalerjenik ürünler; kolay temizlenir.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-white font-semibold text-lg mb-2">Hızlı Akış</h3>
                <p className="text-white/70 text-sm" style={{ lineHeight: '1.6' }}>
                  5-10 dk/çocuk, tema önceden planlanır, bekleme azalır.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-white font-semibold text-lg mb-2">Hijyen</h3>
                <p className="text-white/70 text-sm" style={{ lineHeight: '1.6' }}>
                  Tek kullanımlık ped, fırça sterilizasyonu, temiz set.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-white font-semibold text-lg mb-2">Yerinde Hizmet</h3>
                <p className="text-white/70 text-sm" style={{ lineHeight: '1.6' }}>
                  İstanbul geneli adrese geliyoruz; ekipman bizden.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#09090d] border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.28em] text-xs text-orange-300 mb-3 font-medium">Stratejik Akış</p>
              <h2
                className="font-bold text-white mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: '1.15' }}
              >
                Yüz Boyamada Yeni URL Açmıyor, Doğru Kombinasyonları Öne Çıkarıyoruz
              </h2>
              <p className="text-white/75 leading-relaxed">
                Bu sayfadaki kutular kalite ve operasyon sinyali taşıyor; ayrı landing page olmaktan çok ana hizmeti güçlendiriyor. Bu yüzden yüz boyamayı en sık birlikte alınan organizasyonlarla ve karar aşamasındaki rehber içeriklerle bağlıyoruz.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mt-10">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-white/50 mb-3">Birlikte Alınan Hizmetler</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { to: '/organizasyonlar/palyaco-kiralama', label: 'Palyaço Kiralama' },
                    { to: '/organizasyonlar/bubble-show', label: 'Bubble Show' },
                    { to: '/organizasyonlar/kostumlu-karakterler', label: 'Kostümlü Karakterler' },
                    { to: '/organizasyonlar/dogum-gunu-organizasyonu', label: 'Doğum Günü Organizasyonu' }
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-white/50 mb-3">Karar Aşaması İçerikleri</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { to: '/blog/yuz-boyama-kiralama-rehberi', label: 'Kiralama Rehberi' },
                    { to: '/blog/yuz-boyama-dogum-gunu-organizasyonu', label: 'Doğum Günü Senaryosu' },
                    { to: '/blog/palyaco-kiralama-fiyatlari', label: 'Palyaço Fiyatları' },
                    { to: '/blog/bubble-show-fiyatlari', label: 'Bubble Show Fiyatları' }
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Bölgeleri */}
        <DistrictLinksGrid
          lpServiceSlug="profesyonel-yuz-boyama"
          serviceName="Yüz Boyama"
          title="İstanbul Genelinde Yerinde Yüz Boyama Hizmeti"
        />

        {/* İlgili Blog Yazıları */}
        <section className="py-12 px-6 bg-black border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">İlgili Blog Yazıları</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/blog/yuz-boyama-kiralama-rehberi"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/80 text-sm hover:bg-white/10 hover:text-white transition-colors"
              >
                Yüz Boyama Kiralama Rehberi
              </Link>
              <Link
                to="/blog/yuz-boyama-dogum-gunu-organizasyonu"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/80 text-sm hover:bg-white/10 hover:text-white transition-colors"
              >
                Doğum Gününde Yüz Boyama Organizasyonu
              </Link>
            </div>
          </div>
        </section>

        {/* CTA - Hemen Rezervasyon */}
        <section className="relative overflow-hidden bg-[#0b0b0f] py-20 border-t border-white/10">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.3em] text-orange-300 mb-4 text-sm font-medium"
            >
              İstanbul'un Her Yerindeyiz
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white mb-4"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              İstanbul Yüz Boyama Kiralama Hizmet Rezervasyonu
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: '1.6', letterSpacing: '-0.01em' }}
            >
              Etkinlik tarihi, lokasyon ve kişi sayısını paylaşın; aynı gün içinde size dönüş yapalım.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
              <motion.a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Profesyonel Yüz Boyama', window.location.href)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-3">
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-300 transition-colors group-hover:text-orange-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
                onClick={() => trackPhoneClick('Profesyonel Yüz Boyama', window.location.href)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-3">
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-300 transition-colors group-hover:text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      05307309009
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <RelatedServices currentService="yuz-boyama" />

        {/* SEO Hizmet Detayları — Yüz Boyama & Glitter Mor/Pembe Tema */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-[#0c0c10] via-[#0f0d14] to-black border-t border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.08),_transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.06),_transparent_50%)] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-xs text-pink-400 mb-4 font-medium">İstanbul Yüz Boyama & Glitter</p>
              <h2
                className="font-display font-bold text-white"
                style={{
                  fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.025em'
                }}
              >
                Yüz Boyama & Glitter Tattoo Kiralama
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: 'Profesyonel Yüz Boyama Kiralama',
                  text: 'Profesyonel yüz boyama kiralama hizmetimiz; çocuk doğum günü, kreş etkinliği, AVM organizasyonu için ideal. Hijyenik, hipoalerjenik FDA onaylı boyalar kullanıyoruz; kelebek, prenses, süper kahraman, kedi, aslan, dragon gibi 50+ farklı tasarım. Çocuk yüz boyama için profesyonel sanatçı kadromuz.',
                  accent: 'border-purple-500/20',
                  tag: 'border-purple-500/30 text-purple-300',
                },
                {
                  num: '02',
                  title: 'Glitter Tattoo & Vücut Süsleme',
                  text: 'Glitter tattoo kiralama hizmetimiz; ışıltılı geçici dövme, glitter yüz süsleme ve vücut sanatı içerir. Cilt dostu, su geçirmez glitter ürünleri kullanıyoruz; 5-7 gün kalıcı, sabunla kolayca silinir. Glitter doğum günü, mezuniyet, parti süslemesi için tercih edilen seçenek.',
                  accent: 'border-pink-500/20',
                  tag: 'border-pink-500/30 text-pink-300',
                },
                {
                  num: '03',
                  title: 'Yüz Boyama Fiyatları & Paketler',
                  text: 'Yüz boyama fiyatları ve glitter tattoo fiyat detayları; etkinlik süresi, misafir sayısı ve seçilen paket türüne göre belirlenir. Yüz boyama hizmeti, glitter tattoo organizasyonu ve kombine paket için WhatsApp\'tan teklif alın. Standart, premium ve VIP yüz boyama paketleri.',
                  accent: 'border-rose-500/20',
                  tag: 'border-rose-500/30 text-rose-300',
                },
                {
                  num: '04',
                  title: 'Kurumsal Yüz Boyama Etkinliği',
                  text: 'Kurumsal yüz boyama etkinliği; mağaza açılışı, AVM organizasyonu, fuar, şirket aile günü ve ürün lansmanı için profesyonel hizmet. Çocuk etkinliği yüz boyama, glitter tattoo standı ve face painting performans paketleri ile etkinliğinizi unutulmaz kılıyoruz; 5⭐ Google yorumu garanti.',
                  accent: 'border-fuchsia-500/20',
                  tag: 'border-fuchsia-500/30 text-fuchsia-300',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group p-7 rounded-2xl border ${item.accent} bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-br from-purple-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
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
                Yüz boyama ve glitter tattoo kiralama hizmetimiz İstanbul'un tüm ilçelerine (Kadıköy, Ataşehir, Üsküdar, Beşiktaş, Şişli, Bakırköy, Pendik, Maltepe) gönderim yapmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-18 px-6 bg-gradient-to-br from-gray-50 to-white text-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-bold text-gray-900 mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)', lineHeight: '1.2' }}
            >
              Yüz Boyama Kiralama Sık Sorulan Sorular
            </h2>
            <p className="text-gray-600 mb-8" style={{ lineHeight: '1.7' }}>
              Hijyen, ürün seçimi ve hizmet kapsamıyla ilgili merak edilenler.
            </p>
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <RelatedBlogPosts servicePath="/organizasyonlar/yuz-boyama" />

      <AuthorExpertise serviceName="Profesyonel Yüz Boyama" />
    </>
  )
}

export default FacePainting
