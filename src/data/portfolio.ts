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
      'A production-grade, multi-tenant invoice generation SaaS application built end-to-end. Supports customer creation, invoice generation with one-click PDF export branded with your company logo (configurable via Company Settings). Features Razorpay-integrated subscription plans, secure JWT-based auth with refresh token rotation, password reset via email OTP, and strict multi-tenant data isolation — designed to the standards of a real-world production application.',
    tech: ['React', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'Spring Boot', 'MongoDB', 'Razorpay', 'JWT'],
    github: '',
    live: import.meta.env.VITE_INVOICE_LIVE_URL,
    featured: true,
  },
  {
    id: 2,
    title: 'ResumeLens — AI Resume Reviewer',
    description:
      'An AI-powered resume analysis tool that leverages GPT-4.1 via the OpenRouter API to deliver detailed, actionable improvement suggestions. Built with a Spring Boot backend exposing clean RESTful APIs, containerized using multi-stage Docker builds for lean production images and CI/CD compatibility, and deployed to Render with secure environment-based API key management. Integrates structured JSON payloads, HTTP headers, and token handling for reliable, scalable AI communication.',
    tech: ['Spring Boot', 'Java', 'GPT-4.1', 'OpenRouter API', 'Docker', 'Maven', 'REST APIs', 'Render'],
    github: import.meta.env.VITE_GITHUB_RESUMEAI,
    live: import.meta.env.VITE_AI_RESUME_URL,
    featured: true,
  },
  {
  id: 3,
  title: 'E-Commerce & Finance Modules',
  description:
    'Two production-grade backend and frontend systems: an E-Commerce microservices platform with Order, Payment, Inventory, and Notification services using Spring WebFlux for non-blocking inter-service communication; and an AP & AR finance automation module built at Fintechy with multi-step invoice workflows, REST API integration, and React Virtuoso-powered rendering for large financial datasets.',
  tech: ['Spring Boot', 'Spring WebFlux', 'React.js', 'Ant Design', 'REST APIs', 'MongoDB', 'Java', 'TypeScript'],
  github: import.meta.env.VITE_GITHUB_WEBFLUX,
  live: '',
  featured: false,
 }
];

export const experiences: Experience[] = [
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
    period: 'Aug 2021 — May 2025',
  },
];

export const skills = {
  Frontend: [
    'React.js', 'TypeScript', 'JavaScript', 'Ant Design',
    'Tailwind CSS', 'HTML', 'CSS', 'React Virtuoso',
  ],
  Backend: [
    'Spring Boot', 'Spring WebFlux', 'REST APIs', 'Spring Data JPA',
    'Java (8+)', 'Microservices', 'Maven', 'Collections & Streams',
  ],
  Tools: [
    'Git', 'GitHub', 'Postman', 'MySQL',
    'MongoDB', 'Razorpay', 'JWT Auth', 'Swagger',
  ],
};
