import React from 'react';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black/80 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <div className="flex gap-10">
          <a 
            href={PERSONAL_DETAILS.socials.github} 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-neon-cyan transition-all transform hover:scale-125"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a 
            href={PERSONAL_DETAILS.socials.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition-all transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href={PERSONAL_DETAILS.socials.instagram} 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-125"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>
          <a 
            href={PERSONAL_DETAILS.socials.youtube} 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-red-600 transition-all transform hover:scale-125"
            aria-label="YouTube"
          >
            <Youtube size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;