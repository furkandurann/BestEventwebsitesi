import { Helmet } from 'react-helmet-async'

const DJRental = () => {
  const hero = {
    title: 'DJ Kiralama',
    subtitle: 'Profesyonel DJ, ses ve ışık sistemi',
    description: 'Doğum günü, okul etkinliği veya parti için miksaj, playlist, anons ve sahne ışıklarıyla tam paket DJ hizmeti.',
    image: '/content/images/music/musiketkinlikleri.JPG'
  }

  const stats = [
    { label: 'Playlist', value: 'Özel liste', detail: 'TR/EN çocuk & party' },
    { label: 'Süre', value: '2-3 saat', detail: 'Akışa göre' },
    { label: 'Ekip', value: 'DJ + Teknik', detail: 'Kurulum & yönlendirme' }
  ]

  const features = [
    'Güçlü ses sistemi, subwoofer ve 2-4 mikrofon',
    'DJ kontrolü, miksaj ve anons yönetimi',
    'LED ışık ve sahne efektleri; iç/dış mekana uyumlu',
    'Çocuklara uygun veya isteğe göre hazırlanmış playlist',
    'Kurulum, sound-check ve etkinlik boyunca teknik destek'
  ]

  const steps = [
    'Etkinlik yeri ve süre bilgisi alınır, playlist hazırlanır',
    'Kurulum 30-40 dk; ses/ışık testi yapılır',
    'DJ miksaj ve anonslarla akışı yönetir'
  ]

  const faq = [
    { q: 'Hangi ekipmanı getiriyorsunuz?', a: 'DJ controller, ses sistemi, 2-4 mikrofon, LED ışık ve gerekli kablolama.' },
    { q: 'Çocuk partisi için playlist olur mu?', a: 'Evet, yaş grubuna uygun TR/EN liste hazırlanır; önceden istek şarkılar alınır.' },
    { q: 'Dış mekanda olur mu?', a: 'Uygun elektrik ve hava koşulu varsa dış mekanda da kurulum yapılır.' }
  ]

  return (
    <>
      <Helmet>
        <title>DJ Kiralama | Profesyonel DJ ve Ses-Işık Sistemi | Best Event</title>
        <meta
          name="description"
          content="Profesyonel DJ, ses ve ışık sistemiyle doğum günü, okul etkinliği ve partiler için tam paket DJ kiralama. Playlist hazırlığı, miksaj ve anons yönetimi."
        />
        <meta name="keywords" content="dj kiralama istanbul, çocuk partisi dj, dj hizmeti, ses ışık sistemi, dj fiyat" />
        <link rel="canonical" href="https://bestevent.com.tr/organizasyonlar/dj-kiralama" />
      </Helmet>

      <main className="bg-white text-gray-900">
        <section className="relative overflow-hidden min-h-[65vh] flex items-center bg-black text-white">
          <div className="absolute inset-0">
            <img
              src={hero.image}
              alt="DJ kiralama"
              className="w-full h-full object-cover object-center"
              loading="eager"
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Neler Dahil?</h2>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                DJ kontrolü, güçlü ses-ışık altyapısı ve çocuklara uygun playlist ile etkinliğin müziğini biz yönetiyoruz.
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
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0b0f] to-black py-18 px-6 border-t border-white/10">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.14) 1px, transparent 0)',
                backgroundSize: '42px 42px'
              }}
            />
          </div>

          <div className="relative max-w-5xl mx-auto text-center">
            <p className="uppercase tracking-[0.3em] text-orange-300 mb-4 text-sm font-medium">
              İstanbul'un Her Yerindeyiz
            </p>
            <h2
              className="font-bold text-white mb-4"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Hemen Rezervasyon Yap
            </h2>
            <p
              className="text-white/80 max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: '1.6', letterSpacing: '-0.01em' }}
            >
              Etkinlik tarihi, lokasyon ve kişi sayısını paylaşın; aynı gün içinde size dönüş yapalım.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
              <a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-2xl" role="img" aria-label="whatsapp">💬</span>
                    <span
                      className="font-semibold text-white"
                      style={{
                        fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      WhatsApp ile Hemen Yaz
                    </span>
                  </div>
                </div>
              </a>

              <a
                href="tel:05307309009"
                className="group relative w-full sm:w-auto"
              >
                <div className="relative bg-white text-black rounded-2xl px-8 py-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-lg" role="img" aria-label="phone">📞</span>
                    <div className="text-left">
                      <p className="text-xs uppercase tracking-[0.18em] text-black/60">Telefon</p>
                      <p className="text-lg font-semibold">0530 730 90 09</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default DJRental
