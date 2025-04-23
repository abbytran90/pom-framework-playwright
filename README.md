## Playwright Automation Testing
This project uses Playwright and the Page Object Model (POM) design pattern to automate tests for a web application. 
The POM pattern help improve test maintainability by separating the logic of the web pages

## Installation
1. Install Node.js (if not already installed): [Download Node.js](https://nodejs.org/)

2. Initialize the project and install Playwright:
   Open a terminal and run the following commands:
   npm init -y
   npm install playwright

3. Install additional dependencies for your project:
    npm install @faker-js/faker
    npm install typescript ts-node

4. Install Playwright browsers:
    npx playwright install

## Project Structure
    This project follows the Page Object Model (POM) design pattern to separate test logic and page actions. Here is the structure of the project:
    /tests
    ├── login.spec.ts              # Test case for login functionality
    ├── dashboard.spec.ts          # Test case for dashboard functionality
    ├── userManagement.spec.ts     # Test case for user management
    /pages
    ├── LoginPage.ts               # Page Object for Login page
    ├── DashboardPage.ts           # Page Object for Dashboard page
    ├── UserManagementPage.ts      # Page Object for User Management page
    /utils
    ├── apiUtils.ts                # Utility functions for API testing
    └── testData.ts                # Sample data used in tests
    /config
    └── playwright.config.ts       # Configuration file for Playwright
    /constants
    └── ErrorMessage.ts            # Message for test case

## Writing and Running Tests
1. Write Tests
    Test scripts should be placed in the /tests folder. These tests will interact with the page objects from the /pages folder.
2. Page Object Model (POM)
    Each page of your web application should have its own page object file in the /pages folder.
3. Run Tests
    To run the tests, use the following command in the terminal:
    npx playwright test

## Playwright Configuration
    You can configure Playwright through the playwright.config.ts file to modify browser settings, timeouts, and other customizations.

## Run Tests on Different Browsers
1. To run on Firefox:
    npx playwright test --project=firefox
2. To run on Safari:
    npx playwright test --project=webkit

## References
1. Playwright Documentation
2. Page Object Model (POM)
3. @faker-js/faker Documentation: https://fakerjs.dev/