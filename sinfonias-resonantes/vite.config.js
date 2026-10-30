import { defineConfig } from 'vite';

export default defineConfig({
  // En GitHub Pages el sitio vive en /<repositorio>/; el workflow pasa BASE_PATH.
  base: process.env.BASE_PATH || '/',
  server: { port: 5173, open: false },
  // three.js ocupa la mayor parte del paquete; se sirve como un único bloque.
  build: { target: 'es2020', sourcemap: false, chunkSizeWarningLimit: 800 },
});
