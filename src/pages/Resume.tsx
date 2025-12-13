import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILLS } from '../constants';
import { Briefcase, GraduationCap, Award, Code, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 border-b border-white/10 pb-8"
      >
        <h1 className="text-5xl font-bold mb-4">Curriculum Vitae</h1>
        <p className="text-gray-400 text-lg">A comprehensive overview of my academic and professional journey.</p>
      </motion.div>

      <div className="grid gap-16">
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neon-cyan">
            <GraduationCap /> Education
          </h2>
          <div className="space-y-12 border-l border-white/10 ml-3">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neon-magenta rounded-full" />
                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                <p className="text-gray-400 font-mono mb-2">{edu.degree} | {edu.year}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm mb-2">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                {edu.link && (
                  <a href={edu.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-neon-cyan hover:underline mt-1">
                    Verify <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neon-cyan">
            <Briefcase /> Work Experience
          </h2>
          <div className="space-y-12 border-l border-white/10 ml-3">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neon-cyan rounded-full" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-gray-500">{exp.duration}</span>
                </div>
                <h4 className="text-neon-magenta text-sm mb-4">{exp.company}</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-neon-cyan hover:underline mt-2">
                    Reference <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neon-cyan">
            <Award /> Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="glass-panel p-6 rounded-lg border border-white/5 hover:border-neon-cyan/30 transition-colors">
                <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                <p className="text-sm text-neon-magenta mb-2">{cert.issuer}, {cert.year}</p>
                <p className="text-xs text-gray-400 mb-3">{cert.description}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-white hover:text-neon-cyan">
                    View Certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section>
           <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neon-cyan">
            <Code /> Technical Proficiency
          </h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span key={skill.name} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 font-mono">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;