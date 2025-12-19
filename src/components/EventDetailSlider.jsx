import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { motion, useReducedMotion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const EventDetailSlider = ({
  photos = [],
  title,
  description,
  serviceTitle,
  slogan = "Çocuğunuz Buna Değer",
  hideCTA = false
}) => {
  const shouldReduceMotion = useReducedMotion()

  if (!photos || photos.length === 0) {
    return null
  }

  // Extract short service name from title if serviceTitle not provided
  const displayTitle = serviceTitle || title.split('-')[0].replace(/İstanbul'da|Profesyonel|Hizmeti|Hizmet/gi, '').trim()

  return (
    <div className="relative h-[70vh] md:h-[85vh] lg:h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1200}
        autoplay={
          shouldReduceMotion
            ? false
            : {
                delay: 5000,
                disableOnInteraction: false,
              }
        }
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        loop={photos.length > 1}
        className="h-full w-full"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden">
              {/* Photo Background */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${photo})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

              {/* Service Title - Top (All slides) */}
              <div className="absolute top-8 left-0 right-0 z-10 be-container">
                <motion.div
                  initial={
                    shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { delay: 0.2, duration: 0.8, ease: 'easeOut' }
                  }
                  className="text-center"
                >
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white drop-shadow-2xl [text-shadow:_0_4px_16px_rgb(0_0_0_/_90%)] tracking-tight">
                    {displayTitle}
                  </h1>
                </motion.div>
              </div>

              {/* Slogan - Bottom Right (Only on first slide) */}
              {index === 0 && slogan && (
                <div className="absolute bottom-16 right-8 md:right-12 lg:right-16 z-10 max-w-xs md:max-w-sm">
                  <motion.div
                    initial={
                      shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { delay: 0.6, duration: 0.9, ease: 'easeOut' }
                    }
                    className="bg-gradient-to-r from-orange-400 to-orange-500 backdrop-blur-md rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-2xl border-2 border-white/30"
                  >
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg text-center leading-tight">
                      {slogan}
                    </p>
                  </motion.div>
                </div>
              )}

              {/* CTA Buttons - Center (Only on first slide) */}
              {index === 0 && !hideCTA && (
                <div className="absolute inset-0 flex items-center justify-center z-10 be-container pb-24 md:pb-16">
                  <motion.div
                    initial={
                      shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { delay: 0.4, duration: 0.9, ease: 'easeOut' }
                    }
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <motion.a
                      href="tel:+905307309009"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="be-cta-button be-touch-target shadow-2xl hover:shadow-3xl"
                    >
                      📞 Hemen Ara
                    </motion.a>
                    
                    <motion.a
                      href="https://wa.me/905307309009"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-3 border-white text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-white/20 transition-all be-touch-target backdrop-blur-sm"
                    >
                      💬 WhatsApp
                    </motion.a>
                  </motion.div>
                </div>
              )}

              {/* Decorative Elements */}
              {!shouldReduceMotion && index === 0 && (
                <>
                  <motion.div
                    animate={{ y: [0, -25, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-20 left-10 text-white/20 hidden lg:block"
                  >
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 25, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 right-10 text-white/15 hidden lg:block"
                  >
                    <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </motion.div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Indicator (Only if content below) */}
      <motion.div
        animate={shouldReduceMotion ? { y: 0 } : { y: [0, 12, 0] }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center text-white cursor-pointer">
          <span className="text-sm font-medium mb-2 drop-shadow-lg">Kaydır</span>
          <svg className="w-6 h-6 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Photo Counter */}
      {photos.length > 1 && (
        <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
          {photos.length} Fotoğraf
        </div>
      )}
    </div>
  )
}

export default EventDetailSlider
