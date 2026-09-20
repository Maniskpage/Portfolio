export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'InvoiceFlow — SaaS Invoice Platform',
    description:
      'A production-grade, multi-tenant invoice SaaS supporting automated PDF exports with custom company branding, Razorpay subscription billing, JWT auth with refresh token rotation, and isolated tenant databases.',
    tech: ['React', 'TypeScript', 'Spring Boot', 'Tailwind CSS', 'MongoDB', 'Razorpay', 'JWT'],
    github: '',
    live: import.meta.env.VITE_INVOICE_LIVE_URL || '',
    featured: true,
  },
  {
    id: 2,
    title: 'Deed Manager — Legal Registration & Workflow SaaS',
    description:
      'A full-stack workflow SaaS for document writers & advocates across Tamil Nadu. Features a 7-stage Kanban case engine, automated bilingual deed draft generation with docxtemplater, 38-district property registry, and WhatsApp automation.',
    tech: ['React 18', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Ant Design', '@hello-pangea/dnd', 'docxtemplater'],
    github: '',
    live: '',
    featured: false,
  },
  {
    id: 3,
    title: 'Real-Time CRM Call Logger — Native Android & MERN Sync',
    description:
      'An automated call-tracking bridge connecting native Android dialers to a MERN CRM. Uses Capacitor & Kotlin BroadcastReceivers with WorkManager for background sync, automated lead matching, and auto-scheduling follow-ups.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Kotlin', 'Capacitor', 'Android WorkManager'],
    github: '',
    live: '',
    featured: false,
  },
  {
    id: 4,
    title: 'ResumeLens — AI Resume Reviewer',
    description:
      'An AI-powered resume analysis engine integrating GPT-4.1 via OpenRouter API with structured feedback prompts. Containerized with multi-stage Docker builds and deployed to Render with Spring Boot REST APIs.',
    tech: ['Spring Boot', 'Java', 'GPT-4.1', 'Docker', 'OpenRouter API', 'REST APIs', 'Render'],
    github: import.meta.env.VITE_GITHUB_RESUMEAI || '',
    live: import.meta.env.VITE_AI_RESUME_URL || '',
    featured: false,
  },
  {
    id: 5,
    title: 'E-Commerce & Finance Microservices',
    description:
      'Production-grade microservices and financial automation platform: non-blocking inter-service communication with Spring WebFlux, and AP/AR invoice workflows with React Virtuoso rendering large financial datasets.',
    tech: ['Spring Boot', 'Spring WebFlux', 'React.js', 'Ant Design', 'MongoDB', 'Java', 'TypeScript'],
    github: import.meta.env.VITE_GITHUB_WEBFLUX || '',
    live: '',
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Jaivexa',
    period: 'Present',
    description:
      'Architecting and developing full-stack web applications and SaaS solutions. Engineering responsive, high-performance user interfaces with React and TypeScript, alongside resilient backend APIs, databases, and microservices.',
  },
  {
    role: 'Product Engineer Intern',
    company: 'Fintechy',
    period: 'Jul 2025 — Jan 2026',
    description:
      'Contributed to production-grade AP & AR finance automation modules. Developed reusable UI components with React.js and Ant Design. Built dynamic tables with pagination, filtering, and infinite scrolling. Integrated frontend with backend REST APIs and improved UI performance.',
  },
  {
    role: 'Web Design Intern',
    company: 'Quantanics TechServ Pvt Ltd',
    period: 'Jun 2024',
    description:
      'Built responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap. Implemented authentication UI and form validation following best practices. Reduced UI defects through testing and code review practices.',
  },
];

export const education: Education[] = [
  {
    degree: 'B.E. Electronics and Communication Engineering (78%)',
    institution: 'Sethu Institute of Technology',
    period: 'Aug 2021 — Apr 2025',
  },
];

export const skills = {
  Frontend: [
    'React.js', 'TypeScript', 'JavaScript', 'Ant Design',
    'Tailwind CSS', 'HTML5', 'CSS3', 'React Virtuoso',
  ],
  Backend: [
    'Node.js', 'Express.js', 'MERN Stack', 'Spring Boot',
    'Spring WebFlux', 'REST APIs', 'Spring Data JPA', 'Java (8+)',
    'Microservices', 'Maven',
  ],
  Tools: [
    'MongoDB', 'MySQL', 'Git', 'GitHub',
    'Postman', 'Docker', 'Razorpay', 'JWT Auth', 'Swagger',
  ],
};
