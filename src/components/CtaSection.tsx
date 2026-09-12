import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ArrowRight, FolderGit2, Sparkles } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800/90 p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-black/40 overflow-hidden"
        >
          {/* Pulsing Ambient Radial Highlight */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.25, 0.12] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for projects & advisory</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tight leading-[1.15] mb-4">
              Have an idea worth building?
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed mb-8">
              Let's turn your idea into a useful, polished digital product. Whether you need an MVP, custom software, or a high-performance web app.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollTo(e, 'contact')}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-lg shadow-emerald-500/15"
              >
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#work"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollTo(e, 'work')}
                icon={<FolderGit2 className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                View My Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
