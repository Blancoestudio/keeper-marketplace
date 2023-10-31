import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/keeper-marketplace/',
  // base: '/',
  build:{
    outDir: 'docs'
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    },
  },
  plugins: [react(), svgr()],
})
