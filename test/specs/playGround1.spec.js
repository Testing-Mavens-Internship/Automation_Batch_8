import { expect } from '@wdio/globals'
import loginPage1 from "../pageobjects/PlayGroundTask/loginPage1.js"
import landingPage from '../pageobjects/PlayGroundTask/landingPage.js'
import loginPage2 from '../pageobjects/PlayGroundTask/loginPage2.js'
import homePage from '../pageobjects/PlayGroundTask/homePage.js'
import productPage from '../pageobjects/PlayGroundTask/productPage.js'
import cartPage from '../pageobjects/PlayGroundTask/cartPage.js'

describe('To verify workflow of PlayGround website', () => {

    it('Launch URL in browser', async () => {
        await loginPage1.loadUrl()
        //console.log(await browser.getWindowHandles())
        expect(await loginPage1.$pgHeader().isDisplayed())
        .withContext('Expect PLAYGROUND header to be displayed')
        .toBeTrue()
    })

    it('Validate the first Login', async () => {
        await loginPage1.loginValidation1()
        expect(await loginPage1.$header()
        .isDisplayed()).withContext('Expect header to be displayed in the Landing Page')
        .toBeTrue()
    })

    it('Click on dropdown from Landing page', async () => {
        await landingPage.dropdownClick()
        expect(await loginPage2.$loginHeader()
        .isDisplayed()).withContext('Expect header to be displayed in the Login Page')
        .toBeTrue()
    })

    it('Validate the second Login', async () => {
        await loginPage2.loginValidation2()
        expect(await loginPage1.$header()
        .isDisplayed()).withContext('Expect header to be displayed in the Home Page')
        .toBeTrue()
    })

    it('Check user is successfully loggedin', async () => {
        await homePage.loggedInValidation()
        expect(await homePage.$logout()
        .isDisplayed()).withContext('Expect Logout option to be displayed')
        .toBeTrue()
    })

    it('Click on Shop By Category in Home Page', async () => {
        await homePage.clickShopByCategory()
        expect(await productPage.$prodHeader()
        .isDisplayed()).withContext('Expect header to be displayed in the Product Page')
        .toBeTrue()
    })

    it('Add products and validate its count', async () => {
            let count=await productPage.clickAddTocart()
            await productPage.$buy3().waitForDisplayed({timeout:60000,timeoutMsg:"Count is not displayed"});
            let initialCount=await productPage.$buy3().getText();
            expect (parseInt(initialCount)).toBe(count);

        // await productPage.addProd1()
        // // expect(await productPage.$buy1()
        // // .isDisplayed()).withContext('Expect Buy Now count=1')
        // // .toBeTrue()

        // // await productPage.addProd2()
        // // expect(await productPage.$buy2()
        // // .isDisplayed()).withContext('Expect Buy Now count=2')
        // // .toBeTrue()

        // // await productPage.addProd3()
        // // expect(await productPage.$buy3()
        // // .isDisplayed()).withContext('Expect Buy Now count=3')
        // // .toBeTrue()

        await productPage.clickBuyNow()
        expect(await cartPage.$cartHeader()
        .isDisplayed()).withContext('Expect header to be displayed in the Cart Page')
        .toBeTrue()
    })    

    it('Cart page sum validations and Logout', async () => {
        // await cartPage.countIncrease()
        // expect(await cartPage.$total1()
        // .isDisplayed()).withContext('Expect Total = $5316.98')
        // .toBeTrue()

           // await mobileCategory.clickBuyNowButton();
            let subTotal= await cartPage.getPrice();
            let totalProduct=await cartPage.finalTotal()
            expect (subTotal).toBe(totalProduct);

        // await cartPage.countDecrease()
        // expect(await cartPage.$total2()
        // .isDisplayed()).withContext('Expect Total = $4116.99')
        // .toBeTrue()

        await cartPage.resetCart()
        expect(await cartPage.$cartLonely()
        .isDisplayed()).withContext('Expect message that YOUR CART FEELS LONELY')
        .toBeTrue()

        await cartPage.logoutUser()
        expect(await cartPage.$logoutMessage()
        .isDisplayed()).withContext("Logout successfull message is not displayed")
        .toBeTrue();
    })

})
