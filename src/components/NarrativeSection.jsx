import React from "react";
import "../styles/narrative-final.css";

/**
 * Apple-style narrative section component
 * - Clean typography with tight letter-spacing
 * - Small, crystal-clear images (4:3, max 640px)
 * - Fade-in animations on scroll
 * - Alternating backgrounds for visual rhythm
 */
export default function NarrativeSection({
  eyebrow,        // Small uppercase label (optional)
  title,          // Main heading
  body,           // 2–4 sentences
  img,            // Image path (.webp recommended, >=1600px source)
  alt = "",       // Image alt text
  caption,        // Image caption (optional)
}) {
  return (
    <section className="narrative-section">
      <div className="narrative-wrap">
        {eyebrow && <p className="narrative-eyebrow">{eyebrow}</p>}
        {title && <h3 className="narrative-title">{title}</h3>}
        {body && <p className="narrative-body">{body}</p>}

        {img && (
          <figure className="narrative-figure">
            <picture>
              <img
                className="narrative-img"
                src={img}
                alt={alt}
                loading="lazy"
                decoding="async"
              />
            </picture>
            {caption && <figcaption className="narrative-caption">{caption}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  );
}
