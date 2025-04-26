import { expect, test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { loginData } from '@data/login_data'
import { LoginMessage } from '@constants/ErrorMessage'


test.describe('Login Negative Case', () => {
  const emptyValue = "";
  //Validate the username valued
  test('Login with empty username should fail', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.navigateToLogin();
    await loginPage.login(emptyValue, loginData.standard_user.password);
    await loginPage.assertLoginFailedWithInvalid([LoginMessage.EMPTY_USERNAME]);
  
  });

  test('Login with wrong username should fail', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const invalidUsername = "standard_user1";
    await loginPage.navigateToLogin();
    await loginPage.login(invalidUsername, loginData.standard_user.password);
    await loginPage.assertLoginFailedWithInvalid([LoginMessage.INVALID_CREDENTIALS]);
  
  });

  test('Login with empty password should fail', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.navigateToLogin();
    await loginPage.login(loginData.visual_user.username, emptyValue);
    await loginPage.assertLoginFailedWithInvalid([LoginMessage.EMPTY_PASSWORD]);
  
  });
  
});