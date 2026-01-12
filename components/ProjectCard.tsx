import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`group relative grid md:grid-cols-12 gap-8 items-center ${!isEven ? 'text-right' : ''}`}>
      {/* Image Layer - Spans 7 cols */}
      <div className={`md:col-span-7 relative ${!isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/10 transition-all duration-500 ease-out">
          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </div>
      </div>

      {/* Content Layer - Spans 5 cols but overlaps on large screens */}
      <div className={`md:col-span-5 relative z-20 ${!isEven ? 'md:order-1' : 'md:order-2'} flex flex-col ${!isEven ? 'items-end' : 'items-start'}`}>
        <span className="font-mono text-cyan-400 text-sm mb-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Featured Project</span>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <div className={`glass-card p-6 rounded-lg shadow-xl mb-6 text-slate-300 text-sm leading-relaxed ${!isEven ? 'text-right' : 'text-left'}
          transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-cyan-500/10 group-hover:border-cyan-500/30`}>
          <p>{project.description}</p>
        </div>

        <ul className={`flex flex-wrap gap-3 mb-6 ${!isEven ? 'justify-end' : 'justify-start'}`}>
          {project.tags.map((tag, i) => (
            <li 
              key={tag} 
              className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-3 py-1.5 rounded-full border border-cyan-900/50 transition-all duration-300 hover:bg-cyan-900/50 hover:scale-105 cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className={`flex gap-4 ${!isEven ? 'justify-end' : 'justify-start'}`}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300" aria-label="GitHub">
              <Github size={22} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-110 hover:-rotate-6 transition-all duration-300" aria-label="Live Demo">
              <ExternalLink size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};