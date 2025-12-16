import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const MomentsSlider = () => {
  const moments = [
    {
      image: '/content/images/cocukdogumgunu/konseptdogumgunu.webp',
      title: 'Konsept Doğum Günü',
      category: 'Çocuk Etkinliği'
    },
    {
      image: '/content/images/fullpaket/fullpaket1.webp',
      title: 'Tam Paket Organizasyon',
      category: 'Premium Paket'
    },
    {
      image: '/content/images/Kostumlukarakterler/minniemausekiralamaheroo.webp',
      title: 'Kostümlü Karakterler',
      category: 'Animasyon'
    },
    {
      image: '/content/images/bubbleshow/bubbleshow1.webp',
      title: 'Bubble Show',
      category: 'Sahne Gösterisi'
    },
    {
      image: '/content/images/kurumsal/kurumsal1.webp',
      title: 'Kurumsal Etkinlik',
      category: 'Profesyonel'
    },
    {
      image: '/content/images/sihirbaz/sihirbaz1.webp',
      title: 'Sihirbazlık Gösterisi',
      category: 'Eğlence'
    }
  ]

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#0f0520] via-[#1a0b2e] to-[#0f0520] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15),_transparent_70%)] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-300 mb-4 font-medium">
            Galeri
          </p>
          <h2 
            className="font-display font-bold text-white mb-6" 
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}
          >
            Anlardan Kısa Bir Kesit
          </h2>
          <p 
            className="text-white/70 max-w-3xl mx-auto" 
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}
          >
            Her kare gerçek bir etkinlikten.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="moments-swiper"
            style={{
              paddingBottom: '50px'
            }}
          >
            {moments.map((moment, index) => (
              <SwiperSlide 
                key={index}
                style={{
                  width: '300px',
                  height: '400px'
                }}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-wider text-purple-300 mb-2 font-medium">
                      {moment.category}
                    </p>
                    <h3 
                      className="font-display font-bold mb-2" 
                      style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                    >
                      {moment.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/palyacogezegenii/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Tüm Anları Instagram'da Görün
          </a>
        </motion.div>
      </div>

      <style>{`
        .moments-swiper .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.5;
        }
        .moments-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #a855f7, #ec4899);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default MomentsSlider
