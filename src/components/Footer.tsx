import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(formatter.format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-[#1E222D] bg-white/50 dark:bg-[#060709] py-12 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand & Live status */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6 text-center sm:text-left">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-display font-extrabold text-xl tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1 group"
          >
            <span>MS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          </a>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Tamil Nadu, IN</span>
            {localTime && <span className="text-zinc-400 dark:text-zinc-500">• {localTime} IST</span>}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono text-center">
          © {new Date().getFullYear()} Manikandan S. Built with React & Spring Boot.
        </p>

        {/* Socials & Scroll Top */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: import.meta.env.VITE_GITHUB_URL, label: 'GitHub' },
            { icon: Linkedin, href: import.meta.env.VITE_LINKEDIN_URL, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${import.meta.env.VITE_EMAIL}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
