import React, { useEffect } from 'react';
import { Project } from '../types';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4.5 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <Badge variant="status" size="sm">
              {project.category}
            </Badge>
            <span className="text-xs text-neutral-300 font-mono font-medium hidden sm:inline">
              Case Study Dossier
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-emerald-300 font-bold mt-1">
              {project.tagline}
            </p>
            <p className="text-neutral-200 text-sm sm:text-base mt-3 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-neutral-800">
              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Live Demo
              </Button>

              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github className="w-3.5 h-3.5" />}
              >
                Source Code
              </Button>
            </div>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-neutral-100 leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
                <Lightbulb className="w-4 h-4" />
                <span>Product Approach</span>
              </div>
              <p className="text-sm text-neutral-100 leading-relaxed font-medium">
                {project.approach}
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Solution & Engineering</span>
            </div>
            <p className="text-sm text-neutral-100 leading-relaxed font-medium">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Core Architectural Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs sm:text-sm text-neutral-200 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges */}
          <div>
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Technical Challenges Overcome</span>
            </h3>
            <div className="space-y-2">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs sm:text-sm text-neutral-200 font-medium flex items-start gap-2.5"
                >
                  <span className="font-mono text-emerald-300 font-bold text-[11px] mt-0.5">0{idx + 1}.</span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5 font-bold">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-neutral-800 text-neutral-100 border border-neutral-600 text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Outcome */}
          <div className="p-4.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Outcome & Learnings</span>
            </div>
            <p className="text-sm text-neutral-100 leading-relaxed font-medium">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-neutral-950/80 border-t border-neutral-800 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-300 font-medium">
            Production-grade codebase documentation
          </span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Dossier
          </Button>
        </div>
      </div>
    </div>
  );
};
