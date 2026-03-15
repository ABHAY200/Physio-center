import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages project: https://<user>.github.io/<repo>/
export default defineConfig({
  base: '/Physio-center/',
  plugins: [react()],
})
