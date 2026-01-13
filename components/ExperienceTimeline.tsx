import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';
import { Briefcase } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
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
        return (
          <motion.div 
            key={exp.id} 
            custom={index}
            variants={itemVariants}
            className={`relative flex items-start gap-8 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* Timeline Dot (Desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 z-10 hidden md:block mt-1.5"></div>
            
            {/* Timeline Line/Dot (Mobile) */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-800 block md:hidden"></div>
            <div className="absolute left-0 w-3 h-3 rounded-full bg-cyan-500 -translate-x-[5px] mt-2 block md:hidden"></div>

            {/* Content Spacer */}
            <div className="flex-1 hidden md:block"></div>
            
            {/* Card */}
            <div className="flex-1 pl-6 md:pl-0">
               <div className="glass-card p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/5">
                  <header className="flex flex-col mb-4">
                    <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{exp.role}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-cyan-400 font-medium text-sm">{exp.company}</span>
                      <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                  </header>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};