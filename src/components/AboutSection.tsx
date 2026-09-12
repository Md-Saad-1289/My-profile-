import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader } from './ui/SectionHeader';
import { MapPin, Laptop, Layers, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-neutral-900/30 border-y border-neutral-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Concise Story & Client Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <SectionHeader
              label="ABOUT ME"
              heading="Focused on Clean Code & Real Value"
            />

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed mb-6 font-normal">
              I'm a Full-Stack Web Developer specializing in the MERN stack and modern TypeScript. I help startup founders, agencies, and businesses turn concepts into fast, dependable, and production-ready web products.
            </p>

            {/* Core Client Guarantees */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-neutral-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean, modular React & TypeScript architecture that is easy to scale</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Secure Node.js & MongoDB backends with well-documented REST endpoints</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent communication, milestone updates, and prompt delivery</span>
              </div>
            </div>

            <div>
              <Button
                variant="primary"
                size="md"
                href="#contact"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Let's Discuss Your Project
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-7 shadow-xl shadow-black/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

              {/* Profile Header */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img
                      src={personalInfo.avatarUrl || '/developer-photo.jpg'}
                      alt={personalInfo.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      width="52"
                      height="52"
                      className="w-13 h-13 rounded-full object-cover border-2 border-emerald-500/40 shadow-md ring-2 ring-emerald-500/10"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-neutral-900 z-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-neutral-300 font-mono font-medium">
                      {personalInfo.primaryTitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </div>
              </div>

              {/* Profile Details */}
              <div className="divide-y divide-neutral-800 mt-4 text-xs font-mono">
                <div className="py-3 flex items-center justify-between">
                  <span className="text-neutral-300 flex items-center gap-2 font-medium">
                    <Compass className="w-3.5 h-3.5 text-emerald-400" /> Focus
                  </span>
                  <span className="text-white font-bold">{personalInfo.compactProfile.focus}</span>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <span className="text-neutral-300 flex items-center gap-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Location
                  </span>
                  <span className="text-white font-bold">{personalInfo.location}</span>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <span className="text-neutral-300 flex items-center gap-2 font-medium">
                    <Laptop className="w-3.5 h-3.5 text-emerald-400" /> Working Style
                  </span>
                  <span className="text-emerald-300 font-bold">Remote / Worldwide</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
