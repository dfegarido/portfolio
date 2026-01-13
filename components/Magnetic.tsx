import React from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

interface MagneticProps {
  children: React.ReactElement;
  pull?: number;
}

export const Magnetic: React.FC<MagneticProps> = ({ children, pull = 0.3 }) => {
  const { ref, x, y } = useMagnetic();

  return (
    <motion.div
      ref={ref as any}
      style={{ x, y }}
      className="inline-block"
    >
      {React.cloneElement(children, {
        ...children.props,
        // Ensure any existing ref is preserved if needed, 
        // though for simple cases this is fine.
      })}
    </motion.div>
  );
};

