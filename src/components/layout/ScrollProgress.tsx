import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #22d3ee, #34d399, #06b6d4, #22d3ee)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      {/* Glow under bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[99] h-[6px] origin-left opacity-30 blur-[4px] pointer-events-none"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #22d3ee, transparent)',
        }}
      />
      {/* Floating percentage indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.8 }}
        className="fixed top-3 right-4 z-[100] font-mono text-[10px] text-accent-primary/50 uppercase tracking-widest pointer-events-none"
      >
        <motion.span>{Math.round(scrollYProgress.get() * 100)}%</motion.span>
      </motion.div>
    </>
  );
}