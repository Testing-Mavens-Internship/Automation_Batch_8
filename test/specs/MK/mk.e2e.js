import landing from "../../pageobjects/mavensKonnect/mkLanding.js"
describe("MavensKonnect Enquiry Process",()=>{
    it("Launch URL",async()=>{
        await landing.loadurl();
        expect(await landing.$landheader().isDisplayed()).toBeTrue();
        await browser.pause(3000)
    })
})