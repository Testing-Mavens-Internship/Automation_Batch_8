import landObj from "../../pageobjects/ecommerceTask/ecommerceLanding.js"

describe("End to end flow of target ecommerce site",()=>{
    it("Launch url and validate header",async()=>{
        await landObj.loadurl();
        expect(await landObj.$landingpageheader().isDisplayed()).toBeTrue();
    })
    it("Check tabs are present and validate",async()=>{
        
    })
})