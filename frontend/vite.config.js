import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output build files to 'dist' directory
    rollupOptions: {
      input: 'index.html' // Ensure Vite knows the entry point
    }
  },
  publicDir: 'public', // Keep public assets in 'public' directory
})
