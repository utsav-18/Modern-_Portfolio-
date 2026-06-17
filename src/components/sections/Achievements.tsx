import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '@/lib/data';
import { Trophy, Award, BadgeCheck, Star } from 'lucide-react';
import { fadeUpVariants } from '@/lib/animations';

const typeIcons: Record<string, React.ReactNode> = {
  award: <Trophy size={20} />,
  certification: <BadgeCheck size={20} />,
  recognition: <Star size={20} />,
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" ref={ref} aria-label="Achievements section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">04.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Achievements</span>
        </motion.div>
        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Milestones &amp; Wins
        </motion.h2>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-secondary text-lg mb-16 max-w-xl">
          Hackathon wins, certifications, and recognitions that mark my journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div key={achievement.id}
              custom={i + 3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="group relative glass border border-surface-border rounded-3xl p-8 hover:border-white/15 transition-all duration-500 overflow-hidden card-shine"
              whileHover={{ y: -6, scale: 1.01 }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} p-0.5 shadow-glow flex-shrink-0`}>
                    <div className="w-full h-full rounded-[14px] bg-bg-tertiary flex items-center justify-center text-2xl">
                      {achievement.icon}
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full text-white/80 mb-2"
                      style={{ background: 'rgba(255,255,255,0.06)' }}>
                      {typeIcons[achievement.type]}
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </span>
                    <div className="text-text-muted text-xs font-mono">{achievement.date}</div>
                  </div>
                </div>
                {achievement.highlight && (
                  <motion.div animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-yellow-400 opacity-80">
                    <Trophy size={18} />
                  </motion.div>
                )}
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-3 leading-tight">{achievement.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{achievement.description}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        <motion.div custom={achievements.length + 3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass border border-surface-border rounded-2xl text-text-secondary text-sm">
            <Award size={16} className="text-accent-primary" />
            More achievements being earned every day...
          </div>
        </motion.div>
      </div>
    </section>
  );
}
