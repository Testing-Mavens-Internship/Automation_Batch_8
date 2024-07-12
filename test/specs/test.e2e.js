import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import loginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.loadUrl()
        expect((await loginPage.$header()).isDisplayed())
        .withContext('header should be visible')
        .toBeTrue()
    })
    it('should not login with invalid credentials', async () => {
        await LoginPage.login()
        expect((await loginPage.$header()).isDisplayed())
        .withContext('header should not be visible')
        .toBeFalse()
    })
})

