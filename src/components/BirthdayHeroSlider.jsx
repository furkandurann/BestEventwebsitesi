import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import OptimizedImage from './OptimizedImage'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const birthdayImages = [
  // First photo - normal view
  { src: '/content/images/ahunundogumgunu/konseptdogumgunu.jpg', alt: 'Konsept doğum günü organizasyonu - Best Event İstanbul' },
  
  // 3rd and 4th photos in first 5
  { src: '/content/images/ahunundogumgunu/_DSF4779.jpg', alt: 'Çocuk doğum günü etkinliği - Best Event' },
  { src: '/content/images/ahunundogumgunu/2.jpg', alt: 'Doğum günü etkinlikleri - Best Event' },
  
  // Existing photos
  { src: '/content/images/ahunundogumgunu/_DSF4662.jpg', alt: 'Doğum günü organizasyonu - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/31.jpg', alt: 'Doğum günü fotoğraf çekimi - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/anaherobubbleshowgosterisi.jpg', alt: 'Bubble show gösterisi doğum günü - Best Event' },
  
  // All custom-named photos
  { src: '/content/images/ahunundogumgunu/canlıguvercingosterisi.jpg', alt: 'Canlı güvercin gösterisi doğum günü - Best Event' },
  { src: '/content/images/ahunundogumgunu/canlıguvercinileilktemas.jpg', alt: 'Çocuklar için güvercin gösterisi - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/dogumgunucocugunaozelfotorafcekimleri.jpg', alt: 'Doğum günü fotoğraf çekimi - Best Event' },
  { src: '/content/images/ahunundogumgunu/grupoyunları.jpg', alt: 'Doğum günü grup oyunları - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/heryasauygunbubbleshowpartisi.jpg', alt: 'Her yaş için bubble show - Best Event' },
  { src: '/content/images/ahunundogumgunu/ilktemas.jpg', alt: 'Doğum günü aktiviteleri İstanbul - Best Event' },
  { src: '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.jpg', alt: 'Sihirbazlık gösterisi doğum günü - Best Event' },
  { src: '/content/images/ahunundogumgunu/minniebubblegosterisi.jpg', alt: 'Minnie ve bubble show - Best Event doğum günü' },
  { src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisiilecocuklarıngozundekisaskinlik.jpg', alt: 'Çocuklar için sihirbazlık gösterisi - Best Event' },
  { src: '/content/images/ahunundogumgunu/tavsanveguvercınlıetkilesim.jpg', alt: 'Tavşan ve güvercin gösterisi - Best Event doğum günü' },
  { src: '/content/images/ahunundogumgunu/bubbleshowgosterisi.jpg', alt: 'Bubble show organizasyonu İstanbul - Best Event' },
  { src: '/content/images/ahunundogumgunu/vedafotografi.jpg', alt: 'Doğum günü veda fotoğrafı - Best Event İstanbul' },
]

const BirthdayHeroSlider = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Preload first image for instant load */}
      <link rel="preload" as="image" href={birthdayImages[0].src} fetchpriority="high" />
      
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
        preloadImages={true}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 2,
        }}
        className="h-full w-full"
      >
        {birthdayImages.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="absolute inset-0 h-full w-full cinematic-slide">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover cinematic-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchpriority={index === 0 ? 'high' : 'auto'}
                width="1920"
                height="1080"
                decoding={index === 0 ? 'sync' : 'async'}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styling with cinematic effects */}
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
        
        /* Cinematic Ken Burns effect */
        .cinematic-slide {
          opacity: 1;
        }
        
        .swiper-slide-active .cinematic-image {
          animation: kenBurns 36s ease-out forwards;
          transform-origin: center center;
        }
        
        @keyframes kenBurns {
          0% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.05);
          }
          100% {
            transform: scale(1.05);
            filter: brightness(1);
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

export default BirthdayHeroSlider
