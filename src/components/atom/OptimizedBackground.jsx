import React, { useState, useEffect } from 'react';

/**
 * OptimizedBackground component that provides:
 * - WebP format when supported
 * - Fixed dimensions to prevent layout shift
 * - GPU-accelerated effects
 */
const OptimizedBackground = ({
  src,
  webpSrc,
  children,
  className = '',
  bgPosition = 'center',
  bgSize = 'cover',
  width,
  height,
  style = {},
  ...props
}) => {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Check WebP support on mount
  useEffect(() => {
    // Use window.supports if already defined in index.js
    if ('supports' in window) {
      setSupportsWebP(window.supports('webp'));
    } else {
      // Otherwise run detection
      const webP = new Image();
      webP.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
      webP.onload = webP.onerror = function() {
        setSupportsWebP(webP.height === 1);
      };
    }
  }, []);

  // Preload the image
  useEffect(() => {
    const imageToUse = (supportsWebP && webpSrc) ? webpSrc : src;
    const img = new Image();
    img.src = imageToUse;
    img.onload = () => setIsLoaded(true);
  }, [src, webpSrc, supportsWebP]);

  // Determine image source based on WebP support
  const imageSrc = (supportsWebP && webpSrc) ? webpSrc : src;
  
  // Combine styles for container
  const containerStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
    position: 'relative',
    backgroundImage: isLoaded ? `url(${imageSrc})` : 'none',
    backgroundPosition: bgPosition,
    backgroundSize: bgSize,
    backgroundRepeat: 'no-repeat',
    transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
    willChange: 'transform', // Hint for browser optimization
    ...style
  };

  // Placeholder style
  const placeholderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 0.5s ease',
    zIndex: 0
  };

  return (
    <div className={`optimized-bg-container ${className}`} style={containerStyle} {...props}>
      {/* Placeholder shown while image loads */}
      <div style={placeholderStyle} />
      {children}
    </div>
  );
};

export default OptimizedBackground;
