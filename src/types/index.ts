export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  solution: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  outcome: string;
  liveUrl: string;
  githubUrl: string;
  isPlaceholder?: boolean;
  metricsBadge?: string;
  previewType: 'dashboard' | 'utility' | 'business';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface FounderPrinciple {
  number: string;
  title: string;
  description: string;
  insight: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  isVerified?: boolean;
}

export interface PersonalInfo {
  name: string;
  preferredName: string;
  primaryTitle: string;
  secondaryTitle: string;
  founderRole: string;
  founderCompany: string;
  shortPositioning: string;
  location: string;
  availability: string;
  workingStyle: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  avatarUrl?: string;
  aboutParagraphs: string[];
  compactProfile: {
    role: string;
    focus: string;
    basedIn: string;
    workingStyle: string;
  };
}

export type Theme = 'dark' | 'light' | 'system';
