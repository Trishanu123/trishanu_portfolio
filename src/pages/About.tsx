import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION, FUN_FACT, SKILLS, PERSONAL_DETAILS } from '../constants';
import { GraduationCap, Rocket, Star, ExternalLink, Code } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* Intro */}
      <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          {/* Profile Image with Glow */}
          <div className="relative group w-full max-w-md mx-auto md:mx-0">
             <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
             <img 
               src={PERSONAL_DETAILS.profileImage} 
               alt={PERSONAL_DETAILS.name} 
               className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border border-white/10 z-10 grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold mb-6">Beyond the Code</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
             Deeply passionate about integrating AI with embedded systems for social impact. 
             Experienced in research, rapid prototyping, and real-world deployment of tech solutions. 
             Dedicated to continuous learning and mentoring peers in technology and innovation.
          </p>
          <div className="p-6 glass-panel rounded-xl border-l-4 border-neon-magenta mb-6">
             <h3 className="text-neon-magenta font-mono mb-2 flex items-center gap-2"><Star size={18} /> Fun Fact</h3>
             <p className="text-gray-300 italic">"{FUN_FACT}"</p>
          </div>
          <Link to="/cv" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded text-sm font-mono transition-colors w-fit">
            View Full CV <ExternalLink size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Skills Matrix */}
      <div className="mb-32">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3"><Code /> Skills Overview</h2>
        <div className="glass-panel rounded-2xl p-6 flex items-center justify-center relative h-[450px]">
          <div className="absolute top-4 left-4 text-xs font-mono text-gray-500">SKILL_MATRIX_V1.0</div>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS.slice(0, 6)}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#888', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Skills"
                dataKey="level"
                stroke="#00ffff"
                strokeWidth={3}
                fill="#00ffff"
                fillOpacity={0.2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mb-32">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Rocket className="text-neon-cyan" /> Journey
        </h2>
        <div className="relative border-l border-white/10 ml-6 space-y-12">
          {EXPERIENCE.slice(0, 4).map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neon-cyan rounded-full shadow-[0_0_10px_#00ffff]" />
              <div className="glass-panel p-6 rounded-lg hover:border-white/20 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-gray-500">{exp.duration}</span>
                </div>
                <h4 className="text-neon-cyan mb-4">{exp.company}</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1 mb-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-sm">{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
       <div className="glass-panel p-8 rounded-2xl mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-neon-magenta" /> Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="border-b border-white/5 last:border-0 pb-6 last:pb-0">
                <h3 className="font-bold text-lg">{edu.institution}</h3>
                <p className="text-gray-400 text-sm mb-2">{edu.degree} <span className="text-gray-600">•</span> {edu.year}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.details.map((d, idx) => (
                     <span key={idx} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400">{d}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
};

export default About;