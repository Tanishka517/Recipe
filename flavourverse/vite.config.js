import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Recipe/', // <-- Add this crucial line here!
  plugins: [
    tailwindcss(),
  ],
})