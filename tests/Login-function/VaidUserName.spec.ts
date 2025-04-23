import { test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { loginData } from '@data/login_data';

test.describe('Login Functionality', () => {
  test('Login with valid credentials should succeed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);
    await loginPage.assertLoginSuccess();
  });

  test('Login with invalid credentials should fail', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(loginData.invalidUser.username, loginData.invalidUser.password);
    await loginPage.assertLoginFaild();
  });

});
