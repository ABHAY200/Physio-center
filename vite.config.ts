import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages at root: https://<user>.github.io/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
