import React from 'react';
import { motion } from 'motion/react';
import { valueStripItems } from '../data/portfolioData';
import { Check, Sparkles } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  // Duplicate array for infinite seamless marquee loop
  const marqueeItems = [...valueStripItems, ...valueStripItems];

  return (
    <section className="border-y border-neutral-800/80 bg-neutral-900/40 dark:bg-neutral-900/60 backdrop-blur-md py-4 overflow-hidden relative">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
          className="flex items-center gap-8 pr-8"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-neutral-400 hover:text-emerald-400 group cursor-default transition-colors shrink-0"
            >
              <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/25 transition-all">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
                {item}
              </span>
              <span className="text-neutral-700 ml-4 font-normal">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
