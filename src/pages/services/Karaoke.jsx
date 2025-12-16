import { Helmet } from 'react-helmet-async'
import OptimizedImage from '../../components/OptimizedImage'

const Karaoke = () => {
  const hero = {
    title: 'Karaoke Etkinliği',
    subtitle: '1000+ şarkı, profesyonel ekipman ve sunucu',
    description: 'Doğum günü, okul etkinliği veya parti için çocuklara uygun karaoke set-up: ses sistemi, ekran ve LED ışık.',
    image: '/content/images/bidolu/karaoke.wepb',
  }

  const stats = [
    { label: 'Şarkı', value: '1000+', detail: 'TR & EN playlist' },
    { label: 'Süre', value: '2-3 saat', detail: 'Akışa göre' },
    { label: 'Ekip', value: 'Sunucu + Teknik', detail: 'Kurulum & yönlendirme' },
  ]

  const features = [
    '2-4 mikrofon, subwoofer destekli ses sistemi',
    'Projeksiyon veya TV/LED ekran kurulumu',
    'Çocuklara uygun playlist; isteğe göre hazırlanmış liste',
    'LED ışık ve sahne düzeni; iç/dış mekan uyumlu',
    'Sunucu/DJ yönetimi, teknik ekip ve kurulum',
  ]

  const steps = [
    'Etkinlik süresi ve alan bilgisi paylaşılır',
    'Kurulum 30-40 dk; ses/ışık check yapılır',
    'Şarkı listesi ve mikrofon yönetimi sunucu tarafından yürütülür',
  ]

  const faq = [
    { q: 'Kaç yaş için uygun?', a: '4-14 yaş arası çocuklara göre playlist hazırlanır.' },
    { q: 'Kaç mikrofon getiriyorsunuz?', a: 'Paketlere göre 2-4 mikrofon; kablolu + kablosuz kombinasyonu.' },
    { q: 'Dış mekanda olur mu?', a: 'Hava uygunsa evet; priz ve gölgelik alan önerilir.' },
  ]

  return (
    <>
      <Helmet>
        <title>Karaoke Etkinliği | Çocuklara Özel Karaoke Kiralama | Best Event</title>
        <meta
          name="description"
          content="1000+ şarkı, profesyonel ekipman ve sunucu ile çocuklara özel karaoke etkinliği. İstanbul genelinde kurulum, ses/ışık ve playlist yönetimi."
        />
        <meta name="keywords" content="karaoke kiralama, çocuk karaoke istanbul, doğum günü karaoke, karaoke etkinliği" />
        <link rel="canonical" href="https://www.bestevent.com/organizasyonlar/karaoke-etkinligi" />
      </Helmet>

      <main className="bg-white text-gray-900">
        <section className="relative overflow-hidden min-h-[65vh] flex items-center bg-black text-white">
          <div className="absolute inset-0">
            <OptimizedImage
              src={hero.image}
              alt="Karaoke etkinliği"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="uppercase tracking-[0.28em] text-xs text-white/70 mb-4">Müzik & Eğlence</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
              {hero.title}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-white/80 max-w-3xl">{hero.subtitle}</p>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-3xl">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition"
              >
                💬 WhatsApp ile Rezervasyon
              </a>
              <a
                href="tel:+905349306799"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                📞 0534 930 67 99
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Neler Dahil?</h2>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Çocuklara uygun playlist, güçlü ses-ışık altyapısı ve deneyimli sunucuyla sahneyi siz götürün, biz kuralım.
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
                  Tarih, mekan ve kişi sayısını paylaşın; aynı gün WhatsApp’tan net paket ve fiyat bilgisi gönderelim.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2.5 text-sm font-semibold hover:bg-black/90 transition"
                >
                  WhatsApp Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-16">
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
                Şarkı listesi, yaş grubu ve mekan bilgisi ile bize ulaşın; playlist ve ekipmanı etkinliğe göre hazırlayalım.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="tel:+905349306799"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
                >
                  📞 0534 930 67 99
                </a>
                <a
                  href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
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

export default Karaoke
