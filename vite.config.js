import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: /\.[jt]sx?$/
    })
  ],
  base: '/f8-react-day33/',
 optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },

  
  esbuild: {
    jsx: 'automatic'
  }
})
