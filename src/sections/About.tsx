import { SectionWrapper } from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const stats = [
  { value: '6mo', label: 'Internship Experience' },
  { value: '4+', label: 'Projects Shipped' },
  { value: '200+', label: 'DSA Problems Solved' },
  { value: '2025', label: 'Graduate' },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">About Me</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
            Crafting experiences people actually enjoy
          </h2>
          <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              Hi, I'm Manikandan — a 2025 Software Engineering graduate with 6 months of
              product-based internship experience. I specialize in building scalable web applications
              using React.js on the frontend and Spring Boot on the backend.
            </p>
            <p>
              At Fintechy, I contributed to production-grade AP & AR finance automation modules,
              built dynamic data tables with pagination and infinite scrolling, and integrated
              frontend components with REST APIs. I care deeply about clean code, performance,
              and real-world problem solving.
            </p>
            <p>
              I have a strong foundation in Data Structures and Algorithms with 200+ problems
              solved, and hands-on experience with microservices architecture, Spring WebFlux,
              MongoDB, and MySQL.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="/Manikandan_S_Software_Engineer_Resume_pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-zinc-900 font-display font-semibold text-sm rounded-xl hover:bg-accent-dark transition-colors duration-200"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right: stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col gap-1"
            >
              <span className="font-display font-extrabold text-4xl text-zinc-900 dark:text-zinc-100">
                {value}
              </span>
              <span className="text-sm text-zinc-400 dark:text-zinc-500 font-body">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
