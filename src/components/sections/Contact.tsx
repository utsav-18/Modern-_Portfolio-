import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig, socials } from '@/lib/data';
import { Mail, Send, Loader2, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';

const iconMap: Record<string, React.ReactNode> = {
  github:   <GithubIcon size={20} />,
  linkedin: <LinkedinIcon size={20} />,
  mail:     <Mail size={20} />,
};

import { fadeUpVariants } from '@/lib/animations';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending — replace with real email integration (EmailJS, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('sent');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-bg-secondary/30" ref={ref} aria-label="Contact section">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">11.</span>
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
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 size={56} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setStatus('idle'); setFormState({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-6 px-5 py-2 glass border border-surface-border rounded-xl text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                    <label htmlFor="contact-subject" className="block text-text-secondary text-xs font-medium mb-2 uppercase tracking-wider">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      placeholder="What's this about?"
                      required
                      className={`w-full bg-bg-tertiary border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted text-sm outline-none transition-all duration-200 ${
                        focused === 'subject' ? 'border-cyan-500/60 shadow-glow' : 'border-surface-border'
                      }`}
                    />
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
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent-primary hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: status !== 'sending' ? 1.01 : 1, y: status !== 'sending' ? -1 : 0 }}
                    whileTap={{ scale: status !== 'sending' ? 0.98 : 1 }}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email directly.</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
