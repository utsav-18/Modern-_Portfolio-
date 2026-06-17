import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isDesktop] = useState(() => !window.matchMedia('(hover: none)').matches);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 250, mass: 0.5 };
  const dotSpring = { damping: 15, stiffness: 400, mass: 0.3 };

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const smoothDotX = useSpring(dotX, dotSpring);
  const smoothDotY = useSpring(dotY, dotSpring);

  useEffect(() => {
    if (!isDesktop) return;
    document.body.classList.add('custom-cursor-active');

    const onMove = (e: MouseEvent) => {
      setIsVisible(true);
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true);
      }
    };
    const onLeave = () => setIsHovering(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
    };
  }, [cursorX, cursorY, dotX, dotY, isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Ring cursor with gradient border */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{ 
          x: smoothX, 
          y: smoothY,
          background: isHovering 
            ? 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)' 
            : 'transparent',
          borderStyle: 'solid',
        }}
        animate={{
          width: isClicking ? 32 : isHovering ? 56 : 40,
          height: isClicking ? 32 : isHovering ? 56 : 40,
          opacity: isVisible ? (isHovering ? 0.8 : 0.6) : 0,
          borderColor: isHovering ? '#6ee7b7' : '#22d3ee',
          borderWidth: isHovering ? 2 : 1.5,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      {/* Dot cursor with glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ 
          x: smoothDotX, 
          y: smoothDotY,
          background: 'linear-gradient(135deg, #22d3ee, #34d399)',
          boxShadow: '0 0 6px rgba(34,211,238,0.45)',
        }}
        animate={{
          width: isClicking ? 5 : isHovering ? 0 : 8,
          height: isClicking ? 5 : isHovering ? 0 : 8,
          opacity: isHovering ? 0 : 1,
          scale: isClicking ? 0.7 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Cursor trail particles are removed to prevent performance issues */}
    </>
  );
}
