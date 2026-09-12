import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategories } from '../data/portfolioData';
import { SectionHeader } from './ui/SectionHeader';
import {
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend Architecture':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Backend Engineering':
        return <Server className="w-5 h-5 text-teal-400" />;
      case 'Database & Data Modeling':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'DevOps, Cloud & Deployment':
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      case 'SaaS & Architecture Systems':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-neutral-900/30 border-y border-neutral-800/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="TECH STACK"
          heading="Skills & Technologies"
          description="Battle-tested tools, frameworks, and architecture patterns with full production mastery."
        />

        {/* 100% Proficiency Assurance Banner */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">
                  100% Verified Production Competence
                </h4>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  All {totalSkillsCount} Skills Mastered
                </span>
              </div>
              <p className="text-xs text-neutral-300 font-normal">
                Every technology listed below is actively utilized in real-world client applications and scalable systems.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 font-semibold ml-auto sm:ml-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ready for Immediate Deployment</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeCategory === cat.title
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.title} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={`grid grid-cols-1 ${
              filteredCategories.length === 1
                ? 'max-w-3xl mx-auto'
                : 'md:grid-cols-2 lg:grid-cols-3'
            } gap-6`}
          >
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl bg-neutral-900/70 dark:bg-neutral-900/80 border border-neutral-800 p-6 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Top subtle accent glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400 transition-all duration-500" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center group-hover:border-emerald-500/30 transition-all">
                      {getCategoryIcon(category.title)}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-emerald-400 font-medium">
                        {category.skills.length} Mastered Tools
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-200 leading-relaxed mb-5 font-normal">
                    {category.description}
                  </p>

                  {/* Skill Badges with verified checkmarks */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-neutral-800/95 text-white border border-neutral-700 hover:border-emerald-400 hover:bg-neutral-800 transition-all duration-150 cursor-default group/skill shadow-sm"
                        title={`${skill.name} - 100% Proficient`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-neutral-100 group-hover/skill:text-white">
                          {skill.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
