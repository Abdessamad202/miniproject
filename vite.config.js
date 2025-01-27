import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '288b-196-117-62-102.ngrok-free.app', // Replace this with the ngrok host
    ],
  },
});
