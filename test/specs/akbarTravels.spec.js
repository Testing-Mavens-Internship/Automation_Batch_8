import downloadPackageobj from "../pageobjects/AkbarTravels/downloadPackage.js";
import foodPackagesobj from "../pageobjects/AkbarTravels/foodPackagespage.js";
import holidaysobj from "../pageobjects/AkbarTravels/holdiaysPage.js";
import landingobj from "../pageobjects/AkbarTravels/landingPage.js";
import viewDetailsobj from "../pageobjects/AkbarTravels/viewDetailsPage.js";

describe('Verify that user can download the download package', () => {
    it('Launch Akbar travels website', async () => {
        await landingobj.loadUrl();
        expect(await landingobj.$landingHeader().waitForDisplayed()).toBe(true);
    });

    it('Click on Holidays', async () => {
        await landingobj.clickOnHolidays();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await holidaysobj.$holidayPageHeader().waitForDisplayed()).toBe(true);
    });

    it('click All destination menu.', async () => {
        await holidaysobj.clickAllDestination();
        expect(await holidaysobj.$allDestination().waitForClickable()).toBe(true);
    });

    it('Click on Food options', async () => {
        await holidaysobj.clickFoodOption();
        expect(await foodPackagesobj.$foodPackagesHeader().waitForDisplayed()).toBe(true);
    });

    it('check on Akbar Recommended and check on Family with kids.', async () => {
        await foodPackagesobj.checkAkbarRecommended();
    });

    it('Click on First food Packages.', async () => {
        await foodPackagesobj.clickOnFirstFoodPackageViewDetails();
        let cityheader = foodPackagesobj.$viewDetails().getText();
        let cityheaderinviewdetails = viewDetailsobj.$viewDetailHeader().getText();
        expect(cityheader).toBe(cityheaderinviewdetails);
    });

    it('Click on Download package.', async () => {
        await viewDetailsobj.clickOnDownloadPackage();
        expect(await downloadPackageobj.$downloadPackageHeader().waitForDisplayed());
    });

    it('Enter details to download package.', async () => {
        await downloadPackageobj.enterDetailsToDownloadPackage();
        expect(await downloadPackageobj.$submit().waitForClickable());
    });
    
});
