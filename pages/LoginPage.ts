import {Page, expect} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: any;
    readonly passwordInput: any;
    readonly loginButton: any;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('input[name="user-name"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[type="submit"]');
    }

    //Method to navigate to Login pagae
    async navigateToLogin(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    //Method to perform login action
    async login (username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

    //Verify the result
    async assertLoginSuccess(): Promise<void> {
        await expect(this.page.locator('text=Products')).toBeVisible();
    }

    async assertLoginFailedWithInvalid(expectMessage: string[]): Promise<void> {
        //Update the selector to match your app
        const ErrorMessageLocator = this.page.locator('.error-message-container');
        
        await expect(ErrorMessageLocator).toBeVisible();
        const actualMessage = (await ErrorMessageLocator.innerText()).trim();

        //Check if the actual message contains a part of the expected messages
        const isMatched = expectMessage.some(expected => actualMessage.includes(expected));
        expect(isMatched, `Unexpected error message: "${actualMessage}"`).toBeTruthy();
        
    }
}