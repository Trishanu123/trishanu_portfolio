import React from 'react';
import { motion } from 'framer-motion';
import { IMPACT, HASTHAVANI } from '../constants';
import { Newspaper, Mic, Users, ExternalLink, Quote, Activity, HeartHandshake } from 'lucide-react';

const Impact: React.FC = () => {
  const media = IMPACT.filter(i => i.type === 'Media');
  const leadership = IMPACT.filter(i => i.type !== 'Media');

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Impact & Outreach</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Beyond code, I strive to inspire through leadership, public speaking, and community engagement.
        </p>
      </motion.div>

      {/* Featured In Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-neon-magenta">
          <Newspaper /> Featured In
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {media.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-neon-magenta/50"
              onClick={() => item.link && window.open(item.link, '_blank')}
            >
              <div className="absolute inset-0 bg-neon-magenta/5 group-hover:bg-neon-magenta/10 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neon-magenta text-sm font-mono mb-3">{item.context}</p>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                {item.link && (
                  <div className="flex items-center gap-2 text-white text-xs font-mono uppercase tracking-wider hover:text-neon-magenta transition-colors">
                    Read/Watch <ExternalLink size={12} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership & Speaking Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-neon-cyan">
          <Mic /> Leadership & Speaking
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item) => (
            <div key={item.id} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all">
              <div className="mb-4 text-neon-cyan">
                {item.type === 'Speaking' ? <Mic size={28} /> : <Users size={28} />}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm font-mono text-gray-500 mb-3">{item.context}</p>
              <p className="text-gray-400 text-sm mb-4 line-clamp-4">{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="text-xs text-white hover:text-neon-cyan flex items-center gap-2 uppercase tracking-wide">
                  View Reference <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Hasthavani Showcase */}
      <section className="relative py-20 border-t border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
              INTRODUCING HASTHAVANI
            </h2>
            <p className="text-xl text-white font-light mb-6">{HASTHAVANI.tagline}</p>
            <div className="inline-block p-4 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20">
              <p className="text-neon-cyan font-mono text-sm">"{HASTHAVANI.quote}"</p>
            </div>
          </motion.div>
        </div>

        {/* Demo / Concept */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
             <h3 className="text-3xl font-bold mb-6">Breaking Communication Barriers</h3>
             <p className="text-gray-400 text-lg mb-8 leading-relaxed">
               {HASTHAVANI.intro}
             </p>
             <ul className="space-y-4">
               {HASTHAVANI.features.map((feature, i) => (
                 <li key={i} className="flex items-center gap-3 text-white">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                     <Activity size={14} />
                   </div>
                   {feature}
                 </li>
               ))}
             </ul>
          </div>
          {/* Vertical Image Container */}
          <div className="order-1 md:order-2 glass-panel p-2 rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center h-[500px] md:h-[650px] group">
             {HASTHAVANI.heroImage ? (
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <img 
                      src={HASTHAVANI.heroImage} 
                      alt="Hasthavani Device" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <div className="flex items-center gap-2 text-white font-mono tracking-widest">
                            <HeartHandshake size={20} className="text-neon-cyan" />
                            <span>SIGN LANGUAGE TRANSLATOR</span>
                        </div>
                    </div>
                </div>
             ) : (
                <div className="text-center p-8">
                    <HeartHandshake size={80} className="text-white mx-auto mb-4 opacity-80" />
                    <h4 className="text-2xl font-mono font-bold tracking-widest">SIGN LANGUAGE <br /> TRANSLATOR</h4>
                </div>
             )}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {HASTHAVANI.stats.map((stat, i) => (
             <div key={i} className="glass-panel p-6 rounded-xl border border-white/5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-mono text-gray-500 uppercase">{stat.label}</div>
             </div>
          ))}
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
           <h3 className="text-3xl font-bold mb-8">Our Story</h3>
           <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
             {HASTHAVANI.story.map((para, i) => (
               <p key={i}>{para}</p>
             ))}
           </div>
        </div>

        {/* Team */}
        <div className="mb-24">
           <h3 className="text-3xl font-bold mb-10 text-center">The Innovators</h3>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {HASTHAVANI.team.map((member) => (
               <div key={member.name} className="glass-panel p-8 rounded-2xl border-t-4 border-neon-cyan hover:bg-white/5 transition-colors">
                 <div className="flex items-center gap-6 mb-6">
                    {member.image && (
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-20 h-20 rounded-full object-cover border-2 border-neon-cyan/50"
                        />
                    )}
                    <div>
                        <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                        <p className="text-neon-cyan text-sm font-mono">CO-FOUNDER</p>
                    </div>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Partners */}
        <div className="mb-24 text-center">
           <h3 className="text-2xl font-bold mb-8 text-gray-500">RECOGNIZED & SUPPORTED BY</h3>
           <div className="flex flex-wrap justify-center gap-4 md:gap-8">
             {HASTHAVANI.partners.map((partner) => (
               <span key={partner} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-sm hover:border-white/30 transition-colors cursor-default">
                 {partner}
               </span>
             ))}
           </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {HASTHAVANI.testimonials.map((t, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl relative">
              <Quote size={40} className="text-neon-purple/20 absolute top-4 right-4" />
              <p className="text-lg text-gray-300 italic mb-6">"{t.text}"</p>
              <div>
                <h5 className="font-bold text-white">{t.author}</h5>
                <p className="text-sm text-neon-purple">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Gallery Grid */}
        <div>
           <h3 className="text-3xl font-bold mb-10 text-center">Media Coverage</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {/* Updated loop to handle object structure {title, url} */}
             {HASTHAVANI.links.map((link: any, i: number) => (
               <a 
                 key={i} 
                 href={link.url} 
                 target="_blank" 
                 rel="noreferrer"
                 className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all border border-white/5 h-28 text-center text-sm font-mono group"
               >
                 <span className="line-clamp-2 px-2 font-bold">{link.title}</span>
                 <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
               </a>
             ))}
           </div>
        </div>

      </section>
    </div>
  );
};

export default Impact;