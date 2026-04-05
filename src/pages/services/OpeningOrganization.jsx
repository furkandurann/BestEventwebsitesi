import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { createServiceSchema } from '../../utils/schemaHelpers'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
}

const highlights = [
  {
    title: 'Balon Süsleme',
    description: 'Giriş kemeri, mağaza cephesi, fotoğraf noktası ve kapı çerçevesini marka renklerinize göre tasarlıyoruz.',
    tone: 'from-rose-500/20 to-amber-400/10',
    accent: 'text-rose-300',
  },
  {
    title: 'Ses Sistemi',
    description: 'Konuşmalar, fon müziği ve kurdele kesimi anonsları için mekan büyüklüğüne uygun teknik kurulum hazırlıyoruz.',
    tone: 'from-sky-500/20 to-cyan-400/10',
    accent: 'text-sky-300',
  },
  {
    title: 'Bistro Kurulumu',
    description: 'Ayakta ikram ve kısa görüşmeler için alanı sıkıştırmadan çalışan bistro masa düzeni oluşturuyoruz.',
    tone: 'from-amber-500/20 to-orange-400/10',
    accent: 'text-amber-300',
  },
  {
    title: 'Hostes Karşılama',
    description: 'Misafir yönlendirme, girişte karşılama, promosyon dağıtımı ve protokol akışını deneyimli ekip ile yönetiyoruz.',
    tone: 'from-fuchsia-500/20 to-pink-400/10',
    accent: 'text-fuchsia-300',
  },
  {
    title: 'Flama Bayrak',
    description: 'Cadde veya plaza girişinde uzaktan fark edilen, lansman hissini güçlendiren bayrak ve dış mekan düzeni kuruyoruz.',
    tone: 'from-emerald-500/20 to-lime-400/10',
    accent: 'text-emerald-300',
  },
  {
    title: 'Kurdele Kesimi',
    description: 'Konuşma, dizilim, fotoğraf açısı ve kesim anını aynı karede güçlü gösterecek sahne kurgusunu yönetiyoruz.',
    tone: 'from-violet-500/20 to-indigo-400/10',
    accent: 'text-violet-300',
  },
]

const flowSteps = [
  {
    step: '01',
    title: 'Keşif ve senaryo',
    description: 'Mekan girişi, insan akışı, kurulum süresi ve görünürlük noktalarını değerlendirip açılış gününün planını çıkarıyoruz.',
  },
  {
    step: '02',
    title: 'Tasarım ve ekip listesi',
    description: 'Balon süsleme, hostes, ses sistemi, bistro ve flama bayrak ihtiyaçlarını tek bir operasyon listesine topluyoruz.',
  },
  {
    step: '03',
    title: 'Kurulum saati',
    description: 'Etkinlikten önce tüm görsel ve teknik kurulumları tamamlayıp alanı misafir gelişine hazır hale getiriyoruz.',
  },
  {
    step: '04',
    title: 'Karşılama ve yönlendirme',
    description: 'Hostes ekibi ve müzik akışı devreye giriyor; misafirler dağınık değil kontrollü şekilde içeri alınıyor.',
  },
  {
    step: '05',
    title: 'Kurdele kesimi',
    description: 'Marka mesajı, kısa konuşma, fotoğraf anı ve kesim ritmini yöneterek açılışın en güçlü karesini oluşturuyoruz.',
  },
]

const setupFormats = [
  {
    title: 'Cadde Mağazası Açılışı',
    description: 'Yaya trafiğini durduran bir giriş kemeri, flama bayrak ve kompakt ses sistemi ile hızlı ama etkili açılış kurgusu.',
    image: '/content/images/acilisorganizasyonu/IMG_1695.webp',
    alt: 'Cadde mağazası açılış organizasyonu balon süsleme',
  },
  {
    title: 'Showroom ve Ofis Lansmanı',
    description: 'Daha rafine balon tasarımı, bistro alanı ve kontrollü hostes karşılama ile kurumsal tona uygun düzen.',
    image: '/content/images/acilisorganizasyonu/IMG_1388.webp',
    alt: 'Showroom ve ofis lansmanı açılış organizasyonu',
  },
  {
    title: 'AVM ve Plaza Girişi',
    description: 'Kalabalık yönetimi, güçlü ses sistemi ve yönlendirme ekibiyle daha büyük hacimli açılışlar için yapılandırılmış çözüm.',
    image: '/content/images/acilisorganizasyonu/IMG_1748.webp',
    alt: 'AVM ve plaza açılış organizasyonu',
  },
]

