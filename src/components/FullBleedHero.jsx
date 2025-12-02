import React from "react";
import "../styles/fullbleed.css";

/**
 * Apple-style Full-Bleed Interstitial Hero
 * 
 * @param {Object} media - { type: "image"|"video", src: string, alt?: string, poster?: string }
 * @param {string} theme - "dark" | "light" (background color)
 * @param {string} fit - "cover" | "contain" (object-fit style)
 * @param {string} caption - Optional caption text
 * @param {boolean} gradient - Enable subtle gradient overlay (default: true)
 */
export default function FullBleedHero({ 
  media, 
  theme = "dark", 
  fit = "cover", 
  caption, 
  gradient = true 
}) {
  const cls = [
    "fullbleed",
    theme === "light" ? "fullbleed--light" : "",
    fit === "contain" ? "fullbleed--contain" : ""
  ].filter(Boolean).join(" ");

  return (
    <section className={cls} aria-label="Geniş görsel bölüm">
      <div className={`fullbleed-inner ${gradient ? "fullbleed-gradient" : ""}`}>
        {media?.type === "video" ? (
          <video
            src={media.src}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <picture>
            <img 
              src={media.src} 
              alt={media.alt || ""} 
              loading="lazy" 
              decoding="async" 
            />
          </picture>
        )}
        {caption && <div className="fullbleed-caption">{caption}</div>}
        <div className="fullbleed-fade" />
      </div>
    </section>
  );
}
