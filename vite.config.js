import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000, // Adjust this value further
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Define manual chunks if needed
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
