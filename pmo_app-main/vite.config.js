import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'dist',
    sourcemap: false
  },

  define: {
    'import.meta.env.VITE_BACKEND_URL': JSON.stringify(
      process.env.VITE_BACKEND_URL || 'http://backend.thetadynamics.io/api'
    )
  }
})