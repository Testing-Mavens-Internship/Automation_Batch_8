import landobj from "../../pageobjects/Automation/at-landing.js"
import homeobj from "../../pageobjects/Automation/at-home.js"
describe("New Task for Automation Testing",()=>{
    it("Launch url and enter email",async()=>{
        await landobj.loadurl();
        await landobj.enteremail();
    })
    it("Enter Details",async()=>{
        await homeobj.enterdetail()
    })
    it("Upload file",async()=>{
        await homeobj.upload()
    })

})