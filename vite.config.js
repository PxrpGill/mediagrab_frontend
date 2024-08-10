import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
      globalModulePaths: [/global/],
    },
    postcss: resolve(__dirname, './postcss.config.js'),
  },
  build: {
    minify: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
