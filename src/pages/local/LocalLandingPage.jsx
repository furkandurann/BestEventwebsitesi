import { useState, useEffect, Suspense, lazy } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../../components/Seo'
import GoogleReviews from '../../components/GoogleReviews'
import { getReviewsByTags } from '../../data/googleReviews'
import { getLocalPageEntryAsync } from '../../data/localPages.async'
import DistrictBlogLinks from '../../components/DistrictBlogLinks'
import AdHero from '../../components/AdHero'

const LocationHeroShowcase = lazy(() => import('../../components/LocationHeroShowcase'))

// ─── Heading Varyant Helpers ────────────────────────────
const headingVariants = {
  serviceDetail: {
    1: (d, s) => <>{d} Bölgesinde Profesyonel <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.name} Hizmetimiz</span></>,
    2: (d, s) => <>{d} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Gösterisi</span> &amp; Organizasyonu</>,
    3: (d, s) => <>Neden {d} İçin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Best Event {s.name}</span>?</>,
  },
  faq: {
    1: (d, s) => <>{d} {s.name} Hakkında <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sık Sorulan Sorular</span></>,
    2: (d, s) => <>{d} {s.shortName} Organizasyonu — <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Merak Edilenler</span></>,
    3: (d, s) => <>{d} Bölgesi <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.name} SSS</span></>,
  },
  localStory: {
    1: (d, s) => <>{d} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Gösterisi</span> Deneyimimiz</>,
    2: (d, s) => <>{d} Bölgesinde Gerçek Bir <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Hikayesi</span></>,
    3: (d, s) => <>{d} Etkinliklerinden: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Anısı</span></>,
  },
  orgScenario: {
    1: (d, s) => <>{d} İçin Özel <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Organizasyonu</span> Kurgusu</>,
    2: (d, s) => <>{d} Bölgesine Özel <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Etkinlik Planımız</span></>,
    3: (d, s) => <>{d} {s.shortName} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Organizasyon Senaryomuz</span></>,
  },
  eventTips: {
    1: (d, s) => <>{d} Bölgesinde <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.name} Organizasyonu</span> İpuçları</>,
    2: (d, s) => <>{d} Etkinlik Rehberi: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Planlarken</span></>,
    3: (d, s) => <>{d} İçin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Organizasyon</span> Tavsiyeleri</>,
  },
  serviceProcess: {
    1: (d, s) => <>{d} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.name}</span> Nasıl İşliyor?</>,
    2: (d, s) => <>{d} Bölgesinde <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Sürecimiz</span></>,
    3: (d, s) => <>{s.name} Adım Adım: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{d} Deneyimi</span></>,
  },
  whyChooseUs: {
    1: (d, s) => <>{d} {s.name} İçin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Neden Best Event?</span></>,
    2: (d, s) => <>{d} Bölgesinde {s.shortName} İçin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Bizi Tercih Edin</span></>,
    3: (d, s) => <>Best Event ile {d} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{s.shortName} Farkı</span></>,
  },
}

function getH2(section, variant, districtName, service) {
  const v = headingVariants[section]
  if (!v) return null
  const fn = v[variant] || v[1]
  return fn(districtName, service)
}

// ─── Section sırası mapping ─────────────────────────────
const orderMap = {
  A: ['serviceDetail', 'localStory', 'eventTips', 'whyChooseUs', 'midCta', 'reviews', 'faq', 'orgScenario', 'serviceProcess'],
  B: ['orgScenario', 'serviceProcess', 'midCta', 'serviceDetail', 'reviews', 'localStory', 'faq', 'eventTips', 'whyChooseUs'],
  C: ['faq', 'serviceDetail', 'whyChooseUs', 'eventTips', 'localStory', 'midCta', 'reviews', 'serviceProcess', 'orgScenario'],
  D: ['localStory', 'orgScenario', 'midCta', 'eventTips', 'serviceDetail', 'reviews', 'serviceProcess', 'whyChooseUs', 'faq'],
}

const kingServiceLinks = [
  { path: '/organizasyonlar/konsept-dogum-gunu', label: 'Konsept Doğum Günü Hizmeti' },
  { path: '/organizasyonlar/dogum-gunu-organizasyonu', label: 'Doğum Günü Organizasyonu' },
  { path: '/organizasyonlar/kostumlu-karakterler', label: 'Kostümlü Karakterler' },
  { path: '/organizasyonlar/maskot-kiralama', label: 'Maskot Kiralama' },
  { path: '/organizasyonlar/palyaco-kiralama', label: 'Palyaço Kiralama' },
  { path: '/organizasyonlar/magic-show', label: 'Sihirbaz Gösterisi' },
  { path: '/organizasyonlar/pamuk-seker', label: 'Pamuk Şeker' },
  { path: '/organizasyonlar/yuz-boyama', label: 'Yüz Boyama' },
  { path: '/organizasyonlar/noel-baba-kiralama', label: 'Noel Baba Kiralama' },
]

