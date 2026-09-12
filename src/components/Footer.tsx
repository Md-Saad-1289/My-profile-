import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Twitter, Code2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950/90 py-12 md:py-16 text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-850">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 text-neutral-100 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-750 flex items-center justify-center text-emerald-400">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-base tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              Full-Stack Web Developer & Product Builder · {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-400">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              aria-label="X Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-neutral-500 font-mono">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Built with Next.js</span>
            <span>·</span>
            <span>Tailwind CSS</span>
            <span>·</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
