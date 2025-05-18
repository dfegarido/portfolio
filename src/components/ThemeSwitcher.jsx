import React, { useState } from 'react';
import { useTheme, themes } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { cycleTheme, themeKey } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentTheme = themes[themeKey];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChangeTheme = () => {
    cycleTheme();
    // Optional: auto-collapse after theme change
    setTimeout(() => setIsExpanded(false), 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end flex-col">
      {/* Theme info panel */}
      <div 
        className={`bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-lg mb-3 p-3 text-white transition-all duration-300
          ${isExpanded ? 'max-h-96 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 translate-y-4 overflow-hidden'}`}
        style={{ 
          width: isExpanded ? '220px' : '0',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <h4 className="font-medium text-base mb-2">{currentTheme.name}</h4>
        <div className="space-y-2">
          <div className="flex flex-col text-xs">
            <div className="flex items-center justify-between">
              <span>Background:</span>
              <div className="flex items-center gap-2">
                <span>{currentTheme.background}</span>
                <div className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: currentTheme.background }}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center justify-between">
              <span>Primary:</span>
              <div className="flex items-center gap-2">
                <span>{currentTheme.primary}</span>
                <div className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: currentTheme.primary }}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center justify-between">
              <span>Secondary:</span>
              <div className="flex items-center gap-2">
                <span>{currentTheme.secondary}</span>
                <div className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: currentTheme.secondary }}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center justify-between">
              <span>Accent:</span>
              <div className="flex items-center gap-2">
                <span>{currentTheme.accent}</span>
                <div className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: currentTheme.accent }}></div>
              </div>
            </div>
          </div>
        </div>
        <button 
          className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 rounded-md text-sm transition-colors duration-200"
          onClick={handleChangeTheme}
        >
          Switch Theme
        </button>
      </div>

      {/* Theme toggle button */}
      <button
        onClick={toggleExpanded}
        className="p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-12 focus:outline-none"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
          style={{ color: currentTheme.secondary }}
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2" />
          <path d="M12 21v2" />
          <path d="M4.22 4.22l1.42 1.42" />
          <path d="M18.36 18.36l1.42 1.42" />
          <path d="M1 12h2" />
          <path d="M21 12h2" />
          <path d="M4.22 19.78l1.42-1.42" />
          <path d="M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
