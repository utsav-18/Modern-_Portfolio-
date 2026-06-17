import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Layout
import LoadingScreen from '@/components/layout/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollProgress from '@/components/layout/ScrollProgress';
import BackToTop from '@/components/layout/BackToTop';
import CommandPalette from '@/components/layout/CommandPalette';
import AmbientBackground from '@/components/layout/AmbientBackground';

// Sections
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Achievements from '@/components/sections/Achievements';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import TechEcosystem from '@/components/sections/TechEcosystem';
import GitHubStats from '@/components/sections/GitHubStats';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;
    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Keyboard shortcut for command palette
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-bg-primary text-text-primary noise">
          <AmbientBackground />

          {/* Global UI chrome */}
          <CustomCursor />
          <ScrollProgress />
          <BackToTop />
          <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />

          {/* Keyboard shortcut hint (shown once) */}
          <div className="fixed bottom-8 left-8 z-50 hidden md:flex items-center gap-2 text-xs text-text-muted opacity-50 hover:opacity-100 transition-opacity">
            <kbd className="font-mono px-1.5 py-0.5 rounded bg-surface border border-surface-border">Ctrl</kbd>
            <kbd className="font-mono px-1.5 py-0.5 rounded bg-surface border border-surface-border">K</kbd>
            <span>Command Palette</span>
          </div>

          <Navbar />

          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Achievements />
            <Experience />
            <Projects />
            <Certifications />
            <TechEcosystem />
            <GitHubStats />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
