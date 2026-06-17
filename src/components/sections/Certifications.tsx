import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '@/lib/data';
import { BadgeCheck, ExternalLink } from 'lucide-react';

import { fadeUpVariants } from '@/lib/animations';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-bg-secondary/30" ref={ref} aria-label="Certifications section">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">07.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Certifications</span>
        </motion.div>

        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4"
        >
          Credentials & Certs
        </motion.h2>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-secondary text-lg mb-16 max-w-xl"
        >
          Verified certifications that validate my cloud, web, and development expertise.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              custom={i + 3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              onHoverStart={() => setHovered(cert.id)}
              onHoverEnd={() => setHovered(null)}
              className="group relative glass border border-surface-border rounded-3xl p-6 text-center hover:border-white/15 transition-all duration-400 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-3xl`}
                animate={{ opacity: hovered === cert.id ? 0.05 : 0 }}
                transition={{ duration: 0.4 }}
              />

              {/* Icon */}
              <div className={`relative mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} p-0.5 shadow-glow`}>
                <div className="w-full h-full rounded-[14px] bg-bg-tertiary flex items-center justify-center text-2xl">
                  {cert.icon}
                </div>
                {cert.verified && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <BadgeCheck size={12} className="text-white" />
                  </div>
                )}
              </div>

              <h3 className="font-display text-sm font-bold text-text-primary mb-1 leading-tight">
                {cert.name}
              </h3>
              <p className="text-text-muted text-xs mb-1">{cert.issuer}</p>
              <p className="text-accent-primary text-xs font-mono mb-4">{cert.date}</p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-accent-primary transition-colors"
                >
                  <ExternalLink size={11} />
                  View Credential
                </a>
              )}

              {/* Bottom gradient */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
