import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./", 
  
  plugins: [react()],
  
  server: {
    host: '0.0.0.0',
    port: 8080,

    allowedHosts: [
      'patfolio-1.onrender.com', 
      'patfolio-16.onrender.com', 
      '.onrender.com',
      'localhost',
      '127.0.0.1',
    ],
  },
  
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
