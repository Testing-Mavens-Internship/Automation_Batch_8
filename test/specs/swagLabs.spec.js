import landingPage from '../pageobjects/swagLabs/landing.js';
import homePage from '../pageobjects/swagLabs/homePage.js';
import cartPage from '../pageobjects/swagLabs/cart.js';
import checkout from '../pageobjects/swagLabs/checkout.js';
const time=5000;

describe("User should login and buy a product from Swag Labs", ()=>{
    it("User should be able to load the URL in the browser", async ()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$loginHeader().isDisplayed())
            .withContext("Login page is not displayed")
            .toBeTrue();
    })

    it("User should be able to login by entering valid username and password", async ()=>{
        await landingPage.enterDetails();
        expect(await homePage.$homePageHeader().isDisplayed())
            .withContext("HomePage is not loaded")
            .toBeTrue();
    })

    it("Should select filter high to low and validate prices", async ()=>{
        await homePage.setFilter();
        expect(await homePage.checkSortedProducts())
            .withContext('Products are sorted by price low to high')
            .toBeTrue();
    })

    it("Should click on add to cart button", async ()=>{
        await homePage.clickAddToProduct();
        expect((await homePage.$removeBtn().getCSSProperty("color")).parsed.hex).toEqual('#e2231a')
    })

    it(`Clicking on the cart icon.`,async()=>{
        await homePage.clickingOnCartIcon();
        await cartPage.$cartHeader().waitForDisplayed({timeout:time,timeoutMsg:"Cart page is not loaded."});
        expect(await cartPage.$cartHeader()).toBeDisplayed();
    })

    it(`Proceeding to checkout and entering the details.`,async()=>{
        await cartPage.checkoutButton();
        await cartPage.$checkoutHeader().waitForDisplayed({timeout:time,timeoutMsg:"Checkout page is not loaded."});
        await checkout.checkout("Aleena","Shaji","685505");  
        await expect(checkout.$overview()).toBeDisplayed();
        await checkout.placeOrder();
        await checkout.$thankyouMsg().waitForDisplayed({timeout:time,timeoutMsg:"Confirmation message is not loaded."});
        await expect(checkout.$thankyouMsg()).toBeDisplayed();
    })
})