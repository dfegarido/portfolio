import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the outer ring
  // Damping: Strength of opposing force (higher = less oscillation)
  // Stiffness: Speed of return to target (higher = snappier)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on devices that support hover (mouse pointers)
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the target is interactive (a link, button, or specifically marked element)
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[data-magnetic="true"]');

      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    // Use capture phase for mouseover to ensure we catch events bubbling up or down correctly if needed, 
    // but standard bubbling is usually fine.
    window.addEventListener('mouseover', checkHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHover);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Dot - Follows mouse exactly (raw position) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        style={{ 
          x: mouseX, 
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Trailing Ring - Uses spring physics and morphs on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen border border-cyan-400 rounded-full flex items-center justify-center"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
          borderWidth: isHovered ? '1px' : '1.5px',
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.4)' : 'rgba(34, 211, 238, 0.6)',
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      />
    </>
  );
};