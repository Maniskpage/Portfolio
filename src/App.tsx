import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative overflow-x-hidden selection:bg-accent/30 selection:text-accent">
      {/* Scroll Progress Bar & Floating Top Button */}
      <ScrollProgress />

      {/* Floating Capsule Navbar */}
      <Navbar isDark={isDark} onToggleTheme={toggle} />

      <main>
        <Hero />

        {/* Subtle Divider */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-[#1E222D] to-transparent" />
        </div>

        <About />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-[#1E222D] to-transparent" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-[#1E222D] to-transparent" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-[#1E222D] to-transparent" />
        </div>

        <Experience />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-[#1E222D] to-transparent" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
