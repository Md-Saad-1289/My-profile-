import developerPhoto from '../assets/images/developer_photo_1789196510385.jpg.png';
import {
  PersonalInfo,
  SkillCategory,
  Project,
  Service,
  ProcessStep,
  ExperienceItem,
  FounderPrinciple,
  Testimonial,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'MD Mutasim Billah Saad',
  preferredName: 'Saad',
  primaryTitle: 'Full-Stack Web Developer (MERN)',
  secondaryTitle: 'Building SaaS & Business Systems',
  founderRole: 'Founder',
  founderCompany: 'Executive Thinker',
  shortPositioning:
    'I build modern web applications, SaaS products, and business systems that solve real-world problems.',
  location: 'Bangladesh',
  availability: 'Available for selected projects',
  workingStyle: 'Remote / Project-based',
  email: 'saad01915647290@gmail.com',
  github: 'https://github.com/Md-Saad-1289',
  linkedin: 'https://www.linkedin.com/in/md-mutasim-billah-saad-26388a389/',
  twitter: 'https://x.com/mdsaad_dev',
  avatarUrl: developerPhoto,
  aboutParagraphs: [
    "I'm MD Mutasim Billah Saad, a Full-Stack Web Developer focused on building modern web applications, SaaS products, and business systems. I enjoy turning ideas and real-world problems into clean, useful, scalable digital products.",
    "My approach combines product thinking, thoughtful UI/UX, and solid engineering. Whether it's an MVP, internal business platform, e-commerce system, or SaaS product, I focus on building something people can actually use.",
  ],
  compactProfile: {
    role: 'Full-Stack Web Developer',
    focus: 'MERN / SaaS / Business Systems',
    basedIn: 'Bangladesh',
    workingStyle: 'Remote / Project-based',
  },
};

