import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  globalSetup: require.resolve('../global-setup.ts'),
});
