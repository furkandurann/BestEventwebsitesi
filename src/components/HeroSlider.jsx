import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = [
  {
    title: '🎄 Yılbaşı Özel',
    description: 'Noel Baba Kiralama - Çocuklarınızın Rüyası Gerçek Olsun',
    ctaLabel: 'Hemen İncele',
    ctaLink: '/organizasyonlar/noel-baba-kiralama',
    link: '/organizasyonlar/noel-baba-kiralama',
    backgroundImage: '/content/images/noelbaba/WhatsApp Image 2025-12-05 at 12.05.57.jpeg',
    badge: '⏰ Son Kontenjan!'
  },
  {
    backgroundImage: '/content/images/Anasayfa/siteanahero.jpg',
    link: '/hizmetler',
  },
  {
    title: 'Çocuk Etkinlikleri',
    slogan: 'Çocuğunuz için en iyisi',
    ctaLabel: 'Hemen İncele',
    ctaLink: '/organizasyonlar/cocuk-etkinlikleri',
    link: '/organizasyonlar/cocuk-etkinlikleri',
    backgroundImage: '/content/images/slider/slider1.jpg',
  },
  {
    title: 'Yetişkin Doğum Günü',
    description: 'Arkadaşlığı hissettir ',
    backgroundImage: '/content/images/yetiskindogumgunu/yetiskindogumgunu2.jpg',
    link: '/hizmetler',
  },
  {
    title: 'Kurumsal Etkinlikler',
    description: 'Takım ruhunu güçlendiren prestijli organizasyonlar',
    backgroundImage: '/content/images/slider/pexels-olly-787968.jpg',
    link: '/hizmetler',
  },
  {
    title: 'Müzik Etkinlikleri',
    description: 'Profesyonel müzisyenlerle unutulmaz sahne deneyimleri',
    backgroundImage: '/content/images/music/anamusik.jpg',
    link: '/hizmetler/muzik-etkinlikleri',
  },
  {
    title: 'Dans Etkinlikleri',
    description: 'Enerji dolu dans ve takım sporları ile motivasyonu artırın',
    backgroundImage: '/content/images/Anasayfa/dansanasayfaanagorsel.JPG',
    link: '/hizmetler/dans-etkinlikleri',
  },
]

const HeroSlider = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative h-[80vh] md:h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1500}
        autoplay={
          shouldReduceMotion
            ? false
            : {
                delay: 12000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
        }
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        loop={true}
        loopAdditionalSlides={1}
        watchSlidesProgress={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Link 
              to={slide.link || '#'} 
              className={`block h-full w-full ${slide.link ? 'cursor-pointer' : 'cursor-default'}`}
            >
            <div className="absolute inset-0 h-full w-full flex items-start justify-start overflow-hidden pt-[10vh] md:pt-[30vh]">
              {slide.backgroundImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                />
              )}

              <div 
                className="relative z-10 layout-container text-center md:text-left"
                style={{
                  marginLeft: index === 3 ? '15vw' : (index === 4 || index === 5) ? '25vw' : '10vw'
                }}
              >
                <div className="max-w-[80%] mx-auto md:mx-0">
                  <motion.div
                    initial={
                      shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { delay: 0.2, duration: 0.8, ease: 'easeOut' }
                    }
                  >
                    {slide.badge && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg"
                      >
                        {slide.badge}
                      </motion.div>
                    )}
                    {slide.title && (
                      <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-2xl [text-shadow:_0_4px_8px_rgb(0_0_0_/_80%)] text-center md:text-left leading-tight">
                        {slide.title}
                      </h1>
                    )}
                    {slide.description && (
                      <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 drop-shadow-lg">
                        {slide.description}
                      </p>
                    )}

                  {slide.categories && (
                    <div className="mb-12 max-w-3xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {slide.categories.map((category, idx) => (
                          <motion.div
                            key={idx}
                            initial={
                              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={
                              shouldReduceMotion
                                ? { duration: 0 }
                                : { delay: 0.4 + idx * 0.1, ease: 'easeOut' }
                            }
                            className="text-white text-base md:text-lg font-medium drop-shadow-lg bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]"
                          >
                            ✨ {category.name}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                    {slide.ctaLabel && slide.ctaLink && (
                      <Link to={slide.ctaLink}>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-block bg-white text-dark px-10 py-4 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-accent hover:text-dark"
                        >
                          {slide.ctaLabel}
                        </motion.span>
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>

              {!shouldReduceMotion && (
                <>
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-20 left-10 text-white/30 hidden md:block"
                  >
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 right-10 text-white/20 hidden md:block"
                  >
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </motion.div>
                </>
              )}
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
