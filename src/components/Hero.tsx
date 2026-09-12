import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { HeroVisual } from './HeroVisual';
import { HeroSkillsSlider } from './HeroSkillsSlider';
import { ArrowRight, Github, Linkedin, Twitter, FolderGit2 } from 'lucide-react';

export const Hero: React.FC = () => {
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
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Dynamic Animated Ambient Highlights */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/8 blur-[120px] rounded-full pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 right-10 w-[320px] h-[320px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Developer Profile Avatar + Availability Badge with Glowing Ring */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3.5 mb-6"
            >
              <div className="relative shrink-0">
                {/* Breathing ring pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.16, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-xs pointer-events-none"
                />
                <img
                  src={personalInfo.avatarUrl || '/developer-photo.jpg'}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-full object-cover border-2 border-emerald-500/60 shadow-lg ring-2 ring-emerald-500/20"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-950 z-10" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <Badge variant="status" size="sm" pulse>
                  {personalInfo.availability}
                </Badge>
                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 font-semibold tracking-wide">
                  {personalInfo.primaryTitle}
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-6.5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-6"
            >
              Building digital products that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400">
                solve real problems.
              </span>
            </motion.h1>

            {/* Supporting Subline - Crisp & High-Contrast */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl leading-relaxed mb-5 font-normal"
            >
              Full-Stack MERN Developer building fast, scalable web applications, SaaS MVPs, and custom business dashboards tailored to client needs.
            </motion.p>

            {/* Sliding Tech Skills Marquee (Responsive & Interactive) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="w-full"
            >
              <HeroSkillsSlider />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                href="#work"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollTo(e, 'work')}
                icon={<FolderGit2 className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-lg shadow-emerald-950/20 hover:shadow-emerald-500/20"
              >
                View My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollTo(e, 'contact')}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Let's Work Together
              </Button>
            </motion.div>

            {/* Social Links & Location metadata */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 w-full"
            >
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50 font-medium"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50 font-medium"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50 font-medium"
                  aria-label="X (Twitter) Profile"
                >
                  <Twitter className="w-4 h-4" />
                  <span>X</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs font-mono text-neutral-600 dark:text-neutral-300 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Based in {personalInfo.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract Developer & Product Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
