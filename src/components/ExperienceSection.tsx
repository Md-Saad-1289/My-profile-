import React from 'react';
import { motion } from 'motion/react';
import { experienceItems } from '../data/portfolioData';
import { SectionHeader } from './ui/SectionHeader';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-neutral-900/30 border-y border-neutral-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="JOURNEY"
          heading="Building, learning, and shipping."
          description="A timeline of continuous learning, building commercial systems, and product exploration."
        />

        <div className="max-w-3xl space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/60 before:via-neutral-800 before:to-neutral-900">
          {experienceItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative pl-10 group"
            >
              {/* Timeline Node with Pulse */}
              <div className="absolute left-1.5 top-2.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-400 transition-all shadow-sm shadow-emerald-500/20 z-10" />

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6 sm:p-7 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-emerald-400 font-medium px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-white transition-colors">
                  {item.role}
                </h3>
                <div className="text-sm font-medium text-neutral-400 mb-4">
                  {item.company} · <span className="text-emerald-400/90">{item.type}</span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {item.highlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/60">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-300 text-[11px] font-mono border border-neutral-750 hover:text-white hover:border-neutral-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
