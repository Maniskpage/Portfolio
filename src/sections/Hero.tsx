import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';



const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      {/* Background grid — pointer-events-none so it never blocks clicks */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Floating accent blobs — pointer-events-none */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-8 md:right-24 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-24 left-8 w-48 h-48 md:w-72 md:h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* All interactive content lives in a positioned layer above decorations */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
          >
            Manikandan{' '}
            <span className="relative inline-block">
              S
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-1.5 bg-accent origin-left rounded-full"
              />
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="font-display text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400 mb-5"
          >
            Software Engineer · Full Stack Developer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-10"
          >
            I build scalable web applications with React.js and Spring Boot — from responsive,
            component-driven UIs to robust microservices backends. 200+ DSA problems solved. Based in{' '}
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">Tamil Nadu, India</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-14">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="cursor-pointer px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-display font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="cursor-pointer px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-display font-semibold text-sm rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-6">
            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            >
              <Github size={16} />
              <span className="font-mono">GitHub</span>
            </a>
            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            >
              <Linkedin size={16} />
              <span className="font-mono">LinkedIn</span>
            </a>
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            >
              <span className="font-mono">{import.meta.env.VITE_EMAIL}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-300 dark:text-zinc-600 pointer-events-none"
      >
        <span className="font-mono text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
