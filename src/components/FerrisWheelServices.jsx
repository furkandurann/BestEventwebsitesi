import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FerrisWheelServices = () => {
  const shouldReduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(!shouldReduceMotion)

  const services = [
    {
      title: 'Çocuk Doğum Günü',
      subtitle: 'Organizasyonu',
      icon: '🎂',
      description: 'Rüya gibi çocuk partileri',
      gradient: 'from-purple-500 via-pink-500 to-rose-400',
      link: '/organizasyonlar/dogum-gunu'
    },
    {
      title: 'Yetişkin Doğum Günü',
      subtitle: 'Organizasyonu',
      icon: '🥂',
      description: 'Şık ve özel kutlamalar',
      gradient: 'from-violet-500 via-purple-500 to-pink-500',
      link: '/organizasyonlar/dogum-gunu'
    },
    {
      title: 'Müzik Etkinlikleri',
      subtitle: 'Organizasyonu',
      icon: '🎶',
      description: 'Profesyonel müzisyenlerle unutulmaz anlar',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      link: '/organizasyonlar/muzik-etkinlikleri'
    },
    {
      title: 'Dans Etkinlikleri',
      subtitle: 'Gösterileri',
      icon: '💃',
      description: 'Büyüleyici dans performansları',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      link: '/organizasyonlar/dans-etkinlikleri'
    },
    {
      title: 'Kurumsal Etkinlikler',
      subtitle: 'Organizasyonu',
      icon: '🏢',
      description: 'Firma etkinlikleri ve team building',
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      link: '/organizasyonlar/kurumsal-etkinlik'
    },
    {
      title: 'Açılış',
      subtitle: 'Organizasyonu',
      icon: '🎊',
      description: 'Prestijli açılış etkinlikleri',
      gradient: 'from-amber-400 via-pink-500 to-purple-500',
      link: '/organizasyonlar/cocuk-etkinlikleri'
    }
  ]

  useEffect(() => {
    if (shouldReduceMotion || !isAutoRotating) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoRotating, services.length, shouldReduceMotion])

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsAutoRotating(false)
    }
  }, [shouldReduceMotion])

  const handleNext = () => {
    setIsAutoRotating(false)
    setActiveIndex((prev) => (prev + 1) % services.length)
  }

  const handlePrev = () => {
    setIsAutoRotating(false)
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const getCardPosition = (index) => {
    const diff = (index - activeIndex + services.length) % services.length
    const positions = [
      { y: 0, scale: 1.2, z: 100, opacity: 1, order: 6 }, // Center (active)
      { y: -180, scale: 0.85, z: 0, opacity: 0.8, order: 5 }, // Top
      { y: -320, scale: 0.6, z: -100, opacity: 0.4, order: 4 }, // Top-back
      { y: 180, scale: 0.85, z: 0, opacity: 0.8, order: 3 }, // Bottom
      { y: 320, scale: 0.6, z: -100, opacity: 0.4, order: 2 }, // Bottom-back
      { y: -400, scale: 0.3, z: -150, opacity: 0.1, order: 1 }, // Hidden top
    ]
    return positions[diff] || positions[0]
  }

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="layout-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 bg-clip-text text-transparent">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Hayalinizdeki etkinliği lüks ve şık bir şekilde gerçeğe dönüştürüyoruz
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          {shouldReduceMotion ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {services.map((service, index) => (
                <Link key={index} to={service.link} className="block">
                  <div className={`h-full rounded-3xl p-6 text-white shadow-lg bg-gradient-to-br ${service.gradient} transition-transform duration-300 hover:-translate-y-1`}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-1">{service.title}</h3>
                    <h4 className="text-lg font-medium text-white/90 mb-3">
                      {service.subtitle}
                    </h4>
                    <p className="text-white/80">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <>
              {/* Ferris Wheel Container */}
              <div className="relative w-full max-w-5xl mx-auto" style={{ height: '700px' }}>
                {/* Center Axis Decoration */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full shadow-2xl z-50 animate-pulse"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-4 border-amber-400/30 rounded-full z-40"></div>

                {/* Cards */}
                <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                  {services.map((service, index) => {
                    const position = getCardPosition(index)
                    const isActive = index === activeIndex

                    return (
                      <motion.div
                        key={index}
                        className="absolute left-1/2 top-1/2"
                        initial={false}
                        animate={{
                          y: position.y,
                          scale: position.scale,
                          z: position.z,
                          x: '-50%',
                          opacity: position.opacity,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 20,
                          mass: 1,
                        }}
                        style={{
                          zIndex: position.order,
                          transformOrigin: 'center center',
                        }}
                      >
                        <Link
                          to={service.link}
                          className="block"
                          onClick={() => setIsAutoRotating(false)}
                        >
                          <motion.div
                            className={`relative w-80 h-56 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 ${
                              isActive ? 'cursor-pointer' : 'cursor-default pointer-events-none'
                            }`}
                            style={{
                              background: `linear-gradient(135deg, ${
                                isActive
                                  ? 'rgba(168, 85, 247, 0.95), rgba(236, 72, 153, 0.95)'
                                  : 'rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4)'
                              })`,
                              boxShadow: isActive
                                ? '0 25px 50px -12px rgba(168, 85, 247, 0.5), 0 0 0 4px rgba(251, 191, 36, 0.5), inset 0 0 40px rgba(251, 191, 36, 0.2)'
                                : '0 10px 30px -10px rgba(168, 85, 247, 0.3)',
                              border: isActive ? '2px solid rgba(251, 191, 36, 0.8)' : '2px solid rgba(255, 255, 255, 0.3)',
                            }}
                            whileHover={
                              isActive
                                ? {
                                    scale: 1.05,
                                    boxShadow:
                                      '0 30px 60px -15px rgba(168, 85, 247, 0.6), 0 0 0 6px rgba(251, 191, 36, 0.7), inset 0 0 50px rgba(251, 191, 36, 0.3)',
                                  }
                                : {}
                            }
                          >
                            {/* Gold Corner Accents */}
                            {isActive && (
                              <>
                                <div className="absolute top-3 left-3 w-6 h-6 border-l-4 border-t-4 border-amber-400/80 rounded-tl-lg"></div>
                                <div className="absolute top-3 right-3 w-6 h-6 border-r-4 border-t-4 border-amber-400/80 rounded-tr-lg"></div>
                                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-4 border-b-4 border-amber-400/80 rounded-bl-lg"></div>
                                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-4 border-b-4 border-amber-400/80 rounded-br-lg"></div>
                              </>
                            )}

                            {/* Sparkle Effects */}
                            {isActive && (
                              <>
                                <motion.div
                                  className="absolute top-6 right-6 w-2 h-2 bg-amber-300 rounded-full"
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                  }}
                                />
                                <motion.div
                                  className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-yellow-200 rounded-full"
                                  animate={{
                                    scale: [1, 1.8, 1],
                                    opacity: [0.4, 1, 0.4],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                  }}
                                />
                              </>
                            )}

                            <div className="relative z-10">
                              <div className="text-6xl mb-4 filter drop-shadow-lg">{service.icon}</div>
                              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                                {service.title}
                              </h3>
                              <h4 className="text-xl font-semibold text-white/90 mb-3 drop-shadow-md">
                                {service.subtitle}
                              </h4>
                              <p
                                className={`text-white/80 drop-shadow-md transition-opacity ${
                                  isActive ? 'opacity-100' : 'opacity-0'
                                }`}
                              >
                                {service.description}
                              </p>

                              {isActive && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="mt-4 flex items-center text-amber-300 font-semibold drop-shadow-lg"
                                >
                                  Detaylı Bilgi
                                  <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </motion.div>
                              )}
                            </div>

                            {/* Glass Effect Overlay */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                          </motion.div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 pointer-events-none z-50">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="pointer-events-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center border-2 border-amber-400/50"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="pointer-events-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-pink-500/50 transition-all flex items-center justify-center border-2 border-amber-400/50"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-3">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index)
                      setIsAutoRotating(false)
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex
                        ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Auto Rotation Toggle */}
        <div className="text-center mt-12">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            disabled={shouldReduceMotion}
            className={`text-sm transition-colors flex items-center justify-center mx-auto space-x-2 ${
              shouldReduceMotion
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            <span>{isAutoRotating ? '⏸ Otomatik Dönüşü Durdur' : '▶ Otomatik Dönüşü Başlat'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FerrisWheelServices
