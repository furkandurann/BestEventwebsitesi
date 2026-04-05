import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const bubbleShowSlides = [
  { src: '/content/images/bubbleshow/bubbleshowhero.webp', alt: 'Bubble show gösterisi İstanbul - Best Event' },
  { src: '/content/images/bubbleshow/bubbleshowslideranahero.webp', alt: 'Köpük şov organizasyonu İstanbul' },
  { src: '/content/images/bubbleshow/anabubble.webp', alt: 'Dev balon gösterisi çocuk partisi' },
  { src: '/content/images/bubbleshow/bubbleshowslider2.webp', alt: 'Bubble show kiralama doğum günü' },
  { src: '/content/images/bubbleshow/bubbleshowslider3.webp', alt: 'İnteraktif köpük gösterisi' },
  { src: '/content/images/bubbleshow/bubbleshownattive.webp', alt: 'Profesyonel bubble show performansı' },
  { src: '/content/images/bubbleshow/bubbleshowslider5.webp', alt: 'Bubble show etkinlik organizasyonu' },
]

const BubbleShowHeroSlider = () => {
  return (
    <div className="relative w-full h-[82.5vh] overflow-hidden">
      <link rel="preload" as="image" href={bubbleShowSlides[0].src} fetchpriority="high" />

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
        {bubbleShowSlides.map((slide, index) => (
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

        .swiper-slide {
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </div>
  )
}

export default BubbleShowHeroSlider
