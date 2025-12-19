import { Helmet } from 'react-helmet-async'
import OptimizedImage from '../../components/OptimizedImage'

const PlanetEducation = () => {
  const hero = {
    title: 'Gezegen Tanıtım & Uzay Atölyesi',
    subtitle: '4-14 yaş için interaktif astronomi deneyimi',
    description: 'Güneş sistemi, gezegen maketleri, astronot kostümü ve soru-cevapla çocuklara uzayı sevdiren kompakt program.',
    image: '/content/images/bidolu/gezegentanıtım.webp',
  }

  const stats = [
    { label: 'Süre', value: '45-60 dk', detail: 'Yaşa göre anlatım' },
    { label: 'Grup', value: '10-100', detail: 'Sınıf veya toplu' },
    { label: 'Ekip', value: 'Uzay eğitmeni', detail: 'Pedagojik yaklaşım' },
  ]

  const features = [
    'Güneş sistemi ve gezegen maketleri ile görsel anlatım',
    'Projektör/ekran üzerinden büyük görseller ve videolar',
    'Astronot kostümü ile fotoğraf ve mini rol-play',
    'Bilgi kartları, quiz ve ödüllü soru-cevap',
    'Okul, anaokulu, kulüp veya ev etkinliklerine uyumlu',
  ]

  const steps = [
    'Yaş grubu ve mekan bilgisi alınır, içerik uyarlanır',
    '4x5 m alan ve projektör/ekran sağlanır; gerekirse ekipman getirilebilir',
    '45-60 dk anlatım + quiz; kalabalık gruplar için ardışık oturumlar',
  ]

  const photos = [
    '/content/images/cocukdogumgunu/556fe6ff-e557-4b33-b59d-16b1690624ac.webp',
    '/content/images/cocukdogumgunu/66a266b0-ef8f-4a4a-9e3e-39c657157777.webp',
    '/content/images/cocukdogumgunu/8923162f-025e-41a5-8014-5738212c4172.webp',
    '/content/images/cocukdogumgunu/c3f9812a-98cb-4f8e-a6c2-fcbda31a6dfd.webp',
  ]

  const faq = [
    { q: 'Hangi yaş için?', a: '4-14 yaş; anaokulu, ilkokul, ortaokul seviyelerine göre dil ve içerik uyarlanır.' },
    { q: 'Alan ihtiyacı?', a: 'Minimum 4x5 m iç mekan; projektör için yarı karanlık ortam ideal.' },
    { q: 'Kaç kişilik?', a: '10-100 çocuk; kalabalık gruplar için ardışık seans planlanır.' },
  ]

  return (
    <>
      <Helmet>
        <title>Gezegen Tanıtım Etkinliği | Çocuklar İçin Uzay Atölyesi | Best Event</title>
        <meta
          name="description"
          content="4-14 yaş çocuklar için interaktif gezegen tanıtım etkinliği. Maketler, astronot kostümü, quiz ve uzay görselleriyle okul ve özel etkinliklerde pedagojik uzay atölyesi."
        />
        <meta name="keywords" content="gezegen tanıtım, uzay atölyesi, çocuk astronomi, gezegen eğitimi istanbul, okul etkinliği uzay" />
        <link rel="canonical" href="https://www.bestevent.com/organizasyonlar/gezegen-tanitim" />
      </Helmet>

      <main className="bg-white text-gray-900">
        <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-black text-white">
          <div className="absolute inset-0">
            <OptimizedImage
              src={hero.image}
              alt="Gezegen tanıtım etkinliği"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-22">
            <p className="uppercase tracking-[0.28em] text-xs text-white/70 mb-4">Eğitici Etkinlik</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
              {hero.title}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-white/80 max-w-3xl">{hero.subtitle}</p>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-3xl">{hero.description}</p>
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
                  className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-5"
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Program İçeriği</h2>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Çocukların dikkatini yüksek tutan görseller, maketler ve quizlerle uzayı anlatıyoruz. Her yaş grubuna uygun dil ve tempo ile
                öğrenme deneyimi eğlenceli hale geliyor.
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
              <h3 className="text-lg font-semibold text-gray-900">Akış & Kurulum</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {steps.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-gray-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-4 text-sm text-gray-800">
                <div className="font-semibold text-gray-900">Hızlı Teklif</div>
                <p className="mt-2 leading-relaxed text-gray-700">
                  Yaş grubu, mekan ve tarih bilgisi ile bize ulaşın; aynı gün WhatsApp üzerinden program ve fiyat paylaşalım.
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
                {photos.map((src, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
                    <OptimizedImage src={src} alt="Gezegen tanıtım etkinliği" className="w-full h-52 object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="grid md:grid-cols-2 gap-8">
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

            <div className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Hızlı İletişim</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Yaş grubu, katılımcı sayısı ve mekana göre programı uyarlıyoruz. Detayları paylaşın, aynı gün dönüş yapalım.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="tel:+905307309009"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
                >
                  📞 0530 730 90 09
                </a>
                <a
                  href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                  className="inline-flex items-center justify-center rounded-full bg-green-500 text-white px-4 py-2.5 text-sm font-semibold hover:bg-green-600 transition"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PlanetEducation
