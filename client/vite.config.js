import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{ //each time we make a request to /api, it will be redirected to http://localhost:3000
      '/api':{
        target:'http://localhost:3000', 
        secure: false,
      },
      }, 
  },
  plugins: [react()],
})
