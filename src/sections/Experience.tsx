import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { experiences, education } from '../data/portfolio';

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Background</p>
      <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight mb-12">
        Experience & Education
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Work Experience */}
        <div>
          <h3 className="font-display font-semibold text-xl mb-8 text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Work
          </h3>
          <div className="relative space-y-0">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent border-2 border-surface-light dark:border-surface-dark" />
                <div className="flex flex-col gap-1 mb-2">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    {exp.period}
                  </span>
                  <h4 className="font-display font-semibold text-base text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </h4>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {exp.company}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education + Certs */}
        <div>
          <h3 className="font-display font-semibold text-xl mb-8 text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Education
          </h3>
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-8"
              >
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent border-2 border-surface-light dark:border-surface-dark" />
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {edu.period}
                </span>
                <h4 className="font-display font-semibold text-base text-zinc-900 dark:text-zinc-100 mt-1">
                  {edu.degree}
                </h4>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{edu.institution}</span>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl"
            >
              <p className="font-display font-semibold text-base mb-3 text-zinc-900 dark:text-zinc-100">
                Certifications
              </p>
              <ul className="space-y-2">
                {[
                  'Product Engineer Internship Certificate – Fintechy',
                  'Web Design Internship Certificate – Quantanics TechServ Pvt Ltd',
                ].map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-sm text-zinc-400 dark:text-zinc-500">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
