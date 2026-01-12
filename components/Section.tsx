import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-16 ${className}`}>
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode, subtitle?: string }> = ({ children, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3 after:content-[''] after:h-px after:flex-1 after:bg-slate-800 after:ml-6">
      <span className="text-primary mr-2">#</span>{children}
    </h2>
    {subtitle && <p className="mt-4 text-slate-400 max-w-2xl text-lg">{subtitle}</p>}
  </motion.div>
);