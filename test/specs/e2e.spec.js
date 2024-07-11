import loginPage from '../pageobjects/playLogin.js'
import landingLogin from '../pageobjects/landingLogin.js';
import homePage from '../pageobjects/homePage.js'
import ProductDetails from '../pageobjects/ProductDetails.js';
import cart from '../pageobjects/cart.js';
import payment from '../pageobjects/payment.js';

describe('login to the account, filter products, add to cart and purchase the product', () => {
    it('Loading Url', async () => { 
        await loginPage.loadUrl();
    })
    it(`Enter the credentials and signin`,async()=>{
        await landingLogin.cLogin();
    })
    it(`Click on the user icon and enter the credentials`,async()=>{
        await loginPage.login();
    })
    it(`Click on the shop tab`,async()=>{
        await homePage.clickShop(); 
        await homePage.$shopHeader().waitForDisplayed({timeout:3000,timeoutMsg:"ShopPage is not appearing."})
        expect(await homePage.$shopHeader().isDisplayed()).toBeTrue();      
    })
    it(`Click on the filtering options and select color blue`,async()=>{
        await homePage.clickFilter();
    })
    it(`Click on any product`,async()=>{
        await homePage.itemClick();
    })
    it(`Click on the add to cart button`,async()=>{
        await ProductDetails.$addToCart();
    })
    it(`Click on the buy now button`,async()=>{
        await ProductDetails.$buyNow();
    })
    it(`Click on the proceed to checkout button and validate.`,async()=>{
        await cart.$checkout();
        await payment.$pHeader().waitForDisplayed({timeout:3000,timeoutMsg:"ShopPage is not appearing."})
        expect(await payment.$pHeader().isDisplayed()).toBeTrue();
    })
});
