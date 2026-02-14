import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// setting up for CORS policy issue to reqest data from external api
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-coingecko': {
        target: 'https://api.coingecko.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-coingecko/,''),
      },
      'api-coinbase': {
        target: 'https://api.coinbase.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-coinbase/, ""),
      },
    },
  },
})
