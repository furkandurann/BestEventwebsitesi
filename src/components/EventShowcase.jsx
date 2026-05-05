import React from 'react'
import { generateSrcSet } from '../utils/responsiveImage'
import '../styles/event-showcase.css'

export default function EventShowcase({ image, title, subtitle, ctaText, ctaLink, dark = false }) {
  return (
    <section className={`event-showcase ${dark ? 'event-showcase--dark' : ''}`}>
      <div className="event-showcase__content">
        <h2 className="event-showcase__title">{title}</h2>
        <p className="event-showcase__subtitle">{subtitle}</p>
        <a href={ctaLink} className="event-showcase__cta">{ctaText}</a>
      </div>
      <div className="event-showcase__media">
        <img src={image} srcSet={generateSrcSet(image)} sizes="(max-width: 768px) 100vw, 800px" alt={title} loading="lazy" width={800} height={600} decoding="async" />
      </div>
    </section>
  )
}
