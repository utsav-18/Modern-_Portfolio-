import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');
  const emailJsEnv = (keys: string[]) => keys.map((key) => env[key]).find(Boolean) ?? '';

  return {
    root: __dirname,
    define: {
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(emailJsEnv([
        'VITE_EMAILJS_PUBLIC_KEY',
        'PUBLIC_KEY',
        'Public_Key',
      ])),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(emailJsEnv([
        'VITE_EMAILJS_SERVICE_ID',
        'SERVICE_ID',
        'Service_ID',
      ])),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(emailJsEnv([
        'VITE_EMAILJS_TEMPLATE_ID',
        'TEMPLATE_ID',
        'Template_ID',
      ])),
    },
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
  };
});
