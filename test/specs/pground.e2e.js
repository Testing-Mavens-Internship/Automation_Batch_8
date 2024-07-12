import basicLogin from "../pageobjects/pGround/basicLogin.js"
import cartPage from "../pageobjects/pGround/cartPage.js"
import homePage from "../pageobjects/pGround/homePage.js"
import landingPage from "../pageobjects/pGround/landingPage.js"
import mainLogin from "../pageobjects/pGround/mainLogin.js"
import shopPage from "../pageobjects/pGround/shopPage.js"


describe('Playground Application', () => {
    it('Launch the login page url', async () => {

        await basicLogin.loadUrl()
        expect(await basicLogin.$header().waitForDisplayed())

        })


    it('Login with valid credentials', async () => {

        await basicLogin.login()
        expect(await landingPage.$header().waitForDisplayed())
    })

    it('Click on the user icon', async () => {

        await landingPage.clickUser()
        expect(await landingPage.$loginIcon().waitForDisplayed())
    })

    it('Click on the login button', async () => {

        await landingPage.clickLogin()
        expect(await mainLogin.$header().waitForDisplayed())
    })

    it('Login with valid credentials', async () => {

        await mainLogin.login()
        await homePage.clickUser()
        expect(await homePage.$logoutButton().waitForDisplayed({ timeout: 4000, timeoutMsg: 'logout icon is not displayed' }))
        
    })

    it('Click on the Shop button', async () => {
        await homePage.clickShop()
        expect(await shopPage.$header().waitForDisplayed())
    })

    it('Click on shop by category', async () => {

        await shopPage.clickShopCategory()
        expect(await shopPage.$mobileCatregory().waitForDisplayed())
    })

    it('Click on mobile category', async () => {
        await shopPage.clickMobileCategory()
        expect(await shopPage.$xiaomi14().waitForDisplayed())
    })

    it('Add product to cart', async () => {
        let productcount = await shopPage.clickaddCart()
        let actualproductcountextract =  await shopPage.$productcount().getText();
        let actualproductcount = parseInt(actualproductcountextract)
        expect(productcount).toBe(actualproductcount);
        // expect(await shopPage.$cartNum().isDisplayed({ timeout: 5000, timeoutMsg: 'total number of products added to the cart is not displayed in the cart icon' }))
    })

    it('Click on Buy Now button', async () => {
        await shopPage.clickBuyNow()
        expect(await cartPage.$header().isDisplayed({ timeout: 5000, timeoutMsg: 'Buy now button is not clicked' }))
        

    })

    it('Verify the total price in the cart is the same as the sum of the price of each product in the cart and shipping charge', async () => {
        let calculatedtotalprice = await cartPage.validatecartTotalprice();
        let a = await cartPage.$totalpriceincart().getText();
        let b = a.replace("$", '');
        let totalpriceincart = parseInt(b);
        console.log(`Displayed total price in cart: ${totalpriceincart}`);
        expect(calculatedtotalprice).toBe(totalpriceincart);
    });

    it('Click on increment button', async () => {

        await cartPage.clickIncrement()
        

    })
    it('Verify the total price in the cart is the same as the sum of the price of each product in the cart and shipping charge after increment', async () =>{
        let calculatedtotalprice = await cartPage.validatecartTotalpriceafterincrement();
        let a = await cartPage.$totalpriceincart().getText();
        let b = a.replace("$", '');
        let totalpriceincart = parseInt(b);
        console.log(`Displayed total price in cart: ${totalpriceincart}`);
        expect(calculatedtotalprice).toBe(totalpriceincart);  
    })
})