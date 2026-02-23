import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Seo from '../components/Seo'
import OptimizedImage from '../components/OptimizedImage'

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const categoryRefs = useRef({})

  // Kategoriler ve fotoğraflar
  const galleryData = {
    karakterler: {
      title: 'Kostümlü Karakterler',
      subtitle: 'Masallar gerçek oluyor',
      description: 'Elsa, Spiderman, Mickey Mouse ve daha fazlası',
      gradient: 'from-purple-500 to-pink-500',
      images: [
        { src: '/content/images/Kostumlukarakterler/elsa.webp', alt: 'Elsa Karakter Kiralama İstanbul' },
        { src: '/content/images/Kostumlukarakterler/elsaheroo.webp', alt: 'Elsa Frozen İstanbul' },
        { src: '/content/images/Kostumlukarakterler/pamukprensesyenii.webp', alt: 'Pamuk Prenses Kiralama' },
        { src: '/content/images/Kostumlukarakterler/pamukprensesyeniii.webp', alt: 'Pamuk Prenses İstanbul' },
        { src: '/content/images/Kostumlukarakterler/batman.webp', alt: 'Batman Kiralama İstanbul' },
        { src: '/content/images/Kostumlukarakterler/spidermancosku.webp', alt: 'Spiderman Karakter' },
        { src: '/content/images/Kostumlukarakterler/spidermann.webp', alt: 'Spiderman İstanbul' },
        { src: '/content/images/Kostumlukarakterler/minniemause.webp', alt: 'Minnie Mouse Kiralama' },
        { src: '/content/images/Kostumlukarakterler/minnieyenii.webp', alt: 'Minnie Mouse İstanbul' },
        { src: '/content/images/Kostumlukarakterler/mickeyyeni.webp', alt: 'Mickey Mouse Kiralama' },
        { src: '/content/images/Kostumlukarakterler/palyaco.webp', alt: 'Palyaço İstanbul' },
        { src: '/content/images/Kostumlukarakterler/masakocaayi.webp', alt: 'Maşa Koca Ayı Kiralama' },
        { src: '/content/images/Kostumlukarakterler/unicornyeniii.webp', alt: 'Unicorn Karakter İstanbul' },
      ]
    },
    bubbleshow: {
      title: 'Bubble Show',
      subtitle: 'Büyülü anlar',
      description: 'Dev sabun köpükleri ve sihirli gösteriler',
      gradient: 'from-blue-400 to-cyan-500',
      images: [
        { src: '/content/images/bubbleshow/anabubble.webp', alt: 'Bubble Show İstanbul' },
        { src: '/content/images/bubbleshow/anabubblee.webp', alt: 'Sabun Köpüğü Gösterisi' },
        { src: '/content/images/bubbleshow/anabubbleee.webp', alt: 'Bubble Show Organizasyonu' },
        { src: '/content/images/bubbleshow/bubbleshowhero.webp', alt: 'Profesyonel Bubble Show' },
        { src: '/content/images/bubbleshow/bubbleshownattive.webp', alt: 'Bubble Show Kiralama' },
        { src: '/content/images/bubbleshow/bubbleshowslider.webp', alt: 'İstanbul Bubble Show' },
        { src: '/content/images/bubbleshow/bubbleshowslider2.webp', alt: 'Çocuk Bubble Show' },
        { src: '/content/images/bubbleshow/bubbleshowslider3.webp', alt: 'Doğum Günü Bubble Show' },
        { src: '/content/images/bubbleshow/IMG_1748.webp', alt: 'Bubble Show Gösterisi' },
        { src: '/content/images/bubbleshow/IMG_1797.webp', alt: 'Bubble Sanatçısı İstanbul' },
      ]
    },
    kurumsal: {
      title: 'Kurumsal',
      subtitle: 'Prestijli etkinlikler',
      description: 'Vodafone, Koç Holding, Allianz ve daha fazlası',
      gradient: 'from-slate-600 to-slate-800',
      images: [
        { src: '/content/images/Anasayfa/kocholdingkurumsal.webp', alt: 'Koç Holding Kurumsal Etkinlik' },
        { src: '/content/images/Anasayfa/anasayfascroll/kocholding2.webp', alt: 'Koç Holding Organizasyon' },
        { src: '/content/images/Anasayfa/vodafonekurumsal.webp', alt: 'Vodafone Kurumsal Etkinlik' },
        { src: '/content/images/Anasayfa/anasayfascroll/vodafone1.webp', alt: 'Vodafone Organizasyon' },
        { src: '/content/images/Anasayfa/anasayfascroll/vodafone2.webp', alt: 'Vodafone Etkinlik' },
        { src: '/content/images/Anasayfa/anasayfascroll/allianz1.webp', alt: 'Allianz Kurumsal Etkinlik' },
        { src: '/content/images/Anasayfa/anasayfascroll/360selfie.jpeg', alt: '360 Selfie Booth Etkinlik' },
        { src: '/content/images/Anasayfa/anasayfascroll/360selifee.jpeg', alt: '360 Derece Fotoğraf Deneyimi' },
      ]
    },
    dans: {
      title: 'Dans',
      subtitle: 'Ritim ve hareket',
      description: 'Profesyonel dans gösterileri',
      gradient: 'from-rose-500 to-pink-600',
      images: [
        { src: '/content/images/dance/lüksdanskarsilamaekibi.webp', alt: 'Lüks Dans Karşılama Ekibi' },
        { src: '/content/images/dance/lüksledlidansekibi.webp', alt: 'LED Dans Gösterisi' },
        { src: '/content/images/dance/oryantal/oryantalistanahero.webp', alt: 'Oryantal Dans Hero' },
        { src: '/content/images/dance/melekdansci.webp', alt: 'Melek Dansçı Gösterisi' },
        { src: '/content/images/dance/melekdansekibi.webp', alt: 'Melek Dans Ekibi' },
        { src: '/content/images/Anasayfa/balletdans.webp', alt: 'Balet Gösterisi İstanbul' },
        { src: '/content/images/Anasayfa/dansanasayfa2.webp', alt: 'Dans Gösterisi' },
        { src: '/content/images/Anasayfa/dansanasayfaanagorsel.webp', alt: 'Profesyonel Dans' },
        { src: '/content/images/Anasayfa/dansgirl.webp', alt: 'Dans Ekibi İstanbul' },
        { src: '/content/images/dance/dance1.webp', alt: 'Dans Performansı İstanbul' },
        { src: '/content/images/dance/dansanagorsel1.webp', alt: 'Dans Gösterisi Etkinlik' },
        { src: '/content/images/dance/dansanagorsel2.webp', alt: 'Dans Ekibi Performans' },
        { src: '/content/images/dance/zumbadans.webp', alt: 'Zumba Dans Gösterisi' },
        { src: '/content/images/dance/oryantal/oryantal .webp', alt: 'Oryantal Dans İstanbul' },
        { src: '/content/images/dance/oryantal/oryantalist1.webp', alt: 'Oryantal Dansçı Gösterisi' },
        { src: '/content/images/dance/oryantal/oryantalist2.webp', alt: 'Oryantal Dans Performans' },
      ]
    },
    muzik: {
      title: 'Müzik',
      subtitle: 'Canlı performanslar',
      description: 'DJ, trio, bando ve daha fazlası',
      gradient: 'from-amber-500 to-orange-600',
      images: [
        { src: '/content/images/music/anamusik.webp', alt: 'Müzik Etkinliği İstanbul' },
        { src: '/content/images/music/bando.webp', alt: 'Bando Ekibi İstanbul' },
        { src: '/content/images/music/çellist.webp', alt: 'Çellist Kiralama İstanbul' },
        { src: '/content/images/music/images.webp', alt: 'Canlı Müzik İstanbul' },
        { src: '/content/images/music/IMG_1744.webp', alt: 'Müzik Gösterisi' },
        { src: '/content/images/music/IMG_1748.webp', alt: 'Müzik Performansı' },
        { src: '/content/images/music/musiketkinlikleri.webp', alt: 'Müzik Etkinlikleri Organizasyon' },
        { src: '/content/images/music/muzikekibi.webp', alt: 'Müzik Ekibi Kiralama' },
        { src: '/content/images/music/North-Star-Jazz-Trio-London-Jazz-Band-For-Hire.webp', alt: 'Jazz Trio İstanbul' },
        { src: '/content/images/music/piyanist.webp', alt: 'Piyanist Kiralama İstanbul' },
        { src: '/content/images/music/saksafon.webp', alt: 'Saksafon Sanatçısı İstanbul' },
        { src: '/content/images/music/trio.webp', alt: 'Müzik Trio İstanbul' },
      ]
    },
    dogumgunu: {
      title: 'Doğum Günü',
      subtitle: 'Özel kutlamalar',
      description: 'Konsept parti organizasyonları',
      gradient: 'from-violet-500 to-purple-600',
      images: [
        { src: '/content/images/cocukdogumgunu/3cc6171f-7a84-42ce-9592-b7cdeda4a0a8.webp', alt: 'Doğum Günü Organizasyonu' },
        { src: '/content/images/cocukdogumgunu/4cfdb70b-f05f-41f0-b8d0-99d3a29c8593.webp', alt: 'Çocuk Doğum Günü' },
        { src: '/content/images/cocukdogumgunu/082041d3-58ff-4b19-81e0-5a6e39d81532.webp', alt: 'Parti Organizasyonu' },
        { src: '/content/images/cocukdogumgunu/14445323-1fe3-4dea-8055-831975e83963.webp', alt: 'Konsept Doğum Günü' },
        { src: '/content/images/cocukdogumgunu/21380558-d41b-42eb-8885-5588f0b8931f.webp', alt: 'Doğum Günü Partisi' },
        { src: '/content/images/IMG_9586.webp', alt: 'Doğum Günü İstanbul' },
        { src: '/content/images/IMG_9587.webp', alt: 'Parti Süsleme' },
        { src: '/content/images/IMG_9588.webp', alt: 'Doğum Günü Kutlaması' },
        { src: '/content/images/IMG_9589.webp', alt: 'Çocuk Partisi' },
      ]
    },
    parti: {
      title: 'Parti Ekipmanları',
      subtitle: 'Detaylar önemlidir',
      description: 'Pamuk şeker, çikolata şelalesi',
      gradient: 'from-teal-500 to-emerald-600',
      images: [
        { src: '/content/images/Parti Ekipmanları/cikolataselalesi.jpeg', alt: 'Çikolata Şelalesi Kiralama' },
        { src: '/content/images/Parti Ekipmanları/cikolataselalesiistanbul.jpeg', alt: 'Çikolata Şelalesi İstanbul' },
        { src: '/content/images/Parti Ekipmanları/pamukseker.jpeg', alt: 'Pamuk Şeker Arabası' },
        { src: '/content/images/Parti Ekipmanları/popcornkalitelihijyenikmalzeme.jpg', alt: 'Popcorn Makinesi' },
        { src: '/content/images/Parti Ekipmanları/cocukmasasandalyesi.jpg', alt: 'Çocuk Masa Sandalye' },
        { src: '/content/images/Parti Ekipmanları/uzaycadiri.jpg', alt: 'Uzay Çadırı' },
        { src: '/content/images/Parti Ekipmanları/limonatakosesi.jpg', alt: 'Limonata Köşesi' },
        { src: '/content/images/Parti Ekipmanları/tatliarabasi.jpg', alt: 'Tatlı Arabası Kiralama' },
      ]
    },
  }

  // Tüm kategoriler
  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'karakterler', name: 'Karakterler' },
    { id: 'bubbleshow', name: 'Bubble Show' },
    { id: 'kurumsal', name: 'Kurumsal' },
    { id: 'dans', name: 'Dans' },
    { id: 'muzik', name: 'Müzik' },
    { id: 'dogumgunu', name: 'Doğum Günü' },
    { id: 'parti', name: 'Ekipmanlar' },
  ]

  // Tüm fotoğrafları birleştir
  const allImages = Object.entries(galleryData).flatMap(([key, cat]) =>
    cat.images.map(img => ({ ...img, category: key, categoryTitle: cat.title }))
  )

  // Filtrelenmiş fotoğraflar
  const getFilteredImages = () => {
    if (selectedCategory === 'all') return allImages
    return galleryData[selectedCategory]?.images.map(img => ({
      ...img,
      category: selectedCategory,
      categoryTitle: galleryData[selectedCategory].title
    })) || []
  }

  const filteredImages = getFilteredImages()
  const slides = filteredImages.map(img => ({ src: img.src, alt: img.alt }))

  // Scroll to category section
  const scrollToCategory = (categoryId) => {
    setSelectedCategory(categoryId)
    if (categoryId !== 'all' && categoryRefs.current[categoryId]) {
      categoryRefs.current[categoryId].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Seo
        title="Galeri | Best Event İstanbul - Etkinlik Fotoğrafları"
        description="Best Event etkinlik galeri. Kostümlü karakter, bubble show, dans, müzik ve doğum günü organizasyonlarından profesyonel fotoğraflar."
        keywords={['etkinlik galeri', 'best event fotoğraflar', 'istanbul organizasyon']}
      />

      {/* Hero Section - Apple Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <h1
              className="font-semibold tracking-tight text-[#1d1d1f] mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em'
              }}
            >
              Galeri
            </h1>
            <p
              className="text-[#86868b] max-w-2xl mx-auto"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                lineHeight: 1.5,
                letterSpacing: '-0.01em'
              }}
            >
              Her anı özel kılan detaylar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation - Apple Sticky Pills */}
      <div className="sticky top-16 z-40 bg-[#fbfbfd]/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap
                  transition-all duration-300 ease-out
                  ${selectedCategory === cat.id
                    ? 'bg-[#1d1d1f] text-white shadow-lg'
                    : 'bg-white text-[#1d1d1f] hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {selectedCategory === 'all' ? (
            /* Category Showcase View */
            <motion.div
              key="showcase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-32"
            >
              {Object.entries(galleryData).map(([key, category], categoryIndex) => (
                <section
                  key={key}
                  ref={el => categoryRefs.current[key] = el}
                  className="scroll-mt-32"
                >
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <p
                      className={`text-sm font-semibold uppercase tracking-wider mb-3 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.subtitle}
                    </p>
                    <h2
                      className="text-[#1d1d1f] font-semibold mb-4"
                      style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        letterSpacing: '-0.025em',
                        lineHeight: 1.1
                      }}
                    >
                      {category.title}
                    </h2>
                    <p className="text-[#86868b] text-lg">
                      {category.description}
                    </p>
                  </motion.div>

                  {/* Bento Grid Layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {category.images.slice(0, 5).map((image, index) => {
                      // Apple-style Bento Grid layout
                      const layouts = [
                        'col-span-12 md:col-span-8 aspect-[16/10]', // Hero large
                        'col-span-6 md:col-span-4 aspect-square',   // Square right
                        'col-span-6 md:col-span-4 aspect-[4/5]',    // Portrait
                        'col-span-6 md:col-span-4 aspect-square',   // Square
                        'col-span-6 md:col-span-4 aspect-[4/5]',    // Portrait
                      ]

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`${layouts[index]} relative group cursor-pointer`}
                          onClick={() => {
                            const globalIndex = allImages.findIndex(img => img.src === image.src)
                            setPhotoIndex(globalIndex)
                            setIsOpen(true)
                          }}
                        >
                          <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-100">
                            <OptimizedImage
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              loading="lazy"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                            {/* Zoom Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 text-[#1d1d1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* View All Button */}
                  {category.images.length > 5 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-center mt-8"
                    >
                      <button
                        onClick={() => setSelectedCategory(key)}
                        className="inline-flex items-center gap-2 text-[#0066cc] hover:text-[#0055b3] font-medium transition-colors"
                      >
                        <span>Tümünü Gör ({category.images.length})</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  )}
                </section>
              ))}
            </motion.div>
          ) : (
            /* Single Category Grid View */
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="inline-flex items-center gap-2 text-[#0066cc] hover:text-[#0055b3] font-medium mb-6 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Tüm Kategoriler</span>
                </button>

                <p
                  className={`text-sm font-semibold uppercase tracking-wider mb-3 bg-gradient-to-r ${galleryData[selectedCategory]?.gradient} bg-clip-text text-transparent`}
                >
                  {galleryData[selectedCategory]?.subtitle}
                </p>
                <h2
                  className="text-[#1d1d1f] font-semibold mb-4"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1
                  }}
                >
                  {galleryData[selectedCategory]?.title}
                </h2>
                <p className="text-[#86868b] text-lg">
                  {filteredImages.length} fotoğraf
                </p>
              </div>

              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="break-inside-avoid"
                  >
                    <div
                      onClick={() => {
                        setPhotoIndex(index)
                        setIsOpen(true)
                      }}
                      className="relative group cursor-pointer rounded-2xl overflow-hidden bg-gray-100"
                    >
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Stats Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: '5000+', label: 'Etkinlik' },
              { value: '39', label: 'İlçe' },
              { value: '10+', label: 'Yıl Deneyim' },
              { value: '%98', label: 'Memnuniyet' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="text-[#1d1d1f] font-semibold mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[#86868b] text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[#1d1d1f] font-semibold mb-6"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                letterSpacing: '-0.02em'
              }}
            >
              Etkinliğinizi birlikte planlayalım
            </h2>
            <p className="text-[#86868b] text-lg mb-10 max-w-2xl mx-auto">
              Profesyonel ekibimizle hayalinizdeki etkinliği gerçeğe dönüştürün
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/905349306799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1d1d1f] text-white px-8 py-4 rounded-full font-medium hover:bg-[#333] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp ile İletişim
              </a>
              <a
                href="tel:+905349306799"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1d1d1f] px-8 py-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0534 930 67 99
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={selectedCategory === 'all' ? allImages.map(img => ({ src: img.src, alt: img.alt })) : slides}
        index={photoIndex}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />

      {/* Custom Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default Gallery
