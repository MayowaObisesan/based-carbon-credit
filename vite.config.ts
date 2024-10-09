import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        "@safe-globalThis/safe-apps-sdk",
        "@safe-globalThis/safe-apps-provider",
        // ... other external modules ...
      ],
    },
  },
  plugins: [react()],
})
