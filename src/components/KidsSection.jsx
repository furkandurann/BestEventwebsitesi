import { Link, useNavigate } from 'react-router-dom'
import { memo } from 'react'
import OptimizedImage from './OptimizedImage'

const KidsSection = memo(function KidsSection({
  title, 
  subtitle, 
  img, 
  alt, 
  cta, 
  index 
}) {
  const navigate = useNavigate()

  return (
    <section 
      className="full-screen-section relative min-h-[85vh] w-full flex items-start justify-center overflow-hidden snap-start snap-always"
      aria-label={title}
      onClick={() => cta && navigate(cta.to)}
      onKeyDown={(e) => {
        if (cta && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          navigate(cta.to)
        }
      }}
      role={cta ? 'button' : undefined}
      tabIndex={cta ? 0 : -1}
      style={{
        borderBottom: '5px solid transparent',
        borderImage: 'linear-gradient(90deg, rgba(251,191,36,0.5), rgba(249,115,22,0.8), rgba(251,191,36,0.5)) 1',
        boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
        cursor: cta ? 'pointer' : 'default'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <OptimizedImage
          src={img}
          alt={alt}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchpriority={index === 0 ? 'high' : 'auto'}
          sizes="100vw"
          className={`w-full h-full object-cover ${
            title === 'Sihirbazlık Gösterisi' 
              ? 'sihirbaz-hero-img' 
              : title === 'Pamuk Şeker Arabası' 
              ? 'pamuk-seker-hero-img' 
              : title === 'Doğum Günü Organizasyonu'
              ? 'dogum-gunu-hero-img'
              : title === 'Kostümlü Karakterler'
              ? 'kostumlu-karakterler-hero-img'
              : title === 'Palyaço Etkinliği'
              ? 'palyaco-hero-img'
              : ''
          }`}
          style={
            title === 'Bubble Show'
              ? { objectPosition: 'center 30%' }
              : title === 'Full Paket Organizasyon'
              ? { objectPosition: 'center 30%' }
              : title === 'Sihirbazlık Gösterisi'
              ? undefined
              : undefined
          }
        />
        {/* İyileştirilmiş Overlay - Daha iyi okunabilirlik */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" 
          aria-hidden="true" 
        />
      </div>

      {/* Content - Title & Subtitle */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[27vh] md:mt-[37vh] animate-fade-in">
        {/* Title - Apple Minimal */}
        <h2 
          className="font-bold text-white mb-3 leading-tight tracking-tight"
          style={{ 
            textShadow: '0 2px 20px rgba(0,0,0,.45)',
            fontSize: 'clamp(2.1rem, 5vw, 3rem)',
            letterSpacing: '-0.035em',
            lineHeight: '1.05',
            fontWeight: '750'
          }}
        >
          {title}
        </h2>

        {/* Subtitle - Tek Cümlelik Slogan */}
        {subtitle && (
          <p 
            className="text-white font-medium opacity-95"
            style={{ 
              textShadow: '0 1px 12px rgba(0,0,0,.25)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              letterSpacing: '-0.015em',
              color: 'rgba(255,255,255,0.92)',
              fontWeight: '500'
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* CTA - Sağ Alt Köşe (Apple Style) */}
      {cta && (
        <div className="absolute bottom-8 right-8 z-10 animate-fade-in" role="navigation" aria-label="Eylemler">
          <Link 
            to={cta.to} 
            className="group flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <span 
              style={{
                fontSize: 'clamp(0.813rem, 1.5vw, 0.875rem)',
                fontWeight: '500',
                letterSpacing: '-0.01em'
              }}
            >
              {cta.text}
            </span>
            <svg 
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  )
})

export default KidsSection
