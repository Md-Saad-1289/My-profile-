import React from 'react';
import { motion } from 'motion/react';
import { founderPrinciples, personalInfo } from '../data/portfolioData';
import { SectionHeader } from './ui/SectionHeader';
import { Target, Feather, RefreshCw, Sparkles, Award, Quote } from 'lucide-react';

export const FounderSection: React.FC = () => {
  const getPrincipleIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Target className="w-5 h-5 text-emerald-400" />;
      case '02':
        return <Feather className="w-5 h-5 text-teal-400" />;
      case '03':
        return <RefreshCw className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Accent Pulsing */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 font-mono">
              VENTURE & PERSPECTIVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15]">
            Developer mindset. Founder perspective.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Building products has taught me to think beyond code. I care about the problem, the user experience, the business model, and how the product can evolve.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-emerald-400 font-bold">Executive Thinker</span>
            <span>· Product philosophy applied to engineering</span>
          </div>
        </motion.div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {founderPrinciples.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-neutral-900/70 dark:bg-neutral-900/80 border border-neutral-800 p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top edge glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-emerald-400/80 group-hover:text-emerald-300 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700/60 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/40 transition-all">
                    {getPrincipleIcon(item.number)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <div className="text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
                  <Quote className="w-3 h-3 shrink-0" />
                  <span>{item.insight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
