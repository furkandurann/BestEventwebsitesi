/**
 * Responsive image srcSet utility
 * Generates srcSet string for responsive WebP image variants
 * Variants: -400w, -640w, -1024w, original (1920w)
 */
export function generateSrcSet(src) {
  if (!src || !src.match(/\.webp$/i)) return undefined;
  const base = src.replace(/\.webp$/i, '');
  return `${base}-400w.webp 400w, ${base}-640w.webp 640w, ${base}-1024w.webp 1024w, ${src} 1920w`;
}

/**
 * Get a specific variant of an image
 * @param {string} src - Original image path
 * @param {'thumb'|'mobile'|'tablet'|'full'} variant - Desired variant
 * @returns {string} Path to the variant
 */
export function getImageVariant(src, variant = 'full') {
  if (!src || !src.match(/\.webp$/i)) return src;
  const base = src.replace(/\.webp$/i, '');
  switch (variant) {
    case 'thumb': return `${base}-400w.webp`;
    case 'mobile': return `${base}-640w.webp`;
    case 'tablet': return `${base}-1024w.webp`;
    default: return src;
  }
}
