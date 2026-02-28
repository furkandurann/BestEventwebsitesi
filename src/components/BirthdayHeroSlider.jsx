import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const slides = [
  '/profesyoneldogumgunucekimleri/dogumgunuonemlı1.webp',
  '/profesyoneldogumgunucekimleri/_DSF8233.webp',
  '/profesyoneldogumgunucekimleri/anaherodogumgunu.webp',
  '/profesyoneldogumgunucekimleri/_DSF7022.webp',
  '/profesyoneldogumgunucekimleri/_DSF7051.webp',
  '/profesyoneldogumgunucekimleri/_DSF7167.webp',
]

const BirthdayHeroSlider = () => {
  return (
    <div className="bg-[#050509] px-4 md:px-8 lg:px-12 pt-4 md:pt-8">
      <div className="relative w-full h-[75vh] md:h-[85vh] rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.7)] border border-white/[0.08]" style={{ contain: 'layout style paint' }}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <img
                  src={src}
                  alt={`Profesyonel doğum günü organizasyonu İstanbul ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchpriority={index === 0 ? 'high' : 'auto'}
                  width={1920}
                  height={1080}
                  decoding={index === 0 ? 'sync' : 'async'}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BirthdayHeroSlider