const galleryImages = [
  {
    src: '/content/images/acilisorganizasyonu/IMG_1388.webp',
    alt: 'ÇiçekSepeti açılış organizasyonu balon süslemesi',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/content/images/acilisorganizasyonu/IMG_1380.webp',
    alt: 'Balon süsleme ve kurdele kesimi alanı',
    className: '',
  },
  {
    src: '/content/images/acilisorganizasyonu/IMG_1382.webp',
    alt: 'Flama bayrak ve açık alan açılış kurulumu',
    className: '',
  },
  {
    src: '/content/images/acilisorganizasyonu/IMG_1379.webp',
    alt: 'Açılış organizasyonu detay fotoğrafı',
    className: 'md:col-span-2',
  },
]

const relatedArticles = [
  {
    title: 'Açılış Organizasyonu Blog Rehberi',
    path: '/blog/acilis-organizasyonu-istanbul',
    description: 'Operasyonun blog tarafındaki detaylı anlatımı, planlama mantığı ve destekleyici bilgiler.',
  },
  {
    title: 'Açılış Organizasyonu Maliyeti Nasıl Hesaplanır?',
    path: '/blog/acilis-organizasyonu-maliyeti-hesaplama',
    description: 'Balon, ekip, ses ve lojistik kalemlerinin bütçeye nasıl dağıldığını anlatan içerik.',
  },
  {
    title: 'Kurumsal Lansman Organizasyonu Nasıl Planlanır?',
    path: '/blog/kurumsal-lansman-organizasyonu-nasil-planlanir',
    description: 'Lansman günü için hedef kitle, mekan ve akış planlamasını derinleştiren rehber.',
  },
  {
    title: 'AVM Açılış Organizasyonunda Dikkat Edilmesi Gerekenler',
    path: '/blog/avm-acilis-organizasyonu-dikkat-edilecekler',
    description: 'Yoğun yaya trafiği olan alanlarda ses, güvenlik ve yönlendirme planına odaklanan içerik.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Açılış organizasyonu hizmetinde neler kuruyorsunuz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Balon süsleme, ses sistemi, bistro masa kurulumu, hostes karşılama, flama bayrak ve kurdele kesimi akışını birlikte planlayıp kuruyoruz.'
      }
    },
    {
      '@type': 'Question',
      name: 'Açılış organizasyonu için kaç gün önceden planlama yapılmalı?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cadde mağazası ve showroom açılışlarında ideal süre 7-10 gün, daha büyük AVM veya plaza açılışlarında ise en az 2-3 haftadır.'
      }
    },
    {
      '@type': 'Question',
      name: 'Balon süsleme marka renklerine göre hazırlanıyor mu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. Açılışın görsel dili marka renklerinize, cephe genişliğine ve mekan fotoğraf açılarına göre özel planlanır.'
      }
    }
  ]
}

