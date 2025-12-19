import { Helmet } from 'react-helmet-async'
import OptimizedImage from '../../components/OptimizedImage'

const TransformersRobot = () => {
  const hero = {
    title: 'Transformers Robot Kiralama',
    subtitle: '2.5-3 metre LED robot performansı, fotoğraf ve dans şovu',
    description: 'AVM açılışları, festival ve doğum günleri için dev robot gösterisi. İstanbul genelinde kurulum ve profesyonel performans sanatçıları.',
    image: '/content/images/bidolu/transformers.webp',
  }

  const stats = [
    { label: 'Boy', value: '2.5-3 m', detail: 'LED & ses sistemli' },
    { label: 'Süre', value: '60-90 dk', detail: 'Molalı performans' },
    { label: 'Kapsam', value: 'İstanbul', detail: 'AVM, festival, doğum günü' },
  ]

  const features = [
    'LED ışık efektleri, entegre ses ve müzik',
    'Profesyonel performans sanatçısı; fotoğraf ve dans şovu',
    'İç/dış mekan uyumlu; giriş için min. 2.8 m tavan',
    'Kostüm giydirme 15-20 dk, molalı 60-90 dk performans',
    'Optimus & Bumblebee tarzı seçenekler',
    'Çocuklarla interaktif el sıkışma ve pozlar'
  ]

  const highlights = [
    'Geceleri LED ışıklarla güçlü sahne etkisi',
    'Açılış ve kalabalık etkinliklerde yüksek görünürlük',
    'Fotoğraf kuyruğu oluşturan eğlenceli etkileşim'
  ]

  const photos = [
    '/content/images/cocukdogumgunu/556fe6ff-e557-4b33-b59d-16b1690624ac.webp',
    '/content/images/cocukdogumgunu/66a266b0-ef8f-4a4a-9e3e-39c657157777.webp',
    '/content/images/cocukdogumgunu/14445323-1fe3-4dea-8055-831975e83963.webp',
    '/content/images/cocukdogumgunu/21380558-d41b-42eb-8885-5588f0b8931f.webp',
  ]

  return (
    <>
      <Helmet>
        <title>Transformers Robot Kiralama | LED Robot Gösterisi İstanbul | Best Event</title>
        <meta
          name="description"
          content="İstanbul'da LED ışıklı dev Transformers robot gösterisi. 2.5-3 m boyunda performans, fotoğraf ve dans şovu. AVM açılışı, festival ve doğum günü etkinlikleri için rezervasyon."
        />
        <meta name="keywords" content="transformers robot kiralama, led robot istanbul, dev robot gösterisi, avm açılış robotu" />
        <link rel="canonical" href="https://www.bestevent.com/organizasyonlar/transformers-robot" />
      </Helmet>

      <main className="bg-white text-gray-900">
        <section className="relative overflow-hidden min-h-[65vh] flex items-center bg-black text-white">
          <div className="absolute inset-0">
            <OptimizedImage
              src={hero.image}
              alt="Transformers robot kiralama"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="uppercase tracking-[0.28em] text-xs text-white/70 mb-4">Teknoloji & Show</p>
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Performans Özeti</h2>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                LED ve ses sistemli dev robotlarımız, çocuklar ve yetişkinler için sahnede güçlü bir görsel deneyim sunar.
                Poz verme, dans ve interaktif selamlaşmalarla etkinliğin ana yıldızı olur.
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
                  <span>İç/dış mekan uyumlu; kapı yüksekliği min. 2.8 m</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Giydirme 15-20 dk; molalı 60-90 dk performans</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Fotoğraf ve dans için sahne ya da geniş alan önerilir</span>
                </li>
              </ul>
              <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-4 text-sm text-gray-800">
                <div className="font-semibold text-gray-900">Hızlı Teklif</div>
                <p className="mt-2 leading-relaxed text-gray-700">
                  Etkinlik tarihi, mekan bilgisi ve süre beklentinizi iletin; aynı gün WhatsApp’tan dönüş yapalım.
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
                    <OptimizedImage src={src} alt="Transformers robot etkinliği" className="w-full h-52 object-cover" loading="lazy" />
                  </div>
                ))}
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
              <h3 className="text-lg font-semibold text-gray-900">Hızlı İletişim</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Robot boyu, alan ölçüsü ve etkinlik süresi bilgisi ile bize ulaşın; sahne planını sizinle birlikte netleştirelim.
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

export default TransformersRobot
