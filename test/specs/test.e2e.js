import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import loginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('Launching page', async () => {
       await LoginPage.loadUrl();
      expect(await LoginPage.$header().isDisplayed())
      .withContext('Expect header is displayed')
      .toBeTrue();
    })
    it('should login with valid credentials', async () => {
        await LoginPage.login();
        expect(await LoginPage.$product().isDisplayed())
        .withContext('Expect header is displayed')
        .toBeTrue();
    })
})
