import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import Default from './layout/Default';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './contexts/ThemeContext';
import './theme-transition';
import { initImageOptimizations } from './helpers/imageOptimizationInit';

// Add WebP support detection
(function detectWebP() {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  webP.onload = webP.onerror = function() {
    window.supports = function(feature) {
      return feature === 'webp' ? webP.height === 1 : false;
    };
    
    // Initialize all image optimizations after WebP detection
    initImageOptimizations();
  };
})();

// Initialize event listeners for monitoring layout shifts
if ('PerformanceObserver' in window) {
  // Create a performance observer to monitor CLS
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
        // Log significant layout shifts for debugging
        if (entry.value > 0.05) {
          console.debug('Significant layout shift detected:', entry);
        }
      }
    }
  });
  
  // Start observing layout shift entries
  observer.observe({ type: 'layout-shift', buffered: true });
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <Default />
    </ThemeProvider>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
