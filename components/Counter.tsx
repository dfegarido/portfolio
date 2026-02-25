import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  label: string;
}

export const Counter: React.FC<CounterProps> = ({ from = 0, to, duration = 2, label }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm">
      <div className="text-4xl md:text-5xl font-bold text-slate-100 font-mono mb-2">
        {count}+
      </div>
      <div className="text-slate-400 font-medium tracking-wide text-sm uppercase">
        {label}
      </div>
    </div>
  );
};