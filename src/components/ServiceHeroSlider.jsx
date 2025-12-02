import { motion, useReducedMotion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const ServiceHeroSlider = ({
  title,
  subtitle,
  eyebrow,
  images = [],
  scrollHint = true,
  respectMotionPreference = true,
}) => {
  const shouldReduceMotion = useReducedMotion()
  const autoplayEnabled = respectMotionPreference ? !shouldReduceMotion : true

  if (!images || images.length === 0) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label={title}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1100}
        fadeEffect={{ crossFade: true }}
        loop={images.length > 1}
        autoplay={
          autoplayEnabled
            ? {
                delay: 4500,
                disableOnInteraction: false,
              }
            : false
        }
        className="absolute inset-0 h-full w-full pointer-events-none"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div
              className="absolute inset-0 bg-cover bg-center hero-image-mobile-wide"
              style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 mb-6"
          >
            {eyebrow}
          </motion.p>
        )}

        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-bold leading-tight mb-4"
            style={{
              textShadow: '0 2px 20px rgba(0,0,0,.45)',
              fontSize: 'clamp(2.25rem, 6vw, 4rem)',
              letterSpacing: '-0.035em',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {title}
          </motion.h1>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-lg md:text-2xl text-white/90 font-medium"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {scrollHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  )
}

export default ServiceHeroSlider
