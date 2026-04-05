import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production: relative `./` so CSS/JS load on both github.io/Website and custom-domain root.
// React basename is set at runtime in `getRouterBasename()` for `/Website` vs `/`.
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? './' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
