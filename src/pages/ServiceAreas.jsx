import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Seo from '../components/Seo'

const ServiceAreas = () => {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const services = [
    { name: 'Palyaço Kiralama', link: '/organizasyonlar/palyaco-kiralama', icon: '🤡' },
    { name: 'Sihirbaz Kiralama', link: '/organizasyonlar/magic-show', icon: '🎩' },
    { name: 'Yüz Boyama', link: '/organizasyonlar/yuz-boyama', icon: '🎨' },
    { name: 'Köpük Gösterisi', link: '/organizasyonlar/bubble-show', icon: '🫧' },
    { name: 'Kostümlü Karakterler', link: '/organizasyonlar/kostumlu-karakterler', icon: '🦸' },
    { name: 'Konsept Doğum Günü', link: '/organizasyonlar/konsept-dogum-gunu', icon: '🎂' },
    { name: 'Kurumsal Etkinlik', link: '/organizasyonlar/kurumsal-etkinlik', icon: '🏢' },
    { name: 'Oryantal Dans', link: '/organizasyonlar/oryantal-dans', icon: '💃' },
    { name: 'Efe Dansı', link: '/organizasyonlar/efe-dans', icon: '🕺' },
    { name: 'Saksafon Dinletisi', link: '/organizasyonlar/saksafon', icon: '🎷' },
    { name: 'Piyanist', link: '/organizasyonlar/piyanist', icon: '🎹' },
    { name: 'Trio Band', link: '/organizasyonlar/trio-ekibi', icon: '🎵' },
  ]

  // LP slug mapping: service page link -> local landing page service slug
  const lpServiceMap = {
    '/organizasyonlar/palyaco-kiralama': 'palyaco-kiralama',
    '/organizasyonlar/magic-show': 'magic-show',
    '/organizasyonlar/yuz-boyama': 'yuz-boyama',
    '/organizasyonlar/bubble-show': 'bubble-show',
    '/organizasyonlar/konsept-dogum-gunu': 'dogum-gunu-organizasyonu',
  }

  const istanbulAreas = [
    {
      name: 'Kadıköy', slug: 'kadikoy',
      description: 'Kadıköy, Moda, Fenerbahçe, Caddebostan, Acıbadem, Koşuyolu bölgelerinde profesyonel etkinlik organizasyonu. Sahil şeridindeki açık hava etkinliklerinden kapalı mekan organizasyonlarına geniş hizmet yelpazesi.',
      stats: 'Son 12 ayda 150+ etkinlik',
      highlight: ['Çocuk Etkinlikleri', 'Düğün Organizasyonları', 'Kurumsal Etkinlikler']
    },
    {
      name: 'Üsküdar', slug: 'uskudar',
      description: 'Üsküdar, Kuzguncuk, Çengelköy, Altunizade, Acıbadem bölgelerinde etkinlik hizmeti. Boğaz manzaralı mekanlara özel organizasyonlar ve geleneksel etkinlikler.',
      stats: '100+ başarılı organizasyon',
      highlight: ['Boğaz Manzaralı Etkinlikler', 'Kültürel Organizasyonlar', 'Müzik Gösterileri']
    },
    {
      name: 'Maltepe', slug: 'maltepe',
      description: 'Maltepe, Cevizli, Küçükyalı, Bağlarbaşı, İdealtepe bölgelerinde hizmet. Maltepe sahil şeridi açık hava etkinlikleri ve park organizasyonlarında uzman kadro.',
      stats: '80+ sahil etkinliği',
      highlight: ['Sahil Organizasyonları', 'Park Etkinlikleri', 'Çocuk Şenlikleri']
    },
    {
      name: 'Ataşehir', slug: 'atasehir',
      description: 'Ataşehir, Küçükbakkalköy, Barbaros bölgelerinde kurumsal ve özel etkinlik hizmetleri. Modern mekanlar ve alışveriş merkezlerinde organizasyon deneyimi.',
      stats: '70+ kurumsal etkinlik',
      highlight: ['AVM Etkinlikleri', 'Kurumsal Organizasyonlar', 'Açılış Törenleri']
    },
    {
      name: 'Beşiktaş', slug: 'besiktas',
      description: 'Beşiktaş, Ortaköy, Bebek, Arnavutköy, Etiler, Levent, Nişantaşı bölgelerinde lüks etkinlik organizasyonları. Boğaz kıyısı ve prestijli mekanlarda özel hizmet.',
      stats: '90+ prestijli etkinlik',
      highlight: ['Lüks Düğünler', 'Gala Geceleri', 'VIP Organizasyonlar']
    },
    {
      name: 'Şişli', slug: 'sisli',
      description: 'Şişli, Mecidiyeköy, Gayrettepe, Bomonti, Osmanbey, Feriköy bölgelerinde etkinlik hizmeti. İş merkezleri ve otel organizasyonlarında geniş deneyim.',
      stats: '110+ otel etkinliği',
      highlight: ['Otel Etkinlikleri', 'İş Merkezleri', 'Kongre Organizasyonları']
    },
    {
      name: 'Bakırköy', slug: 'bakirkoy',
      description: 'Bakırköy, Ataköy, Yeşilköy, Florya bölgelerinde çocuk ve kurumsal etkinlikler. Sahil şeridi ve yeşil alanlar için özel organizasyonlar.',
      stats: '95+ başarılı etkinlik',
      highlight: ['Sahil Etkinlikleri', 'Park Organizasyonları', 'Doğum Günleri']
    },
    {
      name: 'Beylikdüzü', slug: 'beylikduzu',
      description: 'Beylikdüzü, Esenyurt, Avcılar bölgelerinde geniş çaplı etkinlik hizmetleri. Site içi organizasyonlar ve toplu etkinlikler konusunda uzman.',
      stats: '120+ site etkinliği',
      highlight: ['Site Şenlikleri', 'Belediye Etkinlikleri', 'Festival Organizasyonları']
    },
    {
      name: 'Başakşehir', slug: 'basaksehir',
      description: 'Başakşehir, Bağcılar, Küçükçekmece bölgelerinde profesyonel etkinlik organizasyonu. Geniş açık alanlar ve toplu etkinlik deneyimi.',
      stats: '75+ toplu etkinlik',
      highlight: ['Mahalle Şenlikleri', 'Açık Hava Etkinlikleri', 'Çocuk Festivalleri']
    },
    {
      name: 'Sarıyer', slug: 'sariyer',
      description: 'Sarıyer, Maslak, Tarabya, Emirgan, İstinye, Yeniköy bölgelerinde prestijli etkinlik hizmetleri. Boğaz kıyısı lüks mekanlarda organizasyon.',
      stats: '60+ boğaz etkinliği',
      highlight: ['Boğaz Kıyısı Etkinlikler', 'Lüks Organizasyonlar', 'Özel Davetler']
    }
  ]

  // Districts with LP data get linked, others stay as text
  const districtSlugMap = {
    'Kartal': 'kartal', 'Pendik': 'pendik', 'Tuzla': 'tuzla',
    'Ümraniye': 'umraniye', 'Çekmeköy': 'cekmekoy',
    'Zeytinburnu': 'zeytinburnu', 'Fatih': 'fatih', 'Eyüpsultan': 'eyupsultan'
  }
  const otherIstanbulAreas = [
    'Kartal', 'Pendik', 'Tuzla', 'Gebze', 'Ümraniye', 'Çekmeköy', 'Sancaktepe',
    'Beykoz', 'Şile', 'Ağva', 'Zeytinburnu', 'Fatih', 'Eyüpsultan', 'Sultangazi',
    'Esenler', 'Güngören', 'Bahçelievler', 'Büyükada', 'Heybeliada', 'Burgazada'
  ]

  return (
    <>
      <Seo
        title="İstanbul Etkinlik Bölgeleri | Best Event"
        description="İstanbul'un 39 ilçesinde ve diğer şehirlerde profesyonel etkinlik organizasyonu. Kadıköy'den Beşiktaş'a, Antalya ve Muğla'ya kadar her yerde mobil ekip."
        keywords="istanbul etkinlik bölgeleri, etkinlik organizasyonu, kadıköy palyaço, beşiktaş sihirbaz, istanbul dj, istanbul dans etkinliği"
        canonicalPath="/hizmet-bolgeleri"
      />

      <main className="bg-[#040406] text-white min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 px-6 border-b border-white/10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#050509] via-[#0a0a0f] to-[#050509]" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.12) 1px, transparent 0)',
                backgroundSize: '48px 48px'
              }}
            />
          </div>
          <div className="relative max-w-5xl mx-auto text-center space-y-4">
            <p className="uppercase tracking-[0.28em] text-xs text-white/70">Etkinlik Bölgeleri</p>
            <h1 className="font-bold text-white" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              İstanbul ve çevresinde nerede olursanız olun yanınızdayız
            </h1>
            <p className="text-white/85 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
              Mobil ekip, premium ekipman ve hijyen protokolüyle 39 ilçe + diğer şehirlerde etkinlik yönetimi.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
              <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white">39 İlçe</span>
              <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white">1000+ etkinlik</span>
              <span className="px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white">%98 memnuniyet</span>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Intro */}
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <h2 className="font-semibold text-white" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', letterSpacing: '-0.02em' }}>
                Etkinlik bölgeleri
              </h2>
              <p className="text-white/85" style={{ lineHeight: '1.7' }}>
                Kadıköy sahillerinden Beşiktaş yamaçlarına, Beylikdüzü sitelerinden Göktürk ormanlarına kadar Apple estetiğinde, hızlı ve hijyenik kurulumlarla etkinlik planlıyoruz.
              </p>
            </div>

            {/* Istanbul accordions */}
            <div className="space-y-4">
              {istanbulAreas.map((area, index) => (
                <div key={index} className="rounded-2xl border border-white/12 bg-white/8 backdrop-blur-sm overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-5 py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-lg text-white">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{area.name} Etkinlik Bölgeleri</h3>
                        <p className="text-sm text-white/70">{area.stats}</p>
                      </div>
                    </div>
                    {openAccordion === index ? (
                      <FaChevronUp className="text-white/80" />
                    ) : (
                      <FaChevronDown className="text-white/80" />
                    )}
                  </button>

                  {openAccordion === index && (
                    <div className="px-5 pb-5 pt-1 space-y-5">
                      <p className="text-white/90 leading-relaxed">
                        {area.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {area.highlight.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm text-white">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {services.map((service, idx) => {
                          const lpSlug = lpServiceMap[service.link]
                          const linkTo = lpSlug && area.slug
                            ? `/organizasyonlar/${lpSlug}/${area.slug}`
                            : service.link

                          return (
                            <Link
                              key={idx}
                              to={linkTo}
                              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/8 border border-white/15 hover:border-white/35 transition-colors"
                            >
                              <span className="text-xl">{service.icon}</span>
                              <span className="text-white text-sm">{service.name}</span>
                            </Link>
                          )
                        })}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a href="tel:+905307309009" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold hover:-translate-y-0.5 transition-all shadow-lg">
                          <FaPhone className="text-black/80" />
                          <span>Hemen Ara</span>
                        </a>
                        <a
                          href="https://wa.me/905307309009"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-400 transition-colors shadow-lg"
                        >
                          <FaWhatsapp />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Other Istanbul Areas */}
            <div className="rounded-2xl border border-white/12 bg-white/8 backdrop-blur-sm p-6 space-y-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <h3 className="text-xl font-semibold text-white text-center">Diğer İstanbul semtleri</h3>
              <p className="text-white/85 text-center" style={{ lineHeight: '1.6' }}>
                Aşağıdaki semtlerde de tüm etkinlik hizmetlerimizi sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {otherIstanbulAreas.map((area, index) => {
                  const slug = districtSlugMap[area]
                  return slug ? (
                    <Link
                      key={index}
                      to={`/organizasyonlar/palyaco-kiralama/${slug}`}
                      className="px-3 py-1 rounded-full bg-white/12 border border-white/18 text-sm text-white hover:bg-white/20 hover:border-white/30 transition-colors"
                    >
                      {area}
                    </Link>
                  ) : (
                    <span key={index} className="px-3 py-1 rounded-full bg-white/12 border border-white/18 text-sm text-white">
                      {area}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Other cities */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-white">Diğer şehirler</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
                    <FaMapMarkerAlt /> Antalya
                  </h3>
                  <p className="text-white/85 text-sm mt-2 mb-3">Konyaaltı, Lara, Muratpaşa, Kepez, Alanya</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
                    <FaMapMarkerAlt /> Muğla
                  </h3>
                  <p className="text-white/85 text-sm mt-2 mb-3">Bodrum, Yalıkavak, Gümbet, Fethiye</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
                    <FaMapMarkerAlt /> Kocaeli
                  </h3>
                  <p className="text-white/85 text-sm mt-2 mb-3">İzmit, Gebze, Darıca</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden bg-[#050509] border border-white/12 rounded-2xl p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.12) 1px, transparent 0)',
                    backgroundSize: '44px 44px'
                  }}
                />
              </div>
              <div className="relative space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">Hangi semtte olursanız olun, yanınızdayız</h2>
                <p className="text-white/70">Detay verin, aynı gün içinde planlayalım.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="tel:+905307309009" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition-all flex items-center gap-2">
                    <FaPhone className="text-black/80" />
                    05307309009
                  </a>
                  <a
                    href="https://wa.me/905307309009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors flex items-center gap-2"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ServiceAreas
