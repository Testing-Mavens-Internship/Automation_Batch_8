import landingPage from "../pageobjects/akbarTravels/landingPage.js";
import holidayPage from "../pageobjects/akbarTravels/holidayPage.js";
import foodPage from "../pageobjects/akbarTravels/foodPage.js";
import packagePage from "../pageobjects/akbarTravels/packagePage.js";
const time=5000;

let details = {
  name: "Akbar",
  email: "wXlXU@example.com",
  phone: "1234567890",
};

describe("Automate Akbar Travels website", () => {
  it("Open Akbar Travels website", async () => {
    await landingPage.loadUrl();
    await landingPage
      .$header()
      .waitForDisplayed({ timeout: time, timeoutMsg: "Header is not visible" });
    expect(await landingPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Click on the Holiday and Go to the Holiday page by window handling ", async () => {
    await landingPage.clickHoliday();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await holidayPage
      .$holidayHeader()
      .waitForDisplayed({
        timeout: time,
        timeoutMsg: "Holiday page is not visible",
      });
    expect(await holidayPage.$holidayHeader().isDisplayed())
      .withContext("Holiday page should be visible")
      .toBeTrue();
    
  });

  it("Click on the All Destinations  ", async () => {
    await holidayPage.clickAllDestination();
    await expect(holidayPage.$allDestination()).toHaveAttribute('class', expect.stringContaining('active'))

  });

  it("Click on the Food  ", async () => {
    await holidayPage.clickFood();
    await foodPage.$foodHeader().waitForDisplayed({
      timeout: time,
      timeoutMsg: "Food page is not visible",
    })
    expect(await foodPage.$foodHeader().isDisplayed())
      .withContext("Food page should be visible")
      .toBeTrue();
  });

  it("Click on the filters", async () => {
    await foodPage.clickFilter();
    await foodPage.$sortMenu().waitForDisplayed({
      timeout: time,
      timeoutMsg: "Filter menu is not visible",
    })
    expect(await foodPage.$sortMenu().isDisplayed())
      .withContext("Filter menu should be visible")
      .toBeTrue();

  });

  it("Select package details related to package name", async () => {
    await foodPage.clickPackageDetail();
    
    await packagePage.$header().waitForDisplayed({
      timeout: time,
      timeoutMsg: "Package page is not visible",
    })
    expect(await packagePage.$header().isDisplayed())
      .withContext("Package page should be visible")
      .toBeTrue();
  });

  it(`Download the Package Details`, async () => {
    await packagePage.downloadPackage();
    await packagePage.$downloadMenuHeader().waitForDisplayed({
      timeout: time,
      timeoutMsg: "Download menu is not visible",
    })
    expect(await packagePage.$downloadMenuHeader().isDisplayed())
      .withContext("Download menu should be visible")
      .toBeTrue();
  });

  it(`Enter Details in the page`, async () => {
    await packagePage.enterDetails(details.name, details.email, details.phone);
    await packagePage.$submitButton().waitForClickable({
      timeout: time,
      timeoutMsg: "Submit button is not visible",
    })
    expect(await packagePage.$submitButton().isClickable())
      .withContext("Submit button should be visible")
      .toBeTrue();
  });
  it("Download the file", async () => {
    await packagePage.downloadFile();
    await browser.pause(time);
    await packagePage.$downloadSuccessMsg().waitForDisplayed({
      timeout: time,
      timeoutMsg: "Download success message is not visible",
    })
    expect(await packagePage.$downloadSuccessMsg().isDisplayed())
      .withContext("Download success message should be visible")
      .toBeTrue();
  });
  it("Click OK and back to Package Page", async () => {
    await packagePage.downloadSuccessMsg();
    await packagePage.$header().waitForDisplayed({
      timeout: time,
      timeoutMsg: "Package page is not visible",
    })
    expect(await packagePage.$header().isDisplayed())
      .withContext("Package page should be visible")
      .toBeTrue();
})



});
