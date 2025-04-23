import { expect, test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { loginData } from '@data/login_data'

test.describe('Login Functionality', () => {
  const emptyValue = "";
  test('Login with valid credentials should succeed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);
    await loginPage.assertLoginSuccess();
  });

  test('Login with invalid usernam should fail', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(emptyValue, loginData.validUser.password);
    await loginPage.assertLoginFaildWithEmptyUserNam();

  });

});
