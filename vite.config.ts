import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  base: '/the-scale-of-robot-learning-data/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // Polling avoids exhausting Linux's shared inotify watcher limit.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
});