// ─── Hizmet bazlı hero verileri (ana hizmet sayfalarından) ───
const serviceHeroData = {
  'palyaco-kiralama': {
    backgroundImage: '/content/images/palyaco/palyacoanaherogrupoyunlari.webp',
    showcaseTitle: 'Palyaço Kiralama',
    showcaseDescription: 'Yüz boyamadan grup oyunlarına, sosis balondan mini şovlara; çocukları etkinliğin içine alan palyaço akışı tek pakette.',
    showcaseEyebrow: 'Palyaço Organizasyonu',
    slides: [
      { src: '/content/images/palyaco/palyacoanaherogrupoyunlari.webp', alt: 'Palyaço grup oyunları İstanbul', tag: 'Grup Oyunları', title: 'Palyaço eşliğinde grup oyunları', description: 'Çocukları bir arada tutan, eğlenceli ve enerjik grup oyunları palyaço gösterisinin vazgeçilmez parçasıdır.' },
      { src: '/content/images/palyaco/yuzboyamapalyaco.webp', alt: 'Yüz boyama palyaço etkinliği İstanbul', tag: 'Yüz Boyama', title: 'Profesyonel yüz boyama etkinliği', description: 'Palyaço eşliğinde yapılan yüz boyama, çocukların etkinliğe olan ilgisini ilk dakikadan yakalar.' },
      { src: '/content/images/palyaco/palyacoonemlifoto.webp', alt: 'Palyaço komedi gösterisi', tag: 'Komedi Show', title: 'Kahkaha dolu komedi gösterisi', description: 'Yaş grubuna uygun komedi ve etkileşimli sahne gösterileri ile çocuklar sürece aktif olarak katılır.' },
      { src: '/content/images/palyaco/cocuklarinyuzundekiheyecan.webp', alt: 'Çocukların yüzündeki heyecan', tag: 'Çocuk Heyecanı', title: 'Çocukların yüzündeki mutluluk', description: 'Her etkinlikte çocukların gözlerindeki heyecan ve mutluluk, işimizin en değerli ödülüdür.' },
      { src: '/content/images/palyaco/palyacososisbalon.webp', alt: 'Sosis balon şekillendirme gösterisi', tag: 'Balon Şov', title: 'Sosis balon şekillendirme gösterisi', description: 'Kılıçtan çiçeğe, köpekten krala; sosis balonlar çocukların eline geçtiğinde etkinlik doruk noktasına ulaşır.' },
    ],
  },
  'magic-show': {
    backgroundImage: '/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp',
    showcaseTitle: 'Sihirbaz Kiralama',
    showcaseDescription: 'Sahne numaralarından çocuk katılımlı illüzyonlara, yakın plan sihirbazlıktan final şovuna; tüm akış tek gösteride birleşiyor.',
    showcaseEyebrow: 'Sihirbaz Gösterisi',
    slides: [
      { src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp', alt: 'Kart numaraları ile yakın plan sihirbaz gösterisi İstanbul', tag: 'Kart Numaraları', title: 'Yakın plan kart numaraları ve şaşkınlık anları', description: 'Kart numaraları, çocukların sihri göz hizasında yaşadığı bölüm olur.' },
      { src: '/content/images/sihirbaz/sihirbazhero.webp', alt: 'Sahne illüzyonları ile sihirbaz kiralama İstanbul', tag: 'İllüzyon', title: 'Büyük sahne illüzyonları ve final etkisi', description: 'Işık, tempo ve sahne hakimiyetiyle kurulan illüzyon akışı.' },
      { src: '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.webp', alt: 'Sandalye ve masa uçurma sihir numarası İstanbul', tag: 'Uçurma Numarası', title: 'Sandalye ve masa uçurma ile yüksek gerilim', description: 'Sandalye ve masa uçurma numaraları sahne enerjisini anında yükseltir.' },
      { src: '/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp', alt: 'Güvercinli sihirbaz gösterisi İstanbul', tag: 'Güvercin Numaraları', title: 'Canlı güvercinle ilk temas ve sürpriz etki', description: 'Güvercinli sihir numaraları çocukların dikkatini ilk saniyede toplar.' },
      { src: '/content/images/ahunundogumgunu/ilktemas.webp', alt: 'Tavşanlı sihirbaz kiralama gösterisi İstanbul', tag: 'Tavşan Sürprizi', title: 'Tavşanlı klasik numaralara modern yorum', description: 'Tavşanlı final anları, ailelerin en çok fotoğrafladığı bölüm olur.' },
    ],
  },
  'bubble-show': {
    backgroundImage: '/content/images/bubbleshow/anabubblee.webp',
    showcaseTitle: 'Bubble Show',
    showcaseDescription: 'Dev sabun balonlarından ışıklı sahne anlarına, interaktif oyunlardan final fotoğraflarına; bubble show akışı tek kurguda ilerliyor.',
    showcaseEyebrow: 'Bubble Show Gösterisi',
    slides: [
      { src: '/content/images/bubbleshow/anabubblee.webp', alt: 'Bubble show gösterisi İstanbul sahne girişi', tag: 'Bubble Show Sahnesi', title: 'Dev sabun balonlarıyla açılış etkisi', description: 'Bubble show açılışında kullanılan büyük sabun balonları, çocuk etkinliğine ilk saniyeden itibaren görsel hareket kazandırır.' },
      { src: '/content/images/bubbleshow/bubbleshowslider2.webp', alt: 'Köpük şov organizasyonu İstanbul', tag: 'Sabun Balonları', title: 'Işığı yakalayan saydam balon katmanları', description: 'Farklı boyuttaki sabun balonları ışıkla birleştiğinde sahnede estetik ve akıcı bir show görünümü oluşur.' },
      { src: '/content/images/bubbleshow/bubbleshowslider3.webp', alt: 'Dev balon gösterisi İstanbul çocuk etkinliği', tag: 'Dev Balon Deneyimi', title: 'Çocukların içine girebildiği dev balon anı', description: 'Dev balon deneyimi en çok merak edilen bölümlerden biridir; çocuklar gösterinin merkezine geçer.' },
      { src: '/content/images/bubbleshow/bubbleshowslider5.webp', alt: 'İnteraktif bubble show İstanbul', tag: 'İnteraktif Show', title: 'Seyirden katılıma geçen canlı oyun akışı', description: 'İnteraktif bubble show akışı köpük patlatma ve ritim takibiyle çocukların enerjisini canlı tutar.' },
      { src: '/content/images/bubbleshow/anabubbleee.webp', alt: 'LED ışıklı bubble show kiralama İstanbul', tag: 'LED ve Müzik', title: 'Müzik eşliğinde ışıklı bubble show finali', description: 'LED ışıklar ve ritimli müzikle desteklenen final bölümü, organizasyonu görsel açıdan güçlü kılar.' },
    ],
  },
  'kostumlu-karakterler': {
    backgroundImage: '/content/images/Kostumlukarakterler/elsaheroo.webp',
    showcaseTitle: 'Kostümlü Karakter Kiralama',
    showcaseDescription: 'Elsa\'dan Spiderman\'e, prenseslerden maskotlara; çocukların sevdiği karakterler İstanbul\'un her semtine aynı gün planla geliyor.',
    showcaseEyebrow: 'Kostümlü Karakterler',
    slides: [
      { src: '/content/images/Kostumlukarakterler/elsaheroo.webp', alt: 'Elsa kostümlü karakter kiralama İstanbul', tag: 'Elsa', title: 'Frozen temalı Elsa karşılama', description: 'Elsa karakteri kız çocuklarının en çok tercih ettiği karakter olarak doğum günlerinde fark yaratır.' },
      { src: '/content/images/Kostumlukarakterler/spidermana.webp', alt: 'Spiderman kostümlü karakter kiralama İstanbul', tag: 'Spiderman', title: 'Spiderman eşliğinde aksiyon dolu parti', description: 'Spiderman karakteri erkek çocukların heyecanını zirveye taşır.' },
      { src: '/content/images/Kostumlukarakterler/pamukprenseselsakurumsal.webp', alt: 'Pamuk Prenses kostümlü karakter kiralama İstanbul', tag: 'Pamuk Prenses', title: 'Masalsı prenses deneyimi', description: 'Pamuk Prenses karakteri ile masal temalı doğum günleri unutulmaz olur.' },
      { src: '/content/images/Kostumlukarakterler/minniemausekiralamaheroo.webp', alt: 'Minnie Mouse kostümlü karakter kiralama İstanbul', tag: 'Minnie Mouse', title: 'Minnie Mouse ile eğlence dolu anlar', description: 'Minnie Mouse karakteri her yaş grubuna hitap eden sevimli bir deneyim sunar.' },
    ],
  },
  'maskot-kiralama': {
    backgroundImage: '/content/images/Kostumlukarakterler/masakocaayi.webp',
    showcaseTitle: 'Maskot Kiralama',
    showcaseDescription: 'Sonic\'ten Paw Patrol\'a, Hello Kitty\'den Unicorn\'a; profesyonel maskot kiralama hizmeti İstanbul genelinde.',
    showcaseEyebrow: 'Maskot Kiralama',
    slides: [
      { src: '/content/images/Kostumlukarakterler/masakocaayi.webp', alt: 'Masa Koca Ayı maskot kiralama İstanbul', tag: 'Masa Koca Ayı', title: 'Sevimli Masa Koca Ayı maskotu', description: 'Masa Koca Ayı maskotu çocukların en çok sevdiği karakterlerden biridir.' },
      { src: '/content/images/Kostumlukarakterler/minniemause.webp', alt: 'Minnie Mouse maskot kiralama İstanbul', tag: 'Minnie Mouse', title: 'Minnie Mouse maskot deneyimi', description: 'Minnie Mouse maskotu ile kız çocukları için rüya gibi bir parti.' },
      { src: '/content/images/Kostumlukarakterler/noelanne.webp', alt: 'Noel Anne maskot kiralama İstanbul', tag: 'Noel Anne', title: 'Yılbaşı temalı maskot gösterisi', description: 'Noel Anne maskotu yılbaşı etkinliklerinde büyük ilgi görür.' },
    ],
  },
  'konsept-dogum-gunu': {
    backgroundImage: '/content/images/Anasayfa/siteanahero.webp',
    showcaseTitle: 'Konsept Doğum Günü',
    showcaseDescription: 'Barbie\'den Safari\'ye, Spider-Man\'den Hello Kitty\'ye; 30+ konsept tema ile doğum günü pano süslemesi.',
    showcaseEyebrow: 'Konsept Doğum Günü Süsleme',
    slides: [],
  },
  'pamuk-seker': {
    backgroundImage: '/content/images/Parti Ekipmanları/popcornpamukseker.webp',
    showcaseTitle: 'Pamuk Şeker Arabası Kiralama',
    showcaseDescription: 'Pamuk şekerden popcorn standına, çikolata şelalesinden servis düzenine; etkinliğinize tatlı ikramları tek kurulumda getiriyoruz.',
    showcaseEyebrow: 'Pamuk Şeker & İkram',
    slides: [
      { src: '/content/images/Parti Ekipmanları/hareketlislider6cikolataselalsi.webp', alt: 'Çikolata şelalesi kiralama İstanbul', tag: 'Çikolata Şelalesi', title: 'Çikolata şelalesi ikram servisi', description: 'Çikolata şelalesi etkinliklerde hem görsel hem lezzet açısından fark yaratır.' },
      { src: '/content/images/Parti Ekipmanları/hareketlislider7popcorn.webp', alt: 'Popcorn arabası kiralama İstanbul', tag: 'Popcorn', title: 'Taze popcorn ikram arabası', description: 'Popcorn arabası etkinliklerin vazgeçilmez ikram seçeneğidir.' },
      { src: '/content/images/Parti Ekipmanları/pamukseker.webp', alt: 'Pamuk şeker arabası kiralama İstanbul', tag: 'Pamuk Şeker', title: 'Renkli pamuk şeker deneyimi', description: 'Pamuk şeker arabası çocukların en çok sevdiği ikram seçeneklerinden biridir.' },
    ],
  },
  'dogum-gunu-organizasyonu': {
    backgroundImage: '/profesyoneldogumgunucekimleri/anaherodogumgunu.webp',
    showcaseTitle: 'Doğum Günü Organizasyonu',
    showcaseDescription: 'Konsept süsleme, organik pasta, bubble show, sihirbazlık, palyaço animasyonu tek pakette.',
    showcaseEyebrow: 'Doğum Günü Organizasyonu',
    slides: [
      { src: '/profesyoneldogumgunucekimleri/anaherodogumgunu.webp', alt: 'Profesyonel doğum günü organizasyonu İstanbul', tag: 'Doğum Günü', title: 'Profesyonel doğum günü organizasyonu', description: 'Doğum günü organizasyonu İstanbul genelinde profesyonel ekiple planlanır.' },
      { src: '/profesyoneldogumgunucekimleri/dogumgunuonemlı1.webp', alt: 'Doğum günü özel anlar', tag: 'Özel Anlar', title: 'Unutulmaz doğum günü anları', description: 'Her detayı özenle planlanan doğum günlerinde özel anlar yaratıyoruz.' },
    ],
  },
  'yuz-boyama': {
    backgroundImage: '/content/images/palyaco/yuzboyamapalyaco.webp',
    showcaseTitle: 'Yüz Boyama',
    showcaseDescription: 'Profesyonel yüz boyama etkinliği ile çocukların hayal dünyası renklerle buluşuyor.',
    showcaseEyebrow: 'Yüz Boyama Etkinliği',
    slides: [],
  },
  'noel-baba-kiralama': {
    backgroundImage: '/content/images/Kostumlukarakterler/noelanne.webp',
    showcaseTitle: 'Noel Baba Kiralama',
    showcaseDescription: 'Yılbaşı ve Noel etkinlikleri için profesyonel Noel Baba kiralama hizmeti.',
    showcaseEyebrow: 'Noel Baba Kiralama',
    slides: [],
  },
}

// ─── Shared animation props ─────────────────────────────
const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }
const sectionH2Style = { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }
const normalizeSlug = (value) => String(value || '').trim().toLowerCase().replace(/\/+$/, '')

