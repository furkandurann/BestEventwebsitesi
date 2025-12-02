import React from 'react'

/**
 * Props:
 * title, subtitle, img: {src640,src1280,src1920,width,height,alt}, primaryCta{ text,to,external }, secondaryCta{...}
 */
export default function KidsProductHero({ title, subtitle, img, primaryCta, secondaryCta }) {
  const imgAlt = img?.alt || title
  
  return (
    <section className="kids-hero" role="region" aria-label={`${title} kahraman bölümü`}>
      <div className="kids-hero__inner">
        <header>
          <h1 className="kids-hero__title">{title}</h1>
          {subtitle && <p className="kids-hero__subtitle">{subtitle}</p>}
          {(primaryCta || secondaryCta) && (
            <nav className="kids-hero__ctas" aria-label="Birincil eylemler">
              {primaryCta && (primaryCta.external
                ? <a className="btn btn-primary" href={primaryCta.to} target="_blank" rel="noreferrer">{primaryCta.text}</a>
                : <a className="btn btn-primary" href={primaryCta.to}>{primaryCta.text}</a>)}
              {secondaryCta && (secondaryCta.external
                ? <a className="btn btn-secondary" href={secondaryCta.to} target="_blank" rel="noreferrer">{secondaryCta.text}</a>
                : <a className="btn btn-secondary" href={secondaryCta.to}>{secondaryCta.text}</a>)}
            </nav>
          )}
        </header>

        <div className="kids-hero__mediaWrap">
          <picture>
            <source srcSet={`${img.src1920}`} media="(min-width:1280px)" />
            <source srcSet={`${img.src1280}`} media="(min-width:640px)" />
            <img
              className="kids-hero__img"
              src={img.src640}
              alt={imgAlt}
              width={img.width || 1920}
              height={img.height || 1080}
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
