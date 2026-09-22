import { defineConfig } from 'vite-plus';

import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-0-0-rc-0-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
    name: { label: pkg.name },
    include: [
      'api-generation.spec.ts',
      'handler-preservation.spec.ts',
      'query-key-mutator.spec.ts',
      'serialize-response-headers.spec.ts',
    ],
    silent: 'passed-only',
  },
});
