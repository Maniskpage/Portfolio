import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <main>
        <Hero />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <About />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <Skills />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <Projects />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <Experience />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
