import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import autoExternal from 'rollup-plugin-auto-external';
import vue2 from '@vitejs/plugin-vue2'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    autoExternal(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'vue2-compiled',
    },
    minify: false,
  }
})
