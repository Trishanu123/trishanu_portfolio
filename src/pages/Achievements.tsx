import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../constants';
import { Trophy, Award, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Hall of Fame
        </h1>
        <p className="text-gray-400">Honors, Awards, and Certifications.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Competitions */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-yellow-500" /> Competitions
          </h2>
          <div className="space-y-6">
            {ACHIEVEMENTS.map((achievement) => (
              <div key={achievement.id} className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 bg-yellow-500/10 blur-xl rounded-full -mr-10 -mt-10 group-hover:bg-yellow-500/20 transition-colors" />
                <h3 className="text-xl font-bold text-white relative z-10">{achievement.title}</h3>
                <p className="text-yellow-500 font-mono text-sm mb-1 relative z-10">{achievement.result}</p>
                <p className="text-gray-400 text-sm mb-3 relative z-10">{achievement.event}</p>
                {achievement.link && (
                  <a href={achievement.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white relative z-10">
                    See Post <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications (Reused from Resume but styled differently) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-neon-cyan" /> Top Certifications
          </h2>
          <div className="space-y-6">
             {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="glass-panel p-6 rounded-xl border-l-4 border-neon-cyan hover:bg-white/5 transition-colors">
                <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                <div className="flex justify-between items-center text-sm text-gray-400 mt-1 mb-2">
                  <span>{cert.issuer}</span>
                  <span className="font-mono text-neon-cyan">{cert.year}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{cert.description}</p>
                 {cert.link && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:underline">
                    Verify <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;