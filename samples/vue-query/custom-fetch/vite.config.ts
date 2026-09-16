import { defineConfig } from 'vite-plus';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  test: { clearMocks: false },
  plugins: [vue()],
});
