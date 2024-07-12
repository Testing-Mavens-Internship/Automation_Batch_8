import contact from "../../pageobjects/mavenKonnect/contact.js";
import homePageMaven from "../../pageobjects/mavenKonnect/homePageMaven.js";
import thankyouPage from "../../pageobjects/mavenKonnect/thankyouPage.js";
import checkoutPage from "../../pageobjects/mavenKonnect/checkoutPage.js";
describe("Verifying the functionality of end to end flow of 'Mavenkonnect' application", () => {
  it("Launch the url in the browser", async () => {
    await homePageMaven.launchUrl();
    var handles = await browser.getWindowHandles();
    console.log(handles);
    await homePageMaven.$homepageContactUsHeader().waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Contact us button is still not displayed in the caurosel",
    });
    expect(await homePageMaven.$homepageContactUsHeader().isDisplayed())
      .withContext("Contact us button is not displayed in the caurosel")
      .toBeTrue();
  });

  it("Window handles for multiple tabs", async () => {
    for (let i = 0; i <= 3; i++) {
      await homePageMaven.contactButtonClick();
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[0]);
    }
  });

  let fname = ["arathy", "diya", "sai"];
  let lname = ["krishna", "merin", "priya"];
  let email = ["arathy@gmail.com", "diya@gmail.com", "sai@gmail.com"];
  let phoneNumber = ["1234567", "1234567", "1234567"];
  let message = ["hello", "hello", "hi"];

  for (let j = 0; j < 3; j++) {
    it(`Enter details in the ${j + 1} contact tab`, async () => {
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[`${j + 1}`]);
      await contact.fillContactData(
        `${fname[j]} ${lname[j]}`,
        `${email[j]}`,
        `${phoneNumber[j]}`,
        `${message[j]}`
      );
      await expect(browser).toHaveUrl(
        `https://demotmwebsite.github.io/thankyou.html?fname=${fname[j]}+${lname[j]}`
      );
      await thankyouPage.$thankyouHeader().waitForDisplayed({ timeout: 5000 });
      expect(await thankyouPage.$thankyouHeader().isDisplayed())
        .withContext("First details not entered")
        .toBeTrue();
    });
  }
  it("switch to the main tab after entering the 3rd page contact details", async () => {
    const handles = await browser.getWindowHandles();
    await browser.switchWindow("https://demotmwebsite.github.io/");
    await browser.pause(2000);
    await homePageMaven.$homepageContactUsHeader().waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "profile icon is not displayed",
    });
    expect(await homePageMaven.$homepageContactUsHeader().isDisplayed())
      .withContext("profile icon is not displayed")
      .toBeTrue();
  });
  it("Validate the yellow colors of the small circles on the homepage", async () => {
    await homePageMaven.clickIndicator();
    expect(await homePageMaven.$activeIndicator().isDisplayed())
      .withContext("Active indicator is not displayed")
      .toBeTrue();
  });

  it("click the profile icon in the homepage", async () => {
    await homePageMaven.clickUserIcon();
    await checkoutPage
      .$checkoutHeader()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg: "CheckOut button is not displayed",
      });
    expect(await checkoutPage.$checkoutHeader().isDisplayed())
      .withContext("profile icon is not displayed")
      .toBeTrue();
  });

  it("Enter the details in the checkoutPage", async () => {
    await checkoutPage.fillCheckOutDetails(
      "Clinton Madhu",
      "clinton@example.com",
      "542 W.15th street",
      "New york",
      "NY",
      10001,
      "Clinton",
      "1111-2222-3333-4444",
      "september",
      2022,
      352
    );
    await thankyouPage
      .$thankyouHeader()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg: "Thankyou page is not displayed",
      });

    expect(await thankyouPage.$thankyouHeader().isDisplayed())
      .withContext("Thankyou page is not displayed")
      .toBeTrue();
  });
});
