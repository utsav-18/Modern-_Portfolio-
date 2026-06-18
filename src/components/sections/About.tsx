import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig, timeline } from '@/lib/data';
import { MapPin, GraduationCap, Target } from 'lucide-react';
import { fadeUpVariants } from '@/lib/animations';

const stats = [
  { value: '8+', label: 'Projects Built' },
  { value: '8', label: 'Certifications' },
  { value: '120+', label: 'LeetCode Problems' },
  { value: '8.82', label: 'CGPA' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref} aria-label="About section">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">01.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">About Me</span>
        </motion.div>

        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-16">
          Who I Am
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="text-text-secondary text-lg leading-relaxed mb-6">
              {siteConfig.bio}
            </motion.p>

            <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <GraduationCap size={16} className="text-accent-primary shrink-0" />
                B.Tech Information Technology · Cloud Computing · Alliance University · CGPA 8.82
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <MapPin size={16} className="text-accent-primary shrink-0" />
                India · Open to Remote &amp; Relocation
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <Target size={16} className="text-accent-primary shrink-0" />
                Goal: Freelance Full Stack Developer at an innovative company
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}
                  className="glass border border-surface-border rounded-2xl p-4 text-center hover:border-cyan-500/30 transition-colors group">
                  <div className="font-display text-2xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Timeline */}
          <div>
            <motion.h3 custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="font-display text-xl font-bold text-text-primary mb-8">
              Learning Journey
            </motion.h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-emerald-500/30 to-transparent" />
              <div className="flex flex-col gap-0">
                {timeline.map((item, i) => (
                  <motion.div key={item.year} custom={i + 3} variants={fadeUpVariants}
                    initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    className="relative pl-16 pb-8 last:pb-0 group">
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl glass border border-surface-border flex items-center justify-center text-lg transition-all duration-300 group-hover:border-cyan-500/40 group-hover:bg-surface-hover">
                      {item.icon}
                    </div>
                    <div className="glass border border-surface-border rounded-2xl p-4 hover:border-cyan-500/30 transition-all duration-300 hover:bg-surface-hover">
                      <span className="text-accent-primary font-mono text-xs font-bold">{item.year}</span>
                      <p className="text-text-secondary text-sm mt-1 leading-relaxed">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
