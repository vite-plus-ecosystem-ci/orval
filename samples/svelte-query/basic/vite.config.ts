import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, lazyPlugins } from 'vite-plus';

export default defineConfig({
  test: { clearMocks: false },
  plugins: lazyPlugins(() => [sveltekit()]),
});
