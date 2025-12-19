import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const santaImages = [
  // Standart Noel Baba fotoğrafları (önce standart)
  { src: '/content/images/noelbaba/noelbabastandart/noelannestandart.webp', alt: 'Noel Baba etkinliği İstanbul - Best Event' },
  { src: '/content/images/noelbaba/noelbabastandart/7BDA73F5-5BE9-419C-AD20-98CB8A679C51.webp', alt: 'Çocuklar için Noel Baba - Best Event' },
  { src: '/content/images/noelbaba/noelbabastandart/8B071122-174A-4DFE-AFBB-E1A5108E1009 2.jpg', alt: 'Noel Baba kiralama İstanbul - Best Event' },
  { src: '/content/images/noelbaba/noelbabastandart/8211BF23-166D-4080-B7CD-AA8C757CDB59 2.jpg', alt: 'Yılbaşı etkinliği Noel Baba - Best Event İstanbul' },
  
  // Private Noel Baba fotoğrafları (sonra private)
  { src: '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.44.jpeg', alt: 'Private Noel Baba organizasyonu - Best Event İstanbul' },
  { src: '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45.jpeg', alt: 'Özel kaftan Noel Baba - Best Event' },
  { src: '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45 (1).jpeg', alt: 'Noel Baba ve Kar Kızı - Best Event İstanbul' },
]

const SantaClausHeroSlider = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Kar Animasyonu - Hero üzerinde */}
      <div className="snow-container absolute inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="snowflake">❄</div>
        ))}
      </div>

      {/* Preload first image for instant load */}
      <link rel="preload" as="image" href={santaImages[0].src} fetchpriority="high" />
      
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
        {santaImages.map((image, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Başlık - Slider üzerinde */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2" style={{
            background: 'linear-gradient(135deg, #DC2626 0%, #FCD34D 50%, #16A34A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(252, 211, 77, 0.8), 0 0 60px rgba(220, 38, 38, 0.6)',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'
          }}>
            Noel Baba Kiralama
          </h1>
        </div>
      </div>

      {/* Custom styling with cinematic effects */}
      <style>{`
        /* Kar animasyonu */
        .snow-container {
          overflow: hidden;
        }
        
        .snowflake {
          position: absolute;
          top: -10px;
          color: white;
          font-size: clamp(10px, 2vw, 20px);
          animation: fall linear infinite;
          opacity: 0.8;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
        
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.3;
          }
        }
        
        .snowflake:nth-child(1) { left: 5%; animation-duration: 12s; animation-delay: 0s; }
        .snowflake:nth-child(2) { left: 15%; animation-duration: 14s; animation-delay: 1s; }
        .snowflake:nth-child(3) { left: 25%; animation-duration: 10s; animation-delay: 2s; }
        .snowflake:nth-child(4) { left: 35%; animation-duration: 16s; animation-delay: 0.5s; }
        .snowflake:nth-child(5) { left: 45%; animation-duration: 11s; animation-delay: 1.5s; }
        .snowflake:nth-child(6) { left: 55%; animation-duration: 13s; animation-delay: 0.8s; }
        .snowflake:nth-child(7) { left: 65%; animation-duration: 15s; animation-delay: 1.2s; }
        .snowflake:nth-child(8) { left: 75%; animation-duration: 9s; animation-delay: 2s; }
        .snowflake:nth-child(9) { left: 85%; animation-duration: 17s; animation-delay: 0.3s; }
        .snowflake:nth-child(10) { left: 95%; animation-duration: 12s; animation-delay: 1.8s; }
        .snowflake:nth-child(11) { left: 10%; animation-duration: 14s; animation-delay: 0.6s; }
        .snowflake:nth-child(12) { left: 30%; animation-duration: 11s; animation-delay: 1.3s; }
        .snowflake:nth-child(13) { left: 50%; animation-duration: 13s; animation-delay: 0.9s; }
        .snowflake:nth-child(14) { left: 70%; animation-duration: 15s; animation-delay: 1.6s; }
        .snowflake:nth-child(15) { left: 90%; animation-duration: 10s; animation-delay: 0.4s; }
        
        /* Swiper pagination */
        .swiper-pagination {
          bottom: 2rem !important;
          z-index: 30 !important;
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
            filter: brightness(1.02);
          }
          100% {
            transform: scale(1.02);
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

export default SantaClausHeroSlider
