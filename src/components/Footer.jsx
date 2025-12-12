import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Track phone click in Google Analytics
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'Footer Phone',
        value: 1
      });
    }
  };

  // Gösteriler & Animasyon
  const showServices = [
    { name: 'Magic Show', path: '/organizasyonlar/magic-show' },
    { name: 'Bubble Show', path: '/organizasyonlar/bubble-show' },
    { name: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama' },
    { name: 'Ateş Gösterisi', path: '/organizasyonlar/ates-gosterisi' },
    { name: 'Jonglör', path: '/organizasyonlar/jonklor' },
  ]

  // Karakterler & Maskotlar
  const characterServices = [
    { name: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama' },
    { name: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler' },
    { name: 'Maskot Kiralama', path: '/organizasyonlar/maskot-kiralama' },
    { name: 'Kız Maskotları', path: '/organizasyonlar/kiz-maskotlari' },
    { name: 'Erkek Maskotları', path: '/organizasyonlar/erkek-maskotlari' },
  ]

  // Doğum Günü & Organizasyonlar
  const partyServices = [
    { name: 'Doğum Günü Organizasyonu', path: '/organizasyonlar/dogum-gunu-organizasyonu' },
    { name: 'Konsept Doğum Günü', path: '/organizasyonlar/konsept-dogum-gunu' },
    { name: 'Çocuk Etkinlikleri', path: '/organizasyonlar/cocuk-etkinlikleri' },
    { name: 'Organik Pastalar', path: '/organik-pastalar' },
  ]

  // Müzik & Dans
  const musicDanceServices = [
    { name: 'Müzik Etkinlikleri', path: '/organizasyonlar/muzik-etkinlikleri' },
    { name: 'Dans Etkinlikleri', path: '/organizasyonlar/dans-etkinlikleri' },
    { name: 'DJ Kiralama', path: '/organizasyonlar/dj-kiralama' },
    { name: 'Karaoke Etkinliği', path: '/organizasyonlar/karaoke-etkinligi' },
  ]

  // Teknoloji & Eğlence
  const techServices = [
    { 
      name: 'VR Sanal Gerçeklik', 
      path: '/organizasyonlar/vr-sanal-gerceklik',
      description: 'Meta Quest ile güvenli VR deneyimi',
      image: null
    },
    { 
      name: 'Transformers Robot', 
      path: '/organizasyonlar/transformers-robot',
      description: '2.5m robot şovu ve pozitif enerji',
      image: '/content/images/bidolu/transformers.jpeg'
    },
    { 
      name: 'Karaoke Etkinliği', 
      path: '/organizasyonlar/karaoke-etkinligi',
      description: 'Profesyonel ses ve dev ekran',
      image: '/content/images/bidolu/karaoke.jpg'
    },
    { 
      name: 'Gezegen Tanıtım', 
      path: '/organizasyonlar/gezegen-tanitim',
      description: 'Uzay temalı interaktif deneyim',
      image: '/content/images/bidolu/gezegentanıtım.jpeg'
    },
  ]

  const quickLinks = [
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmet Bölgeleri', path: '/hizmet-bolgeleri' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Blog', path: '/blog' },
    { name: 'İletişim', path: '/iletisim' },
    { name: 'Ekibimiz', path: '/ekibimiz' },
    { name: 'Referanslarımız', path: '/referanslar' },
  ]

  return (
    <footer className="bg-white text-gray-900">
      {/* Main Footer */}
      <div className="layout-container py-16">
        <div className="layout-grid gap-12">
          {/* Company Info */}
          <div>
            <h3 className="logo-lockup font-display text-gradient mb-4 animate-fade-in">
              Best Event
            </h3>
            <p className="text-gray-600 mb-6">
              Hayalinizdeki etkinliği gerçeğe dönüştürüyoruz. Profesyonel ekibimizle unutulmaz anlar yaratıyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="nav-link text-gray-600 hover:text-primary flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-standard">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gösteriler & Animasyon */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Gösteriler</h4>
            <ul className="space-y-3">
              {showServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="nav-link text-gray-600 hover:text-secondary flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-standard">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Karakterler & Maskotlar */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Karakterler</h4>
            <ul className="space-y-3">
              {characterServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="nav-link text-gray-600 hover:text-secondary flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-standard">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doğum Günü */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Doğum Günü</h4>
            <ul className="space-y-3">
              {partyServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="nav-link text-gray-600 hover:text-secondary flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-standard">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Müzik & Dans */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Müzik & Dans</h4>
            <ul className="space-y-3">
              {musicDanceServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="nav-link text-gray-600 hover:text-secondary flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-standard">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teknoloji & Eğlence */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Teknoloji</h4>
            <div className="space-y-4">
              {techServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden group"
                >
                  <div className="flex items-center gap-4 p-4">
                    {service.image ? (
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white text-lg font-semibold tracking-tight flex-shrink-0">
                        VR
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-gray-900 tracking-tight">{service.name}</span>
                        <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 leading-snug">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://maps.google.com/?q=Şemsettin Günaltay Caddesi No:175 Erenköy İstanbul" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base"
                >
                  Şemsettin Günaltay Caddesi No:175<br />Erenköy/İstanbul
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+905349306799" 
                  onClick={handlePhoneClick}
                  className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base"
                >
                  +90 534 930 67 99
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:besteventturkiye@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                  besteventturkiye@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="layout-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Best Event. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/gizlilik" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-kosullari" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
