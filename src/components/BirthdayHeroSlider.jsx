import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// WebP + AVIF fallback with blur placeholder
const birthdayImages = [
  // First 3 photos - PRIORITY LOAD (Instant Display)
  { 
    src: '/content/images/ahunundogumgunu/konseptdogumgunu.webp',
    fallback: '/content/images/ahunundogumgunu/konseptdogumgunu.jpg',
    alt: 'Konsept doğum günü organizasyonu - Best Event İstanbul',
    blur: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzIwMjAyMCIvPjwvc3ZnPg=='
  },
  { 
    src: '/content/images/ahunundogumgunu/_DSF4779.webp',
    fallback: '/content/images/ahunundogumgunu/_DSF4779.jpg',
    alt: 'Çocuk doğum günü etkinliği - Best Event',
    blur: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzI1MjUyNSIvPjwvc3ZnPg=='
  },
  { 
    src: '/content/images/ahunundogumgunu/2.webp',
    fallback: '/content/images/ahunundogumgunu/2.jpg',
    alt: 'Doğum günü etkinlikleri - Best Event',
    blur: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=='
  },
  
  // Secondary photos - LAZY LOAD
  { src: '/content/images/ahunundogumgunu/_DSF4662.webp', fallback: '/content/images/ahunundogumgunu/_DSF4662.jpg', alt: 'Doğum günü organizasyonu - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/31.webp', fallback: '/content/images/ahunundogumgunu/31.jpg', alt: 'Doğum günü fotoğraf çekimi - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/anaherobubbleshowgosterisi.webp', fallback: '/content/images/ahunundogumgunu/anaherobubbleshowgosterisi.jpg', alt: 'Bubble show gösterisi doğum günü - Best Event' },
  { src: '/content/images/ahunundogumgunu/canlıguvercingosterisi.webp', fallback: '/content/images/ahunundogumgunu/canlıguvercingosterisi.jpg', alt: 'Canlı güvercin gösterisi doğum günü - Best Event' },
  { src: '/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp', fallback: '/content/images/ahunundogumgunu/canlıguvercinileilktemas.jpg', alt: 'Çocuklar için güvercin gösterisi - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/dogumgunucocugunaozelfotorafcekimleri.webp', fallback: '/content/images/ahunundogumgunu/dogumgunucocugunaozelfotorafcekimleri.jpg', alt: 'Doğum günü fotoğraf çekimi - Best Event' },
  { src: '/content/images/ahunundogumgunu/grupoyunları.webp', fallback: '/content/images/ahunundogumgunu/grupoyunları.jpg', alt: 'Doğum günü grup oyunları - Best Event İstanbul' },
  { src: '/content/images/ahunundogumgunu/heryasauygunbubbleshowpartisi.webp', fallback: '/content/images/ahunundogumgunu/heryasauygunbubbleshowpartisi.jpg', alt: 'Her yaş için bubble show - Best Event' },
  { src: '/content/images/ahunundogumgunu/ilktemas.webp', fallback: '/content/images/ahunundogumgunu/ilktemas.jpg', alt: 'Doğum günü aktiviteleri İstanbul - Best Event' },
  { src: '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.webp', fallback: '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.jpg', alt: 'Sihirbazlık gösterisi doğum günü - Best Event' },
  { src: '/content/images/ahunundogumgunu/minniebubblegosterisi.webp', fallback: '/content/images/ahunundogumgunu/minniebubblegosterisi.jpg', alt: 'Minnie ve bubble show - Best Event doğum günü' },
  { src: '/content/images/ahunundogumgunu/sihirbazlıkgosterisiilecocuklarıngozundekisaskinlik.webp', fallback: '/content/images/ahunundogumgunu/sihirbazlıkgosterisiilecocuklarıngozundekisaskinlik.jpg', alt: 'Çocuklar için sihirbazlık gösterisi - Best Event' },
  { src: '/content/images/ahunundogumgunu/tavsanveguvercınlıetkilesim.webp', fallback: '/content/images/ahunundogumgunu/tavsanveguvercınlıetkilesim.jpg', alt: 'Tavşan ve güvercin gösterisi - Best Event doğum günü' },
  { src: '/content/images/ahunundogumgunu/bubbleshowgosterisi.webp', fallback: '/content/images/ahunundogumgunu/bubbleshowgosterisi.jpg', alt: 'Bubble show organizasyonu İstanbul - Best Event' },
  { src: '/content/images/ahunundogumgunu/vedafotografi.webp', fallback: '/content/images/ahunundogumgunu/vedafotografi.jpg', alt: 'Doğum günü veda fotoğrafı - Best Event İstanbul' },
]

const BirthdayHeroSlider = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    // Preload ilk 3 resmi
    const preloadImages = async () => {
      const loadPromises = birthdayImages.slice(0, 3).map((img) => {
        return new Promise((resolve) => {
          const picture = new Image()
          picture.onload = resolve
          picture.onerror = resolve
          picture.src = img.src
        })
      })
      await Promise.all(loadPromises)
      setImageLoaded(true)
    }
    preloadImages()
  }, [])

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Critical: Preload first 3 images */}
      <link rel="preload" as="image" href={birthdayImages[0].src} fetchpriority="high" />
      <link rel="preload" as="image" href={birthdayImages[1].src} fetchpriority="high" />
      <link rel="preload" as="image" href={birthdayImages[2].src} />
      
      {/* Blur Placeholder for First Load */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-10">
          <img 
            src={birthdayImages[0].blur || birthdayImages[0].fallback} 
            alt="" 
            className="w-full h-full object-cover blur-2xl scale-110"
            style={{ filter: 'blur(40px) brightness(0.7)' }}
          />
        </div>
      )}
      
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
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
          loadOnTransitionStart: true,
        }}
        watchSlidesProgress={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="h-full w-full"
      >
        {birthdayImages.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="absolute inset-0 h-full w-full cinematic-slide">
              <picture>
                <source srcSet={image.src} type="image/webp" />
                <img
                  src={image.fallback}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover cinematic-image ${
                    imageLoaded || index < 3 ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-500`}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  fetchpriority={index === 0 ? 'high' : index < 3 ? 'high' : 'low'}
                  width="1920"
                  height="1080"
                  decoding={index < 3 ? 'sync' : 'async'}
                  onLoad={() => index === 0 && setImageLoaded(true)}
                />
              </picture>
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
        
        /* Lightweight Ken Burns effect - GPU optimized */
        .cinematic-slide {
          opacity: 1;
          will-change: transform;
        }
        
        .swiper-slide-active .cinematic-image {
          animation: kenBurnsLight 20s ease-out forwards;
          transform-origin: center center;
        }
        
        @keyframes kenBurnsLight {
          0% {
            transform: scale(1) translateZ(0);
          }
          100% {
            transform: scale(1.03) translateZ(0);
          }
        }
        
        /* Hardware acceleration */
        .cinematic-image {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translateZ(0);
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
