import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { Quote, Star } from 'lucide-react';

import { fadeUpVariants } from '@/lib/animations';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref} aria-label="Testimonials section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">09.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Testimonials</span>
        </motion.div>

        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4"
        >
          Freelance Client Testimonials
        </motion.h2>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-secondary text-lg mb-6 max-w-2xl"
        >
          Feedback focused on clear communication, responsive design, and a smooth handoff.
        </motion.p>
        <motion.p custom={3} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-text-muted text-xs uppercase tracking-widest mb-10"
        >
          Sample placeholder testimonials
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              custom={4 + index}
              variants={fadeUpVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group relative glass-card rounded-3xl p-7 md:p-8 overflow-hidden"
            >
              <Quote size={42} className="absolute top-6 right-6 text-cyan-500/10" aria-hidden="true" />
              <div className="flex items-center gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <blockquote className="relative text-text-primary leading-relaxed mb-7">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-5 border-t border-surface-border">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-cyan-500/90 to-emerald-600/90 flex items-center justify-center text-white font-bold font-display">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-text-primary">{testimonial.name}</div>
                  <div className="text-text-muted text-sm leading-snug">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
