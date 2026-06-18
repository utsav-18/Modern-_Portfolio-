import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';
import type { Project } from '@/types';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

const categories = ['All', 'Freelance', 'Full Stack'] as const;

import { fadeUpVariants } from '@/lib/animations';

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      custom={index} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass border border-surface-border rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-500"
      whileHover={{ y: -8 }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image or Gradient header */}
      <div className={`relative h-36 overflow-hidden ${project.image ? '' : `bg-gradient-to-br ${project.gradient}`}`}>
        {project.image ? (
          <motion.img
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <>
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                animate={{ y: hovered ? -4 : 0, scale: hovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="text-5xl filter drop-shadow-lg"
              >
                {project.icon}
              </motion.span>
            </div>
          </>
        )}
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-xl bg-black/30 backdrop-blur-sm text-white/80 border border-white/15">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-xl bg-yellow-500/20 backdrop-blur-sm text-yellow-300 border border-yellow-500/30">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-text-primary mb-1 group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        <p className="text-accent-primary text-xs font-medium mb-3">{project.subtitle}</p>
        <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Project badges */}
        {project.badges && project.badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.badges.map((badge) => (
              <span key={badge} className="px-2 py-0.5 text-xs rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs rounded-lg bg-surface border border-surface-border text-text-muted">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-xs rounded-lg bg-surface border border-surface-border text-text-muted">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm transition-colors"
            aria-label={`GitHub for ${project.title}`}
          >
            <GithubIcon size={15} />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-accent-primary hover:text-cyan-300 text-sm font-medium transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
          <div className="ml-auto">
            <motion.div
              animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-accent-primary"
            >
              <ArrowUpRight size={16} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient glow */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`}
        animate={{ opacity: hovered ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref} aria-label="Projects section">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">06.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Projects</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-2"
            >
              Things I've Built
            </motion.h2>
            <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="text-text-secondary text-lg max-w-xl"
            >
              Freelance and full-stack projects delivered for real clients.
            </motion.p>
          </div>

          {/* Filter tabs */}
          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-accent-primary text-white shadow-glow'
                    : 'glass border border-surface-border text-text-secondary hover:text-text-primary hover:border-cyan-500/30'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div custom={12} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/utsav-18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-surface-border rounded-2xl text-text-secondary hover:text-text-primary hover:border-cyan-500/30 transition-all duration-300 text-sm font-medium group"
            whileHover={{ y: -2 }}
          >
            <GithubIcon size={16} />
            View all projects on GitHub
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
