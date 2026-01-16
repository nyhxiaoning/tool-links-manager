import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/tool-links',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'pinia'],
          'dexie': ['dexie']
        }
      }
    }
  },
  server: {
    port: 3008,
    open: true
  }
})
