import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://shashwat-r-s.github.io/ (user site), base = '/'
// If deploying to a project repo like /portfolio, change base to '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
