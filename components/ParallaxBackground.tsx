import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ParallaxLayerConfig {
  offset: [number, number];
  size: number;
  top: string;
  left: string;
  opacity: [number, number];
}

const ParallaxLayer: React.FC<{ config: ParallaxLayerConfig }> = ({ config }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], config.offset);
  const opacity = useTransform(scrollY, [0, 500], config.opacity);

  return (
    <motion.div
      className="absolute rounded-full blur-3xl bg-white/5"
      style={{
        width: config.size,
        height: config.size,
        top: config.top,
        left: config.left,
        y,
        opacity,
      }}
    />
  );
};

const LAYERS: ParallaxLayerConfig[] = [
  { offset: [-80, 80], size: 400, top: '10%', left: '5%', opacity: [0.08, 0.15] },
  { offset: [40, -40], size: 300, top: '60%', left: '70%', opacity: [0.05, 0.12] },
  { offset: [-120, 120], size: 350, top: '30%', left: '80%', opacity: [0.06, 0.1] },
  { offset: [-60, 60], size: 250, top: '80%', left: '20%', opacity: [0.04, 0.1] },
  { offset: [80, -80], size: 200, top: '15%', left: '50%', opacity: [0.05, 0.08] },
];

export const ParallaxBackground: React.FC = () => (
  <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
    {LAYERS.map((layer, i) => (
      <ParallaxLayer key={i} config={layer} />
    ))}
  </div>
);
