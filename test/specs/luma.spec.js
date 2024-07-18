import jacketsPage from "../pageobjects/Luma/jacketsPage.js";
import landingPage from "../pageobjects/Luma/landingPage.js";
import prodDetailsPage from "../pageobjects/Luma/prodDetailsPage.js";
import comparePage from "../pageobjects/Luma/comparePage.js";
import shippingAndPaymentPage from "../pageobjects/Luma/shippingAndPaymentPage.js";

describe('To verify workflow of Luma website', () => {

    it('Launch URL in browser', async () => {
        await landingPage.loadUrl()
        expect(await landingPage.$header()
        .isDisplayed()).withContext('Expect LUMA header to be displayed in Landing page')
        .toBeTrue()
    })

    it('Hover on Men category, select Tops and click on Jackets option', async () => {
        await landingPage.hoverMenCategory()
        expect(await jacketsPage.$jacketHeader()
        .isDisplayed()).withContext('Expect Jackets header to be displayed')
        .toBeTrue()
    })

    it('Click last product from Jackets page', async () => {
        await jacketsPage.lastProd()
        expect(await prodDetailsPage.$lastProdName()
        .isDisplayed()).withContext('Expect Jacket name to be displayed')
        .toBeTrue()
    })

    it('Add to cart last product', async () => {
        await prodDetailsPage.addProdToCart()
        expect(await prodDetailsPage.$addToCartMsg()
        .isDisplayed()).withContext('Expect success message to be displayed')
        .toBeTrue()
    })

    it('Add to compare last product', async () => {
        await prodDetailsPage.addProdToCompare()
        expect(await prodDetailsPage.$addToCompareMsg()
        .isDisplayed()).withContext('Expect success message to be displayed with compare link')
        .toBeTrue()
    })

    it('Hover on Men category again, select Tops and click on Jackets option', async () => {
        await landingPage.hoverMenCategory()
        expect(await jacketsPage.$jacketHeader()
        .isDisplayed()).withContext('Expect Jackets header to be displayed')
        .toBeTrue()
    })

    it('Click first product from Jackets page', async () => {
        await jacketsPage.firstProd()
        expect(await prodDetailsPage.$firstProdName()
        .isDisplayed()).withContext('Expect Jacket name to be displayed')
        .toBeTrue()
    })

    it('Click Add to Cart directly for first product, without selecting size and color', async () => {
        await prodDetailsPage.directAddToCart()
        expect(await prodDetailsPage.$sizeRequired()
        .isDisplayed()).withContext('Expect This is a required field message to be displayed for size')
        .toBeTrue()
        expect(await prodDetailsPage.$colorRequired()
        .isDisplayed()).withContext('Expect This is a required field message to be displayed for color')
        .toBeTrue()
    })

    it('Add to cart first product, selecting size and color', async () => {
        await prodDetailsPage.addProdToCart()
        expect(await prodDetailsPage.$addToCartMsg()
        .isDisplayed()).withContext('Expect success message to be displayed')
        .toBeTrue()
    })

    it('Add to compare first product', async () => {
        await prodDetailsPage.addProdToCompare()
        expect(await prodDetailsPage.$addToCompareMsg()
        .isDisplayed()).withContext('Expect success message to be displayed with compare link')
        .toBeTrue()
    })

    it('Click on comparison link', async () => {
        await prodDetailsPage.clickComparisonLink()
        expect(await comparePage.$compareHeader()
        .isDisplayed()).withContext('Expect Compare header to be displayed ')
        .toBeTrue()
    })

    //compare products
    //cart item validation

    it('Click on cart and checkout', async () => {
        await comparePage.clickCartAndCheckout()
        await shippingAndPaymentPage.$shippingHeader().waitForDisplayed({ timeout: 5000 })
        expect(await shippingAndPaymentPage.$shippingHeader()
        .isDisplayed()).withContext('Expect Shipping header to be displayed')
        .toBeTrue()
    })

    it('Enter details in shipping page', async () => {
        await shippingAndPaymentPage.enterDetails('athira01081998@gmail.com', 'Athira', 'Soman', 'Testing Mavens', 'Kochi', 'Kakkanad', '12345-6789', '9876543210')
        expect(await shippingAndPaymentPage.$paymentHeader()
        .isDisplayed()).withContext('Expect Payment header to be displayed')
        .toBeTrue()
    })

})
