import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  css: resolve(__dirname, './postcss.config.js'),
  build: {
    minify: true,
  }
})
