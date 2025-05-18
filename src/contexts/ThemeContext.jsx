import React, { createContext, useState, useContext, useEffect } from 'react';

// Theme definitions
export const themes = {
  minimalist: {
    name: 'Minimalist & Modern',
    background: '#f5f5f7', // Light gray
    primary: '#2c2c2c',    // Charcoal
    primaryRGB: '44, 44, 44',
    secondary: '#ffffff',  // White
    secondaryRGB: '255, 255, 255',
    accent: '#6b7a8f',     // Muted blue
    accentRGB: '107, 122, 143',
    gradientFrom: '#2c2c2c',
    gradientTo: '#6b7a8f',
  },
  tech: {
    name: 'Tech & Futuristic',
    background: '#0d1b2a', // Dark navy
    primary: '#4cc9f0',    // Neon cyan
    primaryRGB: '76, 201, 240',
    secondary: '#adb5bd',  // Cool gray
    secondaryRGB: '173, 181, 189',
    accent: '#e9ecef',     // Light gray
    accentRGB: '233, 236, 239',
    gradientFrom: '#4cc9f0',
    gradientTo: '#0081A7',
  },
  elegant: {
    name: 'Elegant & High-End',
    background: '#1a1a1a', // Soft black
    primary: '#c9b18c',    // Muted gold
    primaryRGB: '201, 177, 140',
    secondary: '#e6d9c0',  // Warm beige
    secondaryRGB: '230, 217, 192',
    accent: '#f5f5f5',     // Light gray
    accentRGB: '245, 245, 245',
    gradientFrom: '#c9b18c',
    gradientTo: '#8a7a5e',
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('tech');
  
  // Apply theme to document root element
  useEffect(() => {
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty('--color-background', theme.background);
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-primary-rgb', theme.primaryRGB);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-secondary-rgb', theme.secondaryRGB);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
    document.documentElement.style.setProperty('--color-accent-rgb', theme.accentRGB);
    document.documentElement.style.setProperty('--gradient-from', theme.gradientFrom);
    document.documentElement.style.setProperty('--gradient-to', theme.gradientTo);
    
    // Set body background color
    document.body.style.backgroundColor = theme.background;
    
    // Add theme name as a class to the body for additional styling
    document.body.className = currentTheme;
    
  }, [currentTheme]);

  const cycleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setCurrentTheme(themeKeys[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], themeKey: currentTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
