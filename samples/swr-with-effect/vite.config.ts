import { defineConfig } from 'vite-plus';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  test: { clearMocks: false },
  plugins: [react()],
});
