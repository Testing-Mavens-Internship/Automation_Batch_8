import carPage from "../../pageobjects/akbarTravels2/carPage.js";
import homepage from "../../pageobjects/akbarTravels2/homepage.js";
const time=5000;
describe(`Verify that the user is able to `, () => {
    it(`Load the url`, async () => {
        await homepage.loadUrl();
        await homepage.$homepageHeader().waitForDisplayed({ timeout: time, timeoutMsg: "Homepage is not loaded." });
        await expect(homepage.$homepageHeader()).withContext(`Homepage is loaded.`).toBeDisplayed();
    })

    it(`Clicking the car tab.`, async () => {
        await homepage.clickingCar();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await carPage.$carPageLogo().waitForDisplayed({ timeout: time, timeoutMsg: "Car page is not loaded." });
        await expect(carPage.$detailsHeading()).withContext(`Details entering box is loaded.`).toBeDisplayed();
    })

    it(`Clicking the car tab.`, async () => {
        await carPage.enteringDetails();
        let price= await carPage.$price().getText();
        let finalprice= await carPage.$finalprice().getText();
        console.log(finalprice);
        // let carName= await carPage.$carName().getText();
        // let KM= await carPage.$kilometers().getText();
        // let Kilometer=KM.split()
        await carPage.$carName().waitForDisplayed({ timeout: time, timeoutMsg: "Car name is not loaded." });
        await expect(carPage.$carName()).withContext(`Car Name is not loaded.`).toBeDisplayed();
        await expect(price).withContext(`Car Name is not loaded.`).toBe(finalprice);
    })
})