const OpeningOrganization = () => {
  const serviceSchema = createServiceSchema(
    'Açılış Organizasyonu | Balon Süsleme, Hostes ve Kurdele Kesimi',
    'Açılış organizasyonu hizmeti: balon süsleme, ses sistemi, bistro kurulumu, hostes karşılama, flama bayrak ve kurdele kesimi ile profesyonel lansman akışı.',
    '/organizasyonlar/acilis-organizasyonu',
    'Açılış Organizasyonu'
  )

  return (
    <div className="min-h-screen bg-[#120a08] text-white">
      <Seo
        title="Açılış Organizasyonu | Balon Süsleme, Hostes ve Kurdele Kesimi"
        description="İstanbul açılış organizasyonu hizmeti. Balon süsleme, ses sistemi, bistro kurulumu, hostes karşılama, flama bayrak ve kurdele kesimi ile düzenli lansman akışı."
        keywords={[
          'açılış organizasyonu',
          'açılış organizasyonu istanbul',
          'balon süsleme',
          'kurdele kesimi',
          'hostes karşılama',
          'flama bayrak süslemesi',
          'ses sistemi açılış organizasyonu',
          'lansman organizasyonu',
        ]}
        canonicalPath="/organizasyonlar/acilis-organizasyonu"
        schema={[serviceSchema, faqSchema]}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.24),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.22),_transparent_30%),linear-gradient(180deg,_#1a0e0a_0%,_#120a08_65%,_#0d0807_100%)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-500 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                lineHeight: '1.02',
                letterSpacing: '-0.04em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Açılış Organizasyonu
            </h1>
            <p
              className="text-white/82 max-w-2xl mb-8"
              style={{
                fontSize: 'clamp(1.0625rem, 2vw, 1.28rem)',
                lineHeight: '1.7',
                letterSpacing: '-0.01em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Balon süsleme, ses sistemi, bistro kurulumu, hostes karşılama, flama bayrak ve kurdele kesimi dahil açılış gününü tek akışta yönetiyoruz. Markanızın ilk gününü kalabalık değil, düzenli etki üreten bir sahneye dönüştürüyoruz.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 text-sm">
              {['Balon Süsleme', 'Hostes Karşılama', 'Ses Sistemi', 'Kurdele Kesimi'].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-white/8 border border-white/10 text-white/85 backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/905307309009?text=Merhaba, acilis organizasyonu hizmeti icin bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold shadow-[0_20px_60px_rgba(245,158,11,0.25)] hover:scale-[1.02] transition-transform"
              >
                WhatsApp ile Teklif Al
              </a>
              <a
                href="tel:+905307309009"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                05307309009
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10 max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">6</div>
                <div className="text-sm text-white/65">Temel kurulum kalemi</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">1</div>
                <div className="text-sm text-white/65">Tek akışta yönetilen operasyon</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:gap-5"
          >
            <div className="col-span-2 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <img
                src="/content/images/acilisorganizasyonu/IMG_1388.webp"
                alt="ÇiçekSepeti açılış organizasyonu ana görseli"
                className="w-full h-[320px] sm:h-[380px] object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="rounded-[1.6rem] overflow-hidden border border-white/10">
              <img
                src="/content/images/acilisorganizasyonu/IMG_1379.webp"
                alt="Balon kemeri ve mağaza girişi"
                className="w-full h-[220px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-[1.6rem] overflow-hidden border border-white/10">
              <img
                src="/content/images/acilisorganizasyonu/IMG_1382.webp"
                alt="Açık alanda flama bayrak ve açılış kurulumu"
                className="w-full h-[220px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-6 bg-[linear-gradient(180deg,_#0f0807_0%,_#120c0a_100%)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="font-bold text-white mb-5"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                lineHeight: '1.08',
                letterSpacing: '-0.03em'
              }}
            >
              Neler Yapıyoruz?
              <br />
              Açılış gününün her adımını
              <br />
              markanıza göre planlıyoruz
            </h2>
            <p className="text-white/68 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: '1.75' }}>
              Açılış organizasyonunda yalnızca dekor kurmuyoruz. Giriş görünürlüğü, teknik altyapı, misafir karşılama ve seremoniyi tek bir düzen içinde birleştiriyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className={`rounded-[1.8rem] border border-white/10 bg-gradient-to-br ${item.tone} p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.16)]`}
              >
                <h3 className="text-2xl font-bold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>
                <p className="text-white/74 leading-7 text-[1.01rem]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-6 bg-[radial-gradient(circle_at_left,_rgba(251,146,60,0.12),_transparent_28%),linear-gradient(180deg,_#120c0a_0%,_#0b0908_100%)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-9 backdrop-blur-sm lg:sticky lg:top-28"
          >
            <p className="uppercase tracking-[0.24em] text-xs text-amber-300 font-semibold mb-4">
              Kurulum Akışı
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ lineHeight: '1.08', letterSpacing: '-0.03em' }}>
              Açılış günü
              <br />
              nasıl ilerliyor?
            </h2>
            <p className="text-white/72 leading-8">
              En büyük farkımız, dekoru ve operasyonu ayrı iş kalemleri olarak değil aynı senaryonun parçaları olarak yönetmemiz. Böylece açılış saati geldiğinde alan hazır, ekip hazır ve fotoğraf anı kontrollü oluyor.
            </p>
          </motion.div>

          <div className="space-y-5">
            {flowSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-[1.8rem] border border-white/10 bg-gradient-to-r from-white/6 to-white/[0.03] p-6 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-amber-400/15 border border-amber-300/20 flex items-center justify-center text-amber-300 font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
                      {item.title}
                    </h3>
                    <p className="text-white/72 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ lineHeight: '1.08', letterSpacing: '-0.03em' }}>
                Açılış organizasyonundan
                <br />
                öne çıkan kareler
              </h2>
            </div>
            <p className="text-white/65 max-w-xl leading-7">
              Balon süsleme, dış cephe kurulumu, flama bayrak, karşılama alanı ve marka görünürlüğünü aynı organizasyon içinde nasıl birleştirdiğimizi bu karelerde görebilirsiniz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={image.src}
                {...fadeUp}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className={`rounded-[1.7rem] overflow-hidden border border-white/10 ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-6 bg-[linear-gradient(180deg,_#090909_0%,_#120a08_100%)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="uppercase tracking-[0.28em] text-xs text-emerald-300 mb-4 font-semibold">
              Kullanım Senaryoları
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ lineHeight: '1.08', letterSpacing: '-0.03em' }}>
              Mekan tipine göre
              <br />
              farklı açılış çözümleri
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {setupFormats.map((item, idx) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="rounded-[1.9rem] overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/72 leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-6 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.12),_transparent_26%),linear-gradient(180deg,_#120a08_0%,_#0f0a08_100%)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-rose-950/70 via-amber-950/50 to-black p-8 sm:p-10 lg:p-12 mb-10"
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ lineHeight: '1.08', letterSpacing: '-0.03em' }}>
                  Açılış gününde ilk izlenimi
                  <br />
                  güçlü hale getiriyoruz
                </h2>
                <p className="text-white/78 leading-8 max-w-2xl">
                  Mağaza, showroom, plaza ya da AVM açılışlarında amacımız yalnızca kalabalık toplamak değil; düzenli, şık ve güven veren bir başlangıç hazırlamaktır. Markanıza uygun dekor, doğru karşılama akışı ve net seremoni planı ile açılış gününü profesyonel bir deneyime dönüştürüyoruz.
                </p>
              </div>
              <div className="rounded-[1.7rem] overflow-hidden border border-white/10">
                <img
                  src="/content/images/acilisorganizasyonu/IMG_0198.webp"
                  alt="Açılış organizasyonu sahne ve kurulum görseli"
                  loading="lazy"
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6" style={{ letterSpacing: '-0.03em' }}>
              İlgili yazılar
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.path}
                  to={article.path}
                  className="group rounded-[1.6rem] border border-white/10 bg-white/5 p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                >
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/65 mb-4">
                    {article.description}
                  </p>
                  <span className="text-sm font-semibold text-amber-300">İçeriğe Git</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center rounded-[2.2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
            Açılış gününüz için tek ekiple
            <br />
            komple kurulum planlayalım
          </h2>
          <p className="text-white/68 max-w-2xl mx-auto leading-8 mb-8">
            Tek tek tedarikçi yönetmek yerine balon süsleme, ses sistemi, hostes, bistro ve kurdele kesimi akışını birlikte kuralım. Böylece açılış saati geldiğinde yalnızca misafirlerinizi karşılamaya odaklanırsınız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905307309009?text=Merhaba, acilis organizasyonu hizmeti icin teklif almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold hover:from-green-600 hover:to-green-700 transition-colors"
            >
              WhatsApp ile Ulaşın
            </a>
            <a
              href="tel:+905307309009"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 border border-white/15 text-white font-semibold hover:bg-white/8 transition-colors"
            >
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OpeningOrganization
