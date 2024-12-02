import landingPage from "../pageobjects/petStore/landingPage.js"

describe("Pet Store Application", () => {
    it("Load the page successfully", async () => {
        await landingPage.loadUrl()
        expect(await landingPage.$header().isDisplayed()
        .withContext('header should be visible')
        .toBeTrue()   
    )
    })

    it("Click on sign in button", async () => {
        await landingPage.clickSignIn()
        expect(await landingPage.$signInHeader().isDisplayed()
        .withContext('header should be visible')
        .toBeTrue()
        )
    })

    it("Click on the register now button", async () => {
        await landingPage.clickRegisterNow()
        
    })

    
    


})