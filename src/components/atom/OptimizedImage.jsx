import React, { useState, useCallback, memo } from 'react';

/**
 * OptimizedImage component that handles:
 * - WebP format when supported
 * - Fixed dimensions to prevent layout shift
 * - Lazy loading
 * - Optimized loading states
 * - GPU acceleration for better performance
 */
const OptimizedImage = memo(({ 
  src, 
  webpSrc, 
  alt = '', 
  width, 
  height, 
  className = '', 
  style = {},
  loading = 'lazy',
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback((e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  }, [onLoad]);

  const handleError = useCallback((e) => {
    setHasError(true);
    if (onError) onError(e);
  }, [onError]);

  // Use global WebP detection from index.js
  const optimalSrc = (window.supports && window.supports('webp') && webpSrc) ? webpSrc : src;
  
  // Style for the container, includes dimensions to prevent layout shift
  const containerStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'rgba(var(--color-primary-rgb), 0.05)',
    ...style
  };

  // Style for the loading placeholder
  const placeholderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(var(--color-primary-rgb), 0.1) 25%, rgba(var(--color-primary-rgb), 0.2) 37%, rgba(var(--color-primary-rgb), 0.1) 63%)',
    backgroundSize: '400% 100%',
    animation: isLoaded ? 'none' : 'shimmer 1.4s ease-in-out infinite',
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 1
  };

  // Style for the main image
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
    zIndex: 2
  };

  return (
    <div className={`optimized-image-container ${className}`} style={containerStyle}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div style={placeholderStyle}>
          <style>{`
            @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>
        </div>
      )}
      
      {/* Main image */}
      {!hasError && (
        <img
          src={optimalSrc}
          alt={alt}
          loading={loading}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          style={imageStyle}
          decoding="async"
          {...props}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(var(--color-background-rgb), 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)',
            fontSize: '0.875rem',
            zIndex: 3
          }}
        >
          Image failed to load
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
