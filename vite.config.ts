import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import sassDts from 'vite-plugin-sass-dts';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
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
    sassDts({ enabledMode: ['development', 'production'] }),
    react(),
    tsconfigPaths(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap',
    ]),
  ],
  clearScreen: false,
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'effector-vendor': [
            'effector',
            'effector-react',
            '@effector/reflect',
            'effector-react-form',
          ],
          'popper-vendor': ['react-popper', '@popperjs/core'],
          'router-vendor': ['atomic-router', 'atomic-router-react', 'history'],
          'supabase-vendor': ['@supabase/supabase-js'],
          'other-vendor': ['yup', 'uuid', 'clsx'],
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
