import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.featured === true;
  const hasGithub = Boolean(project.github);
  const hasLive = Boolean(project.live);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className={`group relative flex flex-col gap-4 rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-xl
        ${
          isFeatured
            ? "bg-zinc-900 dark:bg-zinc-800 border-zinc-700 dark:border-zinc-600 hover:shadow-zinc-900/40"
            : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-zinc-200/60 dark:hover:shadow-zinc-900/60"
        }`}
    >
      {isFeatured && (
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-mono font-medium">
          <Star size={10} className="fill-accent" /> Featured
        </span>
      )}

      <div
        className={`pr-20 ${isFeatured ? "text-zinc-100" : "text-zinc-900 dark:text-zinc-100"}`}
      >
        <h3 className="font-display font-semibold text-lg leading-tight">
          {project.title}
        </h3>
      </div>

      {(hasGithub || hasLive) && (
        <div className="flex items-center gap-2">
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isFeatured
                  ? "bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-zinc-100"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <Github size={12} /> GitHub
            </a>
          )}
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isFeatured
                  ? "bg-accent/20 text-accent hover:bg-accent hover:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
        </div>
      )}

      <p
        className={`text-sm leading-relaxed flex-1 ${
          isFeatured ? "text-zinc-400" : "text-zinc-500 dark:text-zinc-400"
        }`}
      >
        {project.description}
      </p>

      <div
        className={`flex flex-wrap gap-2 pt-3 border-t ${
          isFeatured
            ? "border-zinc-700"
            : "border-zinc-100 dark:border-zinc-800"
        }`}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            className={`font-mono text-xs px-2.5 py-1 rounded-md ${
              isFeatured
                ? "bg-zinc-800 text-zinc-300"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
