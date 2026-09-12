import React, { useRef, useState } from 'react';
import {
  Code2,
  Database,
  Server,
  Layers,
  Cpu,
  Globe,
  FileCode,
  Terminal,
  Boxes,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface HeroSkill {
  name: string;
  category: string;
  accentColor: string;
  icon: React.ReactNode;
}

const HERO_SKILLS: HeroSkill[] = [
  {
    name: 'React 18+',
    category: 'UI Library',
    accentColor: 'text-cyan-400',
    icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" />,
  },
  {
    name: 'Next.js 14/15',
    category: 'Full-Stack',
    accentColor: 'text-white',
    icon: <Globe className="w-3.5 h-3.5 text-white" />,
  },
  {
    name: 'TypeScript',
    category: 'Type Safety',
    accentColor: 'text-blue-400',
    icon: <FileCode className="w-3.5 h-3.5 text-blue-400" />,
  },
  {
    name: 'Node.js',
    category: 'Backend',
    accentColor: 'text-emerald-400',
    icon: <Server className="w-3.5 h-3.5 text-emerald-400" />,
  },
  {
    name: 'Express.js',
    category: 'REST API',
    accentColor: 'text-neutral-300',
    icon: <Terminal className="w-3.5 h-3.5 text-neutral-300" />,
  },
  {
    name: 'MongoDB',
    category: 'NoSQL DB',
    accentColor: 'text-emerald-400',
    icon: <Database className="w-3.5 h-3.5 text-emerald-400" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    accentColor: 'text-teal-400',
    icon: <Layers className="w-3.5 h-3.5 text-teal-400" />,
  },
  {
    name: 'PostgreSQL',
    category: 'Relational DB',
    accentColor: 'text-blue-300',
    icon: <Database className="w-3.5 h-3.5 text-blue-300" />,
  },
  {
    name: 'REST & GraphQL',
    category: 'Architecture',
    accentColor: 'text-indigo-400',
    icon: <Cpu className="w-3.5 h-3.5 text-indigo-400" />,
  },
  {
    name: 'Docker',
    category: 'Containers',
    accentColor: 'text-cyan-300',
    icon: <Boxes className="w-3.5 h-3.5 text-cyan-300" />,
  },
  {
    name: 'JWT & RBAC Auth',
    category: 'Security',
    accentColor: 'text-amber-300',
    icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />,
  },
];

export const HeroSkillsSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated array for seamless continuous infinite marquee
  const duplicatedSkills = [...HERO_SKILLS, ...HERO_SKILLS];

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full max-w-xl mb-8 relative">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-neutral-700 dark:text-neutral-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Core Technologies (Sliding)</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => handleManualScroll('left')}
            className="p-1 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
            aria-label="Previous skill"
            title="Slide left"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleManualScroll('right')}
            className="p-1 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
            aria-label="Next skill"
            title="Slide right"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Slider Background Track Container */}
      <div className="relative w-full rounded-2xl bg-neutral-100/90 dark:bg-neutral-900/85 border border-neutral-300/80 dark:border-neutral-800/90 p-2 sm:p-2.5 shadow-sm backdrop-blur-md">
        {/* Marquee Wrapper with soft edge gradients */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-x-auto no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="animate-marquee py-1 flex items-center gap-2.5"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`compact-${skill.name}-${index}`}
                className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-transparent border border-neutral-300/90 dark:border-neutral-700/80 hover:border-emerald-400 transition-all duration-200 hover:scale-105 cursor-default select-none group"
              >
                {skill.icon}
                <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white group-hover:text-emerald-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-300 font-semibold px-1.5 py-0.5 rounded border border-neutral-300/60 dark:border-neutral-700/60 bg-transparent">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
