import { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

const services = [
  { name: 'Çocuk Etkinlikleri', path: '/organizasyonlar/cocuk-etkinlikleri' },
  { name: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama' },
  { name: 'Magic Show', path: '/organizasyonlar/magic-show' },
  { name: 'Bubble Show', path: '/organizasyonlar/bubble-show' },
  { name: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama' },
  { name: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler' },
  { name: 'Konsept Doğum Günü', path: '/organizasyonlar/konsept-dogum-gunu' },
  { name: 'Pamuk Şeker Arabası', path: '/organizasyonlar/pamuk-seker' },
  { name: 'Kurumsal Etkinlik', path: '/organizasyonlar/muzik-etkinlikleri' },
  { name: 'Şirket İçi Organizasyon', path: '/organizasyonlar/muzik-etkinlikleri' },
  { name: 'Dans Etkinlikleri', path: '/organizasyonlar/dans-etkinlikleri' },
  { name: 'Müzik Etkinlikleri', path: '/organizasyonlar/muzik-etkinlikleri' },
  { name: 'Hostes Kiralama', path: '/organizasyonlar/hostes-kiralama' },
]

const Navbar = memo(() => {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setServicesOpen(false)
    setMobileMenuOpen(false)
  }, [location])

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-black/60 backdrop-blur-md py-4 ${
        scrolled
          ? 'shadow-lg'
          : 'shadow-sm'
      }`}
    >
      <div className="layout-container relative">
        <div className="flex justify-start items-center gap-8 lg:gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="logo-lockup font-display hover:scale-105 transition-transform">
              <span
                className={`${scrolled ? 'text-gradient' : 'text-white drop-shadow-lg'} logo-glow`}
                style={{
                  textShadow: '0 0 15px rgba(255, 200, 80, 0.4), 0 0 30px rgba(255, 160, 50, 0.3), 0 0 45px rgba(255, 120, 30, 0.2)',
                  filter: 'brightness(1.05)'
                }}
              >
                Best Event
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 flex-1">
            {/* Etkinlikler Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`nav-link text-sm md:text-base flex items-center space-x-1 ${
                  scrolled
                    ? 'text-dark hover:text-primary'
                    : 'text-white hover:text-accent'
                }`}
              >
                <span>Etkinlikler</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-2xl py-2 grid grid-cols-1 gap-1 animate-fade-in">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="nav-link text-dark px-4 py-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/galeri"
              className={`nav-link text-sm md:text-base ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Görseller
            </Link>
            
            <Link
              to="/blog"
              className={`nav-link text-sm md:text-base ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/hakkimizda"
              className={`nav-link text-sm md:text-base ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Hakkımızda
            </Link>

            <Link
              to="/iletisim"
              className={`nav-link text-sm md:text-base ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              İletişim
            </Link>

            {/* Telefon Numarası - Sağ Üst Gold */}
            <a
              href="tel:+905307309009"
              className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs lg:text-sm transition-all duration-300 hover:scale-105 border-2 border-amber-500/60 shadow-lg whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #b8860b 0%, #daa520 25%, #ffd700 50%, #daa520 75%, #b8860b 100%)',
                color: '#1a0f00',
                textShadow: '0 1px 2px rgba(255,215,0,0.3)',
                boxShadow: '0 0 15px rgba(218,165,32,0.3), 0 0 30px rgba(218,165,32,0.15), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Hemen Ara
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 ml-auto"
            aria-label="Menü"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gradient-to-r from-amber-400 to-yellow-600 rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gradient-to-r from-amber-400 to-yellow-600 rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gradient-to-r from-amber-400 to-yellow-600 rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-2xl z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-6 py-6">
              {/* Services Section */}
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Hizmetlerimiz
                </h2>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2.5 text-gray-700 font-medium text-sm border-l-3 border-transparent hover:border-amber-500 hover:bg-amber-50 transition-all duration-200 rounded-r-md"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Links */}
              <div className="space-y-2 mb-6">
                <Link
                  to="/galeri"
                  className="block px-4 py-2.5 text-gray-800 font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 rounded-md transition-all duration-200"
                >
                  Görseller
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2.5 text-gray-800 font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 rounded-md transition-all duration-200"
                >
                  Blog
                </Link>
                <Link
                  to="/hakkimizda"
                  className="block px-4 py-2.5 text-gray-800 font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 rounded-md transition-all duration-200"
                >
                  Hakkımızda
                </Link>
                <Link
                  to="/iletisim"
                  className="block px-4 py-2.5 text-gray-800 font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 rounded-md transition-all duration-200"
                >
                  İletişim
                </Link>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/905307309009?text=Merhaba, Best Event hakkında bilgi almak istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp İletişim
                </a>
                <a
                  href="tel:+905307309009"
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
