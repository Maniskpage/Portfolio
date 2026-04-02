import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-xl tracking-tight">
          MS<span className="text-accent">.</span>
        </p>

        <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
          © {new Date().getFullYear()} Manikandan S. Built with React & Spring Boot
        </p>

        <div className="flex items-center gap-4">
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
              className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
