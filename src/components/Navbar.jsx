import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [location])

  const services = [
    { name: 'Çocuk Etkinlikleri', path: '/organizasyonlar/cocuk-etkinlikleri' },
    { name: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama' },
    { name: 'Magic Show', path: '/organizasyonlar/magic-show' },
    { name: 'Bubble Show', path: '/organizasyonlar/bubble-show' },
    { name: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama' },
    { name: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler' },
    { name: 'Konsept Doğum Günü', path: '/organizasyonlar/konsept-dogum-gunu' },
    { name: 'Pamuk Şeker Arabası', path: '/organizasyonlar/pamuk-seker' },
    { name: 'Kurumsal Etkinlik', path: '/organizasyonlar/kurumsal-etkinlik' },
    { name: 'Şirket İçi Organizasyon', path: '/organizasyonlar/sirket-ici-organizasyon' },
    { name: 'Dans Etkinlikleri', path: '/organizasyonlar/dans-etkinlikleri' },
    { name: 'Müzik Etkinlikleri', path: '/organizasyonlar/muzik-etkinlikleri' },
    { name: 'Hostes Kiralama', path: '/organizasyonlar/hostes-kiralama' },
  ]

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-black/60 backdrop-blur-md py-4 ${
        scrolled
          ? 'shadow-lg'
          : 'shadow-sm'
      }`}
    >
      <div className="layout-container">
        <div className="flex justify-start items-center gap-8 lg:gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="logo-lockup font-display"
            >
              <motion.span 
                className={scrolled ? 'text-gradient' : 'text-white drop-shadow-lg'}
                animate={{
                  textShadow: [
                    '0 0 15px rgba(255, 200, 80, 0.4), 0 0 30px rgba(255, 160, 50, 0.3), 0 0 45px rgba(255, 120, 30, 0.2)',
                    '0 0 20px rgba(255, 210, 90, 0.5), 0 0 35px rgba(255, 170, 60, 0.4), 0 0 50px rgba(255, 130, 40, 0.3)',
                    '0 0 18px rgba(255, 205, 85, 0.45), 0 0 33px rgba(255, 165, 55, 0.35), 0 0 48px rgba(255, 125, 35, 0.25)',
                    '0 0 15px rgba(255, 200, 80, 0.4), 0 0 30px rgba(255, 160, 50, 0.3), 0 0 45px rgba(255, 120, 30, 0.2)',
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  textShadow: '0 0 15px rgba(255, 200, 80, 0.4), 0 0 30px rgba(255, 160, 50, 0.3), 0 0 45px rgba(255, 120, 30, 0.2)',
                  filter: 'brightness(1.05)'
                }}
              >
                Best Event
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 mr-8">
            {/* Etkinlikler Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`nav-link text-base md:text-lg flex items-center space-x-1 ${
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

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl py-2 grid grid-cols-1 gap-1"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="nav-link text-dark px-4 py-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/ekibimiz"
              className={`nav-link text-base md:text-lg ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Ekibimiz
            </Link>
            
            <Link
              to="/referanslar"
              className={`nav-link text-base md:text-lg ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Referanslar
            </Link>
            
            <Link
              to="/galeri"
              className={`nav-link text-base md:text-lg ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Görseller
            </Link>
            
            <Link
              to="/hakkimizda"
              className={`nav-link text-base md:text-lg ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              BestEvent Hakkında
            </Link>
            
            <Link
              to="/iletisim"
              className={`nav-link text-base md:text-lg ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              İletişim
            </Link>
            
            <Link
              to="/organik-pastalar"
              className={`nav-link text-base md:text-lg ${
                scrolled
                  ? 'text-dark hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              %100 Organik Pasta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full transition-all ${
                  scrolled ? 'bg-dark' : 'bg-white'
                } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-full transition-all ${
                  scrolled ? 'bg-dark' : 'bg-white'
                } ${isOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-full transition-all ${
                  scrolled ? 'bg-dark' : 'bg-white'
                } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2 p-4">
                <Link
                  to="/"
                  className="text-dark hover:text-primary py-2 transition-colors"
                >
                  Ana Sayfa
                </Link>
                
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-dark hover:text-primary py-2 transition-colors text-left flex justify-between items-center"
                >
                  <span>Organizasyonlar</span>
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
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block text-sm text-dark/70 hover:text-primary py-1"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
                
                <Link
                  to="/hakkimizda"
                  className="text-dark hover:text-primary py-2 transition-colors"
                >
                  Hakkımızda
                </Link>
                <Link
                  to="/galeri"
                  className="text-dark hover:text-primary py-2 transition-colors"
                >
                  Galeri
                </Link>
                <Link
                  to="/iletisim"
                  className="text-dark hover:text-primary py-2 transition-colors"
                >
                  İletişim
                </Link>
                <Link
                  to="/organik-pastalar"
                  className="text-dark hover:text-primary py-2 transition-colors"
                >
                  %100 Organik Pasta
                </Link>
                <a
                  href="#rezervasyon"
                  className="cta-button bg-gradient-to-r from-primary to-secondary text-white text-center"
                >
                  Rezervasyon Yap
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
