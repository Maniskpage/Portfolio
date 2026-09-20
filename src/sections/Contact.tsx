import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Github, Linkedin, Copy, Check, Mail, Sparkles } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { SectionHeading } from '../components/SectionHeading';
import { SpotlightCard } from '../components/SpotlightCard';
import emailjs from '@emailjs/browser';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);

  const emailAddress = import.meta.env.VITE_EMAIL || 'manikandan.dev@example.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4500);
    }
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-zinc-50/80 dark:bg-[#08090A]/90 border border-zinc-200 dark:border-[#1E222D] rounded-xl text-sm font-body text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200';

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        tag="Get In Touch"
        title="Let's build something remarkable"
        description="Whether you have an engineering role, a software project, or a technical inquiry — my inbox is open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Info Column (Span 5 on lg) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card with 1-Click Copy */}
          <SpotlightCard className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-accent/10 text-accent">
                <Mail size={18} />
              </span>
              <span className="text-xs font-mono text-zinc-400">Direct Email</span>
            </div>

            <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">
              Start a Conversation
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              Feel free to email me directly or copy to your clipboard:
            </p>

            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80">
              <span className="font-mono text-xs text-zinc-900 dark:text-zinc-100 truncate mr-2">
                {emailAddress}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-accent text-zinc-950 hover:bg-accent-hover transition-colors shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={13} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </SpotlightCard>

          {/* Availability Card */}
          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100">
                Current Availability
              </h4>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Currently working as a <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Full Stack Engineer at Jaivexa</span>. Open to technical discussions, consulting, and high-impact engineering opportunities.
            </p>
          </SpotlightCard>

          {/* Social Profiles */}
          <SpotlightCard className="p-6">
            <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100 mb-4">
              Social Profiles
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-accent dark:hover:text-accent border border-zinc-200/60 dark:border-zinc-700/60 transition-all"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono">
                  <Github size={16} />
                  <span>GitHub Repository Profile</span>
                </div>
                <Sparkles size={12} className="opacity-40" />
              </a>

              <a
                href={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-accent dark:hover:text-accent border border-zinc-200/60 dark:border-zinc-700/60 transition-all"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono">
                  <Linkedin size={16} />
                  <span>LinkedIn Professional Network</span>
                </div>
                <Sparkles size={12} className="opacity-40" />
              </a>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Form Column (Span 7 on lg) */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-7 sm:p-8">
            <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-100 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              Fill out the form below and I'll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">
                  Your Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or open role..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-display font-semibold text-sm bg-accent text-zinc-950 hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed shadow-cyan-glow-sm transition-all cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-emerald-950"
                    >
                      <CheckCircle2 size={18} />
                      <span>Message Delivered Successfully!</span>
                    </motion.span>
                  ) : status === 'error' ? (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-950"
                    >
                      <AlertCircle size={18} />
                      <span>Failed to send. Please try again or email directly.</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send size={15} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
