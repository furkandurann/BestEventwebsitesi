import { useState } from 'react'
import Seo from '../components/Seo'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    eventType: '',
    service: '',
    message: ''
  })

  // Service options based on event type
  const serviceOptions = {
    cocuk: [
      'Doğum Günü Organizasyonu',
      'Konsept Doğum Günü',
      'Kostümlü Karakterler',
      'Maskot Kiralama',
      'Palyaço Etkinliği',
      'Sihirbazlık Gösterisi',
      'Bubble Show',
      'Parti Ekipmanları',
      'Profesyonel Yüz Boyaması',
      'Karaoke Etkinliği',
      'Gezegen Tanıtım',
      'Çocuk Masa Sandalye',
      'Transformers Robot',
      'Şişme Oyun Parkları',
      'Atölye Etkinlikleri',
      'Çikolata Şelalesi',
      'Ateş Gösterisi',
      'Elsa',
      'Spiderman',
      'Batman'
    ],
    dans: [
      'Oryantal Dans Gösterisi',
      'Lüks Dans Karşılama',
      'LED Dans Gösterisi',
      'Zumba Dans',
      'Modern Dans Ekibi',
      'Yoga Eğitmeni'
    ],
    muzik: [
      'Trio Ekibi',
      'Bando Takımı',
      'Saksafon Dinletisi',
      'Piyanist',
      'Çello Performansı',
      'Gelin İsteme Müzik'
    ],
    acilis: ['Açılış Organizasyonu']
  }

  const handleChange = (field) => (e) => {
    const value = e.target.value
    setFormData((prev) => {
      // Reset service when event type changes
      if (field === 'eventType') {
        return { ...prev, [field]: value, service: '' }
      }
      return { ...prev, [field]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, date, time, eventType, service, message } = formData
    
    const eventTypeLabels = {
      kurumsal: 'Kurumsal',
      dans: 'Dans',
      muzik: 'Müzik',
      cocuk: 'Çocuk',
      acilis: 'Açılış'
    }
    
    const text = `Merhaba Best Event,%0A%0A` +
      `Ad Soyad: ${name || '-'}%0A` +
      `Tarih: ${date || '-'}%0A` +
      `Saat Aralığı: ${time || '-'}%0A` +
      `Etkinlik Türü: ${eventTypeLabels[eventType] || '-'}%0A` +
      `${service ? `Hizmet: ${service}%0A` : ''}` +
      `Açıklama: ${message || '-'}`
    
    window.open(`https://wa.me/905349306799?text=${text}`, '_blank')
  }

  // Show service dropdown only for non-kurumsal types
  const showServiceDropdown = formData.eventType && formData.eventType !== 'kurumsal'

  return (
    <div className="min-h-screen">
      <Seo
        title="Best Event İletişim | Etkinlik ve Organizasyon Teklif Formu"
        description="Best Event ile iletişime geçin. Şemsettin Günaltay Caddesi Erenköy/İstanbul adresimiz, telefon ve WhatsApp hattımız üzerinden etkinlik teklifinizi isteyin."
        keywords={[
          'best event iletişim',
          'etkinlik teklifi',
          'organizasyon firması telefon',
          'palyaço kiralama iletişim'
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Best Event İletişim',
          description:
            'Best Event organizasyon ajansı iletişim bilgileri, telefon, e-posta ve adres.',
          url: 'https://www.bestevent.com.tr/iletisim',
          mainEntity: {
            '@type': 'Organization',
            name: 'Best Event',
            telephone: '+90-534-930-67-99',
            email: 'besteventturkiye@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Şemsettin Günaltay Caddesi No:175',
              addressLocality: 'Kadıköy',
              addressRegion: 'İstanbul',
              addressCountry: 'TR'
            }
          }
        }}
      />
      <section className="bg-[#050509] text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \"SF Pro Text\", system-ui, sans-serif' }}>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          {/* Başlık */}
          <header className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white" style={{ letterSpacing: '-0.03em', textShadow: '0 4px 16px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)' }}>
              Best Event İletişim
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-white">Önemli:</span> Lütfen etkinliğinizin veya Kiralamanızın Etkinlik tarih, saat ve türünü formda doldurarak Whatsapp'tan bize gönderin. Merak etmeyin Bu mesaj whatsapp'tan bize ulaşacak ve rezervasyon sorumlumuzun hemen sizinle konuşmaya başlaycaktır.
            </p>
          </header>

          {/* Mobile: Form First, Desktop: Grid Layout */}
          <div className="flex flex-col md:grid md:grid-cols-[1.1fr,1.2fr] gap-10">
            {/* WhatsApp Form - Appears first on mobile */}
            <div className="order-1 md:order-2 rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-6 md:p-7 shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <h2 className="text-xl md:text-2xl font-bold">
                  WhatsApp İletişim Formu
                </h2>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/60 outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={handleChange('name')}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">
                    Tarih
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                    value={formData.date}
                    onChange={handleChange('date')}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">
                    Saat Aralığı
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/60 outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                    placeholder="Örn: 14:00 - 18:00"
                    value={formData.time}
                    onChange={handleChange('time')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">
                    Etkinlik Türü
                  </label>
                  <select
                    className="w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white outline-none focus:border-white/40 focus:bg-white/20 transition-all appearance-none cursor-pointer"
                    value={formData.eventType}
                    onChange={handleChange('eventType')}
                    required
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="">Seçiniz</option>
                    <option value="kurumsal">Kurumsal</option>
                    <option value="dans">Dans</option>
                    <option value="muzik">Müzik</option>
                    <option value="cocuk">Çocuk</option>
                    <option value="acilis">Açılış</option>
                  </select>
                </div>

                {showServiceDropdown && serviceOptions[formData.eventType] && (
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-1">
                      Hizmet Seçiniz
                    </label>
                    <select
                      className="w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white outline-none focus:border-white/40 focus:bg-white/20 transition-all appearance-none cursor-pointer"
                      value={formData.service}
                      onChange={handleChange('service')}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="">Seçiniz</option>
                      {serviceOptions[formData.eventType].map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">
                    Açıklama / Notlar
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/60 outline-none resize-none focus:border-white/40 focus:bg-white/20 transition-all"
                    placeholder="Etkinlik detaylarınızı, kişi sayısını ve özel isteklerinizi yazabilirsiniz..."
                    value={formData.message}
                    onChange={handleChange('message')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-white text-[#128C7E] text-base font-bold px-6 py-4 hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp ile Gönder</span>
                </button>

                <p className="mt-3 text-xs text-white/70 text-center leading-relaxed">
                  ✅ Formunuz WhatsApp ile anında iletilir<br />
                  ⚡ Rezervasyon ekibimiz kısa sürede sizinle iletişime geçecek
                </p>
              </form>
            </div>

            {/* İletişim Bilgileri - Appears second on mobile */}
            <div className="order-2 md:order-1 space-y-6">
              <div className="rounded-3xl bg-white/[0.05] border border-white/[0.08] p-6 backdrop-blur-sm">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/50">
                  Hızlı İletişim
                </p>

                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  En hızlı yanıt için bizi arayabilir veya WhatsApp'tan yazabilirsiniz.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:05349306799"
                    className="flex items-center justify-center gap-2 rounded-full bg-white text-black text-sm font-semibold px-5 py-3 shadow-lg shadow-black/40 hover:bg-white/90 transition-colors"
                  >
                    <span className="text-lg">📞</span>
                    <span>Hemen Ara: 0534 930 67 99</span>
                  </a>

                  <a
                    href="https://wa.me/905349306799"
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
                  <a href="tel:05349306799" className="mt-1 inline-block hover:text-white">
                    +90 534 930 67 99
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
