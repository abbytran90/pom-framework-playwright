import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com/', // Replace with your actual URL
  },
  reporter: [
    ['html', { outputFolder: 'reports/html' }],
    ['allure-playwright'],
  ],
  globalSetup: require.resolve('../global-setup.ts'),
});
