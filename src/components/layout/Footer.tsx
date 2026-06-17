import { Mail, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { motion } from 'framer-motion';
import { socials, navLinks } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={16} />,
  linkedin: <LinkedinIcon size={16} />,
  mail: <Mail size={16} />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-surface-border bg-bg-secondary/50 backdrop-blur-sm" role="contentinfo">
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      {/* Bottom mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl text-text-primary mb-3 group inline-flex items-center gap-2">
              <span className="gradient-text">U</span>tsav<span className="text-accent-primary">.</span>
              <Sparkles size={14} className="text-accent-primary/50 group-hover:text-accent-primary transition-colors" />
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Building scalable web apps, cloud solutions, and AI products. Open to exciting opportunities.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-emerald-400 font-medium">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-text-muted hover:text-text-primary text-sm transition-colors text-left py-1 flex items-center gap-1 group"
                >
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target={s.icon !== 'mail' ? '_blank' : undefined}
                  rel={s.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-text-muted hover:text-text-primary text-sm transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-8 h-8 rounded-lg glass-strong border border-surface-border flex items-center justify-center text-accent-primary group-hover:bg-accent-glow transition-all duration-300 group-hover:shadow-glow">
                    {iconMap[s.icon]}
                  </span>
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            &copy; {year} Utsav Raj. Crafted with
            <Heart size={12} className="text-red-400 fill-red-400 mx-0.5" />
            using React & Framer Motion.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-text-muted text-xs font-mono">
              v1.0.0
            </p>
            <div className="h-3 w-px bg-surface-border" />
            <p className="text-text-muted text-xs font-mono">
              <span className="text-accent-primary">utsavraj.dev</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
