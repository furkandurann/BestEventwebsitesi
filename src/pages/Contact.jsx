import { useState } from 'react'
import Seo from '../components/Seo'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone, message } = formData

    // Google Analytics Form Submit Tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'lead_generation',
        event_label: 'Contact Form WhatsApp',
        form_name: 'Contact Form',
        value: 1
      })

      // Google Ads Conversion Tracking (ID alındığında aktif edilecek)
      // window.gtag('event', 'conversion', {
      //   'send_to': 'AW-XXXXXXXXX/CONVERSION_LABEL',
      //   'value': 100,
      //   'currency': 'TRY'
      // })
    }

    const text = `Merhaba Best Event,%0AAd: ${name || '-'}%0ATelefon: ${
      phone || '-'
    }%0AMesaj: ${message || '-'}`
    window.open(`https://wa.me/905307309009?text=${text}`, '_blank')
  }

  return (
    <div className="min-h-screen">
      <Seo
        title="İletişim | Best Event - İstanbul Etkinlik Organizasyonu | Hemen Teklif Alın"
        description="Best Event ile iletişime geçin. Şemsettin Günaltay Cad. No:175 Erenköy/İstanbul. WhatsApp: 0530 730 90 09. Çocuk etkinlikleri, kurumsal organizasyonlar, müzik ve dans gösterileri için hızlı teklif alın. Aynı gün dönüş garantisi."
        keywords={[
          'best event iletişim',
          'istanbul etkinlik firması iletişim',
          'etkinlik organizasyonu teklif',
          'palyaço kiralama iletişim istanbul',
          'sihirbaz kiralama telefon',
          'çocuk etkinliği teklif al',
          'kurumsal etkinlik teklifi',
          'etkinlik organizasyon whatsapp',
          'istanbul etkinlik firması telefon',
          'erenköy etkinlik organizasyonu'
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Best Event İletişim',
          description:
            'Best Event İstanbul etkinlik organizasyon firması iletişim bilgileri. Telefon, WhatsApp, e-posta ve adres. Hızlı teklif ve aynı gün dönüş.',
          url: 'https://bestevent.com.tr/iletisim',
          mainEntity: {
            '@type': 'Organization',
            name: 'Best Event',
            telephone: '+90-530-730-90-09',
            email: 'besteventturkiye@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Şemsettin Günaltay Caddesi No:175',
              addressLocality: 'Erenköy',
              addressRegion: 'Kadıköy',
              postalCode: '34738',
              addressCountry: 'TR'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 40.9872,
              longitude: 29.0301
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+90-530-730-90-09',
              contactType: 'customer service',
              availableLanguage: ['Turkish', 'English'],
              areaServed: 'TR'
            }
          }
        }}
        canonicalPath="/iletisim"
      />
      <section className="bg-[#050509] text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"SF Pro Text\", system-ui, sans-serif' }}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Başlık */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{ letterSpacing: '-0.02em' }}>
              Best Event İletişim
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/75">
              Etkinlik tarihi, şehir ve hayal ettiğiniz atmosferi anlatın; gerisini biz planlayalım.
            </p>
          </header>

          <div className="grid gap-10 md:grid-cols-[1.1fr,1.2fr]">
            {/* Sol blok – Sabit iletişim bilgileri */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-white/[0.05] border border-white/[0.08] p-6 backdrop-blur-sm">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/50">
                  Hızlı İletişim
                </p>

                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  En hızlı yanıt için bizi arayabilir veya WhatsApp’tan yazabilirsiniz.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:05307309009"
                    className="flex items-center justify-center gap-2 rounded-full bg-white text-black text-sm font-semibold px-5 py-3 shadow-lg shadow-black/40 hover:bg-white/90 transition-colors"
                  >
                    <span className="text-lg">📞</span>
                    <span>Hemen Ara: 0530 730 90 09</span>
                  </a>

                  <a
                    href="https://wa.me/905307309009"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-medium px-5 py-3 shadow-lg shadow-black/40 hover:bg-[#1fb158] transition-colors"
                  >
                    <span className="text-lg">💬</span>
                    <span>WhatsApp ile Yaz</span>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-white/[0.03] border border-white/[0.06] p-6 text-sm text-white/80 space-y-3 backdrop-blur-sm">
                <div>
                  <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/50">
                    Telefon
                  </p>
                  <a href="tel:05307309009" className="mt-1 inline-block hover:text-white">
                    +90 530 730 90 09
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/50">
                    E-posta
                  </p>
                  <a
                    href="mailto:besteventturkiye@gmail.com"
                    className="mt-1 inline-block hover:text-white break-all"
                  >
                    besteventturkiye@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/50">
                    Adres
                  </p>
                  <p className="mt-1">
                    Şemsettin Günaltay Caddesi No:175<br />
                    Erenköy / İstanbul
                  </p>
                </div>
              </div>
            </div>

            {/* Sağ blok – Minimal form */}
            <div className="rounded-3xl bg-white text-black p-6 md:p-7 shadow-xl shadow-black/40">
              <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                Kısa Form, Hızlı Dönüş (WhatsApp)
              </h2>
              <p className="mt-2 text-xs md:text-sm text-black/60">
                Etkinlik türü, tarih ve kişi sayısını kısaca yazın; aynı gün içinde WhatsApp mesajı olarak bize ulaşsın.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-medium text-black/70 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-black/10 bg-black/5 px-3 py-2.5 text-sm outline-none focus:border-black/40 focus:bg-white transition-colors"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={handleChange('name')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-black/70 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-2xl border border-black/10 bg-black/5 px-3 py-2.5 text-sm outline-none focus:border-black/40 focus:bg-white transition-colors"
                    placeholder="+90 5XX XXX XX XX"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-black/70 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border border-black/10 bg-black/5 px-3 py-2.5 text-sm outline-none resize-none focus:border-black/40 focus:bg-white transition-colors"
                    placeholder="Etkinlik türü, tarih, şehir ve kısa notunuzu yazın."
                    value={formData.message}
                    onChange={handleChange('message')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-black text-white text-sm font-semibold px-4 py-3 hover:bg-black/90 transition-colors"
                >
                  <span>WhatsApp ile Gönder</span>
                </button>

                <p className="mt-2 text-[10px] text-black/50">
                  Formu gönderdiğinizde bilgileriniz WhatsApp mesajı olarak bize iletilir; aynı gün içinde dönüş yaparız.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
