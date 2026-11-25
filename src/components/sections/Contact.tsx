import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { siteConfig, socials } from '@/lib/data';
import { Mail, Send, Loader2, CheckCircle2, AlertCircle, MapPin, Clock, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';

const iconMap: Record<string, React.ReactNode> = {
  github:   <GithubIcon size={20} />,
  linkedin: <LinkedinIcon size={20} />,
  mail:     <Mail size={20} />,
};

import { fadeUpVariants } from '@/lib/animations';

const { VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID } = import.meta.env;

if (VITE_EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: VITE_EMAILJS_PUBLIC_KEY });
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    if (status !== 'sent') return;

    const timeoutId = window.setTimeout(() => setStatus('idle'), 4500);
    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error' || status === 'sent' || showSuccessBanner) {
      setStatus('idle');
      setShowSuccessBanner(false);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setShowSuccessBanner(false);
    setErrorMessage('');

    try {
      if (!VITE_EMAILJS_PUBLIC_KEY || !VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS configuration is incomplete. Check the EmailJS environment variables.');
      }

      await emailjs.send(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      });

      setFormState({ name: '', email: '', subject: '', message: '' });
      setStatus('sent');
      setShowSuccessBanner(true);
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error);
      setErrorMessage('Your email could not be sent. Please try again or email me directly at');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-bg-secondary/30" ref={ref} aria-label="Contact section">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">10.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Contact</span>
        </motion.div>

        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4"
        >
          Let's Build Something
        </motion.h2>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-secondary text-lg mb-16 max-w-xl"
        >
          Whether it's a project collaboration, internship, or just a chat — my inbox is always open.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact cards */}
            <div className="glass border border-surface-border rounded-3xl p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-text-muted text-xs mb-0.5">Email</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-text-primary text-sm font-medium hover:text-accent-primary transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-text-muted text-xs mb-0.5">Location</div>
                  <span className="text-text-primary text-sm font-medium">India · Remote Ready</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-text-muted text-xs mb-0.5">Availability</div>
                  <span className="text-emerald-400 text-sm font-medium">Open to Opportunities</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass border border-surface-border rounded-3xl p-6">
              <p className="text-text-muted text-xs uppercase tracking-widest font-semibold mb-4">Find me on</p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.url}
                    target={s.icon !== 'mail' ? '_blank' : undefined}
                    rel={s.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="w-8 h-8 rounded-lg glass border border-surface-border flex items-center justify-center text-accent-primary group-hover:bg-accent-glow transition-colors">
                      {iconMap[s.icon]}
                    </span>
                    <span className="text-sm">{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="glass border border-surface-border rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                    ].map((field) => (
                      <div key={field.name} className="relative">
                        <label htmlFor={`contact-${field.name}`} className="block text-text-secondary text-xs font-medium mb-2 uppercase tracking-wider">
                          {field.label}
                        </label>
                        <input
                          id={`contact-${field.name}`}
                          type={field.type}
                          name={field.name}
                          value={formState[field.name as keyof typeof formState]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                          placeholder={field.placeholder}
                          required
                          className={`w-full bg-bg-tertiary border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted text-sm outline-none transition-all duration-200 ${
                            focused === field.name ? 'border-cyan-500/60 shadow-glow' : 'border-surface-border'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-text-secondary text-xs font-medium mb-2 uppercase tracking-wider">
                      What do you need help with?
                    </label>
                    <div className="relative">
                      <select
                      id="contact-subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full appearance-none bg-bg-tertiary border rounded-xl px-4 py-3 pr-10 text-text-primary text-sm outline-none transition-all duration-200 cursor-pointer ${
                        focused === 'subject' ? 'border-cyan-500/60 shadow-glow' : 'border-surface-border'
                      }`}
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="Website design and development">Website design and development</option>
                        <option value="Full-stack web application">Full-stack web application</option>
                        <option value="Mobile app development">Mobile app development</option>
                        <option value="UI/UX design and prototyping">UI/UX design and prototyping</option>
                        <option value="Backend APIs and integrations">Backend APIs and integrations</option>
                        <option value="E-commerce and payment integration">E-commerce and payment integration</option>
                        <option value="Bug fixing and maintenance">Bug fixing and maintenance</option>
                        <option value="Performance, SEO, and accessibility">Performance, SEO, and accessibility</option>
                        <option value="Cloud deployment and DevOps">Cloud deployment and DevOps</option>
                        <option value="Database design and optimization">Database design and optimization</option>
                        <option value="Automation and custom software">Automation and custom software</option>
                        <option value="Other or not sure yet">Other or not sure yet</option>
                      </select>
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-text-secondary text-xs font-medium mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className={`w-full bg-bg-tertiary border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted text-sm outline-none transition-all duration-200 resize-none ${
                        focused === 'message' ? 'border-cyan-500/60 shadow-glow' : 'border-surface-border'
                      }`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${
                      status === 'sent'
                        ? 'bg-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.2)]'
                        : 'bg-accent-primary hover:bg-cyan-500 shadow-glow'
                    }`}
                    whileHover={{ scale: status !== 'sending' ? 1.01 : 1, y: status !== 'sending' ? -1 : 0 }}
                    whileTap={{ scale: status !== 'sending' ? 0.98 : 1 }}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-white/80" />
                        Sending Email...
                      </>
                    ) : status === 'sent' ? (
                      <>
                        <CheckCircle2 size={16} />
                        Email Sent ✓
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Email
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {showSuccessBanner && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                        className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
                      >
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-400" />
                        <p className="min-w-0 flex-1 text-sm leading-relaxed text-text-secondary">
                          Your email has been sent! Thanks for reaching out — I'll get back to you soon.
                        </p>
                        <button
                          type="button"
                          onClick={() => setShowSuccessBanner(false)}
                          aria-label="Dismiss success message"
                          className="shrink-0 rounded-lg px-2 py-0.5 text-xl leading-none text-text-muted transition-colors hover:bg-surface-hover hover:text-text-primary"
                        >
                          ×
                        </button>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        role="alert"
                        aria-atomic="true"
                        className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
                      >
                        <AlertCircle size={20} className="mt-0.5 shrink-0 text-red-400" />
                        <p className="min-w-0 flex-1 text-sm leading-relaxed text-text-secondary">
                          {errorMessage}{' '}
                          <a href="mailto:utsavrajdocx@gmail.com" className="font-medium text-cyan-300 underline decoration-cyan-300/40 underline-offset-2 hover:text-cyan-200">
                            utsavrajdocx@gmail.com
                          </a>
                          .
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
