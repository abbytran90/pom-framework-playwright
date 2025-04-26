import { expect, test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { loginData } from '@data/login_data'

test.describe('Login Positive Case', () => {
  const emptyValue = "";
  test('Login with standard user should succeed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(loginData.standard_user.username, loginData.standard_user.password);
    await loginPage.assertLoginSuccess();
  });

  test('Login with problem user should succeed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(loginData.problem_user.username, loginData.problem_user.password);
    await loginPage.assertLoginSuccess();
  });

  test('Login with performance glitch user should succeed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(loginData.performance_glitch_user.username, loginData.performance_glitch_user.password);
    await loginPage.assertLoginSuccess();
  });

  test('Login with error user should succeed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(loginData.error_user.username, loginData.error_user.password);
    await loginPage.assertLoginSuccess();
  });

  test('Login with visual user should succeed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(loginData.visual_user.username, loginData.visual_user.password);
    await loginPage.assertLoginSuccess();
  });


});
