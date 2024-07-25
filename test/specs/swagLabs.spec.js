import loginPage from "../pageobjects/SwagLabs/loginPage.js";
import productPage from "../pageobjects/SwagLabs/productPage.js";
import cartPage from "../pageobjects/SwagLabs/cartPage.js";
import checkoutPage from "../pageobjects/SwagLabs/checkoutPage.js";

describe('To verify the workflow of Swag Labs website', () => {

    it('Launch URL in browser', async () => {
        await loginPage.loadUrl()
        expect(await loginPage.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Login with valid credentials', async () => {
        await loginPage.enterValues()
        expect(await productPage.$prodHeader()
        .isDisplayed()).withContext('Expect "Products" header to be displayed')
        .toBeTrue()
    })

    it('Sort products from "High to Low" in products page', async () => {
        await productPage.sortProd()
        // expect(await productPage.$prodHeader()
        // .isDisplayed()).withContext('Expect product header to be displayed')
        // .toBeTrue()
    })

    it('Add to cart a product and check Remove button is displayed', async () => {
        await productPage.addToCart()
        expect(await productPage.$removeButton()
        .isDisplayed()).withContext('Expect Remove button to be displayed')
        .toBeTrue()
    })

    it('Validate "Remove" button is of Red color', async () => {
        const removeButton = await productPage.$removeButton()
        const color = await removeButton.getCSSProperty('color');
        expect(color.value).toBe('rgba(226,35,26,1)');
    })

    it('Click on Cart icon', async () => {
        await productPage.clickCart()
        expect(await cartPage.$cartHeader()
        .isDisplayed()).withContext('Expect "Your Cart" header to be displayed')
        .toBeTrue()
    })

    it('Click on Checkout button from cart', async () => {
        await cartPage.clickCheckoutButton()
        expect(await checkoutPage.$checkoutHeader()
        .isDisplayed()).withContext('Expect "Checkout: Your Information" header to be displayed')
        .toBeTrue()
    })
    
    it('Enter details in Checkout page and click Continue button', async () => {
        await checkoutPage.enterDetails()
        expect(await checkoutPage.$checkoutHeader2()
        .isDisplayed()).withContext('Expect "Checkout: Overview" header to be displayed')
        .toBeTrue()
    })

    it('Click on finish button from Checkout: Overview page', async () => {
        await checkoutPage.clickFinishButton()
        expect(await checkoutPage.$thankYouMsg()
        .isDisplayed()).withContext('Expect "Thank you for your order!" message to be displayed')
        .toBeTrue()
    })

})
