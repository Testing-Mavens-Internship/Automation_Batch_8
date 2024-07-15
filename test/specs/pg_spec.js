import { expect } from '@wdio/globals'
import landingPage from '../pageobjects/PlayGround/pg_landingPage.js'
//import loginPage from '../pageobjects/pg_loginPage.js'
// import homePage from '../pageobjects/pg_homePage'
// import productsPage from '../pageobjects/pg_productsPage'
// import productsDetailsPage from '../pageobjects/pg_productsDetailsPage'
// import cartPage from '../pageobjects/pg_cartPage'
// import checkoutPage from '../pageobjects/pg_checkoutPage'


describe('To verify that user is able to buy a product from PlayGround website', () => {
    it('Launch URL in browser', async () => {
        await landingPage.loadUrl()
        await browser.pause(10000)
        expect(await landingPage.$header().isDisplayed())
        .withContext('Expect header to be displayed')
        .toBeTrue()
    })

    // it('Check that PlayGround logo is present', async() => {
    //     await landingPage.logoValidation();  
    // })

    // it('Select Login option from the dropdown', async() => {
    //     await landingPage.dropdownClick();
    //     //await browser.pause(10000)
    //     expect(await loginPage.$header().isDisplayed())
    //     .withContext('Expect header to be displayed after Login')
    //     .toBeTrue()
    // })

    // it('Enter the credentials and Login', async() => {
    //     await loginPage.loginValidation();
    //     await browser.pause(10000)
    //     expect(await loginPage.$header().isDisplayed())
    //     .withContext('Expect header to be displayed after Login')
    //     .toBeTrue()
    // })

    // it('Select Shop tab from the Home page', async() => {
    //     await loginPage.login();
    //     //await browser.pause(10000)
    //     expect(await loginPage.$header().isDisplayed())
    //     .withContext('Expect header to be displayed after Login')
    //     .toBeTrue()
    // })

    // it('Select Shop by Color dropdown from Products page', async() => {
    //     await loginPage.login();
    //     //await browser.pause(10000)
    //     expect(await loginPage.$header().isDisplayed())
    //     .withContext('Expect header to be displayed after Login')
    //     .toBeTrue()
    // })

    // it('Select Shop by Color dropdown from Products page', async() => {
    //     await loginPage.login();
    //     //await browser.pause(10000)
    //     expect(await loginPage.$header().isDisplayed())
    //     .withContext('Expect header to be displayed after Login')
    //     .toBeTrue()
    // })

})
