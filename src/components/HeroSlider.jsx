import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'
import 'swiper/css'
import 'swiper/css/effect-fade'

const slides = [
  {
    backgroundImage: '/content/images/Anasayfa/siteanahero.webp',
    link: null,
  },
  {
    title: 'Çocuk Etkinlikleri',
    slogan: 'Çocuğunuz için en iyisi',
    ctaLabel: 'Hemen İncele',
    ctaLink: '/organizasyonlar/cocuk-etkinlikleri',
    link: '/organizasyonlar/cocuk-etkinlikleri',
    backgroundImage: '/content/images/slider/slider1.webp',
  },
  {
    title: 'Yetişkin Doğum Günü',
    description: 'Arkadaşlığı hissettir ',
    backgroundImage: '/content/images/yetiskindogumgunu/yetiskindogumgunu2.webp',
    link: null,
  },
  {
    title: 'Kurumsal Etkinlikler',
    description: 'Takım ruhunu güçlendiren prestijli organizasyonlar',
    backgroundImage: '/content/images/slider/pexels-olly-787968.webp',
    link: null,
  },
  {
    title: 'Müzik Etkinlikleri',
    description: 'Profesyonel müzisyenlerle unutulmaz sahne deneyimleri',
    backgroundImage: '/content/images/music/anamusik.webp',
    link: '/organizasyonlar/muzik-etkinlikleri',
  },
  {
    title: 'Dans Etkinlikleri',
    description: 'Enerji dolu dans ve takım sporları ile motivasyonu artırın',
    backgroundImage: '/content/images/Anasayfa/dansanasayfaanagorsel.webp',
    link: '/organizasyonlar/dans-etkinlikleri',
  },
]

const SlideContent = ({ slide, index, isMobile }) => {
  return (
    <div className="absolute inset-0 h-full w-full flex items-center justify-center md:items-start md:justify-start overflow-hidden pt-0 md:pt-[30vh]">
      {slide.backgroundImage && (
        <OptimizedImage
          src={slide.backgroundImage}
          alt={slide.title || 'Best Event - Etkinlik Organizasyonu'}
          className="absolute inset-0 w-full h-full object-cover"
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchpriority={index === 0 ? 'high' : 'auto'}
          sizes="100vw"
          width={1920}
          height={1080}
          decoding={index === 0 ? 'sync' : 'async'}
          style={index === 0 ? { objectPosition: '40% center' } : undefined}
        />
      )}

      <div className="relative z-10 w-full text-center md:text-left">
        <div
          className="max-w-[90%] mx-auto md:mx-0"
          style={{
            marginLeft: isMobile ? 'auto' : (index === 3 ? '15vw' : (index === 4 || index === 5) ? '25vw' : '10vw')
          }}
        >
          <div className="animate-[slideUp_0.8s_ease-out_0.2s_both]">
            {slide.badge && (
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg animate-[scaleIn_0.5s_ease-out_0.4s_both]">
                {slide.badge}
              </div>
            )}
            {slide.title && (
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-white mb-4 drop-shadow-2xl [text-shadow:_0_4px_8px_rgb(0_0_0_/_80%)] text-center md:text-left leading-tight whitespace-nowrap">
                {slide.title}
              </h1>
            )}
            {slide.description && (
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 drop-shadow-lg whitespace-nowrap">
                {slide.description}
              </p>
            )}

            {slide.ctaLabel && slide.ctaLink && (
              <Link to={slide.ctaLink}>
                <span className="inline-block bg-white text-dark px-10 py-4 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-accent hover:text-dark hover:scale-105 active:scale-95">
                  {slide.ctaLabel}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const HeroSlider = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative h-[80vh] md:h-screen w-full" style={{ contain: 'layout style paint' }}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={false}
        preloadImages={false}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          loadOnTransitionStart: true,
          checkInView: true,
        }}
        watchSlidesProgress={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {slide.link ? (
              <Link
                to={slide.link}
                className="block h-full w-full cursor-pointer"
              >
                <SlideContent
                  slide={slide}
                  index={index}
                  isMobile={isMobile}
                />
              </Link>
            ) : (
              <div className="block h-full w-full cursor-default">
                <SlideContent
                  slide={slide}
                  index={index}
                  isMobile={isMobile}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
