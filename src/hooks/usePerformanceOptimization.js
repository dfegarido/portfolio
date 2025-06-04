import { useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook for performance optimizations
 * - Throttles heavy operations
 * - Manages intersection observers efficiently
 * - Debounces resize/scroll handlers
 */
export const usePerformanceOptimization = () => {
  const observersRef = useRef(new Map());
  const throttleTimeoutsRef = useRef(new Map());

  // Throttle function for performance-critical operations
  const throttle = useCallback((key, fn, delay = 16) => {
    if (typeof fn !== 'function') {
      console.warn('Throttle called with non-function:', fn);
      return;
    }

    if (throttleTimeoutsRef.current.has(key)) {
      return;
    }

    throttleTimeoutsRef.current.set(key, setTimeout(() => {
      if (typeof fn === 'function') {
        fn();
      }
      throttleTimeoutsRef.current.delete(key);
    }, delay));
  }, []);

  // Optimized intersection observer
  const createIntersectionObserver = useCallback((callback, options = {}) => {
    const defaultOptions = {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      // Use requestIdleCallback to avoid blocking main thread
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => callback(entries));
      } else {
        setTimeout(() => callback(entries), 0);
      }
    }, defaultOptions);

    return observer;
  }, []);

  // Cleanup function
  useEffect(() => {
    const observers = observersRef.current;
    const timeouts = throttleTimeoutsRef.current;
    
    return () => {
      // Clean up all observers
      observers.forEach(observer => observer.disconnect());
      observers.clear();
      
      // Clean up all timeouts
      timeouts.forEach(timeout => clearTimeout(timeout));
      timeouts.clear();
    };
  }, []);

  return {
    throttle,
    createIntersectionObserver
  };
};

/**
 * Hook for lazy loading components with intersection observer
 */
export const useLazyLoad = (threshold = 0.1) => {
  const elementRef = useRef(null);
  const { createIntersectionObserver } = usePerformanceOptimization();
  const isVisible = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = createIntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible.current) {
          isVisible.current = true;
          observer.unobserve(element);
        }
      });
    }, { threshold });

    observer.observe(element);

    return () => observer.disconnect();
  }, [createIntersectionObserver, threshold]);

  return [elementRef, isVisible.current];
};

/**
 * Hook for optimizing animations and transitions
 */
export const useOptimizedAnimation = () => {
  const animationFrameRef = useRef(null);

  const requestOptimizedFrame = useCallback((callback) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      // Use transform3d to force GPU acceleration
      callback();
    });
  }, []);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return requestOptimizedFrame;
};

/**
 * Hook for reducing DOM size by virtualizing large lists
 */
export const useVirtualization = (items, itemHeight, containerHeight) => {
  const scrollTop = useRef(0);
  const { throttle } = usePerformanceOptimization();

  const getVisibleItems = useCallback(() => {
    const startIndex = Math.floor(scrollTop.current / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );

    return {
      visibleItems: items.slice(startIndex, endIndex),
      startIndex,
      endIndex,
      totalHeight: items.length * itemHeight,
      offsetY: startIndex * itemHeight
    };
  }, [items, itemHeight, containerHeight]);

  const handleScroll = useCallback((e) => {
    throttle('virtualization-scroll', () => {
      scrollTop.current = e.target.scrollTop;
    }, 16);
  }, [throttle]);

  return {
    ...getVisibleItems(),
    handleScroll
  };
};
