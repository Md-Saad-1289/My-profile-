import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import {
  ExternalLink,
  Github,
  BookOpen,
  Layers,
  ArrowRight,
  MessageSquare,
  CheckCircle,
  FileCode,
  Users,
  ShieldCheck,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  // Render high-fidelity custom visual UI previews based on previewType
  const renderVisualPreview = () => {
    if (project.previewType === 'dashboard') {
      return (
        <div className="w-full h-full bg-neutral-950 p-4 font-mono text-[11px] select-none flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-neutral-300 font-semibold">DevFlow Workspace</span>
            </div>
            <span className="text-neutral-400 text-[10px] bg-neutral-800/80 px-2 py-0.5 rounded">
              v1.2.0-prod
            </span>
          </div>

          {/* Kanban / Visual feedback simulation */}
          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="bg-neutral-900/90 border border-neutral-800 rounded p-2">
              <div className="text-[10px] text-neutral-300 font-bold mb-1">STAGING DEMO</div>
              <div className="bg-neutral-950 p-1.5 rounded border border-neutral-800 text-[10px] text-neutral-100 flex items-center justify-between font-medium">
                <span>Header Nav</span>
                <span className="text-emerald-300 font-bold">Live</span>
              </div>
            </div>
            <div className="bg-neutral-900/90 border border-neutral-800 rounded p-2">
              <div className="text-[10px] text-amber-300 font-bold mb-1">CLIENT FEEDBACK</div>
              <div className="bg-neutral-950 p-1.5 rounded border border-neutral-800 text-[10px] text-neutral-100 flex items-center gap-1 font-medium">
                <MessageSquare className="w-3 h-3 text-amber-400" />
                <span>2 Pin Notes</span>
              </div>
            </div>
            <div className="bg-neutral-900/90 border border-neutral-800 rounded p-2">
              <div className="text-[10px] text-emerald-300 font-bold mb-1">APPROVAL</div>
              <div className="bg-neutral-950 p-1.5 rounded border border-neutral-800 text-[10px] text-neutral-100 flex items-center gap-1 font-medium">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Signed Off</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-200 bg-neutral-900/80 p-2 rounded border border-neutral-800 font-medium">
            <span>Collaborators: 4 active</span>
            <span className="text-emerald-300 font-bold">Sync: Real-time</span>
          </div>
        </div>
      );
    }

    if (project.previewType === 'utility') {
      return (
        <div className="w-full h-full bg-neutral-950 p-4 font-mono text-[11px] select-none flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <div className="flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-white font-bold">MultiTools Engine</span>
            </div>
            <span className="text-teal-300 text-[10px] font-semibold">Client-side zero-lag</span>
          </div>

          <div className="space-y-2 my-2.5">
            <div className="bg-neutral-900/90 p-2 rounded border border-neutral-800 text-[10px] flex items-center justify-between font-medium">
              <span className="text-neutral-200">JSON Schema Formatter</span>
              <span className="text-emerald-300 font-semibold">0.4ms parse</span>
            </div>
            <div className="bg-neutral-900/90 p-2 rounded border border-neutral-800 text-[10px] flex items-center justify-between font-medium">
              <span className="text-neutral-200">JWT Payload Inspector</span>
              <span className="text-white font-semibold">Decoded (HS256)</span>
            </div>
            <div className="bg-neutral-900/90 p-2 rounded border border-neutral-800 text-[10px] flex items-center justify-between font-medium">
              <span className="text-neutral-200">Offline Privacy Mode</span>
              <span className="text-emerald-300 font-semibold">100% Local</span>
            </div>
          </div>

          <div className="text-[10px] text-neutral-300 border-t border-neutral-800 pt-2 flex items-center justify-between font-medium">
            <span>Palette: Cmd + K enabled</span>
            <span className="text-neutral-100 font-semibold">No telemetry</span>
          </div>
        </div>
      );
    }

    // business software preview
    return (
      <div className="w-full h-full bg-neutral-950 p-4 font-mono text-[11px] select-none flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-white font-bold">Business Ops Core</span>
          </div>
          <span className="text-indigo-300 text-[10px] font-semibold">RBAC Active</span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-2.5">
          <div className="p-2 rounded bg-neutral-900/90 border border-neutral-800">
            <div className="text-[9px] text-neutral-300 uppercase font-bold">Active Orders</div>
            <div className="text-sm font-bold text-white mt-0.5">38 in pipeline</div>
            <div className="text-[9px] text-emerald-300 font-semibold">Auto-invoiced</div>
          </div>
          <div className="p-2 rounded bg-neutral-900/90 border border-neutral-800">
            <div className="text-[9px] text-neutral-300 uppercase font-bold">Role Access</div>
            <div className="text-sm font-bold text-white mt-0.5">Admin & Staff</div>
            <div className="text-[9px] text-teal-300 font-semibold">Audit trail logged</div>
          </div>
        </div>

        <div className="text-[10px] text-neutral-200 bg-neutral-900/70 p-2 rounded border border-neutral-800 flex items-center justify-between font-medium">
          <span className="flex items-center gap-1.5">
            <Users className="w-3 h-3 text-neutral-300" /> Multi-branch ready
          </span>
          <span className="text-emerald-300 font-semibold">Operational</span>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="group rounded-2xl bg-neutral-900/90 dark:bg-neutral-900/90 border border-neutral-800 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg shadow-black/20 relative"
    >
      {/* Top glowing edge indicator on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400 transition-all duration-500 z-20 pointer-events-none" />

      <div>
        {/* Visual Preview Container / Dashboard Showcase */}
        <div className="relative h-56 sm:h-64 border-b border-neutral-800 overflow-hidden bg-neutral-950">
          {renderVisualPreview()}

          {/* Category Floating Badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="status" size="sm">
              {project.category}
            </Badge>
          </div>

          {/* Overlay CTA on preview hover */}
          <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4 z-10">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenCaseStudy(project)}
              icon={<BookOpen className="w-3.5 h-3.5" />}
            >
              Read Full Case Study
            </Button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono font-semibold text-emerald-400 shrink-0">
              {project.metricsBadge}
            </span>
          </div>

          <p className="text-sm text-neutral-200 leading-relaxed mb-4 font-normal">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200 text-[11px] font-mono border border-neutral-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 py-4 bg-neutral-950/70 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group/btn focus:outline-none"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>

        <div className="flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-medium text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
            title="Live Demo"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-medium text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
            title="Source Code"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
