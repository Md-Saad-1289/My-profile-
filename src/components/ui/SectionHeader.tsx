import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  label: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  heading,
  description,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 font-mono">
          {label}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
        {heading}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
};
