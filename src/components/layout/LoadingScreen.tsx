import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particlesElement = particlesRef.current;

    // Create floating particles
    if (particlesElement) {
      particlesElement.replaceChildren();
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-cyan-500/20';
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${Math.random() * 4 + 3}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particlesElement.appendChild(particle);
      }
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.02,
          filter: 'blur(8px)',
          duration: 0.7,
          ease: 'power2.inOut',
          onComplete,
        });
      },
    });

    tl.set(nameRef.current, { opacity: 0, y: 40, scale: 0.95 })
      .to(nameRef.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }, 0.2)
      .set(subtitleRef.current, { opacity: 0, y: 20 }, '-=0.4')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .to(barRef.current, { width: '100%', duration: 2, ease: 'power2.inOut' }, 0.5)
      .to({}, { duration: 0.5 });

    // Animate counter
    let count = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 5) + 2;
      count += increment;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
      }
      if (progressRef.current) {
        progressRef.current.textContent = `${count}%`;
      }
    }, 50);

    return () => {
      clearInterval(interval);
      tl.kill();
      particlesElement?.replaceChildren();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg-primary"
      aria-label="Loading portfolio"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Center content */}
      <div ref={nameRef} className="text-center relative">
        {/* Glow behind name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-2 relative">
          <span className="gradient-text">Utsav</span>{' '}
          <span className="text-text-primary">Raj</span>
        </div>
        <p ref={subtitleRef} className="text-text-muted text-sm font-mono tracking-[0.3em] uppercase mt-3">
          Portfolio Initializing
        </p>
      </div>

      {/* Progress bar */}
      <div className="mt-12 w-48 md:w-64 relative">
        <div className="h-[2px] bg-surface-border/50 rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full w-0 rounded-full relative"
            style={{ background: 'linear-gradient(90deg, #22d3ee, #34d399, #06b6d4)' }}
          >
            <div className="absolute inset-0 rounded-full blur-sm bg-cyan-400/50" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-text-muted text-xs font-mono">Loading</span>
          <span ref={progressRef} className="text-text-secondary text-xs font-mono">0%</span>
        </div>
      </div>

      {/* Animated rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-cyan-500/10"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            rotate: { duration: 15 + i * 5, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 },
            opacity: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 },
          }}
        />
      ))}

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-cyan-500/20 rounded-tl-xl" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-cyan-500/20 rounded-tr-xl" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-cyan-500/20 rounded-bl-xl" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-cyan-500/20 rounded-br-xl" />
    </div>
  );
}
