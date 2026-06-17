import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

import { fadeUpVariants } from '@/lib/animations';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };
  const prev = () => { setDirection(-1); setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDirection(1); setCurrent((i) => (i + 1) % testimonials.length); };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref} aria-label="Testimonials section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex items-center gap-3 mb-4">
          <span className="text-accent-primary font-mono text-sm font-medium">10.</span>
          <div className="h-px w-12 bg-accent-primary/40" />
          <span className="text-text-muted text-sm font-medium uppercase tracking-widest">Testimonials</span>
        </motion.div>

        <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-16 text-center"
        >
          What People Say
        </motion.h2>

        {/* Carousel */}
        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="relative glass border border-surface-border rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Quote icon */}
            <Quote size={48} className="absolute top-8 left-8 text-cyan-500/15" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-text-primary text-lg md:text-xl leading-relaxed font-medium mb-8">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center text-white font-bold font-display text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">{t.name}</div>
                    <div className="text-text-muted text-sm">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-10 h-10 rounded-xl glass border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-cyan-500/40 transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-accent-primary' : 'w-2 h-2 bg-surface-border hover:bg-text-muted'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-10 h-10 rounded-xl glass border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-cyan-500/40 transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
