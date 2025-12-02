import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function KidsSection({ 
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
      className="full-screen-section relative min-h-screen w-full flex items-start justify-center overflow-hidden snap-start snap-always border-b border-white/10"
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
      style={{ cursor: cta ? 'pointer' : 'default' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={img}
          alt={alt}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
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
              ? undefined // CSS class ile kontrol edilecek
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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[27vh] md:mt-[37vh]"
      >
        {/* Title - Apple Minimal */}
        <h1 
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
        </h1>

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
      </motion.div>

      {/* CTA - Sağ Alt Köşe (Apple Style) */}
      {cta && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-8 right-8 z-10"
          role="navigation" 
          aria-label="Eylemler"
        >
          <Link to={cta.to} className="group flex items-center gap-1.5 text-white/90 hover:text-white transition-colors duration-200">
            <span 
              style={{
                fontSize: 'clamp(.8rem, 1.5vw, 0.9rem)',
                fontWeight: '400',
                letterSpacing: '0'
              }}
            >
              {cta.text}
            </span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      )}
    </section>
  )
}
