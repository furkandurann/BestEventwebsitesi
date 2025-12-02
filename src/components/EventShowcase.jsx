import React from 'react'
import '../styles/event-showcase.css'

export default function EventShowcase({ image, title, subtitle, ctaText, ctaLink, dark = false }) {
  return (
    <section className={`event-showcase ${dark ? 'event-showcase--dark' : ''}`}>
      <div className="event-showcase__content">
        <h1 className="event-showcase__title">{title}</h1>
        <p className="event-showcase__subtitle">{subtitle}</p>
        <a href={ctaLink} className="event-showcase__cta">{ctaText}</a>
      </div>
      <div className="event-showcase__media">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </section>
  )
}
