import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import loginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
       await LoginPage.loadUrl();
       expect(await LoginPage.$header().isDisplayed())
                    .withContext('Expected header to be displayed')
                    .toBeTrue();
    })
    it('should login with valid credentials', async () => {
        await LoginPage.login();
        await browser.pause(5000);
        expect(await LoginPage.$header().isDisplayed())
                     .withContext('Expected header to be displayed')
                     .toBeTrue();


})

})