export const valueStripItems = [
  'MERN Stack',
  'SaaS Development',
  'Business Systems',
  'Responsive UI',
  'API Development',
  'MVP Development',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    description: 'Performant, responsive, and intuitive user interfaces built with modern web standards.',
    skills: [
      { name: 'React (18/19)', highlight: true, level: 'Proficient' },
      { name: 'Next.js (App Router)', highlight: true, level: 'Proficient' },
      { name: 'TypeScript', highlight: true, level: 'Proficient' },
      { name: 'Tailwind CSS', highlight: true, level: 'Proficient' },
      { name: 'JavaScript (ES6+)', highlight: true, level: 'Proficient' },
      { name: 'HTML5 & Modern CSS3', highlight: true, level: 'Proficient' },
      { name: 'Redux Toolkit / Zustand', highlight: true, level: 'Proficient' },
      { name: 'Motion / Animations', highlight: true, level: 'Proficient' },
      { name: 'Responsive & a11y UI', highlight: true, level: 'Proficient' },
    ],
  },
  {
    title: 'Backend Engineering',
    description: 'Robust server APIs, secure auth mechanisms, and scalable business logic.',
    skills: [
      { name: 'Node.js', highlight: true, level: 'Proficient' },
      { name: 'Express.js', highlight: true, level: 'Proficient' },
      { name: 'RESTful APIs', highlight: true, level: 'Proficient' },
      { name: 'JWT & OAuth Auth', highlight: true, level: 'Proficient' },
      { name: 'Role-Based Access (RBAC)', highlight: true, level: 'Proficient' },
      { name: 'WebSockets (Socket.io)', highlight: true, level: 'Proficient' },
      { name: 'Middleware & Security', highlight: true, level: 'Proficient' },
      { name: 'API Rate Limiting & CORS', highlight: true, level: 'Proficient' },
      { name: 'Microservices & Serverless', highlight: true, level: 'Proficient' },
    ],
  },
  {
    title: 'Database & Data Modeling',
    description: 'Optimized data storage, complex queries, and ACID-compliant transactional flows.',
    skills: [
      { name: 'MongoDB', highlight: true, level: 'Proficient' },
      { name: 'Mongoose ODM', highlight: true, level: 'Proficient' },
      { name: 'PostgreSQL', highlight: true, level: 'Proficient' },
      { name: 'Prisma ORM / SQL', highlight: true, level: 'Proficient' },
      { name: 'Redis (Cache & Sessions)', highlight: true, level: 'Proficient' },
      { name: 'Aggregation Pipelines', highlight: true, level: 'Proficient' },
      { name: 'Schema Design & Indexing', highlight: true, level: 'Proficient' },
      { name: 'Data Validation & Backup', highlight: true, level: 'Proficient' },
    ],
  },
  {
    title: 'DevOps, Cloud & Deployment',
    description: 'Modern developer workflows, containerized environments, and cloud deployment.',
    skills: [
      { name: 'Git & GitHub Workflows', highlight: true, level: 'Proficient' },
      { name: 'Docker & Containers', highlight: true, level: 'Proficient' },
      { name: 'CI/CD Pipelines (GitHub Actions)', highlight: true, level: 'Proficient' },
      { name: 'Vercel, Netlify & Render', highlight: true, level: 'Proficient' },
      { name: 'Linux / VPS & Nginx', highlight: true, level: 'Proficient' },
      { name: 'Postman & API Testing', highlight: true, level: 'Proficient' },
      { name: 'Cloud Run & S3 Storage', highlight: true, level: 'Proficient' },
      { name: 'Environment & Secrets Management', highlight: true, level: 'Proficient' },
    ],
  },
  {
    title: 'SaaS & Architecture Systems',
    description: 'Enterprise-grade architectural patterns, monetization, and system scalability.',
    skills: [
      { name: 'SaaS Multi-tenant Architecture', highlight: true, level: 'Proficient' },
      { name: 'Admin & Analytics Dashboards', highlight: true, level: 'Proficient' },
      { name: 'Stripe & Payment Webhooks', highlight: true, level: 'Proficient' },
      { name: 'Core Web Vitals & Optimization', highlight: true, level: 'Proficient' },
      { name: 'Code Splitting & Lazy Loading', highlight: true, level: 'Proficient' },
      { name: 'SEO & Structured Metadata', highlight: true, level: 'Proficient' },
      { name: 'Clean Code & SOLID Patterns', highlight: true, level: 'Proficient' },
      { name: 'Client Feedback Systems', highlight: true, level: 'Proficient' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'devflow',
    title: 'DevFlow',
    category: 'SaaS / Developer Collaboration',
    tagline: 'Streamlined project collaboration and visual client feedback loop',
    description:
      'A platform designed to help developers and clients manage projects, share live demos, collect visual feedback, and collaborate more efficiently.',
    problem:
      'Freelance developers and agile teams struggle with fragmented client communication across email, messaging apps, and spreadsheets. Gathering contextual UI feedback on staging builds is often slow, disorganized, and prone to misinterpretation.',
    approach:
      'Designed an integrated workspace where preview URLs can be embedded directly alongside project milestones, allowing stakeholders to pin interactive comments directly on UI elements with screen metadata.',
    solution:
      'Built a complete web platform featuring organized project workspaces, task tracking with status kanbans, instant preview sandboxes, and visual point-and-click feedback overlays with timestamped notification queues.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    features: [
      'Project workspace dashboard',
      'Task management & kanban workflows',
      'Live demo embedded sandbox',
      'Point-and-click visual feedback tool',
      'Role-based client & guest access',
      'Unified project overview & audit logs',
    ],
    challenges: [
      'Ensuring low-latency synchronous comment updates without clunky reloads',
      'Handling sandboxed iframe security policies across arbitrary client preview URLs',
      'Designing an intuitive point-and-click coordinate tracking system for responsive viewport sizes',
    ],
    outcome:
      'Demonstrated architecture for full-lifecycle freelance collaboration, reducing iterative feedback cycles into unified visual threads.',
    liveUrl: '[PROJECT LIVE URL]',
    githubUrl: '[PROJECT GITHUB URL]',
    isPlaceholder: true,
    metricsBadge: 'SaaS Architecture',
    previewType: 'dashboard',
  },
  {
    id: 'multitools',
    title: 'MultiTools',
    category: 'Web Utility Platform',
    tagline: 'Lightweight, client-first productivity tools for everyday workflows',
    description:
      'A collection of lightweight productivity tools designed for everyday users, developers, and digital creators requiring fast, zero-friction utilities.',
    problem:
      'Many online utilities (JSON formatters, regex testers, converters, markdown editors) are cluttered with invasive banner ads, slow loading times, or intrusive tracking scripts that hinder rapid daily work.',
    approach:
      'Architected an ultra-fast, privacy-respecting browser suite that processes transformations and utilities locally without unnecessary network requests, wrapped in a keyboard-first command palette interface.',
    solution:
      'Delivered a responsive web utility hub containing developer tools, text transformers, format converters, and quick visual calculators with local state persistence and dark mode elegance.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web APIs', 'Local Storage'],
    features: [
      'Zero-latency browser-side transformations',
      'Developer utilities (JSON, JWT, RegEx, Base64)',
      'Productivity tools (Text statistics, diff checking, markdown preview)',
      'Keyboard shortcuts & quick search launcher',
      'Offline-capable local storage preferences',
    ],
    challenges: [
      'Optimizing parsing algorithms to handle megabyte-sized JSON and text blobs without freezing the UI thread',
      'Creating a unified UI system that remains consistent across disparate tool categories',
    ],
    outcome:
      'Created a clean, self-contained web suite demonstrating modular component composition and client-side performance engineering.',
    liveUrl: '[PROJECT LIVE URL]',
    githubUrl: '[PROJECT GITHUB URL]',
    isPlaceholder: true,
    metricsBadge: 'Utility Suite',
    previewType: 'utility',
  },
  {
    id: 'business-management-system',
    title: 'Business Management System',
    category: 'Business Software',
    tagline: 'Custom operational platform for workflows, inventory, and services',
    description:
      'A custom business platform for managing operations, customers, services, and internal workflows with multi-role access controls.',
    problem:
      'Growing service-oriented businesses often outgrow generic spreadsheet templates but find enterprise ERP solutions overly complex, expensive, and inflexible for their specific local operational flow.',
    approach:
      'Analyzed core operational bottlenecks across customer intake, job assignment, invoice generation, and status dispatching to engineer an intuitive, tailored back-office management hub.',
    solution:
      'Engineered an end-to-end administration portal featuring customer records, service pipeline status tracking, automatic invoice drafting, role-based employee permissions, and audit logs.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    features: [
      'Centralized customer profile & history ledger',
      'Service order lifecycle pipeline tracking',
      'Automated invoice calculation & status triggers',
      'Multi-level staff role permissions (Admin, Staff, Viewer)',
      'Interactive operational reporting & summaries',
    ],
    challenges: [
      'Structuring relational document schemas in MongoDB for transactions and audit trails',
      'Enforcing strict role-based access verification across both frontend routes and backend controllers',
    ],
    outcome:
      'Established a scalable software foundation for businesses transitioning from disconnected manual systems to automated, cloud-hosted workflows.',
    liveUrl: '[PROJECT LIVE URL]',
    githubUrl: '[PROJECT GITHUB URL]',
    isPlaceholder: true,
    metricsBadge: 'Internal Systems',
    previewType: 'business',
  },
];

