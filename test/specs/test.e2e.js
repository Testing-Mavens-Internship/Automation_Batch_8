import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Login page Swag Labs', () => {
    it('Loading Url', async () => {
        await LoginPage.loadUrl();
        await LoginPage.$header().waitForDisplayed({timeout:3000,timeoutMsg:"page not loaded"});
        expect (await LoginPage.$header().isDisplayed()).toBeTrue();
        //can use expect (await LoginPage.$header().isDisplayed())
        //.withContext("Page url is not loading")
        //.tobeTrue();  This is for showing the exact error that why the issue happen.  
    })
    it(`Entering credentials`,async()=>{
        await LoginPage.login();
        expect(await LoginPage.$loginHeader().isDisplayed()).withContext(`Header is present`).toBeTrue();
    })
})

