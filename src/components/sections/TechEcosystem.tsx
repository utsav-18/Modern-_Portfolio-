import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { techNodes } from '@/lib/data';

import { fadeUpVariants } from '@/lib/animations';

const categoryColors: Record<string, string> = {
  Languages: 'rgba(139,92,246,0.2)',
  Frontend:  'rgba(34,211,238,0.16)',
  Backend:   'rgba(16,185,129,0.2)',
  Database:  'rgba(245,158,11,0.2)',
  Cloud:     'rgba(6,182,212,0.2)',
  Tools:     'rgba(244,63,94,0.2)',
};

export default function TechEcosystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tech-ecosystem" className="section-padding relative overflow-hidden" ref={ref} aria-label="Tech ecosystem section">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">08.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Tech Ecosystem</span>
        </motion.div>

        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4"
        >
          My Tech Universe
        </motion.h2>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-secondary text-lg mb-16 max-w-xl"
        >
          The technologies I work with every day, orbiting around my core expertise.
        </motion.p>

        {/* Interactive node field */}
        <motion.div
          custom={3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="relative glass border border-surface-border rounded-3xl overflow-hidden"
          style={{ height: 420 }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(rgba(34,211,238,0.45) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* Orbital rings */}
          {[200, 140, 90].map((r, i) => (
            <motion.div
              key={r}
              className="absolute border rounded-full border-cyan-500/10"
              style={{
                width: r * 2,
                height: r * 2,
                top: '50%',
                left: '50%',
                marginTop: -r,
                marginLeft: -r,
              }}
              animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
              transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
            />
          ))}

          {/* Center node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center shadow-glow-lg"
            >
              <span className="text-2xl">◆</span>
            </motion.div>
            <p className="text-center text-xs text-text-muted mt-2 font-mono">Core</p>
          </div>

          {/* Tech nodes */}
          {techNodes.map((node, i) => (
            <motion.div
              key={node.name}
              className="absolute group"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.15, zIndex: 20 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center border border-white/10 cursor-pointer transition-all duration-300 group-hover:border-white/25 group-hover:shadow-glow"
                style={{ background: categoryColors[node.category] || 'rgba(34,211,238,0.12)', backdropFilter: 'blur(12px)' }}
              >
                <span className="text-xl">{node.icon}</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium text-text-secondary bg-bg-tertiary border border-surface-border px-2 py-0.5 rounded-lg">
                  {node.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          custom={4} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2 text-xs text-text-muted">
              <div className="w-3 h-3 rounded-full" style={{ background: color.replace('0.2', '0.6') }} />
              {cat}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
