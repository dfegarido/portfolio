import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  direction?: 'up' | 'down';
}

export const Parallax: React.FC<ParallaxProps> = ({ 
  children, 
  offset = 50, 
  className = "",
  direction = 'up'
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yValue = direction === 'up' ? [-offset, offset] : [offset, -offset];
  const y = useTransform(scrollYProgress, [0, 1], yValue);
  
  // Smooth out the motion
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={ref}
      style={{ y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxText: React.FC<{ children: string; baseVelocity?: number }> = ({ 
  children, 
  baseVelocity = 5 
}) => {
  // This is for horizontal infinite scroll parallax, but we might not need it yet.
  // Keeping it as a placeholder if we want to add scrolling text later.
  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex font-bold uppercase text-6xl gap-10">
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};

