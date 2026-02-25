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
      {/* Glow effect background */}
      <div className={`absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`}></div>

      {/* Image Layer - Spans 7 cols */}
      <div className={`md:col-span-7 relative z-10 ${!isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 group-hover:border-white/20 group-hover:shadow-white/5 transition-all duration-500 ease-out">
          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            loading="lazy"
            className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </div>
      </div>

      {/* Content Layer - Spans 5 cols but overlaps on large screens */}
      <div className={`md:col-span-5 relative z-20 ${!isEven ? 'md:order-1' : 'md:order-2'} flex flex-col ${!isEven ? 'items-end' : 'items-start'}`}>
        <span className="font-mono text-white/70 text-sm mb-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Featured Project</span>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>
        
        <div className={`glass-card p-6 rounded-lg shadow-xl mb-6 text-slate-300 text-sm leading-relaxed ${!isEven ? 'text-right' : 'text-left'}
          transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-white/5 group-hover:border-white/20`}>
          
          {project.role && (
            <div className={`mb-4 text-xs font-mono text-white/50 uppercase tracking-wider ${!isEven ? 'border-b-white/10 border-b pb-2' : 'border-b-white/10 border-b pb-2'}`}>
              Role: <span className="text-white/80">{project.role}</span>
            </div>
          )}
          
          <div className="space-y-3">
            {project.problem ? (
              <>
                <p><strong className="text-white/90 font-medium">Challenge:</strong> {project.problem}</p>
                <p><strong className="text-white/90 font-medium">Solution:</strong> {project.description}</p>
                {project.impact && (
                  <p><strong className="text-white/90 font-medium">Impact:</strong> {project.impact}</p>
                )}
              </>
            ) : (
              <p>{project.description}</p>
            )}
          </div>
        </div>

        <ul className={`flex flex-wrap gap-3 mb-6 ${!isEven ? 'justify-end' : 'justify-start'}`}>
          {project.tags.map((tag, i) => (
            <li 
              key={tag} 
              className="text-xs font-mono text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className={`flex gap-4 ${!isEven ? 'justify-end' : 'justify-start'}`}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-slate-900 bg-white hover:bg-slate-200 rounded-full transition-all duration-300 shadow-lg shadow-white/10 hover:scale-105" aria-label="Live Demo">
              View Site <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white/90 border border-white/20 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-105" aria-label="GitHub">
              Source Code <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};