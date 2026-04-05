import React from "react";
import { generateSrcSet } from '../utils/responsiveImage';
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
  headingLevel = 'h2', // SEO: h2 for top-level sections, h3 for nested
}) {
  const Heading = headingLevel
  return (
    <section className="narrative-section">
      <div className="narrative-wrap">
        {eyebrow && <p className="narrative-eyebrow">{eyebrow}</p>}
        {title && <Heading className="narrative-title">{title}</Heading>}
        {body && <p className="narrative-body">{body}</p>}

        {img && (
          <figure className="narrative-figure">
              <img
                className="narrative-img"
                src={img}
                srcSet={generateSrcSet(img)}
                sizes="(max-width: 640px) 100vw, 640px"
                alt={alt}
                loading="lazy"
                decoding="async"
                width={640}
                height={480}
              />
            {caption && <figcaption className="narrative-caption">{caption}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  );
}
