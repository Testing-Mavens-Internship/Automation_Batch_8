// import LoginPage from '../pageobjects/login.page.js';

// describe('My Login application', () => {
//     it('Login page should have a header Swag Labs', async () => {
//         await LoginPage.loadUrl();
//         expect(await LoginPage.$header().isDisplayed())
//         .withContext('Header should be displayed')
//         .toBeTrue();
//     })
//     it('Login should be passed with valid credentials', async ()=> {
//         await LoginPage.login();
//         await (await LoginPage.$header()).waitForDisplayed();
//         expect(await LoginPage.$header().isDisplayed())
//         .withContext('Login should be successful')
//         .toBeTrue();
//     })
// })

import CartPage from "../pageobjects/playground/pg_Cartpage.js";
import Homepage from "../pageobjects/playground/pg_homePage.js";
import LandingPage from "../pageobjects/playground/pg_landingPage.js";
import LoginPage from "../pageobjects/playground/pg_loginPage.js";
import PaymentGW from "../pageobjects/playground/pg_paymentGatewayPage.js";
import Productdetails from "../pageobjects/playground/pg_productDetails.js";
import Products from "../pageobjects/playground/pg_Productpage.js";


describe('Successful navigation from landing page to payment gateway', () => {
    it('Launch url', async () => {
        await LandingPage.launchUrl();
        await LandingPage.$header.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Expected  logo should be displayed' });
        
    })
    it('Click on Login icon', async ()=> {
        await LandingPage.clickUsericon();
    })
    it('Select login option', async ()=> {
        await LandingPage.clickLoginoption();
    })
    it('Enter valid Credentials', async ()=> {
        await LoginPage.enterCredentials();
    })
    it('Click on Login button', async ()=> {
        await LoginPage.clickLoginbutton();
    })
    it('Click on the shop menu from the navbar', async ()=> {
        await Homepage.clickShopicon();
    })
    it('Click on Shop by color dropdown', async ()=> {
        await Products.filterBycolor();
    })
    it('Select option Blue', async ()=> {
        await Products.selectColor();  
    })
    it('Select a product', async ()=> {
        await Products.selectProduct();
    })
    it('Click on Add to cart button', async ()=> {
        await Productdetails.clickAddtocart();
    })
    it('Click on  Buy now button.', async ()=> {
        await Productdetails.clickBuyNow();
    })
    it('Click on proceed to checkout button', async ()=> {
        await CartPage.clickProceedtoCheckout();
    })
    it('Verify that the Payment Gateway header is present on the payment gateway page', async ()=> {
        await PaymentGW.validateHeader();
    })  
})

