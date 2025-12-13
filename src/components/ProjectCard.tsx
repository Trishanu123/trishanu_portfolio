import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative glass-panel rounded-xl overflow-hidden mb-6 break-inside-avoid flex flex-col"
    >
      <div className="relative h-64 overflow-hidden shrink-0 bg-black/20 flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4">
          <span className="text-neon-cyan text-xs font-mono px-2 py-1 border border-neon-cyan/30 rounded bg-black/50 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="text-xs text-gray-500 font-mono">#{t}</span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white hover:text-neon-cyan transition-colors z-10"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white hover:text-neon-magenta transition-colors z-10"
            >
              <ExternalLink size={16} /> View
            </a>
          )}
        </div>
      </div>
      
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/20 rounded-xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;