// Local skill icon mappings to reduce external CDN requests
// This reduces main-thread work by eliminating network requests for icons

export const localSkillIcons = {
  // Frontend icons - using simple SVG data URIs for better performance
  "JavaScript": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0Y3REYxRSI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMyIvPjx0ZXh0IHg9IjEyIiB5PSIxNiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SlM8L3RleHQ+PC9zdmc+",
  
  "React": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzYxREFGQiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiBmaWxsPSIjZmZmIi8+PC9zdmc+",
  
  "TypeScript": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzMxNzhDNiI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMyIvPjx0ZXh0IHg9IjEyIiB5PSIxNiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VFM8L3RleHQ+PC9zdmc+",
  
  "HTML5": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0U1NGM3QSI+PHBvbHlnb24gcG9pbnRzPSIzLDIgMjEsMiAxOSwyMiAxMiwxOSA1LDIyIi8+PHRleHQgeD0iMTIiIHk9IjE0IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg1PC90ZXh0Pjwvc3ZnPg==",
  
  "CSS3": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzI5OWZlNCI+PHBvbHlnb24gcG9pbnRzPSIzLDIgMjEsMiAxOSwyMiAxMiwxOSA1LDIyIi8+PHRleHQgeD0iMTIiIHk9IjE0IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkMzPC90ZXh0Pjwvc3ZnPg==",
  
  "Redux": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzc2NERGRiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
  
  "Tailwind CSS": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA2QjZENCI+PHBhdGggZD0iTTEyIDJjLTMgMC01IDEuNS01IDRzMiA0IDUgNGMzIDAgNS0xLjUgNS00cy0yLTQtNS00eiIvPjxwYXRoIGQ9Ik03IDEwYy0zIDAtNSAxLjUtNSA0czIgNCA1IDRjMyAwIDUtMS41IDUtNHMtMi00LTUtNHoiLz48L3N2Zz4=",
  
  // Backend icons
  "Node.js": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzMzOTkzMyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Tk88L3RleHQ+PC9zdmc+",
  
  "Express": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RVg8L3RleHQ+PC9zdmc+",
  
  "MongoDB": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzQ3QTE0OCI+PHBhdGggZD0iTTEyIDJsLTIgOGgydjJsLTIgOGMzIDAgNi0yIDYtNVYxMGMwLTMtMy01LTQtNXoiLz48cGF0aCBkPSJNMTIgMmwyIDhoLTJWMTJsMiA4Yy0zIDAtNiAyLTYgNVYxMGMwIDMgMyA1IDQgNXoiLz48L3N2Zz4=",
  
  "PostgreSQL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzMzNjc5MSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UEc8L3RleHQ+PC9zdmc+",
  
  "GraphQL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0U1MzQ5OCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R1E8L3RleHQ+PC9zdmc+",
  
  "Docker": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzIzOTZFRCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiB4PSIyIiB5PSI0IiByeD0iMiIvPjx0ZXh0IHg9IjEyIiB5PSIxNCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI4IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ijJY8L3RleHQ+PC9zdmc+",
  
  "AWS": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0ZGOTkwMCI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMyIvPjx0ZXh0IHg9IjEyIiB5PSIxNiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI5IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BV1M8L3RleHQ+PC9zdmc+",
  
  // AI/ML icons
  "PySpark": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0U5NTQyMCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UFM8L3RleHQ+PC9zdmc+",
  
  "Python": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzMwNzZBQiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHk8L3RleHQ+PC9zdmc+",
  
  "OpenAI": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwQTY3RSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUk8L3RleHQ+PC9zdmc+",
  
  "Generative AI": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzg5MkNGNiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R0E8L3RleHQ+PC9zdmc+",
  
  "TensorFlow": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0ZGNkY1NSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VEY8L3RleHQ+PC9zdmc+",
  
  // Tools
  "Git": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0Y1NDMyQSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R2l0PC90ZXh0Pjwvc3ZnPg==",
  
  "GitHub": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE4MWIyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R0g8L3RleHQ+PC9zdmc+",
  
  // New skills from resume
  "VueJs": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzRGQzA4RCI+PHBhdGggZD0iTTEyIDJsLTggMTZoMTZsLTgtMTZ6Ii8+PHRleHQgeD0iMTIiIHk9IjE0IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlZ1ZTwvdGV4dD48L3N2Zz4=",
  
  "React Native": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzYxREFGQiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iOCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIGZpbGw9IiNmZmYiLz48dGV4dCB4PSIxMiIgeT0iMjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iNiIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Uk48L3RleHQ+PC9zdmc+",
  
  "Firebase": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0ZGQ0EyOCI+PHBhdGggZD0iTTEyIDJsLTIgOGgydjJsLTIgOGMzIDAgNi0yIDYtNVYxMGMwLTMtMy01LTQtNXoiLz48cGF0aCBkPSJNMTIgMmwyIDhoLTJWMTJsMiA4Yy0zIDAtNiAyLTYgNVYxMGMwIDMgMyA1IDQgNXoiIGZpbGw9IiNGRkE3MDAiLz48L3N2Zz4=",
  
  "RAG Systems": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzk5MzNGRiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UkFHPC90ZXh0Pjwvc3ZnPg==",
  
  "Vector Databases": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwN0FDQyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VkRCPC90ZXh0Pjwvc3ZnPg==",
  
  "LLM Integration": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwNzNFNiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TExNPC90ZXh0Pjwvc3ZnPg==",
  
  "ChatGPT API": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwQTY3RSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iNyIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R1BUPC90ZXh0Pjwvc3ZnPg==",
  
  // Fallback for other skills - simple colored circles to avoid network requests
  "default": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzY2NjY2NiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPj88L3RleHQ+PC9zdmc+"
};

// Optimized skill icon component with fallback and error handling
export const OptimizedSkillIcon = ({ skill, className = "", style = {} }) => {
  // Add null/undefined checks to prevent errors
  if (!skill) {
    console.warn('OptimizedSkillIcon: skill prop is undefined');
    return (
      <img 
        src={localSkillIcons.default}
        alt="Unknown skill"
        className={className}
        style={style}
        loading="lazy"
        decoding="async"
        width="40"
        height="40"
      />
    );
  }

  const skillName = skill.name || 'Unknown';
  const iconSrc = localSkillIcons[skillName] || skill.icon || localSkillIcons.default;
  
  return (
    <img 
      src={iconSrc}
      alt={skillName}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      // Prevent layout shift
      width="40"
      height="40"
      onError={(e) => {
        // Fallback to default icon on error
        e.target.src = localSkillIcons.default;
      }}
    />
  );
};
