import timerPage from "../pageobjects/timerStop/timerPage.js";

describe("Timer Application", () => {
    it("Load the page successfully", async () => {
        await timerPage.loadUrl()
        expect(await timerPage.$progressBar().isDisplayed())
    })
    it("Click on start button", async () => {
        await timerPage.clickStart()
    })
    it("Click on stop button", async () => {
       await timerPage.clickstopAt75()
    })
    
})