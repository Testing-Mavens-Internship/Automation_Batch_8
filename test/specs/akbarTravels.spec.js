import landingPage from "../pageobjects/akbarTravels/landingPage.js";
import holidayPage from "../pageobjects/akbarTravels/holidaysPage.js";
import foodPage from "../pageobjects/akbarTravels/foodPage.js";
import packagePage from "../pageobjects/akbarTravels/packagePage.js";

let details={
    name:"krishna",
    email:"krishna@gmail.com",
    phone:"9678563748"
}

describe('Download a travel package with the given criteria', () => {

    it('Launch the website', async () => {
        await landingPage.loadUrl();
        await landingPage.$mainHeader().waitForDisplayed({timeout: 2000, timeoutMsg: 'Header is not visible'})
        expect(await landingPage.$mainHeader().isDisplayed()).toBeTrue();

    })
   it('Click on the Holiday option and Go to the Holiday page by window handling ',async () => {

        await landingPage.clickHolidayIcon();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await holidayPage.$holidayHeader().isDisplayed()).withContext("Holiday page should be visible").toBeTrue();

    })

    it('Click on the All Destinations option present in the Holidays page.  ',async () => {

        await holidayPage.clickAllDestination();
        expect(await holidayPage.$foodOption().isDisplayed()).toBeTrue();

    })

    it('Click on the Food option. ',async () => {
        await holidayPage.clickFood();
        expect (await foodPage.$foodHeader().isDisplayed()).toBeTrue();
    })


    it('Click on the Family with Kids filters',async()=>{
        await foodPage.clickFilter()
        expect(await foodPage.$famWithKid().isDisplayed()).toBeTrue();
    })

    it('Select package details related to package name',async()=>{
        await foodPage.clickPackageDetail()
        expect(await packagePage.$downloadButton().isDisplayed()).toBeTrue();

    })
    it(`Download the travel package details by entering the details.`, async () => {
        await packagePage.enterDetails("krishna", "krishnakk@gmail.com", "9567483645");
        await packagePage.download();
        await packagePage.$submitButton().click();
        await packagePage.$okButton().click();
        expect(await packagePage.$thankYouForDownloadingMsg().isDisplayed()).withContext("Message not displayed").toBeTrue();
    })

    
})