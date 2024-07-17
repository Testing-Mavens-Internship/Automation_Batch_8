import confirmationPage from '../pageobjects/akbarTravels/confirmation.js';
import foodPage from "../pageobjects/akbarTravels/foodPage.js";
import holidayPage from "../pageobjects/akbarTravels/holiday.js";
import homePage from "../pageobjects/akbarTravels/landing.js";

const time = 5000;
const userName = "Highlights of Turkey"

describe(`Verify that the user can download package details`, () => {
    it(`Load the url`, async () => {
        await homePage.loadUrl();
        expect(await homePage.$homepageHeader().isDisplayed())
            .withContext('Page is loaded')
            .toBeTrue();
    })

    it(`Click on the holidays tab.`, async () => {
        await homePage.clickOnHolidayTab();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await homePage.$holidayHeader().isDisplayed())
            .withContext('Holiday page is loaded')
            .toBeTrue();
    })

    it(`Scroll down to the 'Browser by Experience' session`, async () => {
        await holidayPage.scrollToLocation();
        expect(await holidayPage.$allDestinations().isDisplayed())
            .withContext('Scroll down to select All destinations')
            .toBeTrue();
    })

    it(`Click 'all destination' tab.`, async () => {
        await holidayPage.allDestinations();
        expect(await holidayPage.$allDestinations())
            .toHaveAttribute('class', expect.stringContaining('active'))
    })

    it(`Click on the 'food' category from the 'Browser by Experience' session.`, async () => {
        await holidayPage.clickingFood();
        expect(await foodPage.$foodHeader().isDisplayed())
            .withContext('Food page is loaded')
            .toBeTrue();
    })

    it(`In the recomended session Click on the 'Akbar Recomented' and 'Family with Kids'`, async () => {
        await foodPage.$scrollToRecomend().scrollIntoView();
        await foodPage.clickFilter();
        await browser.pause(5000);
    })

    it(`Click on the view details Button.`, async () => {
        await foodPage.clickPackageDetail(userName);
        expect(await foodPage.$usernameHeading()).toHaveText(userName);
    })

    it(`Download the package details by entering the details.`, async () => {
        await confirmationPage.enterDetails("Aleena", "Aleena@gmail.com", "7510817131");
        await confirmationPage.Download();
        await confirmationPage.$submitButton().click();
        await confirmationPage.$okbtn().click();
    })
})