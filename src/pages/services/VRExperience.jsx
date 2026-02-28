import { Link } from 'react-router-dom'
import OptimizedImage from '../../components/OptimizedImage'
import RelatedServices from '../../components/RelatedServices'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema } from '../../utils/schemaHelpers'

const VRExperience = () => {
  const hero = {
    title: 'VR Sanal Gerçeklik Deneyimi',
    subtitle: '8+ yaş için güvenli, gözetmenli ve hijyenik VR istasyonları',
    description: 'Meta Quest ile çocuklara özel içerikler, 5-10 dakikalık seanslar ve profesyonel gözetmen desteği.',
    image: '/content/images/cocukdogumgunu/14445323-1fe3-4dea-8055-831975e83963.webp'
  }

  const stats = [
    { label: 'İstasyon', value: '2-5', detail: 'Eş zamanlı VR kullanımı' },
    { label: 'Süre', value: '60-120dk', detail: 'Etkinlik planına göre' },
    { label: 'Hijyen', value: '%100', detail: 'Her kullanım sonrası dezenfekte' },
  ]

  const features = [
    'Meta Quest 2/3 gözlükler, çocuk dostu içerikler',
    'Gözetmen ve teknik destek; 8+ yaş uyumlu seanslar',
    'Sanal hayvanat bahçesi, uzay yolculuğu, denizaltı keşfi',
    'Her çocuk için 5-10 dk seans; baş dönmesi ve yorulmayı önler',
    'Hijyenik ped ve ekipman dezenfeksiyonu her kullanım sonrası',
    'İç mekan kurulumu; minimum 3x4 m alan ve elektrik yeterli'
  ]

  const highlights = [
    'Katılımcı sayısına göre süre planlaması (60-120 dk)',
    'Çocukların boy ve yaş kriterlerine göre ayarlama',
    'İstanbul geneli kurulum ve hızlı erişim'
  ]

  const photos = [
    '/content/images/cocukdogumgunu/14445323-1fe3-4dea-8055-831975e83963.webp',
    '/content/images/cocukdogumgunu/21380558-d41b-42eb-8885-5588f0b8931f.webp',
    '/content/images/cocukdogumgunu/8923162f-025e-41a5-8014-5738212c4172.webp',
    '/content/images/cocukdogumgunu/IMG_0612.webp',
  ]

  const faq = [
    { q: 'Hangi yaş için uygun?', a: '8+ yaş ve minimum 1.20m boy. Küçük yaşlar için önerilmez.' },
    { q: 'Seanslar ne kadar?', a: 'Her çocuk için 5-10 dk; toplam etkinlik 60-120 dk arası.' },
    { q: 'Hijyen nasıl sağlanıyor?', a: 'Tek kullanımlık ped ve her kullanım sonrası dezenfeksiyon.' },
  ]

  const serviceSchema = createServiceSchema(
    'VR Sanal Gerçeklik Kiralama İstanbul',
    'İstanbul\'da Meta Quest VR gözlükleriyle çocuklara özel sanal gerçeklik deneyimi. Gözetmenli, hijyenik VR etkinliği. 8+ yaş için güvenli.',
    '/organizasyonlar/vr-sanal-gerceklik',
    'VR Sanal Gerçeklik Etkinliği'
  )
  const faqSchema = createFAQSchema(faq.map(f => ({ question: f.q, answer: f.a })))

  return (
    <>
      <Seo
        title="VR Sanal Gerçeklik Kiralama İstanbul | Çocuk VR - BestEvent"
        description="İstanbul'da Meta Quest VR gözlükleriyle çocuklara özel sanal gerçeklik deneyimi. Gözetmenli, hijyenik VR etkinliği. 8+ yaş için güvenli."
        keywords={['vr kiralama istanbul', 'sanal gerçeklik etkinliği', 'çocuk vr deneyimi istanbul', 'meta quest kiralama', 'vr doğum günü', 'sanal gerçeklik organizasyonu istanbul']}
        image="/content/images/cocukdogumgunu/14445323-1fe3-4dea-8055-831975e83963.webp"
        schema={[
          serviceSchema,
          faqSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Çocuk Etkinlikleri", "item": "https://bestevent.com.tr/organizasyonlar/cocuk-etkinlikleri" },
              { "@type": "ListItem", "position": 3, "name": "VR Sanal Gerçeklik", "item": "https://bestevent.com.tr/organizasyonlar/vr-sanal-gerceklik" }
            ]
          }
        ]}
      />

      <main className="bg-white text-gray-900">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-20 pb-2">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-gray-500">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
              <Link to="/" itemProp="item"><span itemProp="name">Ana Sayfa</span></Link><meta itemProp="position" content="1" /><span>/</span>
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
              <Link to="/organizasyonlar/cocuk-etkinlikleri" itemProp="item"><span itemProp="name">Çocuk Etkinlikleri</span></Link><meta itemProp="position" content="2" /><span>/</span>
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
              <span itemProp="name" className="text-gray-900 font-medium">VR Sanal Gerçeklik</span><meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <section className="relative overflow-hidden min-h-[65vh] flex items-center bg-black text-white">
          <div className="absolute inset-0">
            <OptimizedImage
              src={hero.image}
              alt="VR sanal gerçeklik deneyimi etkinliği İstanbul"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchpriority="high"
              width={1200}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black" />
          </div>
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 relative z-10">
            <p className="uppercase tracking-[0.28em] text-xs text-white/70 mb-4">Teknoloji & Eğlence</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl">{hero.subtitle}</p>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl">{hero.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition"
              >
                💬 WhatsApp ile Rezervasyon
              </a>
              <a
                href="tel:+905307309009"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                📞 0530 730 90 09
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-5"
                >
                  <div className="text-white text-lg font-semibold">{item.value}</div>
                  <div className="text-white/80 text-sm">{item.label}</div>
                  <div className="text-white/60 text-xs mt-1">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Neler Sunuyoruz?</h2>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Çocuk dostu VR kütüphanesi, gözetmenli güvenlik protokolü ve hijyen odaklı kurulum ile
                etkinliğinizi teknoloji şovuna dönüştürüyoruz.
              </p>
              <ul className="mt-6 space-y-3">
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-800 leading-relaxed">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Plan & Kurulum</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-gray-500">•</span>
                  <span>İç mekan 3x4 m alan, 1 priz yeterli</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Kurulum 20 dk, seans planı katılımcı sayısına göre</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Baş dönmesi riskine karşı kısa seans, gözetmen kontrolü</span>
                </li>
              </ul>
              <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-4 text-sm text-gray-800">
                <div className="font-semibold text-gray-900">Hızlı Teklif</div>
                <p className="mt-2 leading-relaxed text-gray-700">
                  Etkinlik tarihi, katılımcı sayısı ve mekan bilgisini paylaşın; aynı gün içinde WhatsApp’tan teklif gönderelim.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2.5 text-sm font-semibold hover:bg-black/90 transition"
                >
                  WhatsApp Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {photos.length > 0 && (
          <section className="bg-gray-50 border-y border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
              <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Görseller</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((src, idx) => {
                  const altTexts = [
                    'VR sanal gerçeklik gözlüğü ile çocuk deneyimi',
                    'Meta Quest VR etkinliğinde çocuklar',
                    'VR sanal gerçeklik istasyonu kurulumu',
                    'Çocuk doğum günü VR etkinliği İstanbul'
                  ]
                  return (
                    <div key={idx} className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
                      <OptimizedImage src={src} alt={altTexts[idx] || `VR etkinliği görsel ${idx + 1}`} className="w-full h-52 object-cover" loading="lazy" width={400} height={208} />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        <section className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Öne Çıkanlar</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-800">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Kısa Sorular</h3>
              <div className="mt-4 space-y-4">
                {faq.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-sm font-semibold text-gray-900">{item.q}</p>
                    <p className="text-sm text-gray-700 mt-1 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentService="vr-sanal-gerceklik" />
      </main>
    </>
  )
}

export default VRExperience
