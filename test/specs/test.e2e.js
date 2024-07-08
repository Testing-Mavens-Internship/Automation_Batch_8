import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await LoginPage.loadUrl();
        expect(await LoginPage.$header().isDisplayed())
        .withContext('Expect Header to be displayed')
        .toBeTrue();


       
    })

    it('login process', async () => {

        await LoginPage.login();
        await browser.pause(10000);
        expect(await LoginPage.$header().isDisplayed())
        .withContext('Expect Header to be displayed')
        .toBeTrue();



    })
})

