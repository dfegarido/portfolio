import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../types';
import { ChevronDown } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? 50 : -50
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="relative space-y-8 pl-4 md:pl-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block"></div>
      
      {experiences.map((exp, index) => {
        const isEven = index % 2 === 0;
        const isExpanded = expandedId === exp.id;

        return (
          <motion.div 
            key={exp.id} 
            custom={index}
            variants={itemVariants}
            className={`relative flex items-start gap-8 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* Timeline Dot (Desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-white/50 z-10 hidden md:block mt-1.5"></div>
            
            {/* Timeline Line/Dot (Mobile) */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-800 block md:hidden"></div>
            <div className="absolute left-0 w-3 h-3 rounded-full bg-white/50 -translate-x-[5px] mt-2 block md:hidden"></div>

            {/* Content Spacer */}
            <div className="flex-1 hidden md:block"></div>
            
            {/* Card */}
            <div className="flex-1 pl-6 md:pl-0">
              <div className="glass-card p-6 rounded-xl border border-slate-700/50 hover:border-white/20 transition-all duration-300 group shadow-lg hover:shadow-white/5">
                <header className="flex flex-col mb-3">
                  <h4 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">{exp.role}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white/70 font-medium text-sm">{exp.company}</span>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{exp.period}</span>
                  </div>
                </header>

                {/* Summary always visible */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{exp.summary}</p>

                {/* Expand/Collapse button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-white/90 transition-colors duration-200 group/btn"
                >
                  <span>{isExpanded ? 'Show less' : 'View details'}</span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex"
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>

                {/* Expandable bullet list */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.ul
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden mt-4 space-y-2 border-t border-white/5 pt-4"
                    >
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-white/50 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
