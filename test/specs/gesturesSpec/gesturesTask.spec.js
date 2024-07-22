import gestureoneObj from "../../pageobjects/gesturesTask/gestureTaskOne.js"
import { Axios } from "axios"
describe("Testing on various gesture tasks",()=>{
    it("Launch url and validate header",async()=>{
        await gestureoneObj.loadurl()
        expect(await gestureoneObj.$pageheader().isDisplayed()).toBeTrue();
    })
    // it("Move the box",async()=>{
    //     await gestureoneObj.movebox()
    // })
    // it("Move image",async()=>{
    //     await gestureoneObj.moveimg()
    // })
    // it("Validate api status code",async()=>{
    //     await gestureoneObj.teststatus();
    //     const res=await gestureoneObj.teststatus()
    //     expect(res.status).toBe(404)
    // })
    it("Calender date entering",async()=>{
        await gestureoneObj.calender()
        // expect(await gestureoneObj.$finalDate().isDisplayed()).toBeTrue()
    })
    
})