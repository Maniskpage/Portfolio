import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react";
import { SectionWrapper } from "../components/SectionWrapper";
import emailjs from "@emailjs/browser";

type Status = "idle" | "loading" | "success" | "error";

const SOCIAL = [
  { icon: Github, href: import.meta.env.VITE_GITHUB_URL, label: "GitHub" },
  {
    icon: Linkedin,
    href: import.meta.env.VITE_LINKEDIN_URL,
    label: "LinkedIn",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm font-body text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200";

  return (
    <SectionWrapper id="contact">
      <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
        Contact
      </p>
      <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight mb-4">
        Let's work together
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl leading-relaxed">
        Have a project in mind or just want to chat? My inbox is always open.
        I'll get back to you within 24 hours.
      </p>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-zinc-400 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-zinc-400 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@acme.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-zinc-400 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === "loading" || status === "success"}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-display font-semibold text-sm rounded-xl disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
          >
            <AnimatePresence mode="wait">
              {status === "loading" ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Sending…
                </motion.span>
              ) : status === "success" ? (
                <motion.span
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={16} /> Sent!
                </motion.span>
              ) : status === "error" ? (
                <motion.span
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-red-400"
                >
                  <AlertCircle size={16} /> Failed. Try again.
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Send size={15} /> Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </form>

        {/* Sidebar info */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="font-display font-semibold text-base mb-3 text-zinc-900 dark:text-zinc-100">
              Direct Email
            </h3>
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              className="font-mono text-sm text-accent hover:underline"
            >
              {import.meta.env.VITE_EMAIL}
            </a>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-3 text-zinc-900 dark:text-zinc-100">
              Availability
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Open to full-time roles, freelance projects, and consulting
              engagements.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-zinc-900 dark:text-zinc-100">
              Elsewhere
            </h3>
            <div className="flex flex-col gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
