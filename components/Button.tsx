import React, { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const [ripples, setRipples] = useState<{x: number, y: number, id: number}[]>([]);
  const { ref, x, y } = useMagnetic();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x: rippleX, y: rippleY, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);

    if (props.onClick) props.onClick(e);
  };

  const baseStyles = "ripple-container relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/20",
    secondary: "bg-slate-700 text-white hover:bg-slate-600",
    outline: "border border-cyan-500 text-cyan-400 hover:bg-cyan-950",
    ghost: "text-slate-300 hover:text-white hover:bg-slate-800",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <motion.button 
      ref={ref as any}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      style={{ x, y }}
      {...props}
    >
      {ripples.map(ripple => (
        <span 
          key={ripple.id} 
          className="ripple" 
          style={{ left: ripple.x, top: ripple.y, width: 20, height: 20 }} 
        />
      ))}
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
};