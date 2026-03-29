import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: https://brijtechai.github.io/Website/
const repoBase = '/Website/';

// https://vitejs.dev/config/
export default defineConfig({
  base: repoBase,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
