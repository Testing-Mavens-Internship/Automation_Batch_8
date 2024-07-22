import apiObj from "../../pageobjects/apiPlayGround/apiTask.js"
describe("Validate Api response of the site qa playground",()=>{
    it("Load url and validate header",async()=>{
        await apiObj.loadurl();
        expect(await apiObj.$header().isDisplayed()).toBeTrue()
    })
    it("Validate api response",async()={
        
    })
})