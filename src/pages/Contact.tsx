import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: PERSONAL_DETAILS.socials.github, color: 'hover:text-white', border: 'hover:border-white' },
    { name: 'LinkedIn', icon: Linkedin, url: PERSONAL_DETAILS.socials.linkedin, color: 'hover:text-blue-500', border: 'hover:border-blue-500' },
    { name: 'Instagram', icon: Instagram, url: PERSONAL_DETAILS.socials.instagram, color: 'hover:text-pink-500', border: 'hover:border-pink-500' },
    { name: 'YouTube', icon: Youtube, url: PERSONAL_DETAILS.socials.youtube, color: 'hover:text-red-600', border: 'hover:border-red-600' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Connect</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Interested in collaborating on AI research, robotics projects, or have an innovative idea? I'm always open to new opportunities.
        </p>
        
        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-neon-cyan/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Email</h3>
              <p className="text-white font-medium">{PERSONAL_DETAILS.email}</p>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-neon-magenta/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-neon-magenta/10 flex items-center justify-center text-neon-magenta">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Phone</h3>
              <p className="text-white font-medium mb-1">{PERSONAL_DETAILS.phone}</p>
              <div className="flex items-center justify-center gap-1 text-xs text-green-400 font-mono">
                <MessageCircle size={12} />
                <span>Available on WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-white/50 transition-colors">
             <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Location</h3>
              <p className="text-white font-medium">{PERSONAL_DETAILS.location}</p>
            </div>
          </div>
        </div>

        {/* Social Links Grid */}
        <h2 className="text-2xl font-bold mb-8">Social Handles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noreferrer" 
              className={`glass-panel p-6 rounded-xl border border-white/10 flex flex-col items-center gap-3 transition-all duration-300 group ${social.border}`}
            >
              <social.icon size={32} className={`text-gray-400 transition-colors ${social.color}`} />
              <span className="font-mono text-gray-300 group-hover:text-white">{social.name}</span>
            </a>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default Contact;