import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let rafId = 0;
    let lastFrame = 0;

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.08,
      vy: -0.04 - Math.random() * 0.08,
      size: Math.random() * 1.4 + 0.8,
      alpha: Math.random() * 0.24 + 0.12,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = reduceMotion ? 0 : Math.min(38, Math.max(18, Math.floor((width * height) / 42000)));
      particles.length = 0;
      for (let i = 0; i < count; i += 1) particles.push(createParticle());
    };

    const draw = (time: number) => {
      rafId = requestAnimationFrame(draw);
      if (time - lastFrame < 33) return;
      lastFrame = time;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 236, 224, ${p.alpha})`;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.28)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    resize();
    rafId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="ambient-stage" aria-hidden="true">
      <div className="ambient-glow ambient-glow-a" />
      <div className="ambient-glow ambient-glow-b" />
      <div className="ambient-grid" />
      <canvas ref={canvasRef} className="ambient-canvas" />
    </div>
  );
}
