import { useRef, useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export const useMagnetic = () => {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // Limit the magnetic pull radius
      const magneticRadius = 100;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < magneticRadius) {
        // Move element 30% towards the mouse within radius
        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  return { ref, x: springX, y: springY };
};

