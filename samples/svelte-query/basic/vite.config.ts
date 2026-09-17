import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, lazyPlugins } from 'vite-plus';

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false
  },
  plugins: lazyPlugins(() => [sveltekit()]),
});
