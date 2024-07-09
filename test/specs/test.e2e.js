import LoginPage from '../pageobjects/login.page.js';

describe('My Login application', () => {
    it('Login page should have a header Swag Labs', async () => {
        await LoginPage.loadUrl();
        expect(await LoginPage.$header().isDisplayed())
        .withContext('Header should be displayed')
        .toBeTrue();
    })
    it('Login should be passed with valid credentials', async ()=> {
        await LoginPage.login();
        await (await LoginPage.$header()).waitForDisplayed();
        expect(await LoginPage.$header().isDisplayed())
        .withContext('Login should be successful')
        .toBeTrue();
    })
})

