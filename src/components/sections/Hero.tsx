import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { siteConfig, socials, heroTitles } from '@/lib/data';
import profileImg from '@/assets/profile-optimized.jpg';

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  mail: <Mail size={18} />,
};

// ── Premium Particle Canvas ──────────────────────────────────────
function ParticleField() {
  return null;
}

// ── Rotating Title ──────────────────────────────────────────────
function RotatingTitle() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroTitles.length), 2800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="h-10 md:h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="block gradient-text font-display font-bold text-3xl md:text-4xl"
        >
          {heroTitles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// ── Premium Magnetic Orb ─────────────────────────────────────────
function MagneticOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (!orbRef.current) return;
    const rect = orbRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.12);
    y.set((e.clientY - cy) * 0.12);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={orbRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="relative mx-auto w-64 h-64 md:w-80 md:h-80"
    >
      {/* Outer glow */}
      <div className="absolute inset-[-50px] rounded-full bg-cyan-500/5 blur-[80px] animate-glow-pulse pointer-events-none" />
      
      {/* Rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-cyan-500/15"
          style={{ margin: -(i * 20) }}
          animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
          transition={{ duration: 12 + i * 4, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      
      {/* Dash ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ margin: -12, border: '1px dashed rgba(34,211,238,0.12)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Avatar area with actual profile image */}
      <div className="absolute inset-0 rounded-full overflow-hidden glass-strong border-2 border-cyan-500/30 shadow-glow-xl flex items-center justify-center">
        <img
          src={profileImg}
          alt="Utsav Raj"
          className="w-full h-full object-cover scale-125"
          loading="eager"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/40 via-transparent to-transparent pointer-events-none" />
      </div>
      
      {/* Premium floating badge */}
      <motion.div
        className="absolute -bottom-3 -right-3 glass-strong border border-emerald-500/30 rounded-2xl px-3 py-1.5 flex items-center gap-1.5 shadow-glow"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">Open to Work</span>
      </motion.div>

      {/* Floating tech icons */}
      <motion.div
        className="absolute -top-2 -left-2 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm shadow-lg"
        animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ⚛️
      </motion.div>
      <motion.div
        className="absolute -bottom-1 -left-1 w-7 h-7 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-xs shadow-lg"
        animate={{ y: [0, 6, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        ☁️
      </motion.div>
    </motion.div>
  );
}

// ── Hero Section (Premium) ───────────────────────────────────────
export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      
      {/* Soft light beams */}
      <div className="absolute top-24 -left-28 h-64 w-[36rem] rotate-[-16deg] bg-gradient-to-r from-transparent via-cyan-400/10 to-emerald-300/6 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-28 -right-32 h-56 w-[34rem] rotate-[14deg] bg-gradient-to-r from-sky-500/8 via-cyan-300/6 to-transparent blur-[84px] pointer-events-none" />
      
      <ParticleField />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-cyan-500/30 text-sm text-cyan-300 font-medium mb-8 group hover:border-cyan-500/50 transition-all duration-300"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles size={14} className="text-cyan-400" />
              </motion.span>
              {siteConfig.roleShort}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-none mb-4"
            >
              <span className="block text-text-primary">Hi, I'm</span>
              <span className="block gradient-text mt-1">
                Utsav Raj
              </span>
            </motion.h1>

            {/* Rotating role */}
            <div className="mb-6">
              <RotatingTitle />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            >
              {siteConfig.tagline}
            </motion.p>

            {/* Premium CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative flex items-center gap-2 px-8 py-4 bg-accent-primary hover:bg-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-glow hover:shadow-glow-lg overflow-hidden"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="hero-view-projects-btn"
              >
                <motion.div
                  className="absolute inset-0 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
                />
                <span className="relative">View Projects</span>
                <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-8 py-4 glass-strong border border-surface-border hover:border-cyan-500/50 text-text-primary font-semibold rounded-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="hero-resume-btn"
              >
                <Download size={16} className="relative transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span className="relative">Resume</span>
              </motion.a>
            </motion.div>

            {/* Premium Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className="text-text-muted text-sm">Find me on</span>
              <div className="h-px w-8 bg-surface-border" />
              <div className="flex items-center gap-2">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.url}
                    target={s.icon !== 'mail' ? '_blank' : undefined}
                    rel={s.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="relative w-10 h-10 rounded-xl glass-strong border border-surface-border flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300 group"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.93 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    <span className="relative">{iconMap[s.icon]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Premium Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            className="flex justify-center"
          >
            <MagneticOrb />
          </motion.div>
        </div>

        {/* Premium scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-[10px] font-mono uppercase tracking-[0.2em]">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-surface-border/50 flex items-start justify-center pt-1.5 bg-bg-tertiary/30 backdrop-blur-sm"
          >
            <motion.div 
              className="w-1 h-2 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
