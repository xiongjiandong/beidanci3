import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// 自定义中间件处理 /data 请求
function serveDataPlugin(): Plugin {
  return {
    name: 'serve-data',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/data/')) {
          const fileName = req.url.replace('/data/', '')
          const filePath = path.resolve(__dirname, 'public/data', fileName)
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            res.setHeader('Content-Type', 'application/json')
            res.setHeader('Access-Control-Allow-Origin', '*')
            fs.createReadStream(filePath).pipe(res)
            return
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  base: '/beidanci3/',
  plugins: [
    serveDataPlugin(),
    react()
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
