import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { skills } from '../data/portfolio';
import { Layout, Server, Wrench } from 'lucide-react';

const categoryMeta: Record<
  string,
  {
    icon: typeof Layout;
    label: string;
    accentColor: string;
    spotlight: string;
    pillClass: string;
    borderHover: string;
  }
> = {
  Frontend: {
    icon: Layout,
    label: 'Client-Side & UI Systems',
    accentColor: 'text-accent',
    spotlight: 'rgba(0, 229, 255, 0.12)',
    pillClass:
      'bg-accent/10 text-zinc-800 dark:text-zinc-200 border-accent/20 hover:border-accent hover:text-accent dark:hover:text-accent',
    borderHover: 'hover:border-accent/40',
  },
  Backend: {
    icon: Server,
    label: 'Microservices & Enterprise Core',
    accentColor: 'text-accent',
    spotlight: 'rgba(0, 229, 255, 0.12)',
    pillClass:
      'bg-accent/10 text-zinc-800 dark:text-zinc-200 border-accent/20 hover:border-accent hover:text-accent dark:hover:text-accent',
    borderHover: 'hover:border-accent/40',
  },
  Tools: {
    icon: Wrench,
    label: 'Databases, Cloud & DevOps',
    accentColor: 'text-accent-violet',
    spotlight: 'rgba(139, 92, 246, 0.14)',
    pillClass:
      'bg-accent-violet/10 text-zinc-800 dark:text-zinc-200 border-accent-violet/20 hover:border-accent-violet hover:text-accent-violet dark:hover:text-accent-violet',
    borderHover: 'hover:border-accent-violet/40',
  },
};

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        tag="Tech Stack"
        title="Tools & technologies I engineer with"
        description="A specialized stack curated for building fast, resilient, and enterprise-grade applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.entries(skills) as [string, string[]][]).map(([category, items], ci) => {
          const meta = categoryMeta[category] || categoryMeta.Frontend;
          const IconComponent = meta.icon;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpotlightCard
                spotlightColor={meta.spotlight}
                className={`p-6 sm:p-7 flex flex-col justify-between h-full ${meta.borderHover}`}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 ${meta.accentColor}`}>
                      <IconComponent size={20} />
                    </span>
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                      {items.length} Skills
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-1">
                    {category}
                  </h3>
                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                    {meta.label}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 cursor-default ${meta.pillClass}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
