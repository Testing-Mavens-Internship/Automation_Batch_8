import landingObj from "../pageobjects/pg_LandingPage.js";
import loginPageObj from "../pageobjects/pg_LoginPage.js";
import homePageObj from "../pageobjects/pg_HomePage.js";
import shopProductObj from "../pageobjects/pg_ShopProductPage.js";
import productViewObj from "../pageobjects/pg_SingleProductView.js";




describe('Playground Login and checkuout process End-to-End Flow', () => {
    
    it('Launch URL', async () => {
     
        await landingObj.LaunchUrl();
        expect(await  landingObj.$logolocator().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue();
    
    })

    it('Logo Validation', async () => {

        await landingObj.logoValidation();
        expect(await  landingObj.$logolocator().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue();

    })

    it('Click on User Icon', async () => {

        await landingObj.clickOnUserIcon();
        expect(await  landingObj.$userIcon().isDisplayed())
        .withContext('Expect User Icon to be displayed')
        .toBeTrue();
    })

    it('Click on Login Button', async () => {
        
    await landingObj.loginButton();
    expect(await  landingObj.$loginButton().isDisplayed())
    .withContext('Expect Login Button to be displayed')
    .toBeTrue()

    })

    it('Enter Valid Credentials', async () => {

    await loginPageObj.enterCredentials();
    expect(await  loginPageObj.$enterCredentials()).toBeTrue()
   
    })

    it('Click on Shop icon in Navbar', async () => {

        await homePageObj.clickOnShopIcon();
        expect(await homePageObj.$clickOnShopIcon()).toBeTrue()

    })

    it('Shop by Color', async () => {

        await shopProductObj.clickOnShopbyColor();
        //expect(await shopProductObj.$clickOnShopbyColor()).toBeTrue()
    })

    it('Click on Blue Color', async () => {

        await shopProductObj.clickOnBlueColor();
        //expect(await shopProductObj.$clickOnBlueColor())
    })

    it('Click on Add to Cart', async () => {
     
        await shopProductObj.addToCartMainPage();
        //expect(await shopProductObj.$addToCartMainPage())
    })

    it('Click on Buy Now Icon on Product Listing Page', async () => {
        await shopProductObj.BuyNowIcon();
        //expect(await shopProductObj.$clickOnBuyNowIcon())

    })

    it('Add to Cart Button Single Product page', async () => {

        await productViewObj.addToCartSingleProduct();
        //expect(await productViewObj.$addToCartSingleProduct())

    })


    // it('Click on Buy Now Icon on Single Product page', async () => {

    

    // })

    it('Click on Proceed To Checkout header validation', async () => {
      
        await  productViewObj.validatePaymentHeader();
        expect(await  landingObj.$validatePaymentHeader().isDisplayed())
        .withContext('Expect Payment Gateway header is  to be displayed')
        .toBeTrue();
    

    })





})
