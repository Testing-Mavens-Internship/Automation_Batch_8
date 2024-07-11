import cart from '../../pageobjects/playground/cart.js';
import firstLogin from '../../pageobjects/playground/firstLogin.js';
import homePage from '../../pageobjects/playground/home-page.js';
import playLogin from '../../pageobjects/playground/playLogin.js';
import productpage from '../../pageobjects/playground/productpage.js';

describe('login to the account, filter products, add to cart and purchase the product', () => {
    it('Loading Url', async () => { 
        await playLogin.loadUrl();
        await firstLogin.$cheader().waitForDisplayed({timeout:4000,timeoutMsg:"Basic login page is displayed"})
        expect(await firstLogin.$cheader().isDisplayed()).toBeTrue();
    })

    it(`Enter the credentials and signin`,async()=>{
        await firstLogin.cLogin();
        await homePage.$header().waitForDisplayed({timeout:4000,timeoutMsg:"Landing page is not loading"})
        expect(await homePage.$header().isDisplayed()).toBeTrue();
    })

    it(`Click on the user icon and enter the credentials`,async()=>{
        await playLogin.login();
        await homePage.$header().waitForDisplayed({timeout:4000,timeoutMsg:"Home page is not loading"})
        expect(await homePage.$header().isDisplayed()).toBeTrue();
    })

    it('check whether logout is present',async()=>{
        await homePage.check(); 
        expect(await homePage.$dashoptn().isDisplayed()).toBeTrue();
    })

    it('Click shop by category and select mobile',async()=>{
        await homePage.categoryclk();
        await homePage.$shopHeader().waitForDisplayed({timeout:5000,timeoutMsg:"Clicking mobile is not working"})
        expect(await homePage.$shopHeader().isDisplayed()).toBeTrue();
    })

    it('Adding products to cart',async()=>{
        let count=await productpage.clickAddToCart();
        let noOfItem=parseInt(await productpage.$noOfItem().getText());
        expect(noOfItem).toBe(count)
    })

    it('Moving to cart page',async()=>{
        await productpage.clickBuyNow();
        expect(await cart.$cartHeader().isDisplayed()).toBeTrue();
        let a= await browser.getWindowHandles();
        console.log("a:",a);
    })

    it(`Suming the total amount before adding quandity`,async()=>{
        let stringTotalPrice=await cart.$total().getText();
        let repacePrice=stringTotalPrice.replace("$","");
        let totalPrice=parseInt(repacePrice);
        let calculatedPrice=await cart.calculatePrice();
        expect(calculatedPrice).toBe(totalPrice);
    })

    it(`incrementing the quandity`,async()=>{
        await cart.increment();
    })

    it(`Suming the total amount after adding quandity`,async()=>{
        let stringTotalPrice=await cart.$total().getText();
        let repacePrice=stringTotalPrice.replace("$","");
        let totalPrice=parseInt(repacePrice);
        let calculatedPrice=await cart.calculatePrice();
        expect(calculatedPrice).toBe(totalPrice);
    })
    it(`Clicking the reset button.`,async()=>{
        await cart.clickreset();
        await cart.$emptycart().waitForDisplayed({timeout:5000,timeoutMsg:"Cart is not getting empty."});
        expect(await cart.$emptycart().isDisplayed()).toBeTrue();
    })
})