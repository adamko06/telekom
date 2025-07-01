import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
      reporter: ['text', 'html'],
    },
    include: ['src/utils/__unit__/**/*.test.ts'],
    exclude: ['e2e/**', '**/*.spec.ts'],
  },
})
