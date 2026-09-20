import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tag: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}>
      {/* Animated Tag */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-flex items-center gap-2 mb-3.5`}
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
          {tag}
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] text-zinc-900 dark:text-zinc-50"
      >
        {title}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
