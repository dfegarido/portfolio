/**
 * Image optimization utilities
 */

/**
 * Dynamically selects the best image format based on browser support
 * @param {Object} options - Image options
 * @param {string} options.webp - Path to WebP version of image
 * @param {string} options.fallback - Path to fallback image (PNG/JPG)
 * @param {string} [options.alt] - Alt text for the image
 * @param {number} [options.width] - Width of the image
 * @param {number} [options.height] - Height of the image
 * @returns {string} - URL of the best format to use
 */
export const getOptimizedImageUrl = (options) => {
  const { webp, fallback } = options;
  
  // If webp is supported and available, return it
  if ('supports' in window && window.supports('webp') && webp) {
    return webp;
  }
  
  // Otherwise return the fallback format
  return fallback;
};

/**
 * Creates optimized image element with proper dimensions
 * and lazy loading for better performance
 * @param {Object} options - Image options
 * @param {string} options.webp - Path to WebP version of image
 * @param {string} options.fallback - Path to fallback image (PNG/JPG)
 * @param {string} [options.alt] - Alt text for the image
 * @param {number} [options.width] - Width of the image
 * @param {number} [options.height] - Height of the image
 * @param {string} [options.className] - CSS class name
 * @returns {JSX.Element} - Optimized image element
 */
export const OptimizedImage = ({ webp, fallback, alt, width, height, className, ...props }) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={fallback} type="image/png" />
      <img 
        src={fallback} 
        alt={alt || 'Image'} 
        width={width} 
        height={height}
        className={className || ''}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

/**
 * Background image component with WebP support
 * @param {Object} props - Component props
 * @param {string} props.webp - WebP image URL
 * @param {string} props.fallback - Fallback image URL
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.children] - Child elements
 * @returns {JSX.Element}
 */
export const OptimizedBackground = ({ 
  webp, 
  fallback, 
  className = '', 
  children, 
  style = {},
  ...props 
}) => {
  // Style with background image will be applied via JS after checking support
  // This prevents unnecessary download of both formats
  return (
    <div 
      className={`optimized-bg ${className}`}
      data-webp={webp}
      data-fallback={fallback}
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Initialize optimized backgrounds by checking for WebP support
 * and applying the right background images
 */
export const initOptimizedBackgrounds = () => {
  const supportsWebP = 'supports' in window && window.supports('webp');
  
  // Find all elements with optimized background class
  const elements = document.querySelectorAll('.optimized-bg');
  
  // Apply the right background image based on support
  elements.forEach(element => {
    const webp = element.getAttribute('data-webp');
    const fallback = element.getAttribute('data-fallback');
    
    if (supportsWebP && webp) {
      element.style.backgroundImage = `url(${webp})`;
    } else if (fallback) {
      element.style.backgroundImage = `url(${fallback})`;
    }
  });
};
