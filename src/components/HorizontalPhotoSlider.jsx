import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import OptimizedImage from './OptimizedImage'

const HorizontalPhotoSlider = ({ images, title }) => {
  const sliderRef = useRef(null)
  const swiperRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Intersection Observer for viewport-based autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
          
          // Start/stop autoplay based on visibility
          if (swiperRef.current) {
            if (entry.isIntersecting) {
              swiperRef.current.autoplay?.start()
            } else {
              swiperRef.current.autoplay?.stop()
            }
          }
        })
      },
      { threshold: 0.2, rootMargin: '50px' }
    )

    if (sliderRef.current) {
      observer.observe(sliderRef.current)
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current)
      }
    }
  }, [])

  return (
    <section ref={sliderRef} className="py-12 md:py-16 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        {title && (
          <h3 
            className="text-white font-bold text-center"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              lineHeight: '1.35',
              letterSpacing: '-0.015em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            {title}
          </h3>
        )}
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        slidesPerView={1.2}
        spaceBetween={16}
        centeredSlides={false}
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        preloadImages={false}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          loadOnTransitionStart: true,
          checkInView: true,
        }}
        watchSlidesProgress={true}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
        }}
        className="horizontal-photo-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index < 4 ? 'eager' : 'lazy'}
                fetchpriority={index < 2 ? 'high' : 'low'}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 28vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Styling */}
      <style>{`
        .horizontal-photo-slider .swiper-button-next,
        .horizontal-photo-slider .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .horizontal-photo-slider .swiper-button-next:hover,
        .horizontal-photo-slider .swiper-button-prev:hover {
          background: rgba(59, 130, 246, 0.8);
          transform: scale(1.1);
        }
        
        .horizontal-photo-slider .swiper-button-next::after,
        .horizontal-photo-slider .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        @media (max-width: 640px) {
          .horizontal-photo-slider .swiper-button-next,
          .horizontal-photo-slider .swiper-button-prev {
            width: 36px;
            height: 36px;
          }
          
          .horizontal-photo-slider .swiper-button-next::after,
          .horizontal-photo-slider .swiper-button-prev::after {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  )
}

export default HorizontalPhotoSlider
