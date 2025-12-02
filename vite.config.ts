import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/66c427ce-8c2d-4c9e-b468-824fe8c190f1/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5229,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5229,
    },
  },
})
