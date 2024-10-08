import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/socket.io':{
        target:'http://127.0.0.1:3000',
        changeOrigin:true,
        ws:true
      },
      '/api':{
        target:'http://127.0.0.1:3000',
        changeOrigin:true,
        secure:false
      }
    }
  }
})
