import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 정적 파일 서빙을 설정
    serveStatic: [
      // 프로젝트 루트에서 GLB 파일이 있는 디렉토리를 지정
      {
        // URL 경로
        // 이 경로로 접근하면 아래의 디렉토리에 있는 파일에 접근할 수 있게 됩니다.
        // 예: http://localhost:3000/assets/models/
        route: '/assets/models',
        // 실제 파일 시스템 경로
        // 이 경로는 프로젝트 루트를 기준으로 설정합니다.
        // 예: 'src/assets/models'
        dir: 'src/assets/models',
      },
    ],
  },
})
