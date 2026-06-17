import type { Variants, Transition } from 'framer-motion';

// Framer Motion requires ease as a 4-tuple for cubic bezier, or a named string
export const easeSmooth: [number, number, number, number] = [0.4, 0, 0.2, 1];
export const easeSpring: [number, number, number, number] = [0.175, 0.885, 0.32, 1.275];

export const defaultTransition = (delay = 0): Transition => ({
  duration: 0.7,
  ease: easeSmooth,
  delay,
});

/**
 * Staggered fade-up variants — use with `custom={index}` on motion elements.
 * Note: must be cast `as Variants` at call site if TS complains about the function form.
 */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: ((i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeSmooth,
      delay: i * 0.12,
    } satisfies Transition,
  })) as Variants['visible'],
};

export const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: ((i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
      delay: i * 0.08,
    } satisfies Transition,
  })) as Variants['visible'],
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeSmooth },
  },
};
