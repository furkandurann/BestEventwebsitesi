import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { generateSrcSet } from '../utils/responsiveImage'
import 'swiper/css'

const displayFont = 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
const textFont = 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif'

const LocationHeroShowcase = ({
  title,
  description,
  slides = [],
  eyebrow = "İstanbul'un Her Yerindeyiz"
}) => {
  if (!slides.length) return null

  return (
    <section className="relative overflow-hidden bg-black py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-xs sm:text-sm text-orange-300 mb-4 font-medium"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold text-white mb-3"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              fontFamily: displayFont
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              lineHeight: '1.6',
              letterSpacing: '-0.01em',
              fontWeight: '500',
              fontFamily: textFont
            }}
          >
            {description}
          </motion.p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          centeredSlides
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          speed={900}
          spaceBetween={18}
          slidesPerView={1.05}
          breakpoints={{
            768: { slidesPerView: 1.15 },
            1024: { slidesPerView: 1.35 }
          }}
          className="h-[60vh] sm:h-[65vh] md:h-[68vh]"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={`${slide.src}-${idx}`}>
              {(() => {
                const slideTag = slide.tag || title
                const slideTitle = slide.title || slide.alt
                const slideDescription = slide.description || null
                const slideHref = slide.href || null

                return (
                  slideHref ? (
                    <Link to={slideHref} className="group block h-full">
                      <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl transition hover:border-cyan-300/30">
                        <img
                          src={slide.src}
                          srcSet={generateSrcSet(slide.src)}
                          sizes="(max-width: 768px) 95vw, (max-width: 1024px) 85vw, 75vw"
                          alt={slide.alt}
                          className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          fetchPriority={idx === 0 ? 'high' : undefined}
                          decoding="async"
                          width={1200}
                          height={800}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-lg">
                          <p className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 mb-3">
                            {slideTag}
                          </p>
                          <p className="text-lg md:text-xl font-semibold" style={{ letterSpacing: '-0.01em' }}>
                            {slideTitle}
                          </p>
                          {slideDescription && (
                            <p className="mt-2 max-w-2xl text-sm md:text-base text-white/80" style={{ lineHeight: '1.55' }}>
                              {slideDescription}
                            </p>
                          )}
                          <p className="mt-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                            Detayı Aç
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl">
                      <img
                        src={slide.src}
                        srcSet={generateSrcSet(slide.src)}
                        sizes="(max-width: 768px) 95vw, (max-width: 1024px) 85vw, 75vw"
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        fetchPriority={idx === 0 ? 'high' : undefined}
                        decoding="async"
                        width={1200}
                        height={800}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-lg">
                        <p className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 mb-3">
                          {slideTag}
                        </p>
                        <p className="text-lg md:text-xl font-semibold" style={{ letterSpacing: '-0.01em' }}>
                          {slideTitle}
                        </p>
                        {slideDescription && (
                          <p className="mt-2 max-w-2xl text-sm md:text-base text-white/80" style={{ lineHeight: '1.55' }}>
                            {slideDescription}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                )
              })()}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default LocationHeroShowcase
