import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// ssr.noExternal only matters for `npm run check` (server-side route test).
export default defineConfig({ plugins: [react()], ssr: { noExternal: ['react-helmet-async'] } })
