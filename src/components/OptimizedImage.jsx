import { useState } from 'react';
import { generateSrcSet } from '../utils/responsiveImage';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
  aspectRatio,
  sizes = '100vw',
  onLoad,
  onError,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}
           style={width && height ? { width, height } : undefined}>
        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  const srcSet = generateSrcSet(src);

  const imgElement = (
    <img
      src={src}
      srcSet={srcSet}
      alt={alt}
      loading={loading}
      width={width}
      height={height}
      onLoad={onLoad}
      onError={handleError}
      sizes={sizes}
      fetchPriority={props.fetchpriority || props.fetchPriority}
      decoding={props.decoding || 'async'}
      className={`${className} ${aspectRatio ? 'absolute inset-0 w-full h-full object-cover' : ''}`}
      style={props.style}
    />
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
