import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// Image-only slides - Optimized with WebP (reduced to 7 best images for faster loading)
const magicShowSlides = [
  { src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp', alt: 'Sihirbazlık ve komedi show - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp', alt: 'Canlı güvercin ile ilk temas' },
  { src: '/content/images/ahunundogumgunu/tavsanveguvercınleetkilesim.webp', alt: 'Tavşan ve güvercin etkileşimi - Best Event' },
  { src: '/content/images/ahunundogumgunu/canlıguvercingosterisi.webp', alt: 'Canlı güvercin sihir gösterisi' },
  { src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisiilecocuklarıngozundekisaskinlik.webp', alt: 'Çocukların şaşkınlığı sihirbazlık gösterisi - Best Event' },
  { src: '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.webp', alt: 'İnanılmaz sihirbazlık gösterileri' },
  { src: '/content/images/ahunundogumgunu/ilktemas.webp', alt: 'Sihirbaz ile ilk temas' },
]

const MagicShowHeroSlider = () => {
  return (
    <div className="relative w-full h-[82.5vh] overflow-hidden">
      {/* Preload first image */}
      <link rel="preload" as="image" href={magicShowSlides[0].src} fetchpriority="high" />
      
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={600}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        loop={true}
        preloadImages={false}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 1,
        }}
        watchSlidesProgress={true}
        className="h-full w-full"
      >
        {magicShowSlides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="absolute inset-0 h-full w-full cinematic-slide">
              <img
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover cinematic-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchpriority={index === 0 ? 'high' : 'auto'}
                width="1920"
                height="1080"
                decoding={index === 0 ? 'sync' : 'async'}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style>{`
        .swiper-pagination {
          bottom: 2rem !important;
          z-index: 20 !important;
        }
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .swiper-pagination-bullet-active {
          width: 28px !important;
          border-radius: 4px !important;
          background: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
        }

        /* Cinematic Ken Burns effect - Optimized for performance */
        .cinematic-slide {
          opacity: 1;
        }

        .swiper-slide-active .cinematic-image {
          animation: kenBurns 20s ease-out forwards;
          transform-origin: center center;
          will-change: transform;
        }

        @keyframes kenBurns {
          0% {
            transform: scale(1) translateZ(0);
          }
          100% {
            transform: scale(1.04) translateZ(0);
          }
        }

        /* Smooth transitions */
        .swiper-slide {
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </div>
  )
}

export default MagicShowHeroSlider
