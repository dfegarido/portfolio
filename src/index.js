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

// Optimized WebP detection - run once globally with better performance
if (!window.supports) {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  webP.onload = webP.onerror = function() {
    window.supports = function(feature) {
      return feature === 'webp' ? webP.height === 1 : false;
    };
  };
}

// Use requestIdleCallback for performance monitoring to reduce main thread blocking
if ('PerformanceObserver' in window && 'requestIdleCallback' in window) {
  requestIdleCallback(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput && entry.value > 0.1) {
          console.warn('Major layout shift detected:', entry.value);
        }
      }
    });
    
    try {
      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // Gracefully handle if layout-shift is not supported
      console.warn('Layout shift monitoring not supported');
    }
  });
}

const container = document.getElementById('root')
const root = createRoot(container)

// Ensure we start at the top of the page
if (window.history.scrollRestoration) {
  window.history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Use startTransition for better performance on initial render
if (React.startTransition) {
  React.startTransition(() => {
    root.render(
      <Provider store={store}>
        <ThemeProvider>
          <Default />
        </ThemeProvider>
      </Provider>
    );
  });
} else {
  root.render(
    <Provider store={store}>
      <ThemeProvider>
        <Default />
      </ThemeProvider>
    </Provider>
  );
}

// Register service worker for better caching
serviceWorkerRegistration.register();

// Optimize web vitals reporting with throttling
let reportTimeout;
const optimizedReportWebVitals = (metric) => {
  clearTimeout(reportTimeout);
  reportTimeout = setTimeout(() => {
    // Only report in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_REPORT_VITALS === 'true') {
      console.log('Web Vital:', metric);
    }
  }, 100);
};

reportWebVitals(optimizedReportWebVitals);
