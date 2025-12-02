import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/apple-hero.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, A11y, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

/**
 * AppleHeroSlider
 * - Apple ürün sayfalarındaki gibi: tek net görsel + büyük başlık + kısa alt metin + tek CTA
 * - Video desteği eklendi: type: 'video' ile video kullanılabilir
 * - Başlık fotoğrafı KAPATMAZ; preset konumlar: 'top-left' | 'top-center' | 'bottom-left' | 'bottom-center'
 * - focal: 'center 35%' gibi background-position kontrolü
 */
export default function AppleHeroSlider({ slides = [], height = '92vh', loop = true, autoDelay = 2000 }) {
  return (
    <div className="apple-hero" style={{ minHeight: height }}>
      <Swiper
        modules={[EffectFade, Autoplay, A11y, Pagination]}
        effect="fade"
        speed={1200}
        loop={loop}
        autoplay={{ delay: autoDelay, disableOnInteraction: false, pauseOnMouseEnter: true }}
        a11y={{ prevSlideMessage: 'Önceki', nextSlideMessage: 'Sonraki' }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            {s.type === 'video' ? (
              <video
                className="apple-hero__bg"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: s.focal || 'center center'
                }}
                autoPlay
                muted={s.muted !== false}
                loop
                playsInline
                aria-label={s.title}
              >
                <source src={s.video} type="video/mp4" />
              </video>
            ) : (
              <div
                className="apple-hero__bg"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundPosition: s.focal || 'center 35%',
                }}
                role="img"
                aria-label={s.title}
              />
            )}
            <div className="apple-hero__mask" />
            <div className="apple-hero__inner">
              <div className={`apple-hero__content ${toPos(s.position)}`}>
                {s.eyebrow && <p className="apple-hero__eyebrow">{s.eyebrow}</p>}
                <h1 className="apple-hero__title">{s.title}</h1>
                {s.subtitle && <p className="apple-hero__subtitle">{s.subtitle}</p>}
                {s.ctaText && s.to && (
                  s.external ? (
                    <a className="apple-hero__cta" href={s.to} target="_blank" rel="noreferrer">{s.ctaText} →</a>
                  ) : (
                    <Link className="apple-hero__cta" to={s.to}>{s.ctaText} →</Link>
                  )
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

function toPos(p) {
  switch (p) {
    case 'top-left': return 'pos-top-left'
    case 'top-center': return 'pos-top-center'
    case 'bottom-left': return 'pos-bottom-left'
    case 'bottom-center': return 'pos-bottom-center'
    default: return 'pos-center'  // Default to center
  }
}
