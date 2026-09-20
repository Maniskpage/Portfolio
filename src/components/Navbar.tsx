import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact'];

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTIONS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-8 pt-4 pointer-events-none"
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-3 ${
            scrolled
              ? 'glass-nav shadow-lg shadow-black/5 dark:shadow-black/40'
              : 'bg-white/60 dark:bg-[#08090A]/60 backdrop-blur-md border border-zinc-200/50 dark:border-white/5'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group font-display font-extrabold text-lg sm:text-xl tracking-tight flex items-center gap-1 text-zinc-900 dark:text-zinc-100"
          >
            <span>MS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = active === id;

              return (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className={`relative px-4 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-zinc-950 dark:text-zinc-900 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-accent rounded-lg shadow-cyan-glow-sm z-0"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle + Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isDark ? 'dark-sun' : 'light-moon'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {isDark ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => handleNav('#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-accent hover:text-zinc-950 dark:hover:bg-accent dark:hover:text-zinc-950 transition-all cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-30 p-5 rounded-2xl glass-nav md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = active === id;
                return (
                  <button
                    key={label}
                    onClick={() => handleNav(href)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-mono transition-colors text-left ${
                      isActive
                        ? 'bg-accent/15 text-accent font-semibold'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                    }`}
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={14} className="opacity-60" />
                  </button>
                );
              })}

              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 w-full flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-mono font-semibold bg-accent text-zinc-950 shadow-sm"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={14} />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