// ═══════════════════════════════════════════════════════════
// SECTION COMPONENTS
// ═══════════════════════════════════════════════════════════

// ─── FAQ Accordion ───────────────────────────────────────
function FAQSection({ faqs, districtName, service, variant }) {
  const [openIndex, setOpenIndex] = useState(0)

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.05),_transparent_50%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-400 mb-4 font-medium">
            Sıkça Sorulan Sorular
          </p>
          <h2
            className="font-bold text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2', letterSpacing: '-0.025em' }}
          >
            {getH2('faq', variant, districtName, service)}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group"
            >
              {openIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
              )}

              <div className={`relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border ${
                openIndex === index ? 'border-purple-500/30' : 'border-white/10'
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group/button"
                >
                  <h3
                    className={`font-bold transition-colors flex-1 ${
                      openIndex === index
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                        : 'text-white group-hover/button:text-purple-400'
                    }`}
                    style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: '1.4' }}
                  >
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 rotate-180'
                      : 'bg-white/10'
                  }`}>
                    <svg className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-gray-300 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section (Final) ────────────────────────────────
function CTASection({ districtName, serviceName, ctaClosing }) {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-black to-purple-950/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.08),_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp}>
          <h2
            className="font-bold text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.2' }}
          >
            {districtName} {serviceName} İçin
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Hemen Teklif Alın</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            {ctaClosing || `${districtName} ve çevresinde profesyonel ${serviceName.toLowerCase()} hizmeti için hemen bizi arayın veya WhatsApp'tan yazın. Ücretsiz keşif ve fiyat teklifi sunuyoruz.`}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/905307309009?text=${encodeURIComponent(`Merhaba, ${districtName} bölgesinde ${serviceName} hakkında bilgi almak istiyorum`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp ile Ulaşın
            </a>
            <a
              href="tel:+905307309009"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-amber-500/60"
              style={{
                background: 'linear-gradient(135deg, #b8860b 0%, #daa520 25%, #ffd700 50%, #daa520 75%, #b8860b 100%)',
                color: '#1a0f00'
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              05307309009
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Local Story Section ────────────────────────────────
function LocalStorySection({ content, districtName, service, variant }) {
  if (!content.localStory) return null

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.06),_transparent_50%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-8" style={sectionH2Style}>
            {getH2('localStory', variant, districtName, service)}
          </h2>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-gray-300 leading-relaxed text-lg">{content.localStory}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Organization Scenario Section ──────────────────────
function OrgScenarioSection({ content, districtName, service, variant }) {
  if (!content.organizationScenario) return null

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(219,39,119,0.05),_transparent_50%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-8" style={sectionH2Style}>
            {getH2('orgScenario', variant, districtName, service)}
          </h2>
          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-500/20 rounded-2xl p-6 sm:p-8">
            <p className="text-gray-300 leading-relaxed text-lg">{content.organizationScenario}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Why Choose Us Section ──────────────────────────────
function WhyChooseUsSection({ content, districtName, service, variant }) {
  if (!content.whyChooseUs || content.whyChooseUs.length === 0) return null

  const icons = ['🎯', '⚡', '💎', '🏆', '🔒']

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-10 text-center" style={sectionH2Style}>
            {getH2('whyChooseUs', variant, districtName, service)}
          </h2>
          <div className={`grid grid-cols-1 ${content.whyChooseUs.length <= 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-5`}>
            {content.whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-purple-500/20 transition-colors"
              >
                <div className="text-3xl mb-3">{icons[i % icons.length]}</div>
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Event Tips Section ─────────────────────────────────
function EventTipsSection({ content, districtName, service, variant }) {
  if (!content.eventTips) return null

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-8" style={sectionH2Style}>
            {getH2('eventTips', variant, districtName, service)}
          </h2>
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-lg">💡</div>
              <p className="text-gray-300 leading-relaxed text-lg">{content.eventTips}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Service Process Section ────────────────────────────
function ServiceProcessSection({ content, districtName, service, variant }) {
  if (!content.serviceProcess) return null

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="font-bold text-white mb-8" style={sectionH2Style}>
            {getH2('serviceProcess', variant, districtName, service)}
          </h2>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-gray-300 leading-relaxed text-lg">{content.serviceProcess}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Mid CTA Banner ─────────────────────────────────────
function MidCtaSection({ content, districtName, serviceName }) {
  return (
    <section className="py-10 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-y border-purple-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white text-lg font-medium mb-4">
          {content.midCtaText || `${districtName} bölgesinde ${serviceName.toLowerCase()} için organizasyonunuzu şimdi planlayalım!`}
        </p>
        <a
          href="https://wa.me/905307309009"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp'tan Bilgi Alın
        </a>
      </div>
    </section>
  )
}

// ─── Service Detail Section ─────────────────────────────
function ServiceDetailSection({ content, district, service, variant }) {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sol: İçerik */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold text-white mb-6" style={sectionH2Style}>
              {getH2('serviceDetail', variant, district.name, service)}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {content.uniqueContent}
            </p>

            {/* Hizmet Kapsamı */}
            <h3 className="text-xl font-bold text-white mb-4">Hizmet Kapsamımız</h3>
            <ul className="space-y-3 mb-8">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Pillar sayfaya link */}
            <Link
              to={service.pillarUrl}
              className="group/pillar block mt-6 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-purple-400 mb-1 uppercase tracking-wider">Ana Hizmet Sayfamız</p>
                  <h4 className="text-base font-bold text-white group-hover/pillar:text-purple-300 transition-colors">
                    {service.name} Hizmeti — Fiyatlar ve Paketler
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    İstanbul genelinde {service.shortName.toLowerCase()} organizasyonu detayları
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/15 group-hover/pillar:bg-purple-500/25 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-purple-400 group-hover/pillar:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Sağ: Bölge Bilgisi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Bölge Kartı */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {district.name} Hizmet Bölgemiz
              </h3>
              <p className="text-gray-400 mb-4">{district.description}</p>

              {/* Local Insight */}
              {district.localInsight && (
                <p className="text-gray-400 mb-4 text-sm italic border-l-2 border-purple-500/30 pl-3">
                  {district.localInsight}
                </p>
              )}

              {/* Mahalleler */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Hizmet Verdiğimiz Mahalleler</h4>
                <div className="flex flex-wrap gap-2">
                  {district.neighborhoods.map(n => (
                    <span key={n} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Etkinlik Mekanları */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Popüler Etkinlik Alanları</h4>
                <div className="flex flex-wrap gap-2">
                  {district.eventVenues.map(v => (
                    <span key={v} className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-300 text-xs font-medium">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hızlı Bilgi Kartları */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10+</div>
                <div className="text-gray-400 text-sm">Yıl Deneyim</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5000+</div>
                <div className="text-gray-400 text-sm">Etkinlik</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5.0</div>
                <div className="text-gray-400 text-sm">Google Puan</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{service.duration}</div>
                <div className="text-gray-400 text-sm">Gösteri Süresi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Anchor Text Varyasyon Helper ──────────────────────
function getAnchorVariant(districtSlug) {
  let hash = 0
  for (let i = 0; i < districtSlug.length; i++) {
    hash = ((hash << 5) - hash) + districtSlug.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash) % 3
}

// ─── Service Back Link (Üst - Hero'dan sonra) ─────────
function ServiceBackLinkTop({ district, service }) {
  const variant = getAnchorVariant(district.slug)

  const paragraphs = [
    <>
      {district.name} bölgesinde <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">{service.name}</Link> hizmetimiz hakkında detaylı bilgi almak için ana hizmet sayfamızı ziyaret edebilirsiniz. Fiyatlandırma, paket seçenekleri ve İstanbul genelindeki hizmet kapsamımızı inceleyerek organizasyonunuzu daha bilinçli planlayabilirsiniz.
    </>,
    <>
      Organizasyonunuzu planlarken <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">{service.name}</Link> sayfamızı incelemenizi öneriyoruz. {district.name} dahil İstanbul'un tüm ilçelerinde sunduğumuz hizmet detayları, müşteri yorumları ve rezervasyon bilgilerine buradan ulaşabilirsiniz.
    </>,
    <>
      {district.name} ve çevresindeki etkinlikleriniz için <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">{service.name}</Link> kapsamındaki tüm paket ve fiyat seçeneklerini inceleyebilirsiniz. 10 yılı aşkın deneyimimizle İstanbul'un her köşesinde kaliteli organizasyon sunuyoruz.
    </>
  ]

  return (
    <section className="py-6 sm:py-10 bg-gradient-to-b from-black to-zinc-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigasyon — SEO hiyerarşisi ve iç link gücü */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
            <li className="text-gray-600">/</li>
            <li><Link to="/organizasyonlar/cocuk-etkinlikleri" className="hover:text-white transition-colors">Çocuk Etkinlikleri</Link></li>
            <li className="text-gray-600">/</li>
            <li><Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-medium transition-colors">{service.name}</Link></li>
            <li className="text-gray-600">/</li>
            <li className="text-white font-medium">{district.name}</li>
          </ol>
        </nav>

        <motion.div {...fadeUp}>
          <div className="bg-zinc-900/30 border border-purple-500/15 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-lg">
                {service.icon}
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-3">
                  {paragraphs[variant]}
                </p>
                <Link
                  to={service.pillarUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  ← {service.name} Ana Sayfasına Git
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Service Back Link (Alt - CTA'dan önce) ────────────
function ServiceBackLinkBottom({ district, service }) {
  const variant = getAnchorVariant(district.slug)

  const paragraphs = [
    <>
      İstanbul genelinde sunduğumuz <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">İstanbul {service.shortName} kiralama hizmetimizin</Link> tüm detaylarına ana sayfamızdan ulaşabilirsiniz. {district.name} dışındaki bölgelerde de aynı kalitede profesyonel organizasyon gerçekleştiriyoruz.
    </>,
    <>
      {district.name} bölgesinde edindiğimiz deneyimi İstanbul'un dört bir yanına taşıyoruz. <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">{service.name} kiralama ve organizasyon</Link> hizmetimizin kapsamını, referanslarımızı ve güncel paket fiyatlarını incelemek için ana hizmet sayfamızı ziyaret edin.
    </>,
    <>
      Profesyonel ekibimiz {district.name} ve İstanbul'un tüm ilçelerinde hizmet vermektedir. <Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors">{service.name} hizmet sayfamızda</Link> paket karşılaştırması yapabilir, müşteri deneyimlerini okuyabilir ve size en uygun organizasyon planını belirleyebilirsiniz.
    </>
  ]

  // Alt paragraf için farklı varyant (üsttekiyle çakışmasın)
  const bottomVariant = (variant + 1) % 3

  return (
    <section className="py-10 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <div className="group block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/30 to-indigo-950/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
              {paragraphs[bottomVariant]}
            </p>
            <Link
              to={service.pillarUrl}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
            >
              {service.name} Sayfasına Git
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Diğer Semtler ──────────────────────────────────────
function OtherDistrictsSection({ otherDistricts, serviceSlug, serviceName }) {
  return (
    <section className="py-16 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            İstanbul'un Diğer Bölgelerinde <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{serviceName}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {otherDistricts.map(district => (
              <Link
                key={district.slug}
                to={`/organizasyonlar/${serviceSlug}/${district.slug}`}
                className="block px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200 text-center text-sm font-medium"
              >
                {district.name} {serviceName}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Aynı Semtteki Diğer Hizmetler ─────────────────────
function OtherServicesSection({ districtSlug, districtName, otherServices }) {
  if (otherServices.length === 0) return null

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            {districtName} Bölgesindeki <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Diğer Hizmetlerimiz</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map(service => (
              <Link
                key={service.slug}
                to={`/organizasyonlar/${service.slug}/${districtSlug}`}
                className="group block p-6 bg-zinc-900/50 border border-white/10 rounded-2xl hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    {districtName} {service.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{service.description}</p>
                <div className="mt-3 flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Ana Sayfa / Ana Hizmet / Benzer Hizmetler Blokları ─────
function LocalAuthorityHub({ district, service, otherServices = [], districtSlug }) {
  const similarServices = otherServices.filter((item) => item.slug !== service.slug).slice(0, 3)
  const homepageLabel = 'Türkiye’de en çok tercih edilen etkinlik hizmetleri'
  const serviceAnchor = `Tüm ${service.name} hizmetleri`

  return (
    <section className="py-10 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">Ana Sayfa</h3>
              <p className="text-white/90 text-base mb-4">
                Tüm İstanbul için hızlı ve merkezi planlama isterseniz anasayfamızı ziyaret edin.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
              >
                {homepageLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/40 to-indigo-950/20 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">Ana Hizmet</h3>
              <p className="text-white/90 text-base mb-4">
                İlgili hizmetin kapsam, fiyat ve paket karşılaştırmaları için ana hizmet sayfasına geçin.
              </p>
              <Link
                to={service.pillarUrl}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
              >
                {serviceAnchor}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-950/40 to-purple-950/20 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">Kral Sayfalar</h3>
              <p className="text-white/90 text-base mb-4">
                Ana satış sinyallerini güçlendirmek için hedeflenen ana hizmet sayfalarımıza direkt yönlendirme.
              </p>
              <div className="flex flex-wrap gap-2">
                {kingServiceLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="inline-flex text-sm text-gray-200 bg-white/5 border border-white/10 px-3 py-2 rounded-full hover:border-purple-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {similarServices.length > 0 && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-900/40 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                İlgili Benzer Hizmetler
              </p>
              <div className="flex flex-wrap gap-2">
                {similarServices.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/organizasyonlar/${item.slug}/${districtSlug}`}
                    className="inline-flex text-sm text-gray-200 bg-white/5 border border-white/10 px-3 py-2 rounded-full hover:border-purple-400 hover:text-white transition-colors"
                  >
                    {district.name} {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// ANA COMPONENT: LocalLandingPage
// ═══════════════════════════════════════════════════════════
const LocalLandingPage = () => {
  const { service: serviceSlug, district: districtSlug } = useParams()
  const [pageEntry, setPageEntry] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    setLoading(true)

    getLocalPageEntryAsync(districtSlug, serviceSlug).then((data) => {
      if (!cancelled) {
        setPageEntry(data)
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [districtSlug, serviceSlug])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-pulse text-gray-400">Yükleniyor...</div>
      </div>
    )
  }

  // Geçersiz semt veya hizmet → 404
  if (!pageEntry) {
    return <Navigate to="/404" replace />
  }

  const {
    district,
    service,
    content,
    otherDistricts = [],
    otherServices = [],
    districtSlug: canonicalDistrictSlug = district?.slug,
    serviceSlug: canonicalServiceSlug = service?.slug
  } = pageEntry

  const variant = content.headingVariant || 1
  const sectionOrder = content.sectionOrder || 'A'
  const safeDistrictSlug = normalizeSlug(canonicalDistrictSlug || district?.slug)
  const safeServiceSlug = normalizeSlug(canonicalServiceSlug || service?.slug)
  const parentServiceCanonicalPath = service?.pillarUrl || `/organizasyonlar/${safeServiceSlug}`
  const localCanonicalPath = `${parentServiceCanonicalPath}/${safeDistrictSlug}`
  const heroData = serviceHeroData[safeServiceSlug] || null

  const pageTitle = `${district.name} ${service.name} | Profesyonel ${service.shortName} Hizmeti | Best Event`
  const pageDescription = `${district.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti. ${district.neighborhoods.slice(0, 4).join(', ')} ve çevresinde 10+ yıl deneyim, 5000+ etkinlik. Hemen teklif alın! ☎ 05307309009`

  // Schema Markup — ana hizmet sayfasına isPartOf ile bağlı, otorite konsolidasyonu
  const parentServiceUrl = `https://bestevent.com.tr${parentServiceCanonicalPath}`
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': pageTitle,
      'description': pageDescription,
      'url': `https://bestevent.com.tr${localCanonicalPath}`,
      'isPartOf': {
        '@type': 'WebPage',
        'name': `${service.name} | Best Event`,
        'url': parentServiceUrl
      },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Ana Sayfa', 'item': 'https://bestevent.com.tr' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Çocuk Etkinlikleri', 'item': 'https://bestevent.com.tr/organizasyonlar/cocuk-etkinlikleri' },
          { '@type': 'ListItem', 'position': 3, 'name': service.name, 'item': parentServiceUrl },
          { '@type': 'ListItem', 'position': 4, 'name': `${district.name} ${service.name}`, 'item': `https://bestevent.com.tr${localCanonicalPath}` }
        ]
      },
      'mainEntity': {
        '@type': 'Service',
        'name': `${district.name} ${service.name}`,
        'description': content.intro,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Best Event',
          'telephone': '+905307309009',
          'url': 'https://bestevent.com.tr',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Şemsettin Günaltay Caddesi No:175',
            'addressLocality': 'Erenköy',
            'addressRegion': 'İstanbul',
            'postalCode': '34738',
            'addressCountry': 'TR'
          }
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': `${district.name}, İstanbul`
        },
        'serviceType': service.name,
        'url': parentServiceUrl,
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'TRY',
          'priceRange': service.priceRange
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '5.0',
          'reviewCount': '217',
          'bestRating': '5',
          'worstRating': '1'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': content.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a
        }
      }))
    }
  ]

  // Google Reviews tag mapping
  const reviewTagMap = {
    'palyaco-kiralama': ['palyaco', 'genel'],
    'bubble-show': ['bubbleshow', 'genel'],
    'bubble-show-kiralama': ['bubbleshow', 'genel'],
    'magic-show': ['sihirbaz', 'genel'],
    'sihirbaz-kiralama': ['sihirbaz', 'genel'],
    'dogum-gunu-organizasyonu': ['dogumgunu', 'genel'],
    'pamuk-seker': ['pamukseker', 'genel'],
    'pamuk-seker-arabasi-kiralama': ['pamukseker', 'genel'],
    'yuz-boyama': ['yuzboyama', 'genel'],
    'profesyonel-yuz-boyama': ['yuzboyama', 'genel'],
    'popcorn-arabasi-kiralama': ['pamukseker', 'genel']
  }
  const reviewTags = reviewTagMap[normalizeSlug(safeServiceSlug)] || ['genel']

  // Section map — her section key'ine karşılık gelen component
  const sectionComponents = {
    serviceDetail: (
      <ServiceDetailSection
        key="serviceDetail"
        content={content}
        district={district}
        service={service}
        variant={variant}
      />
    ),
    localStory: (
      <LocalStorySection
        key="localStory"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    orgScenario: (
      <OrgScenarioSection
        key="orgScenario"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    whyChooseUs: (
      <WhyChooseUsSection
        key="whyChooseUs"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    eventTips: (
      <EventTipsSection
        key="eventTips"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    serviceProcess: (
      <ServiceProcessSection
        key="serviceProcess"
        content={content}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
    midCta: (
      <MidCtaSection
        key="midCta"
        content={content}
        districtName={district.name}
        serviceName={service.name}
      />
    ),
    reviews: (
      <GoogleReviews
        key="reviews"
        reviews={getReviewsByTags(reviewTags)}
        title={`${district.name} ${service.shortName} Müşteri Yorumları`}
        serviceName={`${district.name} ${service.name}`}
        serviceUrl={parentServiceCanonicalPath}
      />
    ),
    faq: (
      <FAQSection
        key="faq"
        faqs={content.faqs}
        districtName={district.name}
        service={service}
        variant={variant}
      />
    ),
  }

  // Section sırasını belirle
  const sections = (orderMap[sectionOrder] || orderMap.A).map(key => sectionComponents[key])

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonicalPath={parentServiceCanonicalPath}
        keywords={[
          `${district.name.toLowerCase()} ${service.name.toLowerCase()}`,
          `${district.name.toLowerCase()} ${service.shortName.toLowerCase()} kiralama`,
          ...service.keywords,
          district.name.toLowerCase(),
          'istanbul',
          'organizasyon'
        ]}
        schema={schemas}
      />

      {/* ── 1. HERO — Tam ekran görsel + CTA ── */}
      <AdHero
        title={`${district.name} ${service.name}`}
        backgroundImage={heroData?.backgroundImage || '/content/images/Anasayfa/siteanahero.webp'}
        subtitle={`${district.name} ve çevresinde profesyonel ${service.shortName.toLowerCase()} hizmeti`}
        primaryLabel="WhatsApp'tan Bilgi Al"
        whatsappMessage={`Merhaba, ${district.name} bölgesinde ${service.name} hakkında bilgi almak istiyorum.`}
        quickFacts={[]}
      />

      {/* ── 2. FOTOĞRAF SLIDER ── */}
      {heroData?.slides?.length > 0 && (
        <Suspense fallback={null}>
          <LocationHeroShowcase
            title={`${district.name} ${heroData.showcaseTitle}`}
            description={heroData.showcaseDescription}
            slides={heroData.slides}
            eyebrow={`${district.name} ${heroData.showcaseEyebrow}`}
          />
        </Suspense>
      )}

      {/* ── 3. BREADCRUMB + INTRO ── */}
      <section className="py-8 bg-black border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li className="text-gray-600">/</li>
              <li><Link to={service.pillarUrl} className="text-purple-400 hover:text-purple-300 transition-colors">{service.name}</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-white font-medium">{district.name}</li>
            </ol>
          </nav>
          <p className="text-white/70 leading-relaxed text-base">{content.intro}</p>
        </div>
      </section>

      {/* ── 4. DİNAMİK İÇERİK (FAQ, Hikaye, Süreç vb.) ── */}
      {sections}

      {/* ── 5. BÖLGE BİLGİLERİ (kompakt) ── */}
      {(district.venueGuide || district.transportDetails || (district.neighborhoodDetails && district.neighborhoodDetails.length > 0)) && (
        <section className="py-14 bg-gradient-to-b from-black to-zinc-950/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {district.name} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Bölge Rehberi</span>
            </h2>

            <div className="space-y-4">
              {district.venueGuide && (
                <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-sm uppercase tracking-widest text-purple-400 font-semibold mb-2">Etkinlik Mekanları</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{district.venueGuide}</p>
                </div>
              )}

              {district.transportDetails && (
                <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-sm uppercase tracking-widest text-purple-400 font-semibold mb-2">Ulaşım</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{district.transportDetails}</p>
                </div>
              )}

              {district.neighborhoodDetails && district.neighborhoodDetails.length > 0 && (
                <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-sm uppercase tracking-widest text-purple-400 font-semibold mb-3">Mahalleler</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {district.neighborhoodDetails.map((n, i) => (
                      <div key={i} className="text-sm">
                        <span className="text-white font-medium">{n.name}</span>
                        <span className="text-white/40"> — {n.tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. ANA HİZMET BAĞLANTISI ── */}
      <section className="py-10 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to={service.pillarUrl}
            className="group flex items-center justify-between p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-950/30 to-indigo-950/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-1">Ana Hizmet Sayfası</p>
              <p className="text-white font-bold text-lg">{service.name} İstanbul — Fiyat ve Rezervasyon</p>
            </div>
            <svg className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── 7. DİĞER SEMTLER ── */}
      <OtherDistrictsSection
        otherDistricts={otherDistricts}
        serviceSlug={safeServiceSlug}
        serviceName={service.name}
      />

      {/* ── 8. FINAL CTA ── */}
      <CTASection
        districtName={district.name}
        serviceName={service.name}
        ctaClosing={content.ctaClosing}
      />
    </>
  )
}

export default LocalLandingPage
