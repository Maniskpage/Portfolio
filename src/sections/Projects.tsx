import { SectionWrapper } from '../components/SectionWrapper';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';
import { ArrowUpRight, Github } from 'lucide-react';

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <SectionHeading
          tag="Portfolio"
          title="Featured projects & systems"
          description="A selection of end-to-end applications, SaaS platforms, and backend architectures I've engineered."
          className="mb-0 md:mb-0"
        />

        <a
          href={import.meta.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors shrink-0 self-start sm:self-auto"
        >
          <Github size={14} />
          <span>View all repositories</span>
          <ArrowUpRight size={13} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
