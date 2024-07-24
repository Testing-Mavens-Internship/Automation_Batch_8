import landingPage from "../pageobjects/Target/landingPage.js"

let navBarItems=["Categories","Deals","New & featured","Pickup & delivery"]
let searchItem=Shirt;


describe("Automating the flow in Target", () => {
    it("Load the page successfully", async () => {
        await landingPage.loadUrl()
        expect(await landingPage.$header().isDisplayed())
    })
    it("Validate items in the navigation bar", async () => {
       let navigationArray= await landingPage.validateNavBar()
       expect(navigationArray).toEqual(navBarItems)
    })

    it("Click on the search box", async () => {
        await landingPage.clickSearch(searchItem)
    })

})