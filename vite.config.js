import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    serveStatic: [
      {
        route: '/assets/models', // URL 경로
        dir: 'src/assets/models', // 실제 파일 시스템 경로 (프로젝트 루트를 기준으로)
      },
    ],
  },
})
