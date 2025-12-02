import { useState } from 'react';

/**
 * OptimizedImage Component
 * 
 * Core Web Vitals için optimize edilmiş görsel yükleme.
 * 
 * Özellikler:
 * - Lazy loading (varsayılan)
 * - Blur placeholder (yükleme sırasında)
 * - WebP desteği (fallback ile)
 * - Responsive sizing
 * - Error handling
 * 
 * Kullanım:
 * <OptimizedImage 
 *   src="/image.jpg" 
 *   alt="Açıklama" 
 *   className="w-full h-auto"
 * />
 */

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  aspectRatio,
  blurDataURL,
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  // Modern format desteği (AVIF + WebP) ve responsive images
  const getSourceSets = () => {
    if (!src) return null;
    
    const basePath = src.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const ext = src.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '.jpg';
    
    return {
      avif: `${basePath}.avif`,
      webp: `${basePath}.webp`,
      original: src,
      // Responsive sizes (optional)
      srcSet: props.sizes ? {
        avif: `${basePath}-480.avif 480w, ${basePath}-800.avif 800w, ${basePath}-1200.avif 1200w`,
        webp: `${basePath}-480.webp 480w, ${basePath}-800.webp 800w, ${basePath}-1200.webp 1200w`,
        original: `${basePath}-480${ext} 480w, ${basePath}-800${ext} 800w, ${basePath}-1200${ext} 1200w`
      } : null
    };
  };

  const sources = getSourceSets();

  // Aspect ratio wrapper
  const AspectRatioWrapper = ({ children }) => {
    if (!aspectRatio) return children;
    
    return (
      <div className="relative overflow-hidden" style={{ aspectRatio }}>
        {children}
      </div>
    );
  };

  // Error fallback
  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <AspectRatioWrapper>
      <picture>
        {/* AVIF source (best compression, modern browsers) */}
        {sources?.avif && (
          <source 
            srcSet={sources.srcSet?.avif || sources.avif}
            sizes={props.sizes}
            type="image/avif" 
          />
        )}
        
        {/* WebP source (good compression, wide support) */}
        {sources?.webp && (
          <source 
            srcSet={sources.srcSet?.webp || sources.webp}
            sizes={props.sizes}
            type="image/webp" 
          />
        )}
        
        {/* Original format source (responsive if sizes provided) */}
        {sources?.srcSet?.original && (
          <source 
            srcSet={sources.srcSet.original}
            sizes={props.sizes}
          />
        )}
        
        {/* Fallback image */}
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          sizes={props.sizes}
          className={`
            ${className}
            ${!isLoaded ? 'blur-sm scale-105' : 'blur-0 scale-100'}
            ${aspectRatio ? 'absolute inset-0 w-full h-full object-cover' : ''}
            transition-all duration-500 ease-out
          `}
          {...props}
        />
        
        {/* Blur placeholder (yükleme sırasında) */}
        {!isLoaded && blurDataURL && (
          <img
            src={blurDataURL}
            alt=""
            aria-hidden="true"
            className={`
              absolute inset-0 w-full h-full object-cover
              blur-xl scale-110
              pointer-events-none
            `}
          />
        )}
      </picture>
      
      {/* Loading spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </AspectRatioWrapper>
  );
};

export default OptimizedImage;
