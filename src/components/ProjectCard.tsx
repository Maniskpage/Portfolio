import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = Boolean(project.featured);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Screen size check to disable 3D tilt calculations on mobile
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768 && window.matchMedia('(hover: hover)').matches);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-9deg', '9deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const hasGithub = Boolean(project.github && project.github.trim() !== '');
  const hasLive = Boolean(project.live && project.live.trim() !== '');

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={
        isDesktop
          ? {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={!isDesktop ? { y: -4 } : undefined}
      className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
        isFeatured
          ? 'bg-gradient-to-b from-[#11141D] to-[#0A0C11] border border-accent/30 dark:border-accent/30 hover:border-accent/60 shadow-lg hover:shadow-cyan-glow-sm'
          : 'bg-white dark:bg-[#0F1117] border border-zinc-200/90 dark:border-[#1E222D] hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-md dark:hover:shadow-cyan-glow-sm'
      }`}
    >
      {/* Background ambient radial flare on hover */}
      {isHovered && isDesktop && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(450px circle at 50% 50%, rgba(0, 229, 255, 0.08), transparent 70%)',
          }}
        />
      )}

      {/* Top row: Featured Badge & Action Buttons */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          {isFeatured ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/30">
              <Sparkles size={11} className="text-accent" /> Featured Project
            </span>
          ) : (
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              0{index + 1}
            </span>
          )}

          {/* Quick Action or Case Study Badge */}
          <div className="flex items-center gap-2">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <Github size={15} />
              </a>
            )}
            {hasLive ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-accent text-zinc-950 hover:bg-accent-hover transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink size={12} />
              </a>
            ) : (
              !hasGithub && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                  <Layers size={11} className="text-accent" />
                  <span>Case Study</span>
                </span>
              )
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors duration-200 mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-4">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Chips */}
      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((techItem) => (
            <span
              key={techItem}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50 group-hover:border-accent/20 transition-colors"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
