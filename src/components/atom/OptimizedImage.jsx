import React, { useState, useEffect } from 'react';

/**
 * OptimizedImage component that handles:
 * - WebP format when supported
 * - Fixed dimensions to prevent layout shift
 * - Lazy loading
 * - Blur-up loading effect
 */
const OptimizedImage = ({ 
  src, 
  webpSrc, 
  alt = '', 
  width, 
  height, 
  className = '', 
  style = {},
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);

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

  // Determine image source based on WebP support
  const imageSrc = (supportsWebP && webpSrc) ? webpSrc : src;
  
  // Style for the container, includes dimensions to prevent layout shift
  const containerStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    position: 'relative',
    overflow: 'hidden',
    ...style
  };

  // Style for the low-res placeholder/blur
  const placeholderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    filter: 'blur(10px)',
    transform: 'scale(1.1)', // Slightly larger to cover blur edges
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
    backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    zIndex: 2
  };

  return (
    <div className={`optimized-image-container ${className}`} style={containerStyle}>
      {/* Placeholder/blur effect */}
      <div style={placeholderStyle} />
      
      {/* Main image */}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={imageStyle}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
