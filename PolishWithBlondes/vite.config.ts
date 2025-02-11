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
  //  define: {
  //   'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
  // },
  //leaving this just in case the youtube component doesnt work in gh-pages branch
});
