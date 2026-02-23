import { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  aspectRatio,
  onLoad,
  onError,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  // Generate WebP and AVIF sources from original src
  const getImageSources = (originalSrc) => {
    if (!originalSrc) return null;

    const srcWithoutExt = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const extension = originalSrc.match(/\.(jpg|jpeg|png)$/i)?.[1]?.toLowerCase();

    return {
      avif: extension ? `${srcWithoutExt}.avif` : null,
      webp: extension ? `${srcWithoutExt}.webp` : null,
      original: originalSrc
    };
  };

  const sources = getImageSources(src);

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  const imgElement = (
    <picture>
      {sources?.avif && (
        <source
          srcSet={sources.avif}
          type="image/avif"
          sizes={props.sizes}
        />
      )}
      {sources?.webp && (
        <source
          srcSet={sources.webp}
          type="image/webp"
          sizes={props.sizes}
        />
      )}
      <img
        src={sources?.original || src}
        alt={alt}
        loading={loading}
        onLoad={onLoad}
        onError={handleError}
        sizes={props.sizes}
        fetchPriority={props.fetchpriority}
        decoding={props.decoding || 'async'}
        className={`${className} ${aspectRatio ? 'absolute inset-0 w-full h-full object-cover' : ''}`}
        style={props.style}
      />
    </picture>
  );

  if (aspectRatio) {
    return (
      <div className="relative overflow-hidden" style={{ aspectRatio }}>
        {imgElement}
      </div>
    );
  }

  return imgElement;
};

export default OptimizedImage;
