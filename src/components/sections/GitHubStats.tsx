import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { fadeUpVariants } from '@/lib/animations';

const GITHUB_USER = 'utsav-18';

export default function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="github-stats" className="section-padding relative overflow-hidden bg-bg-secondary/30" ref={ref} aria-label="GitHub stats section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">09.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">GitHub Activity</span>
        </motion.div>

        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4"
        >
          Code in the Wild
        </motion.h2>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-secondary text-lg mb-16 max-w-xl"
        >
          My open-source activity and coding consistency on GitHub.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats card */}
          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="glass border border-surface-border rounded-3xl p-2 overflow-hidden hover:border-white/15 transition-all duration-300"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=transparent&hide_border=true&text_color=c4c4d8&title_color=22d3ee&icon_color=34d399&bg_color=00000000&count_private=true`}
              alt="GitHub Stats"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Top languages */}
          <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="glass border border-surface-border rounded-3xl p-2 overflow-hidden hover:border-white/15 transition-all duration-300"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=transparent&hide_border=true&text_color=c4c4d8&title_color=22d3ee&icon_color=34d399&bg_color=00000000&langs_count=8`}
              alt="Top Languages"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Streak */}
          <motion.div custom={5} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="glass border border-surface-border rounded-3xl p-2 overflow-hidden hover:border-white/15 transition-all duration-300 lg:col-span-2"
          >
            <img
              src={`https://streak-stats.demolab.com/?user=${GITHUB_USER}&theme=transparent&hide_border=true&stroke=22d3ee&ring=34d399&fire=06b6d4&currStreakLabel=22d3ee&sideLabels=c4c4d8&dates=8a8aa0&background=00000000`}
              alt="GitHub Streak"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Profile CTA */}
        <motion.div custom={6} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mt-8 text-center"
        >
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary/10 border border-accent-primary/30 text-accent-primary hover:bg-accent-primary hover:text-white rounded-2xl text-sm font-semibold transition-all duration-300"
          >
            View Full GitHub Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
