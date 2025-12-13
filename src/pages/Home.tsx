import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import ProjectCard from '../components/ProjectCard';
import { PERSONAL_DETAILS, PROJECTS, SKILLS, FUN_FACT } from '../constants';
import { ArrowRight, Terminal, Cpu, Code, Layers, Wrench, Globe, PenTool, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);
  
  // Categorization logic for skills with updated categories
  const skillCategories: Record<string, { icon: any, color: string }> = {
    'Languages': { icon: Code, color: 'text-neon-cyan' },
    'AI/ML': { icon: Cpu, color: 'text-neon-magenta' },
    'Embedded Systems': { icon: Layers, color: 'text-yellow-400' },
    'Web Development': { icon: Globe, color: 'text-blue-400' },
    'Tools': { icon: Wrench, color: 'text-gray-400' },
    'Product Development': { icon: PenTool, color: 'text-green-400' }
  };

  const groupedSkills = SKILLS.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  // Define a custom order for the categories
  const categoryOrder = [
    'Languages',
    'AI/ML',
    'Embedded Systems',
    'Product Development',
    'Web Development',
    'Tools'
  ];

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <Hero3D />
        
        <div className="z-10 px-6 max-w-7xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
            
            {/* Text Content - Order 2 on mobile, 1 on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-2 md:order-1 text-center md:text-left flex-1"
            >
              <h2 className="text-neon-cyan font-mono mb-4 text-sm tracking-[0.3em] uppercase">System Online</h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {PERSONAL_DETAILS.name}
              </h1>
              <div className="h-[2px] w-24 bg-neon-magenta mb-8 shadow-[0_0_10px_#ff00ff] mx-auto md:mx-0" />
              <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 leading-relaxed">
                <span className="text-white font-semibold">CS Student</span> | <span className="text-neon-cyan">AI/ML Engineer</span> | Robotics Innovator
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
                 <Link to="/projects" className="px-8 py-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-mono hover:bg-neon-cyan hover:text-black transition-all duration-300 rounded shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                  VIEW PROJECTS
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-mono hover:border-white transition-all duration-300 rounded">
                  CONTACT ME
                </Link>
              </div>
            </motion.div>

            {/* Profile Image Section - Order 1 on mobile, 2 on desktop */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative order-1 md:order-2 shrink-0"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative group">
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full border border-neon-cyan/30 border-dashed animate-[spin_10s_linear_infinite]" />
                <div className="absolute -inset-4 rounded-full border border-neon-magenta/20 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Glow */}
                <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                
                {/* Image */}
                <img 
                  src={PERSONAL_DETAILS.profileImage} 
                  alt={PERSONAL_DETAILS.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10 shadow-2xl"
                />
              </div>
            </motion.div>
          
          </div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* Brief About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan" />
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
            <Sparkles className="text-neon-cyan" /> About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Deeply passionate about integrating AI with embedded systems for social impact. 
            Experienced in research, rapid prototyping, and real-world deployment of tech solutions. 
            Dedicated to continuous learning and mentoring peers in technology and innovation.
          </p>
          <div className="inline-block px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
             <p className="text-sm text-neon-magenta font-mono italic">"{FUN_FACT}"</p>
          </div>
        </div>
      </section>

      {/* Skills Section - Redesigned to show ALL skills grouped by category */}
      <section className="py-20 bg-bg-dark border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center justify-center gap-4">
            <Cpu className="text-neon-cyan" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Tech Arsenal</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryOrder.map((category, index) => {
               const skills = groupedSkills[category] || [];
               if (skills.length === 0) return null;
               
               const CategoryIcon = skillCategories[category]?.icon || Terminal;
               const iconColor = skillCategories[category]?.color || 'text-white';
               
               return (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <CategoryIcon className={iconColor} size={24} />
                    <h3 className="text-xl font-bold font-mono uppercase tracking-wider">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span 
                        key={skill.name} 
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-sm text-gray-300 hover:text-white hover:border-neon-cyan/50 transition-all cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
               );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-neon-cyan font-mono text-sm tracking-widest">INNOVATION</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Selected Works</h2>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
             <Link to="/projects" className="inline-flex items-center gap-2 text-neon-cyan font-mono border-b border-neon-cyan pb-1">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About / CTA */}
      <section className="py-32 bg-gradient-to-b from-bg-dark to-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8">Ready to Build the Future?</h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            From embedded systems in India to Computer Science at UB, my journey is defined by relentless innovation.
            Whether it's robotics, AI agents, or IoT solutions, I'm open to collaborations.
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold tracking-wider hover:bg-neon-cyan transition-colors rounded">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;