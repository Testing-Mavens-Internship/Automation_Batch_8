
import landingPage from "../pageobjects/sourceLabs/landingPage.js";
import loginPage from "../pageobjects/sourceLabs/loginPage.js";
import cartPage from "../pageobjects/sourceLabs/cartPage.js";
import checkoutPage from "../pageobjects/sourceLabs/checkoutPage.js";

let time=3000
describe("Login the sourcelab application using values from the button, add products to cartPage and checkoutPage", () => {

    it("Load the page successfully", async () => {
        await loginPage.loadUrl()
        expect(await loginPage.$header().isDisplayed())
       
    })

    it("Split the credentials from Webpage", async () => {
        await loginPage.splitCredentials()
        await browser.pause(3000)
        
    })

    it("Click on the sort button and select high to low", async () => {
        let sortedList = await landingPage.clickSort()
        console.log(sortedList)
        expect(sortedList).toEqual(sortedList.sort((a, b) => b - a))
    })

    it(`Adding products to the cartPage.`,async()=>{
        await landingPage.addingToCart();
        await landingPage.$addToCartRedButton().waitForDisplayed({timeout:time,timeoutMsg:"Red color is not present in the button."});
        expect((await landingPage.$addToCartRedButton().getCSSProperty("color")).parsed.hex).toEqual('#e2231a')
    })

    it(`Clicking on the cartPage icon.`,async()=>{
        await landingPage.clickingOnCartIcon();
        await cartPage.$cartHeader().waitForDisplayed({timeout:time,timeoutMsg:"Cart page is not loaded."});
        expect(await cartPage.$cartHeader()).toBeDisplayed();
    })

    it(`Proceeding to checkoutPage and entering the details.`,async()=>{
        await cartPage.checkoutButton();
        await cartPage.$checkoutHeader().waitForDisplayed({timeout:time,timeoutMsg:"CheckoutPage page is not loaded."});
        await checkoutPage.checkout("Joseph","Tom","685515");  
        await expect(checkoutPage.$overview()).toBeDisplayed();
        await checkoutPage.placeOrder();
        await checkoutPage.$thankyouMsg().waitForDisplayed({timeout:time,timeoutMsg:"Confirmation message is not loaded."});
        await expect(checkoutPage.$thankyouMsg()).toBeDisplayed();
    })

})
