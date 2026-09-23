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
  tagline?: string;
  description: string;
  highlights?: string[];
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
    role: 'Full Stack Developer',
    company: 'Akodefy Infotech',
    period: '2 Years – Present',
    tagline: 'Full Stack Web & Mobile Development · Deployment · Hosting',
    description:
      'Architecting and delivering full-stack web and mobile applications end-to-end. Building responsive React.js frontends, designing robust Spring Boot REST services, managing databases with MySQL & MongoDB, and deploying production environments.',
    highlights: [
      'Built and delivered full-stack web applications end-to-end, covering architecture, frontend development, backend development, REST APIs, database integration, testing, deployment, and production hosting.',
      'Developed responsive and scalable React.js applications with reusable components, forms, dashboards, tables, authentication flows, API integrations, and business workflows.',
      'Designed and implemented backend services using Java and Spring Boot, including RESTful APIs, authentication, business logic, validation, database operations, and frontend-backend integration.',
      'Worked with MySQL and MongoDB for application data management, database design, and efficient data access workflows.',
      'Built and delivered mobile applications end-to-end, including application development, backend/API integration, authentication, data handling, testing, deployment, and production delivery.',
      'Took ownership of applications throughout the complete development lifecycle, from requirements and solution design through implementation, deployment, hosting, maintenance, and production support.',
      'Deployed and hosted applications in production environments, handling build configuration, environment variables, frontend/backend deployment, API connectivity, and release-related issues.',
      'Integrated third-party services and APIs based on project requirements and worked on debugging, testing, feature development, and production releases.',
    ],
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
