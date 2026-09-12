/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  ScrollProgressBar,
  AmbientFloatingOrbs,
  BackToTopButton,
} from './components/ui/AnimatedReveal';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-x-hidden font-sans transition-colors duration-300">
        {/* Top Scroll Reading Progress Indicator */}
        <ScrollProgressBar />

        {/* Ambient Moving Glows */}
        <AmbientFloatingOrbs />

        {/* Architectural Subtle Grid Overlay */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 -z-10" />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Sections - Clean, Focused, Client-Friendly */}
        <main id="main-content" className="relative z-10">
          <Hero />
          <ProjectsSection />
          <SkillsSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>

        {/* Floating Quick Action: Back to Top */}
        <BackToTopButton />

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
