import landObj from "../../pageobjects/sauceDemo/sauceDemoLandingPage.js"
import homeObj from "../../pageobjects/sauceDemo/sauceDemoHomePage.js"
import checkoutObj from "../../pageobjects/sauceDemo/sauceDemoCheckout.js"
describe("End to end flow of sauce lab site",()=>{
    it("Load url and validate header",async()=>{
      await landObj.loadUrl()
        expect(await landObj.$header().isDisplayed()).withContext("Header is not displayed").toBeTrue();
    })
    it("Enter credentials and validate header",async()=>{
        await landObj.enterCredentials()
        expect(await homeObj.$homePageHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue()
    })
    it("Select sort high to low and validate sort",async()=>{
        await homeObj.sortProduct()
        const respond=await homeObj.sortProduct()
        expect(await respond).withContext("Returning false").toBeTrue()
    })
    it("Select an item and validate colour",async()=>{
        await homeObj.addProduct()
        expect(await homeObj.$removeButton().isDisplayed()).withContext("Button is not displayed").toBeTrue()   
    })
    it("Proceed to checkout",async()=>{
        await checkoutObj.checkOut();
        expect(await checkoutObj.$lastHeader().isDisplayed()).toBeTrue()
    })
})