import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "base": "https://Jmt-code.github.io/react-resp",
  build: {
    outDir: 'dist', // Directorio de salida para los archivos de producción
    sourcemap: true, // Generar archivos de mapas de fuente para depuración
    minify: 'esbuild' // Minificación utilizando esbuild
  },
})
