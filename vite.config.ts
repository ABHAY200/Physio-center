import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// For GitHub Pages: repo is served at https://<user>.github.io/<repo>/
// Set base to your repo name (e.g. '/physiocenter/'). VITE_BASE_PATH is set in CI.
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/physiocenter/',
  plugins: [react(), tailwindcss()],
})
