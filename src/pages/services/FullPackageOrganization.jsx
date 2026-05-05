import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema, createImageObjectSchema } from '../../utils/schemaHelpers'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import NarrativeSection from '../../components/NarrativeSection'
import GoogleReviews from '../../components/GoogleReviews'
import { getReviewsByTags } from '../../data/googleReviews'
import 'swiper/css'
import 'swiper/css/effect-fade'
import DistrictLinksGrid from '../../components/DistrictLinksGrid'
import RelatedBlogPosts from '../../components/RelatedBlogPosts'
import RelatedServices from '../../components/RelatedServices'
import { generateSrcSet } from '../../utils/responsiveImage'
import TrustSection from '../../components/TrustSection'

const FullPackageOrganization = () => {
  const faqs = [
    {
      question: 'Full paket organizasyonu nedir?',
      answer:
        'Doğum günü için ihtiyaç duyacağınız her şeyi (dekorasyon, animatör, show, catering, karakterler) tek pakette sunduğumuz anahtar teslim hizmettir. Siz sadece gelin, eğlenin!'
    },
    {
      question: 'Fiyata tam olarak neler dahil?',
      answer:
        'Konsept doğum günü ve süsleme, konsept pasta, profesyonel yüz boyama, palyaço, kostümlü karakter, sahne showu (sihirbazlık veya bubble show), popcorn & pamuk şeker arabası, profesyonel ses sistemi ve mikrofon dahildir.'
    },
    {
      question: 'Minimum kaç kişilik organizasyon yapılabilir?',
      answer: 'Full paket organizasyonlar minimum 30 kişi için hazırlanır. Maksimum 150 kişiye kadar organizasyon yapabiliyoruz.'
    },
    {
      question: 'Ne kadar önceden rezervasyon yapmalıyım?',
      answer:
        'Full paket organizasyonlar için minimum 3-4 hafta önceden rezervasyon öneriyoruz. Özel günlerde (hafta sonları, bayramlar) daha erken rezervasyon gerekebilir.'
    }
  ]

  const heroSlides = [
    '/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.webp',
    '/content/images/fullpaket/hareketlislider3kostumlukkarakterler.webp',
    '/content/images/fullpaket/hareketlislider6osterilersihirbazhero.webp',
    '/content/images/fullpaket/hareketlislider6osterilerbubblshow.webp',
    '/content/images/fullpaket/hareketlisliderfotograf4.webp',
    '/content/images/fullpaket/hareketlislider5bubbleshowgosteriler.webp',
    '/content/images/fullpaket/hareketlislider6cikolataselalsi.webp',
    '/content/images/fullpaket/hareketlislider7popcorn.webp'
  ]

  const badgeItems = [
    { icon: '🎨', text: 'Konsept Süsleme' },
    { icon: '🎂', text: 'Özel Pasta' },
    { icon: '✨', text: 'Sahne Showu' },
    { icon: '🤡', text: 'Palyaço & Animasyon' },
    { icon: '🦸', text: 'Kostümlü Karakter' },
    { icon: '🍿', text: 'Popcorn & Pamuk Şeker' },
    { icon: '📸', text: 'Profesyonel Fotoğraf' },
    { icon: '🎤', text: 'Ses Sistemi' }
  ]


  const serviceSchema = createServiceSchema(
    'Doğum Günü Organizasyonu İstanbul | Anahtar Teslim',
    'Siz sadece gelin eğlenin! Dekorasyon, animatör, catering, show - her şey dahil anahtar teslim doğum günü organizasyonu. İstanbul genelinde profesyonel hizmet.',
    '/organizasyonlar/full-paket-organizasyon',
    'Doğum Günü Organizasyonu'
  )
  const faqSchema = createFAQSchema(faqs)
  const imageGallerySchema = createImageObjectSchema([
    { src: '/content/images/fullpaket/fullpaketanahero.webp', alt: 'Full paket doğum günü organizasyonu İstanbul' },
    { src: '/content/images/fullpaket/elsaheroo.webp', alt: 'Elsa kostümlü karakter full paket organizasyon' },
    { src: '/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.webp', alt: 'Konsept doğum günü süsleme' },
  ])

  return (
    <>
      <Seo
        title="Doğum Günü Organizasyonu İstanbul | Anahtar Teslim | Best Event"
        description="Siz sadece gelin eğlenin! Dekorasyon, animatör, catering, show - her şey dahil anahtar teslim doğum günü organizasyonu. İstanbul genelinde profesyonel hizmet."
        keywords={[
          'full paket doğum günü',
          'anahtar teslim organizasyon',
          'her şey dahil doğum günü istanbul',
          'profesyonel çocuk etkinliği',
          'çocuk partisi',
          'kutlama organizasyonu',
          'yaş günü',
          'parti planlama',
          'doğum günü süsleme',
          'balon dekorasyon',
          'tema parti',
          'konsept doğum günü'
        ]}
        image="/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.webp"
        canonicalPath="/organizasyonlar/full-paket-organizasyon"
        schema={[
          serviceSchema,
          faqSchema,
          imageGallerySchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Organizasyonlar", "item": "https://bestevent.com.tr/organizasyonlar" },
              { "@type": "ListItem", "position": 3, "name": "Full Paket Organizasyon", "item": "https://bestevent.com.tr/organizasyonlar/full-paket-organizasyon" }
            ]
          }
        ]}
      />

      {/* Hero Section - Full Screen */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={1100}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false
            }}
            loop
            className="h-full w-full bg-black"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index} className="relative h-full w-full bg-black">
                <img
                  src={slide}
                  srcSet={generateSrcSet(slide)}
                  sizes="100vw"
                  alt={`Doğum günü organizasyonu İstanbul - görsel ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={index === 0 ? { objectPosition: 'center 70%' } : undefined}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  decoding="async"
                  width={1200}
                  height={800}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}
          >
            Doğum Günü Organizasyonu İstanbul
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Tek Paket Text Section - Apple Style */}
      <section className="relative overflow-hidden bg-black py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.3em] text-xs sm:text-sm text-orange-300 mb-4 font-medium"
            >
              Doğum Günü Organizasyonu
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white mb-3"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.025em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Tek Paket. Tek Ekip. Tek Muhatap.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: '1.6',
                letterSpacing: '-0.01em',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Best Event olarak her detayı düşündük. Konsept süsleme, organik pasta, bubble show, sihirbazlık, kostümlü karakter, palyaço, yüz boyama ve profesyonel ses sistemi — hepsi tek pakette.
            </motion.p>
          </div>

          {/* Badge Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {badgeItems.map((item, idx) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5 text-white/90 text-sm font-medium"
              >
                <span className="text-lg">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="https://wa.me/905307309009?text=Merhaba%20Do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Hemen Bilgi Al
            </a>
          </motion.div>
        </div>
      </section>

      {/* Ara Slider - ClownRental Style */}
      <section className="relative overflow-hidden bg-black py-12 md:py-16">
        <div className="relative max-w-6xl mx-auto px-6">
          <Swiper
            modules={[Autoplay]}
            loop
            centeredSlides
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            speed={900}
            spaceBetween={18}
            slidesPerView={1.05}
            breakpoints={{
              768: { slidesPerView: 1.15 },
              1024: { slidesPerView: 1.35 }
            }}
            className="h-[60vh] sm:h-[65vh] md:h-[68vh]"
          >
            {heroSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl">
                  <img
                    src={slide}
                    srcSet={generateSrcSet(slide)}
                    sizes="100vw"
                    alt={`Doğum günü organizasyonu - görsel ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />
                  <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-lg">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/80 mb-2">Doğum Günü Organizasyonu</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Konsept süsleme */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/konseptnattive.webp"
          srcSet={generateSrcSet("/content/images/fullpaket/konseptnattive.webp")}
          sizes="(max-width: 1024px) 100vw, 800px"
          alt="Konsept doğum günü süsleme - İstanbul"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Konsept Doğum Günü & Süsleme"
        body="Seçeceğiniz tema parti konsepti ile çocuk partisi ve yaş günü kutlamanız unutulmaz bir hale gelecek, aradan yıllar geçse bile fotoğraf albümünüzde bu kutlama organizasyonu unutulmaz olarak hatırlanacak; MineCraft, Sonic, Unicorn, Süper Kahramanlar ve çok daha fazlası. Best Event olarak İstanbul'da 10+ yıldır profesyonel konsept doğum günü organizasyonu ve parti planlama hizmeti sunuyoruz. Çocuğunuzun hayal ettiği temayı gerçeğe dönüştürüyor, doğum günü süsleme, balon dekorasyon ve profesyonel fotoğraf çekimi ile her anı ölümsüzleştiriyoruz."
      />

      {/* Pasta */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/pastanattivee1.webp"
          srcSet={generateSrcSet("/content/images/fullpaket/pastanattivee1.webp")}
          sizes="(max-width: 1024px) 100vw, 800px"
          alt="Konsept pasta - Le Cordon Bleu kalitesi"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Konsept Pasta - Le Cordon Bleu Kalitesi"
        body="Temaya özel tasarlanmış, görsel olarak etkileyici ve lezzetli pastalarımız ile doğum gününüzün vazgeçilmez detayı. Patisserie Le Cordon Bleu mezunu ustamızın ellerinde %100 organik malzemeler ve doğal tatlandırıcılar kullanılarak hazırlanan el yapımı pastalarımız, hem göze hem damağa hitap ediyor. Özel tasarım ve temaya uygun dekorasyon ile pastanız doğum gününüzün yıldızı olacak."
      />

      {/* Yüz boyama */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp"
          srcSet={generateSrcSet("/content/images/fullpaket/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp")}
          sizes="(max-width: 1024px) 100vw, 800px"
          alt="Profesyonel yüz boyama - İstanbul"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Profesyonel Yüz Boyaması + Yetişkinler için Glitter"
        subtitle="Herkes Rengarenk Olmalı"
        body="Profesyonel yüz boyama sanatçımız, en kaliteli marka olan Playdoh'un cilt sağlığını önemseyen modellerini kullanarak çocukların yüzlerini büyülü tasarımlarla renklendiriyor. Kelebek, kaplan, prenses, süper kahraman ve daha fazla seçenek! Sadece çocuklar değil, yetişkinler için de özel glitter uygulamaları ile herkes doğum gününün bir parçası olacak. Cilt dostu boyalarımız kolayca temizlenir ve tüm gün boyunca kalıcıdır. Rengarenk yüzlerle fotoğraflarınız unutulmaz olacak!"
      />

      {/* Sihirbaz */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/sihirbaznattive.webp"
          srcSet={generateSrcSet("/content/images/fullpaket/sihirbaznattive.webp")}
          sizes="(max-width: 1024px) 100vw, 800px"
          alt="Sihirbazlık gösterisi - İstanbul"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="İnteraktif Sihirbazlık Gösterisi"
        body="İstanbul'un en iyi sihirbazlık gösterisi ile doğum gününüzün en unutulmaz anını yaşayın! Profesyonel sihirbazımız tavşan ve güvercin ile büyülü anlar yaratırken, çocukların katılımıyla interaktif numaralar sunar. 20-25 dakika süren gösterimizde çocuklar büyülenecek, kahkahalar atılacak ve sihrin gerçek olduğuna inanacaklar."
      />

      {/* Bubble */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/bubbleshownattive2.webp"
          srcSet={generateSrcSet("/content/images/fullpaket/bubbleshownattive2.webp")}
          sizes="(max-width: 1024px) 100vw, 800px"
          alt="Bubble Show - İstanbul"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Bubble Show - Binlerce Baloncuk"
        body="İstanbul'un en etkileyici Bubble Show gösterisi! Alternatif olarak dev köpük balonları ile görsel şölen sunan profesyonel gösterimizi tercih edebilirsiniz. 20-25 dakika süren gösterimizde binlerce baloncuğun havada uçuşması, dev köpük balonları ve tünelleri, LED ışık efektleri eşliğinde büyülü atmosfer. Çocukların mest olacağı, renkli ve büyülü köpük gösterisi ile doğum gününüzü unutulmaz kılıyoruz."
      />

      {/* Palyaço */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/palyaco/palyacoanaherogrupoyunlari.webp"
          srcSet={generateSrcSet("/content/images/palyaco/palyacoanaherogrupoyunlari.webp")}
          sizes="(max-width: 1024px) 100vw, 800px"
          alt="Palyaço ve animasyon - İstanbul"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Palyaço & Eğlence Dolu Aktiviteler"
        body="Profesyonel palyaço ekibimiz ile kahkaha dolu anlar ve eğlence dolu aktiviteler. Yüz boyama sanatçımız en kaliteli marka olan Playdoh'un cilt sağlığını önemseyen modellerini kullanarak çocukların yüzlerini renklendirirken, balon şekillendirme ustamız köpek, kılıç, çiçek ve kalp gibi renkli tasarımlar yapıyor. Müzikli danslar, grup oyunları ve ödüllü yarışmalarla çocukları bir arada tutuyoruz. Kar spreyi showu ile büyülü anlar, renkli konfeti yağmuru ve volkan efektleri ile görsel şölen yaratıyoruz. Temaya özel hazırlanmış pinyata ile çocukların en sevdiği sürpriz anını gerçekleştiriyoruz."
      />

      {/* Kostümlü */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/elsaheroo.webp"
          srcSet={generateSrcSet("/content/images/fullpaket/elsaheroo.webp")}
          sizes="(max-width: 1024px) 100vw, 800px"
          alt="Kostümlü karakter - İstanbul"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Kostümlü Animatör"
        body="İstediğiniz temaya uygun kostümlü karakter ile çocukların hayallerini gerçeğe dönüştürüyoruz. Elsa'dan Spider-Man'e, Mickey Mouse'dan Paw Patrol'e kadar geniş karakter seçeneklerimiz var. Profesyonel animatörlerimiz tarafından canlandırılan karakterlerimiz çocuklarla etkileşime girer, oyunlar oynar ve unutulmaz anlar yaratır."
      />

      {/* Ek hizmetler */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/68978382-5a6b-414b-875c-06b29db251fc.webp"
          srcSet={generateSrcSet("/content/images/fullpaket/68978382-5a6b-414b-875c-06b29db251fc.webp")}
          sizes="(max-width: 1024px) 100vw, 800px"
          alt="Ek hizmetler - Popcorn arabası"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Profesyonel Ek Hizmetler"
        body="Doğum gününüzü daha da özel kılmak için ek hizmetler sunuyoruz. Profesyonel fotoğrafçı ile etkinliğinizin her anını ölümsüzleştirin. Canlı yapım popcorn ve pamuk şeker arabası ile misafirlerinize sınırsız lezzet ikramı yapın. Alternatif olarak meyveler ve tatlılarla birlikte sınırsız çikolata keyfi sunan çikolata şelalesini tercih edebilirsiniz."
      />

      <NarrativeSection
        title="Profesyonel Ses Sistemi"
        body="Etkinliğiniz için profesyonel ses sistemi ve mikrofon kurulumu. Müzik, anons ve konuşmalar için kristal netliğinde ses kalitesi garantisi. Tüm etkinlik boyunca konuklarınızın her şeyi net bir şekilde duymasını sağlıyoruz."
      />

      {/* Blog Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Doğum günü organizasyonu planlarken detaylı rehberimizden faydalanabilirsiniz:{' '}
            <Link to="/blog/dogum-gunu-organizasyonu-rehberi" className="text-purple-600 hover:text-purple-800 font-semibold underline">
              Doğum Günü Organizasyonu Rehberi
            </Link>
            . Mekan seçimi konusunda da yardıma ihtiyacınız varsa{' '}
            <Link to="/blog/dogum-gunu-mekan-secimi" className="text-purple-600 hover:text-purple-800 font-semibold underline">
              Doğum Günü Mekan Seçimi
            </Link>
            {' '}yazımızı inceleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: '10+ Yıl Deneyim' },
              { label: '5000+ Başarılı Organizasyon' },
              { label: 'Vodafone, Metro Güvencesi' },
              { label: '%100 Mutluluk Garantisi' }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="text-3xl">✅</div>
                <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* Google Müşteri Yorumları */}
      <GoogleReviews reviews={getReviewsByTags(['dogumgunu', 'genel'])} title="Doğum Günü Organizasyonu Müşteri Yorumları" serviceName="Full Paket Organizasyon İstanbul" serviceUrl="/organizasyonlar/full-paket-organizasyon" />

      {/* FAQ */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Doğum Günü Organizasyonu Sık Sorulan Sorular</h2>
          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-xl text-white mb-3">{item.question}</h3>
                <p className="text-white leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <DistrictLinksGrid
        lpServiceSlug="dogum-gunu-organizasyonu"
        serviceName="Doğum Günü Organizasyonu"
        title="Doğum Günü Organizasyonu İstanbul Hizmet Bölgelerimiz"
      />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
            Doğum Günü Organizasyonu İstanbul - Hemen Rezervasyon Yapın!
          </h2>
          <p className="text-2xl mb-10 text-white/90">Hayalinizi gerçeğe dönüştürmenin zamanı geldi</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+905307309009"
              className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
            >
              📞 05307309009
            </a>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-lg">%100 Mutluluk Garantisi</span>
          </div>
          <p className="text-sm text-white/80">Siz mutlu değilseniz, biz mutlu değiliz.</p>
          <p className="mt-8 text-base text-white/80">
            veya{' '}
            <Link to="/iletisim" className="underline font-bold">
              iletişim formunu
            </Link>{' '}
            doldurun
          </p>
        </div>
      </section>

      <RelatedServices currentService="dogum-gunu" />
      <RelatedBlogPosts servicePath="/organizasyonlar/full-paket-organizasyon" />
    </>
  )
}

export default FullPackageOrganization
