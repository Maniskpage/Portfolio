import { SectionWrapper } from '../components/SectionWrapper';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Projects</p>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight">
          Things I've built
        </h2>
        <a
          href={import.meta.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 shrink-0"
        >
          View all on GitHub →
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
