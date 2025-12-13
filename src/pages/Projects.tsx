import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-600">
          The Lab
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of experiments, prototypes, and production-ready systems spanning AI, Robotics, and IoT.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-mono border transition-all duration-300 ${
              filter === cat 
                ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.3)]' 
                : 'bg-transparent border-white/10 text-gray-500 hover:border-white/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-like Grid using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="break-inside-avoid">
             <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;