import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash, ExternalLink, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

const commands = [
  ...navLinks.map((l) => ({
    id: l.href,
    label: `Navigate to ${l.label}`,
    category: 'Navigation',
    action: () => {
      const el = document.querySelector(l.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    icon: <Hash size={14} />,
  })),
  {
    id: 'resume',
    label: 'Download Resume',
    category: 'Actions',
    action: () => window.open(siteConfig.resumeUrl, '_blank'),
    icon: <ExternalLink size={14} />,
  },
  {
    id: 'github',
    label: 'Open GitHub Profile',
    category: 'External',
    action: () => window.open('https://github.com/utsav-18', '_blank'),
    icon: <ExternalLink size={14} />,
  },
  {
    id: 'linkedin',
    label: 'Open LinkedIn Profile',
    category: 'External',
    action: () => window.open('https://www.linkedin.com/in/utsav-raj-324b2b2a2/', '_blank'),
    icon: <ExternalLink size={14} />,
  },
  {
    id: 'email',
    label: 'Send an Email',
    category: 'Actions',
    action: () => window.open('mailto:utsavrajdocx@gmail.com'),
    icon: <ExternalLink size={14} />,
  },
];

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      window.setTimeout(() => {
        setQuery('');
        setSelected(0);
        inputRef.current?.focus();
      }, 50);
    }
  }, [open]);

  const run = useCallback((i: number) => {
    filtered[i]?.action();
    onClose();
  }, [filtered, onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, Math.max(filtered.length - 1, 0))); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
      if (e.key === 'Enter') { e.preventDefault(); run(selected); }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, selected, filtered, run, onClose]);

  const updateQuery = (value: string) => {
    setQuery(value);
    setSelected(0);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[151] w-full max-w-lg"
            role="dialog"
            aria-label="Command palette"
            aria-modal="true"
          >
            <div className="glass-strong rounded-2xl border border-surface-border overflow-hidden shadow-card-hover">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-surface-border">
                <Search size={16} className="text-text-muted shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => updateQuery(e.target.value)}
                  placeholder="Search commands, navigate sections..."
                  className="flex-1 bg-transparent text-text-primary placeholder:text-text-muted text-sm outline-none"
                  aria-label="Search commands"
                />
                <button onClick={onClose} className="text-text-muted hover:text-text-primary transition-colors p-1">
                  <X size={14} />
                </button>
              </div>
              {/* Results */}
              <div className="max-h-72 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="text-text-muted text-sm text-center py-6">No commands found</p>
                ) : (
                  filtered.map((cmd, i) => (
                    <motion.button
                      key={cmd.id}
                      onClick={() => run(i)}
                      onMouseEnter={() => setSelected(i)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${
                        selected === i ? 'bg-surface-hover text-text-primary' : 'text-text-secondary hover:text-text-primary'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <span className="text-accent-primary/70">{cmd.icon}</span>
                      <span className="flex-1">{cmd.label}</span>
                      <span className="text-xs text-text-muted bg-surface px-2 py-0.5 rounded-md">{cmd.category}</span>
                    </motion.button>
                  ))
                )}
              </div>
              {/* Footer */}
              <div className="px-4 py-2 border-t border-surface-border flex items-center gap-4 text-xs text-text-muted">
                <span><kbd className="font-mono px-1.5 py-0.5 rounded bg-surface border border-surface-border">↑↓</kbd> navigate</span>
                <span><kbd className="font-mono px-1.5 py-0.5 rounded bg-surface border border-surface-border">↵</kbd> select</span>
                <span><kbd className="font-mono px-1.5 py-0.5 rounded bg-surface border border-surface-border">Esc</kbd> close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
