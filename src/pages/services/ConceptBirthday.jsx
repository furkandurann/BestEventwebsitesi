import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema, createImageObjectSchema } from '../../utils/schemaHelpers'
import NarrativeSection from '../../components/NarrativeSection'
import RelatedServices from '../../components/RelatedServices'
import TrustSection from '../../components/TrustSection'
import { getConceptsIndexData } from '../../data/catalogData.async'
import DeferredContentAccordion from '../../components/DeferredContentAccordion'

const defaultHeroImages = [
  '/content/images/konseptdogumgunu/df00ef2b-d159-4e6e-bfa5-0c4458aaaa8c.webp',
  '/content/images/konseptdogumgunu/8fe9e333-1de4-4e27-ac7f-5fbc9d562e1d.webp',
  '/content/images/konseptdogumgunu/b446f7a5-e0d5-45d0-b4fb-a570cb48ff2f.webp',
  '/content/images/konseptdogumgunu/cf7514c6-76b3-44d9-8e96-cdeaf53c1784.webp',
]

const ConceptBirthday = () => {
  const [filter, setFilter] = useState('all')
  const [allConcepts, setAllConcepts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    getConceptsIndexData().then((data) => {
      if (!isMounted) return

      setAllConcepts(data || [])
      setIsLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [])

  const categories = [
    { key: 'all', label: 'Tümü' },
    { key: 'girls', label: 'Kız' },
    { key: 'boys', label: 'Erkek' },
    { key: 'unisex', label: 'Unisex' },
  ]

  const filteredConcepts = filter === 'all'
    ? allConcepts
    : allConcepts.filter(c => c.category === filter)

  const featuredConcepts = [
    allConcepts.find((concept) => concept.id === 'barbie'),
    allConcepts.find((concept) => concept.id === 'spiderman'),
    allConcepts.find((concept) => concept.id === 'safari'),
    allConcepts.find((concept) => concept.id === 'hellokitty'),
    allConcepts.find((concept) => concept.id === 'kuromi'),
    allConcepts.find((concept) => concept.id === 'pawpatrol'),
    allConcepts.find((concept) => concept.id === 'unicorn'),
    allConcepts.find((concept) => concept.id === 'alice')
  ].filter(Boolean)

  const heroImages = [
    allConcepts.find((concept) => concept.id === 'dondurma')?.heroImage || defaultHeroImages[0],
    allConcepts.find((concept) => concept.id === 'safari')?.heroImage || defaultHeroImages[1],
    allConcepts.find((concept) => concept.id === 'barbie')?.heroImage || defaultHeroImages[2],
    allConcepts.find((concept) => concept.id === 'alice')?.heroImage || defaultHeroImages[3],
  ]

  const faqs = [
    {
      question: 'Konsept pano süslemesi nedir?',
      answer: 'Konsept pano süslemesi, doğum günü partilerinde fotoğraf çekim alanı olarak kullanılan, seçilen temaya özel tasarlanmış profesyonel dekorasyon düzenlemesidir. Balon kemerleri, simli panolar, karakter figürleri, ışıklı harfler ve tematik aksesuarlarla hazırlanır.'
    },
    {
      question: 'Hangi konsept temaları mevcut?',
      answer: 'Barbie, Spider-Man, Safari, Paw Patrol, Hello Kitty, Frozen, Minnie Mouse, Galatasaray, Superman, Alice Harikalar Diyarı, Moana, Kuromi, K-Pop, Sirk, Futbol, Denizci ve çok daha fazlası! Ayrıca özel tema taleplerinize göre kişiselleştirilmiş tasarımlar da yapıyoruz.'
    },
    {
      question: 'Kurulum ne kadar sürer?',
      answer: 'Pano süsleme kurulumu ortalama 2-3 saat sürer. Ekibimiz etkinlik başlamadan önce tüm dekorasyonu tamamlar ve etkinlik sonrasında toplar. Misafirleriniz geldiğinde her şey hazır olur.'
    },
    {
      question: 'Fiyata neler dahil?',
      answer: 'Konsept pano süslemesi paketine backdrop/pano, balon kemeri düzenlemesi, karakter figürleri, ışıklı harf/rakam, silindir standlar, tematik aksesuarlar, kurulum ve toplama hizmeti dahildir.'
    },
    {
      question: 'Kendi mekanıma kurulum yapabilir misiniz?',
      answer: 'Evet! İstanbul genelinde ev, restoran, otel, villa, bahçe veya istediğiniz herhangi bir mekana kurulum yapıyoruz. Mekan boyutuna göre pano ölçüleri ayarlanabilir.'
    },
    {
      question: 'Ne kadar önceden rezervasyon yapmalıyım?',
      answer: 'Minimum 2 hafta önceden rezervasyon yapmanızı öneriyoruz. Özel tasarım talepleri ve popüler tarihler (hafta sonları, bayramlar) için 3-4 hafta önceden planlamak idealdir.'
    },
    {
      question: 'İstanbul\'un hangi bölgelerinde hizmet veriyorsunuz?',
      answer: 'Kadıköy, Beşiktaş, Şişli, Bakırköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik, Sarıyer, Beyoğlu, Başakşehir, Esenyurt dahil İstanbul\'un tüm ilçelerinde hizmet veriyoruz.'
    },
    {
      question: 'Özel tema tasarımı yaptırabilir miyim?',
      answer: 'Kesinlikle! Katalogumuzda olmayan özel temalar, renk kombinasyonları veya kişiselleştirilmiş tasarımlar için bizimle iletişime geçin. Hayalinizdeki konsepti birlikte tasarlayalım.'
    }
  ]

  const serviceSchema = createServiceSchema(
    'Konsept Doğum Günü Pano Süsleme İstanbul | 30+ Tema',
    'İstanbul\'da profesyonel konsept doğum günü pano süslemesi. Barbie, Spider-Man, Safari, Paw Patrol ve 30+ tema. Zarif balon dekorasyonu ve özel tasarım.',
    '/organizasyonlar/konsept-dogum-gunu',
    'Konsept Doğum Günü Pano Süsleme'
  )
  const faqSchema = createFAQSchema(faqs)
  const imageGallerySchema = createImageObjectSchema([
    { src: heroImages[2], alt: 'Barbie konsept doğum günü pano süsleme İstanbul' },
    { src: heroImages[1], alt: 'Safari konsept doğum günü dekorasyon' },
    { src: heroImages[3], alt: 'Alice Harikalar Diyarı konsept parti' },
    { src: heroImages[0], alt: 'Dondurma konsept doğum günü süsleme' },
  ])

  return (
    <>
      <Seo
        title="Konsept Doğum Günü Pano Süsleme İstanbul | 30+ Tema | Best Event"
        description="İstanbul'da profesyonel konsept doğum günü pano süslemesi. Barbie, Spider-Man, Safari, Hello Kitty, Paw Patrol ve 30+ zarif tema. Özenli balon dekorasyonu. ☎ 05307309009"
        keywords={[
          'konsept doğum günü',
          'pano süsleme istanbul',
          'doğum günü dekorasyon',
          'balon süsleme',
          'konsept parti süsleme',
          'doğum günü panosu',
          'tema parti dekorasyon istanbul',
          'barbie doğum günü süsleme',
          'spiderman doğum günü dekorasyon',
          'safari konsept parti',
          'bebek doğum günü süsleme',
          '1 yaş doğum günü dekorasyon'
        ]}
        image={heroImages[0]}
        canonicalPath="/organizasyonlar/konsept-dogum-gunu"
        schema={[
          serviceSchema,
          faqSchema,
          imageGallerySchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Konsept Doğum Günü Pano Süsleme", "item": "https://bestevent.com.tr/organizasyonlar/konsept-dogum-gunu" }
            ]
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 opacity-40">
          {heroImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <img
                src={img}
                alt={`Konsept doğum günü pano süsleme örneği ${i + 1}`}
                className="w-full h-full object-cover"
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-sm text-white/70 mb-6 font-medium"
          >
            Best Event Istanbul
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
            className="text-white mb-6"
          >
            Konsept Doğum Günü<br />
            <span style={{
              background: 'linear-gradient(135deg, #f9a8d4, #c084fc, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Pano Süsleme
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 max-w-2xl mx-auto mb-10"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: 1.6 }}
          >
            Zarif, şık ve özenli konseptlerimizle doğum günü kutlamalarınıza
            profesyonel bir dokunuş katıyoruz.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="#konseptler"
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
            style={{ fontSize: '1.1rem' }}
          >
            Konseptleri İncele
          </motion.a>
        </div>
      </section>

      {/* Elegant Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-4 font-medium">Zerafet & Özen</p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              color: '#1d1d1f',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}>
              Her Konsept, Bir Sanat Eseri
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)', lineHeight: 1.7 }}>
              Profesyonel dekorasyon ekibimiz, her pano süslemesini titizlikle ve tutkuyla hazırlar.
              Balon kemerleri, simli panolar, karakter figürleri ve ışıklı detaylarla
              konseptlerimiz zarif, şık ve özenlidir. Müşterilerimiz bu zerafeti yakından görmek isteyeceklerdir.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { num: '35+', label: 'Konsept Tema' },
              { num: '1500+', label: 'Mutlu Kutlama' },
              { num: '10+', label: 'Yıl Deneyim' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {stat.num}
                </div>
                <p className="text-gray-500 mt-1 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NarrativeSection
        eyebrow="PROFESYONELLİK"
        title="Sorunsuz Kurulum Süreci"
        body="Ekibimiz etkinlik öncesi 2-3 saat boyunca titizlikle çalışarak pano süslemenizi kusursuz bir şekilde hazırlar. Balon kemerleri, simli panolar, karakter figürleri ve ışıklı detaylar — her element özenle yerleştirilir. Misafirleriniz geldiğinde her şey hazırdır. Etkinlik sonrasında ekipmanlar toplanır ve mekanınız tertemiz teslim edilir."
      />

      <section className="py-16 bg-gradient-to-br from-[#fff4fb] via-white to-[#f6f3ff] border-y border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10"
          >
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.25em] text-xs text-fuchsia-500 mb-4 font-medium">Hızlı Seçim</p>
              <h2 style={{
                fontSize: 'clamp(1.85rem, 4.5vw, 2.8rem)',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                color: '#1d1d1f'
              }}>
                En Çok Sorulan Konseptler
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Ana konsept doğum günü sayfası genel hizmetin sahibi olarak kalır. Tema seçimi netleşen aileleri ise doğrudan ilgili konsept detayına indiriyoruz.
              </p>
            </div>

            <Link
              to="/hizmet-detay/konsept-dogum-gunu-pastasi"
              className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors"
            >
              Konsept Pasta Detayını İncele
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading && Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="h-44 animate-pulse bg-gray-200" />
                <div className="space-y-3 p-4">
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                  <div className="h-5 w-2/3 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}

            {!isLoading && featuredConcepts.map((concept, index) => (
              <motion.div
                key={concept.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <Link
                  to={`/konsept/${concept.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={concept.heroImage}
                      alt={`${concept.name} konsept doğum günü İstanbul`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/70 mb-1">Konsept</p>
                      <h3 className="text-white font-semibold leading-tight">{concept.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concepts Gallery */}
      <section id="konseptler" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-4 font-medium">Koleksiyon</p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              color: '#1d1d1f',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}>
              Konsept Pano Süsleme Koleksiyonu
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto" style={{ fontSize: '1.1rem' }}>
              Zarif tasarımlarımızı keşfedin, hayalinizdeki temayı seçin
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className="transition-all duration-300"
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  background: filter === cat.key ? '#1d1d1f' : 'transparent',
                  color: filter === cat.key ? '#fff' : '#6b7280',
                  border: filter === cat.key ? 'none' : '1px solid #e5e7eb'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {filteredConcepts.map((concept, index) => (
                <motion.article
                  key={concept.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="break-inside-avoid mb-5 group"
                >
                  <Link to={`/konsept/${concept.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
                      <div className="relative overflow-hidden">
                        <img
                          src={concept.heroImage}
                          alt={`${concept.name} konsept doğum günü pano süsleme İstanbul`}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-white/90 text-sm leading-relaxed line-clamp-2">{concept.description}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 style={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          background: concept.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          {concept.name}
                        </h3>
                        <p className="text-gray-400 text-xs mt-1 font-medium">Konsept Pano Süsleme</p>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {!isLoading && filteredConcepts.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center text-gray-500">
              Bu filtrede henüz konsept bulunmuyor.
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-4 font-medium">Neden Biz?</p>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              color: '#1d1d1f',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}>
              Farkımız, Detaylarda Gizli
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Premium Malzeme', desc: 'En kaliteli balonlar, simli panolar ve dayanıklı dekorasyon malzemeleri kullanıyoruz.' },
              { title: 'Kişisel Tasarım', desc: 'Her pano, çocuğunuzun adı ve yaşına özel olarak kişiselleştirilir.' },
              { title: 'Profesyonel Ekip', desc: '10+ yıl deneyimli dekoratörlerimiz her detayı özenle hazırlar.' },
              { title: 'Hızlı Kurulum', desc: 'Etkinlik öncesi 2-3 saat kurulum, sonrasında hızlı toplanma.' },
              { title: 'Tüm İstanbul', desc: 'Ev, otel, restoran, villa — İstanbul genelinde her mekana kurulum.' },
              { title: 'Fotoğraf Garantisi', desc: 'Her konsept, mükemmel fotoğraf çekim alanı olarak tasarlanır.' }
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.05rem' }}>{feat.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              color: '#1d1d1f'
            }}>
              Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          {/* İlk 2 FAQ Açık */}
          <div className="space-y-4 mb-4">
            {faqs.slice(0, 2).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '1.05rem' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Kalan FAQ - Accordion */}
          <div className="space-y-3">
            {faqs.slice(2).map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center" style={{ fontSize: '1.05rem' }}>
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <DeferredContentAccordion serviceKey="konsept-dogum-gunu" />

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: '#1d1d1f',
            marginBottom: '0.5rem'
          }}>
            Hizmet Bölgelerimiz
          </h2>
          <p className="text-gray-500 mb-10" style={{ fontSize: '1.05rem' }}>
            İstanbul'un tüm ilçelerinde konsept pano süsleme hizmeti
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              'Kadıköy', 'Beşiktaş', 'Şişli', 'Bakırköy',
              'Üsküdar', 'Maltepe', 'Kartal', 'Ataşehir',
              'Pendik', 'Sarıyer', 'Beyoğlu', 'Fatih',
              'Başakşehir', 'Küçükçekmece', 'Esenyurt', 've daha fazlası...'
            ].map((district, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="py-3 px-4 bg-neutral-50 text-gray-700 rounded-xl text-sm font-medium"
              >
                {district}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-4 font-medium">İletişim</p>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              color: '#fff',
              marginBottom: '1rem'
            }}>
              Hayalinizdeki Konsepti<br />Birlikte Tasarlayalım
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Konsept seçiminizi yapın veya özel tasarım taleplerinizi bize iletin.
              Profesyonel ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905307309009?text=Merhaba, konsept doğum günü pano süsleme hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-green-500/25 transition-all"
              >
                WhatsApp
              </a>
              <a
                href="tel:+905307309009"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                05307309009
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-6">10+ yıl deneyim &middot; 1500+ başarılı etkinlik &middot; %98 müşteri memnuniyeti</p>
          </motion.div>
        </div>
      </section>

      <RelatedServices currentService="konsept-dogum-gunu" />
    </>
  )
}

export default ConceptBirthday
