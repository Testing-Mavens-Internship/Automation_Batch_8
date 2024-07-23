import cart from "../../pageobjects/swagLabs/cart.js";
import checkout from "../../pageobjects/swagLabs/checkout.js";
import homepage from "../../pageobjects/swagLabs/homepage.js"
import loginPage from "../../pageobjects/swagLabs/loginPage.js";
const time=5000;
describe(`The user must be able to login to the website and should be able to purchase products.`,()=>{
    it(`Load the url.`,async()=>{
        await loginPage.loadUrl();
        await loginPage.$loginPageHeader().waitForDisplayed({timeout:time,timeoutMsg:"Login page is not loading."});
        expect(await loginPage.$loginPageHeader()).withContext("Login page logo is not displayed.").toBeDisplayed();
    })
   
    it(`Entering the details to the login page.`,async()=>{
        await loginPage.login();
        await homepage.$productList().waitForDisplayed({timeout:time,timeoutMsg:"Login is not successful."});
        expect(await homepage.$homepageHeader()).withContext("Homepage header is not loading.").toBeDisplayed();
    })

    it(`Sorting products.`,async()=>{
        await homepage.sorting();
        await homepage.$selectedSort().waitForDisplayed({timeout:time,timeoutMsg:"Sort option is not successful."});
        let sort=await homepage.$selectedSort().getText();
        expect(sort).withContext("sort is not selected.").toBe("Price (high to low)");
    })

    it(`Adding products to the cart.`,async()=>{
        await homepage.addingToCart();
        await homepage.$addToCartRedButton().waitForDisplayed({timeout:time,timeoutMsg:"Red color is not present in the button."});
        expect((await homepage.$addToCartRedButton().getCSSProperty("color")).parsed.hex).toEqual('#e2231a')
    })

    it(`Clicking on the cart icon.`,async()=>{
        await homepage.clickingOnCartIcon();
        await cart.$cartHeader().waitForDisplayed({timeout:time,timeoutMsg:"Cart page is not loaded."});
        expect(await cart.$cartHeader()).toBeDisplayed();
    })

    it(`Proceeding to checkout and entering the details.`,async()=>{
        await cart.checkoutButton();
        await cart.$checkoutHeader().waitForDisplayed({timeout:time,timeoutMsg:"Checkout page is not loaded."});
        await checkout.checkout("Solomon","Joseph","685515");  
        await expect(checkout.$overview()).toBeDisplayed();
        await checkout.placeOrder();
        await checkout.$thankyouMsg().waitForDisplayed({timeout:time,timeoutMsg:"Confirmation message is not loaded."});
        await expect(checkout.$thankyouMsg()).toBeDisplayed();
    })

})