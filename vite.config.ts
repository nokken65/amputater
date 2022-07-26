import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    viteCompression({
      algorithm: 'brotliCompress',
      compressionOptions: {
        level: 11,
      },
    }),
    viteCompression({
      algorithm: 'gzip',
    }),
    splitVendorChunkPlugin(),
    react(),
    tsconfigPaths(),
  ],
  clearScreen: false,
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'effector-vendor': ['effector', '@effector/reflect'],
        },
      },
    },
  },
  server: {
    hmr: true,
    host: true,
    port: 3000,
  },
  publicDir: resolve(__dirname, 'public'),
  root: '.',
});
