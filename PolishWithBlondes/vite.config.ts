import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Polish-With-Blondes/',
  server: {
    port: 5173,
  },
  css: {
    devSourcemap: true,
  },
});
