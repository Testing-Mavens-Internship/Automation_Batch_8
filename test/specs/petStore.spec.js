import landingPage from "../pageobjects/PetStore/landingPage.js";
import loginPage from "../pageobjects/PetStore/loginPage.js";
import registerPage from "../pageobjects/PetStore/registerPage.js";
import homePage from "../pageobjects/PetStore/homePage.js";
import fishCategoryPage from "../pageobjects/PetStore/fishCategoryPage.js";
import shoppingCart from "../pageobjects/PetStore/shoppingCart.js";
import dogCategoryPage from "../pageobjects/PetStore/dogCategoryPage.js";
import shippingPage from "../pageobjects/PetStore/shippingPage.js";
import confirmationPage from "../pageobjects/PetStore/confirmationPage.js";

describe('To verify the workflow of JPetStore website', () => {

    it('Launch URL in browser', async () => {
        await landingPage.loadUrl()
        expect(await landingPage.$header()
        .isDisplayed()).withContext('Expect header is not displayed')
        .toBeTrue()
    })

    it('Click on "Sign In" link from landing page', async () => {
        await landingPage.clickSignInIcon()
        expect(await loginPage.$loginHeader()
        .isDisplayed()).withContext('Expect "Please enter your username and password." is not displayed')
        .toBeTrue()
    })

    // it('Click on "Register Now" link', async () => {
    //     await loginPage.clickRegisterNow()
    //     expect(await registerPage.$registerHeader()
    //     .isDisplayed()).withContext('Expect "User Information" is not displayed')
    //     .toBeTrue()
    // })

    // it('Fill details in Register page', async () => {
    //     await registerPage.fillDetails()
    //     // expect(await registerPage.$registerHeader()
    //     // .isDisplayed()).withContext('Expect "User Information" is not displayed')
    //     // .toBeTrue()
    // })

    // it('Click on "Sign In" link from landing page', async () => {
    //     await landingPage.clickSignInIcon()
    //     expect(await loginPage.$loginHeader()
    //     .isDisplayed()).withContext('Expect "Please enter your username and password." is not displayed')
    //     .toBeTrue()
    // })

    it('Enter credentials in Login page', async () => {
        await loginPage.enterCredentials()
        expect(await homePage.$homeHeader()
        .isDisplayed()).withContext('Expect "My Account" is not displayed')
        .toBeTrue()
    })

    it('Click on "Fish" category from Home page', async () => {
        await homePage.clickFishOption()
        expect(await fishCategoryPage.$fishHeader()
        .isDisplayed()).withContext('Expect "Fish" is not displayed')
        .toBeTrue()
    })

    it('Click on "Goldfish" category from Fish page', async () => {
        await fishCategoryPage.clickOnGoldfish()
        expect(await fishCategoryPage.$goldfishHeader()
        .isDisplayed()).withContext('Expect "Goldfish" is not displayed')
        .toBeTrue()
    })

    it('Click on "Add to Cart" category from Goldfish page', async () => {
        await fishCategoryPage.clickAddToCart()
        expect(await shoppingCart.$shoppingCartHeader()
        .isDisplayed()).withContext('Expect "Shopping Cart" is not displayed')
        .toBeTrue()
    })

    it('Enter quantity as 2 for Goldfish', async () => {
        await shoppingCart.enterQty()
        // expect(await shoppingCart.$shoppingCartHeader()
        // .isDisplayed()).withContext('Expect "Shopping Cart" is not displayed')
        // .toBeTrue()
        //validate price change -------------------------------------------------
    })

    it('Go back to "Home" page', async () => {
        await shoppingCart.homePage()
        expect(await shoppingCart.$header()
        .isDisplayed()).withContext('Expect header is not displayed')
        .toBeTrue()
    })

    it('Click on "Dog" category from Home page', async () => {
        await homePage.clickDogOption()
        expect(await dogCategoryPage.$dogHeader()
        .isDisplayed()).withContext('Expect "Dogs" is not displayed')
        .toBeTrue()
    })

    it('Click on "Dalmation" category from Dogs page', async () => {
        await dogCategoryPage.clickOnDalmation()
        expect(await dogCategoryPage.$dalmationHeader()
        .isDisplayed()).withContext('Expect "Dalmation" is not displayed')
        .toBeTrue()
    })

    it('Click on "Add to Cart" category from Goldfish page', async () => {
        await dogCategoryPage.clickAddToCart()
        expect(await shoppingCart.$shoppingCartHeader()
        .isDisplayed()).withContext('Expect "Shopping Cart" is not displayed')
        .toBeTrue()
    })
     //validate price sum -------------------------------------------------

     it('Click on "Proceed to Checkout" button from Shopping Cart', async () => {
        await shoppingCart.clickCheckoutBtn()
        expect(await shoppingCart.$checkbox()
        .isDisplayed()).withContext('Expect "Ship to different address..." checkbox is not displayed')
        .toBeTrue()
    })

    it('Tick "Ship to different address..." checkbox and click on "Continue" button', async () => {
        await shoppingCart.clickCheckbox()
        expect(await shippingPage.$shippingHeader()
        .isDisplayed()).withContext('Expect "Shipping Address" is not displayed')
        .toBeTrue()
    })

    it('Enter details in Shipping page and click "Continue" button', async () => {
        await shippingPage.enterDetails()
        expect(await confirmationPage.$confirmationHeader()
        .isDisplayed()).withContext('Expect "Order" is not displayed')
        .toBeTrue()
    })

    it('Click on "Confirm" button', async () => {
        await confirmationPage.clickConfirmButton()
        // expect(await shippingPage.$confirmationHeader()
        // .isDisplayed()).withContext('Expect "Order" is not displayed')
        // .toBeTrue()
        // await browser.pause(5000)
    })
})
