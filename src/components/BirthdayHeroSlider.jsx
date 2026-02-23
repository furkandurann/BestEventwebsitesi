import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

// Tüm fotoğraflar - WebP öncelikli
const slides = [
  '/content/images/ahunundogumgunu/konseptdogumgunu.jpg',
  '/content/images/ahunundogumgunu/_DSF4662.webp',
  '/content/images/ahunundogumgunu/_DSF4735.webp',
  '/content/images/ahunundogumgunu/_DSF4779.webp',
  '/content/images/ahunundogumgunu/_DSF4827.webp',
  '/content/images/ahunundogumgunu/_DSF4904.webp',
  '/content/images/ahunundogumgunu/_DSF4912.webp',
  '/content/images/ahunundogumgunu/_DSF4940.webp',
  '/content/images/ahunundogumgunu/_DSF4953.webp',
  '/content/images/ahunundogumgunu/_DSF4958.webp',
  '/content/images/ahunundogumgunu/_DSF4968.webp',
  '/content/images/ahunundogumgunu/_DSF4996.webp',
  '/content/images/ahunundogumgunu/_DSF5019.webp',
  '/content/images/ahunundogumgunu/_DSF5078.webp',
  '/content/images/ahunundogumgunu/_DSF5125.webp',
  '/content/images/ahunundogumgunu/_DSF5236.webp',
  '/content/images/ahunundogumgunu/_DSF5285.webp',
  '/content/images/ahunundogumgunu/_DSF6002.webp',
  '/content/images/ahunundogumgunu/_DSF6181.webp',
  '/content/images/ahunundogumgunu/_DSF6401.webp',
  '/content/images/ahunundogumgunu/2.webp',
  '/content/images/ahunundogumgunu/4.webp',
  '/content/images/ahunundogumgunu/18.webp',
  '/content/images/ahunundogumgunu/19.webp',
  '/content/images/ahunundogumgunu/22.webp',
  '/content/images/ahunundogumgunu/24.webp',
  '/content/images/ahunundogumgunu/31.webp',
  '/content/images/ahunundogumgunu/anaherobubbleshowgosterisi.jpg',
  '/content/images/ahunundogumgunu/bubbleshowgosterisi.webp',
  '/content/images/ahunundogumgunu/canlıguvercingosterisi.webp',
  '/content/images/ahunundogumgunu/canlıguvercinileilktemas.webp',
  '/content/images/ahunundogumgunu/dogumgunucocugunaozelfotorafcekimleri.webp',
  '/content/images/ahunundogumgunu/grupoyunları.webp',
  '/content/images/ahunundogumgunu/heryasauygunbubbleshowpartisi.webp',
  '/content/images/ahunundogumgunu/ilktemas.jpg',
  '/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.webp',
  '/content/images/ahunundogumgunu/minniebubblegosterisi.jpg',
  '/content/images/ahunundogumgunu/sihirbazlıkgosterisiilecocuklarıngozundekisaskinlik.webp',
  '/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp',
  '/content/images/ahunundogumgunu/tavsanveguvercınleetkilesim.webp',
  '/content/images/ahunundogumgunu/vedafotografi.jpg',
]

const BirthdayHeroSlider = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 4000,
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
                alt={`Doğum günü organizasyonu ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BirthdayHeroSlider
