import { SectionWrapper } from '../components/SectionWrapper';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { Download, Code2, Database, Award } from 'lucide-react';

const stats = [
  { value: '2+ Yrs', label: 'Full Stack Exp', detail: 'Akodefy Infotech' },
  { value: '4+', label: 'Shipped Systems', detail: 'SaaS, Web & Mobile' },
  { value: '200+', label: 'DSA Problems', detail: 'LeetCode & GFG' },
  { value: '2025', label: 'B.E. Graduate', detail: 'Electronics & Comm (78%)' },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        tag="About Me"
        title="Engineering with craftsmanship & precision"
        description="A look into my background, core focus areas, and problem-solving journey across full-stack engineering."
      />

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5">
        {/* Card 1: Main Story & Philosophy (Span 7 on lg) */}
        <SpotlightCard className="lg:col-span-7 p-7 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="p-2 rounded-lg bg-accent/10 text-accent">
                <Code2 size={18} />
              </span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                Philosophy & Background
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight leading-snug">
              Bridging robust backend systems with fluid, modern interfaces.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-zinc-900 dark:text-zinc-200">Manikandan S</strong> — a{' '}
                <strong className="text-accent font-semibold">Full Stack Developer</strong> at{' '}
                <strong className="text-accent font-semibold">Akodefy Infotech</strong> with 2 years of experience
                building and delivering web and mobile applications end-to-end.
              </p>
              <p>
                Experienced in application architecture, frontend engineering with React.js, robust backend
                APIs with Spring Boot, and database management across MySQL & MongoDB. Independently architected
                and launched <strong className="text-zinc-900 dark:text-zinc-200">Finvo</strong> — a live multi-tenant
                SaaS invoicing platform with GST compliance, automated PDF generation, and Razorpay billing.
              </p>
              <p>
                From building decoupled microservices with Spring WebFlux to crafting high-performance,
                component-driven web and mobile apps, I take complete ownership of solution design,
                implementation, deployment, and production hosting.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-[#1E222D] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Full Stack Developer @ Akodefy Infotech
              </span>
            </div>

            <a
              href="/Manikandan_S_Software_Engineer_Resume_pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-accent text-zinc-950 hover:bg-accent-hover shadow-cyan-glow-sm transition-all"
            >
              <Download size={13} />
              <span>Download Resume</span>
            </a>
          </div>
        </SpotlightCard>

        {/* Card 2: Stats Grid (Span 5 on lg) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map(({ value, label, detail }) => (
            <SpotlightCard key={label} className="p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-cyan block mb-1">
                  {value}
                </span>
                <span className="font-display font-semibold text-sm text-zinc-900 dark:text-zinc-100 block mb-1">
                  {label}
                </span>
              </div>
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 pt-3 border-t border-zinc-100 dark:border-[#1E222D]">
                {detail}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Card 3: Core Architecture Focus (Span 6 on lg) */}
        <SpotlightCard className="lg:col-span-6 p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-2 rounded-lg bg-accent/10 text-accent">
              <Database size={17} />
            </span>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              Technical Core
            </span>
          </div>

          <h4 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-2">
            Microservices, MERN & Backend Systems
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
            Architecting decoupled services with Node.js, Express, Spring Boot, Spring WebFlux for reactive non-blocking
            I/O, Spring Data JPA, JWT authentication with token rotation, and MongoDB / MySQL databases.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Node.js', 'Express.js', 'MERN Stack', 'Spring Boot', 'Spring WebFlux', 'MongoDB', 'MySQL', 'JWT Auth', 'RESTful APIs'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </SpotlightCard>

        {/* Card 4: Frontend & Problem Solving (Span 6 on lg) */}
        <SpotlightCard className="lg:col-span-6 p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-2 rounded-lg bg-accent/10 text-accent">
              <Award size={17} />
            </span>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              Frontend & Problem Solving
            </span>
          </div>

          <h4 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-2">
            Component Systems & Algorithmic Rigor
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
            Crafting modular user interfaces with React, TypeScript, and Tailwind CSS. 200+ solved
            problems honing algorithmic optimization, concurrency, and clean data structures.
          </p>

          <div className="flex flex-wrap gap-2">
            {['React.js', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'React Virtuoso', '200+ DSA'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </SpotlightCard>
      </div>
    </SectionWrapper>
  );
}
