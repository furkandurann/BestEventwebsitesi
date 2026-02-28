import { Link } from 'react-router-dom'
import { trackPhoneClick } from '../utils/tracking'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Track phone click - Google Ads Conversion + GA4
  const handlePhoneClick = () => {
    trackPhoneClick('Footer', window.location.href)
  }

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
      image: '/content/images/bidolu/transformers.webp'
    },
    { 
      name: 'Karaoke Etkinliği', 
      path: '/organizasyonlar/karaoke-etkinligi',
      description: 'Profesyonel ses ve dev ekran',
      image: '/content/images/bidolu/karaoke.webp'
    },
    { 
      name: 'Gezegen Tanıtım', 
      path: '/organizasyonlar/gezegen-tanitim',
      description: 'Uzay temalı interaktif deneyim',
      image: '/content/images/bidolu/gezegentanıtım.webp'
    },
  ]

  const quickLinks = [
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Ekibimiz', path: '/ekibimiz' },
    { name: 'Hizmet Bölgeleri', path: '/hizmet-bolgeleri' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Blog', path: '/blog' },
    { name: 'Organik Pastalar', path: '/organik-pastalar' },
    { name: 'İletişim', path: '/iletisim' },
  ]

  return (
    <footer className="bg-white text-gray-900 min-h-[600px]">
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
                href="https://www.instagram.com/besteventturkiye/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
              >
                <svg className="w-5 h-5 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://share.google/XiY2McY12gBQxZ5p9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
              >
                <svg className="w-5 h-5 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
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

          {/* Bölgesel Hizmetler */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Bölgesel Hizmetler</h4>
            <ul className="space-y-3">
              {[
                { name: 'Kadıköy Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama/kadikoy' },
                { name: 'Beşiktaş Sihirbaz Kiralama', path: '/organizasyonlar/sihirbaz-kiralama/besiktas' },
                { name: 'Ataşehir Bubble Show', path: '/organizasyonlar/bubble-show-kiralama/atasehir' },
                { name: 'Üsküdar Doğum Günü Org.', path: '/organizasyonlar/dogum-gunu-organizasyonu/uskudar' },
                { name: 'Şişli Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama/sisli' },
                { name: 'Bakırköy Yüz Boyama', path: '/organizasyonlar/profesyonel-yuz-boyama/bakirkoy' },
                { name: 'Beylikdüzü Bubble Show', path: '/organizasyonlar/bubble-show-kiralama/beylikduzu' },
                { name: 'Maltepe Sihirbaz Kiralama', path: '/organizasyonlar/sihirbaz-kiralama/maltepe' },
                { name: 'Pendik Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama/pendik' },
                { name: 'Ümraniye Doğum Günü Org.', path: '/organizasyonlar/dogum-gunu-organizasyonu/umraniye' },
                { name: 'Kartal Bubble Show', path: '/organizasyonlar/bubble-show-kiralama/kartal' },
                { name: 'Sarıyer Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama/sariyer' },
              ].map((link) => (
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
                  href="tel:+905307309009" 
                  onClick={handlePhoneClick}
                  className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base"
                >
                  +90 530 730 90 09
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
