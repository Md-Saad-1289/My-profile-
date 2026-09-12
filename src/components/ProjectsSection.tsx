import React, { useState, lazy, Suspense } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { SectionHeader } from './ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { StaggerContainer, FadeIn } from './ui/AnimatedReveal';

// Code-split CaseStudyModal so it is only fetched when a client clicks on a case study
const CaseStudyModal = lazy(() =>
  import('./CaseStudyModal').then((mod) => ({ default: mod.CaseStudyModal }))
);

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="PORTFOLIO"
          heading="Featured Work"
          description="Recent full-stack applications, SaaS MVPs, and business software built for real users."
        />

        {/* Project Cards Grid with Staggered Entrance */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <FadeIn key={project.id} direction="up" distance={24}>
              <ProjectCard
                project={project}
                onOpenCaseStudy={(proj) => setSelectedProject(proj)}
              />
            </FadeIn>
          ))}
        </StaggerContainer>

        {/* Lazy Loaded Case Study Modal */}
        {selectedProject && (
          <Suspense fallback={null}>
            <CaseStudyModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
};
