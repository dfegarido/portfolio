/**
 * Helper functions for initializing image optimizations across the site
 */
import { initOptimizedBackgrounds } from './imageUtils';

/**
 * Initialize all image optimizations after page load
 * - Checks for WebP support
 * - Applies correct background formats
 * - Sets up optimized loading patterns
 */
export const initImageOptimizations = () => {
  // Initialize WebP detection on window object if not already present
  if (!('supports' in window)) {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    webP.onload = webP.onerror = function() {
      window.supports = function(feature) {
        return feature === 'webp' ? webP.height === 1 : false;
      };
      
      // Once WebP detection is complete, initialize backgrounds
      initOptimizedBackgrounds();
    };
  } else {
    // WebP detection already present, just initialize backgrounds
    initOptimizedBackgrounds();
  }
  
  // Implement lazy loading for all images
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.loading = 'lazy';
    });
  } else {
    // Could implement a fallback lazy loading solution here
    // For simplicity, we'll just let browsers handle it
  }
  
  // Set explicit image dimensions where missing to prevent layout shifts
  const setExplicitDimensions = () => {
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      // Add event listener to set dimensions once loaded
      img.addEventListener('load', () => {
        if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
          img.setAttribute('width', img.naturalWidth);
          img.setAttribute('height', img.naturalHeight);
        }
      });
    });
  };
  
  // Run dimension fixing
  setExplicitDimensions();
  
  // Run again after a short delay to catch dynamically loaded images
  setTimeout(setExplicitDimensions, 1000);
};
