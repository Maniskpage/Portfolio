import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import { experiences, education } from '../data/portfolio';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  'Product Engineer Internship Certificate — Fintechy',
  'Web Design Internship Certificate — Quantanics TechServ Pvt Ltd',
];

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        tag="Career & Education"
        title="Experience & academic background"
        description="My journey through product engineering internships, core education, and professional credentials."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Work Experience (Span 7 on lg) */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-8">
            <span className="p-2 rounded-lg bg-accent/10 text-accent">
              <Briefcase size={18} />
            </span>
            <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-100">
              Work Experience
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-10">
            {/* Illuminated vertical line */}
            <div className="absolute left-[7px] sm:left-[9px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Glowing milestone node */}
                <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#08090A] border-2 border-accent flex items-center justify-center group-hover:scale-125 transition-transform shadow-cyan-glow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0F1117] border border-zinc-200/80 dark:border-[#1E222D] group-hover:border-accent/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/20">
                      {exp.period}
                    </span>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                      {exp.company}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-3">
                    {exp.role}
                  </h4>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications (Span 5 on lg) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="p-2 rounded-lg bg-accent/10 text-accent">
                <GraduationCap size={18} />
              </span>
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-100">
                Education
              </h3>
            </div>

            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0F1117] border border-zinc-200/80 dark:border-[#1E222D]"
              >
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {edu.period}
                </span>

                <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100 mt-3 mb-1">
                  {edu.degree}
                </h4>

                <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.institution}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Award size={18} />
                </span>
                <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Certifications & Verified Credentials
                </h4>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60"
                  >
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 leading-snug">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
