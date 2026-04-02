import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { skills } from '../data/portfolio';

const categoryColors: Record<string, string> = {
  Frontend: 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50',
  Backend: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/50',
  Tools: 'bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-900/50',
};

const badgeColors: Record<string, string> = {
  Frontend: 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300',
  Backend: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300',
  Tools: 'bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300',
};

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Skills</p>
      <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight mb-12">
        Technologies I work with
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {(Object.entries(skills) as [string, string[]][]).map(([category, items], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border p-6 ${categoryColors[category] ?? 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'}`}
          >
            <h3 className="font-display font-semibold text-lg mb-5 text-zinc-900 dark:text-zinc-100">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.1 + i * 0.04 }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-mono font-medium ${
                    badgeColors[category] ?? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
