import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skills } from '@/lib/data';
import type { Skill } from '@/types';
import { fadeUpVariants, fadeUpFast, easeSmooth } from '@/lib/animations';

const categories: Skill['category'][] = ['Languages', 'Frontend', 'Backend', 'Database', 'Cloud', 'Tools'];

const categoryColors: Record<string, string> = {
  Languages: 'from-violet-500 to-purple-500',
  Frontend:  'from-cyan-500 to-emerald-500',
  Backend:   'from-green-500 to-emerald-500',
  Database:  'from-amber-500 to-orange-500',
  Cloud:     'from-blue-500 to-cyan-500',
  Tools:     'from-rose-500 to-pink-500',
};

const categoryBg: Record<string, string> = {
  Languages: 'rgba(139,92,246,0.1)',
  Frontend:  'rgba(34,211,238,0.08)',
  Backend:   'rgba(16,185,129,0.1)',
  Database:  'rgba(245,158,11,0.1)',
  Cloud:     'rgba(6,182,212,0.1)',
  Tools:     'rgba(244,63,94,0.1)',
};

function SkillCard({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      custom={index} variants={fadeUpFast} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass border border-surface-border rounded-2xl p-4 hover:border-cyan-500/30 transition-all duration-300 group cursor-default"
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-text-primary text-sm font-semibold">{skill.name}</span>
        </div>
        <span className="text-text-muted text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: easeSmooth }}
          style={{ boxShadow: hovered ? `0 0 12px rgba(34,211,238,0.35)` : 'none' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | 'All'>('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-bg-secondary/30" ref={ref} aria-label="Skills section">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">02.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Skills</span>
        </motion.div>
        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Technical Arsenal
        </motion.h2>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-secondary text-lg mb-12 max-w-xl">
          Technologies I use to bring ideas to life across the full stack.
        </motion.p>

        {/* Category filter */}
        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-2 mb-10">
          {(['All', ...categories] as const).map((cat) => (
            <motion.button key={cat}
              onClick={() => setActiveCategory(cat as Skill['category'] | 'All')}
              className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat ? 'text-white' : 'glass border border-surface-border text-text-secondary hover:text-text-primary hover:border-cyan-500/30'
              }`}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              {activeCategory === cat && (
                <motion.span layoutId="skill-tab"
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cat === 'All' ? 'from-cyan-500 to-emerald-500' : categoryColors[cat]}`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary */}
        <motion.div custom={10} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {categories.map((cat) => {
            const count = skills.filter((s) => s.category === cat).length;
            return (
              <motion.button key={cat}
                onClick={() => setActiveCategory(cat)}
                className="glass border border-surface-border rounded-2xl p-4 text-center hover:border-cyan-500/30 transition-all"
                whileHover={{ y: -3 }}
                style={{ background: activeCategory === cat ? categoryBg[cat] : '' }}>
                <div className={`text-lg font-bold font-display bg-gradient-to-r ${categoryColors[cat]} bg-clip-text text-transparent`}>{count}</div>
                <div className="text-text-muted text-xs mt-0.5">{cat}</div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
