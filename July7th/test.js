import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import loginPage from './loginPage.js'


describe('My Application', () => {
    it('Load site', async () => {
      
        await loginPage.loadUrl()
        expect(await loginPage.$header().isDisplayed())
        .withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Login', async() => {
        await loginPage.login();
        //await browser.pause(10000)
        expect(await loginPage.$header().isDisplayed())
        .withContext('Expect header to be displayed after Login')
        .toBeTrue()
    })
})

