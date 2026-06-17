import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';
import { fadeUpVariants } from '@/lib/animations';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-bg-secondary/30" ref={ref} aria-label="Experience section">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">05.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Experience</span>
        </motion.div>
        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Work &amp; Growth
        </motion.h2>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-secondary text-lg mb-16 max-w-xl">
          Freelance work, continuous learning, and hands-on project building.
        </motion.p>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-emerald-500/20 to-transparent md:-translate-x-px" />
          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div key={exp.id} custom={i + 3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full bg-accent-primary border-2 border-bg-primary md:-translate-x-1.5 shadow-glow z-10" />
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="group glass border border-surface-border rounded-3xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.color} p-0.5 shrink-0`}>
                        <div className="w-full h-full rounded-[14px] bg-bg-tertiary flex items-center justify-center text-xl">
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-bold text-text-primary leading-tight">{exp.role}</h3>
                        <p className="text-text-secondary text-sm mt-0.5">{exp.company}</p>
                        <span className="inline-block text-xs font-mono text-accent-primary mt-1">{exp.duration}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((point, pi) => (
                        <li key={pi} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed">
                          <CheckCircle2 size={14} className="text-accent-primary mt-0.5 shrink-0 opacity-70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-surface border border-surface-border text-text-secondary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
