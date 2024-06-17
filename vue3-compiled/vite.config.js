import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import autoExternal from 'rollup-plugin-auto-external';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoExternal()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'vue3-compiled',
    },
    minify: false,
  }
})
