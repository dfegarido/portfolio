/**
 * Get the correct image path with base URL for GitHub Pages
 * Uses import.meta.env.BASE_URL which Vite automatically provides
 */
export const getImagePath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Vite's BASE_URL already includes the trailing slash
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

