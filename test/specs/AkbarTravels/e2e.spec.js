import confirmation from "../../pageobjects/AkbarTravels/confirmation.js";
import food from "../../pageobjects/AkbarTravels/food.js";
import holiday from "../../pageobjects/AkbarTravels/holiday.js";
import homepage from "../../pageobjects/AkbarTravels/homepage.js"
const time = 5000;
const userName = "Highlights of Turkey"
describe(`Verify that the user can download package details`, () => {
    it(`Load the url`, async () => {
        await homepage.loadUrl();
        await homepage.$homepageHeader().waitForDisplayed({ timeout: time, timeoutMsg: "Homepage is not loaded." });
        expect(await homepage.$homepageHeader()).toBeDisplayed();
    })

    it(`Click on the holidays tab.`, async () => {
        await homepage.clickOnHolidayTab();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await homepage.$holidayHeader().waitForDisplayed({ timeout: time, timeoutMsg: "holiday page is not loading" });
        expect(await homepage.$holidayHeader()).toBeDisplayed();
    })

    it(`Scroll down to the 'Browser by Experience' session`, async () => {
        await holiday.scrollToLocation();
        await holiday.$allDestinations().waitForDisplayed({ timeout: time, timeoutMsg: "Scroll is not working" })
    })

    it(`Click 'all destination' tab.`, async () => {
        await holiday.allDestinations();
        await expect(holiday.$allDestinations()).toHaveAttribute('class', expect.stringContaining('active'))
    })

    it(`Click on the 'food' category from the 'Browser by Experience' session.`, async () => {
        await holiday.clickingFood();
        await food.$foodHeader().waitForDisplayed({ timeout: time, timeoutMsg: "Food page is not loading" });
        expect(await food.$foodHeader()).toBeDisplayed();
    })

    it(`In the recomended session Click on the 'Akbar Recomented' and 'Family with Kids'`, async () => {
        await food.$scrollToRecomend().scrollIntoView();
        await food.clickFilter();
       
    })

    it(`Click on the view details Button.`, async () => {
        await food.clickPackageDetail(userName);
        await expect(food.$placeHeading()).toHaveText(userName);
    })

    it(`Download the package details by entering the details.`, async () => {
        await confirmation.enterDetails("solomon", "solomon@gmail.com", "6282052811");
        await confirmation.Download();
        await confirmation.$submitButton().click();
        await confirmation.$okbtn().click();
    })
})