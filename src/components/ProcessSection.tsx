import React from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../data/portfolioData';
import { SectionHeader } from './ui/SectionHeader';
import { Compass, Palette, Terminal, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Compass className="w-5 h-5 text-emerald-400" />;
      case '02':
        return <Palette className="w-5 h-5 text-teal-400" />;
      case '03':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case '04':
        return <Rocket className="w-5 h-5 text-indigo-400" />;
      default:
        return <Compass className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="PROCESS"
          heading="How I turn an idea into a product."
          description="A systematic, risk-mitigating engineering lifecycle designed to bring concepts to life efficiently without bloated overhead."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/70 border border-neutral-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top edge glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400 transition-all duration-500" />

              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-emerald-400/80 group-hover:text-emerald-300 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700/60 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/40 transition-all">
                    {getStepIcon(step.step)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 mb-1 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-emerald-400/90 mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Key Outputs */}
              <div className="pt-4 border-t border-neutral-800/80">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Outputs:
                </div>
                <div className="space-y-1.5">
                  {step.keyOutputs.map((out, outIdx) => (
                    <div key={outIdx} className="text-[11px] text-neutral-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
