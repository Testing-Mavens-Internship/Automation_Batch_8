import landingPage from "../pageobjects/akburBus/landingPage.js";
import busPage from "../pageobjects/akburBus/busPage.js";
import travelPage from "../pageobjects/akburBus/travelPage.js";

const time=5000;
let fromCity="Mumbai"
let toCity="Delhi"

describe("Open the akbar Travels website and automate the flow for booking a bus ticket from mumbai to delhi", () => {
    it("Open Akbar Travels website", async () => {
      await landingPage.loadUrl();
      await landingPage
        .$header()
        .waitForDisplayed({ timeout: time, timeoutMsg: "Header is not visible" });
      expect(await landingPage.$header().isDisplayed())
        .withContext("header should be visible")
        .toBeTrue();
    });

    it("Click on the bus option and go to the bus page by window handling",async ()=>{
        await landingPage.clickBus();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await busPage
        .$header()
        .waitForDisplayed({ timeout: time, timeoutMsg: "Bus page is not visible" });
        expect(await busPage.$header().isDisplayed())
        .withContext("Bus page should be visible")
        .toBeTrue();
    })

    it("Set the From and To location ",async ()=>{
        await busPage.setPoints(fromCity,toCity)
        
    })
    it("Select the date ",async ()=>{
        await busPage.selectDate()
    })

    it("untick the AC button",async ()=>{
        await travelPage.selectAC()
    })

    it("Select the Safar button",async ()=>{
        await travelPage.selectSafar()
    })

})