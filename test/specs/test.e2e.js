import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import loginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should open the url', async () => {
       
       await LoginPage.loadurl();
       expect(await LoginPage.$header().isDisplayed())
            .withContext("Expected result is not matching").toBeTrue();
            // await browser.pause(5000);
    })
    it('should login with valid credentials', async () => {
        await LoginPage.login();
        expect(await LoginPage.$header().isDisplayed())
             .withContext("Expected result is not matching").toBeTrue();
     })
})

