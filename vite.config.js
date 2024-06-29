import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInlineLimit: 0,
  plugins: [react()],
  base:"/portofolio/"
})
