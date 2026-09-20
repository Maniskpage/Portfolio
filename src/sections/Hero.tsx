import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00E5FF 1px, transparent 1px),
            linear-gradient(to bottom, #00E5FF 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient Gradient Glow Blobs */}
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.12, 1],
                opacity: [0.15, 0.25, 0.15],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 md:right-28 w-72 h-72 md:w-[480px] md:h-[480px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1.1, 1, 1.1],
                opacity: [0.1, 0.18, 0.1],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-10 left-5 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-accent-violet/15 rounded-full blur-[90px] pointer-events-none"
      />

      {/* Centered Max-Width Container (1280px) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start max-w-4xl"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-[#1E222D] bg-white/80 dark:bg-[#0F1117]/90 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                Full Stack Engineer @ Jaivexa • Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08]">
              Manikandan{' '}
              <span className="relative inline-block text-gradient-cyan">
                S
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-accent origin-left rounded-full shadow-cyan-glow-sm"
                />
              </span>
            </h1>
          </motion.div>

          {/* Role / Stack Pill Matrix */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 font-mono text-sm sm:text-base text-zinc-600 dark:text-zinc-400"
          >
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              Software Engineer
            </span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span className="px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/25 text-accent font-medium text-xs sm:text-sm">
              React.js
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/25 text-accent font-medium text-xs sm:text-sm">
              Spring Boot
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/25 text-accent font-medium text-xs sm:text-sm">
              Microservices
            </span>
          </motion.div>

          {/* Tagline Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10 text-balance"
          >
            I build scalable, high-performance web systems — from fluid, component-driven user
            interfaces to production-grade microservices and APIs. 200+ DSA problems solved.
            Based in <span className="font-semibold text-zinc-900 dark:text-zinc-200">Tamil Nadu, India</span>.
          </motion.p>

          {/* CTA Buttons Cluster */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm bg-accent text-zinc-950 hover:bg-accent-hover shadow-cyan-glow-sm transition-all cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm bg-white dark:bg-[#0F1117] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-[#1E222D] hover:border-accent/40 dark:hover:border-accent/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-all cursor-pointer"
            >
              <span>Get In Touch</span>
              <Mail size={15} />
            </motion.button>
          </motion.div>

          {/* Social Quick Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/80 w-full"
          >
            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent transition-colors"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent transition-colors"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent transition-colors"
            >
              <Mail size={15} />
              <span>{import.meta.env.VITE_EMAIL}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToProjects}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-600 hover:text-accent dark:hover:text-accent transition-colors cursor-pointer"
      >
        <span className="font-mono text-[11px] tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
