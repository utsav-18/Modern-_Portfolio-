import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
          if (id.includes('framer-motion') || id.includes('gsap')) {
            return 'animations';
          }
          if (id.includes('react-router-dom')) {
            return 'router';
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['framer-motion', 'gsap', 'lenis'],
  },
});