export const services: Service[] = [
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Web Development',
    description:
      'End-to-end custom web applications built with React, Node.js, and MongoDB for speed, reliability, and scale.',
    deliverables: [
      'Responsive React & Next.js user interfaces',
      'Secure Node.js & Express REST APIs',
      'Database modeling & optimization (MongoDB)',
    ],
    idealFor: 'Businesses needing a custom, dependable web application.',
    iconName: 'Code2',
  },
  {
    id: 'saas-dev',
    title: 'SaaS & MVP Engineering',
    description:
      'Rapid prototype-to-production execution for startup founders needing to validate ideas with real users quickly.',
    deliverables: [
      'Authentication, user roles & profile flows',
      'Subscription & payment gateway preparation',
      'Interactive dashboards & onboarding experiences',
    ],
    idealFor: 'Founders launching subscription or software products.',
    iconName: 'Rocket',
  },
  {
    id: 'business-systems',
    title: 'Business Dashboards & Portals',
    description:
      'Custom management portals to streamline operations, replace chaotic spreadsheets, and track key business metrics.',
    deliverables: [
      'Admin control panels & data tables',
      'Workflow automation & status pipelines',
      'Multi-role access permissions & activity logs',
    ],
    idealFor: 'Teams looking to digitize and automate daily operations.',
    iconName: 'LayoutDashboard',
  },
  {
    id: 'api-integrations',
    title: 'API Engineering & Integrations',
    description:
      'Clean, documented backend services that connect third-party platforms, handle payments, and scale smoothly.',
    deliverables: [
      'RESTful API architecture & documentation',
      'Third-party service & webhook integrations',
      'Performance optimization & security audits',
    ],
    idealFor: 'Applications requiring robust server logic or external integrations.',
    iconName: 'Layers',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Understanding the problem',
    description:
      'Understand the core idea, user motivations, business objectives, and technical constraints before writing a single line of code.',
    keyOutputs: ['Requirements definition', 'Feature prioritization', 'Technical stack selection'],
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Structuring the solution',
    description:
      'Plan the user journey, wireframe interfaces, and architect the database schemas and API contracts for intuitive usability.',
    keyOutputs: ['User flows & layout hierarchy', 'Data schema design', 'API endpoint specifications'],
  },
  {
    step: '03',
    title: 'Build',
    subtitle: 'Engineering with precision',
    description:
      'Develop the frontend UI, robust backend services, and database connections iteratively with modular, well-tested code.',
    keyOutputs: ['Responsive frontend implementation', 'Secure REST API backend', 'Database integration & testing'],
  },
  {
    step: '04',
    title: 'Launch & Improve',
    subtitle: 'Deploying & iterating',
    description:
      'Deploy to production infrastructure, perform thorough validation, monitor real usage, and refine based on actionable feedback.',
    keyOutputs: ['Production deployment setup', 'Quality assurance checks', 'Iteration recommendations'],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: 'Present',
    role: 'Independent Full-Stack Developer',
    company: 'Self-Employed / Freelance',
    location: 'Remote · Bangladesh',
    type: 'Full-Stack Engineering',
    description:
      'Building modern web applications, SaaS products, and custom business systems for startup founders, agencies, and small businesses.',
    highlights: [
      'Developing responsive client interfaces with React, Next.js, and Tailwind CSS',
      'Designing RESTful backend micro-architectures with Node.js, Express, and MongoDB',
      'Focusing on clean UI/UX paradigms and maintainable software architecture',
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'SaaS Architecture'],
  },
  {
    id: 'exp-2',
    period: 'Ongoing',
    role: 'Founder',
    company: 'Executive Thinker',
    location: 'Bangladesh',
    type: 'Product & Venture Initiative',
    description:
      'Exploring and building digital products and software solutions. Guiding product strategy, user problem identification, and engineering execution from concept to validation.',
    highlights: [
      'Bridging technical implementation with commercial product viability',
      'Architecting software foundations optimized for rapid iterative development',
      'Applying founder discipline to code quality, usability, and customer onboarding',
    ],
    skills: ['Product Strategy', 'Full-Stack Development', 'System Design', 'UX Strategy'],
  },
];

export const founderPrinciples: FounderPrinciple[] = [
  {
    number: '01',
    title: 'Solve the right problem',
    description:
      'Writing elegant code for the wrong problem is still wasted effort. I start by questioning assumptions and pinpointing what actually moves the needle for users and businesses.',
    insight: 'Clarity over complexity. Understand before implementing.',
  },
  {
    number: '02',
    title: 'Keep the experience simple',
    description:
      'Great software feels inevitable. Whether it is a complex administrative dashboard or a consumer utility, cognitive friction is removed so users accomplish tasks effortlessly.',
    insight: 'Usability is not an afterthought; it is the product.',
  },
  {
    number: '03',
    title: 'Build for the next iteration',
    description:
      'Early products must adapt fast. I write clean, modular, and decoupled code that allows features to pivot, expand, and scale without requiring total rewrites.',
    insight: 'Architecture designed for agility and growth.',
  },
];

// Testimonials config: toggleable and authentic.
// When no real testimonials are available, set showTestimonials to false.
export const testimonialConfig = {
  enabled: false, // Set to true when authentic client testimonials are provided
  items: [] as Testimonial[],
};
