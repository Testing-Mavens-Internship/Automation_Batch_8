import landingPage from "../pageobjects/mavenKonnect/landingPage.js";
import contactPage from "../pageobjects/mavenKonnect/contactPage.js";
import thankYouPage from "../pageobjects/mavenKonnect/thankyouPage.js";
import userPage from "../pageobjects/mavenKonnect/userPage.js";

let fname = ["Tony", "Akshay", "Abin"];
let lname = ["Stark", "Rogers", "Stark"];
let email = ["a@a.com", "b@b.com", "c@c.com"];
let phone = ["1234567890", "1234567890", "1234567890"];
let message = ["hello", "hello", "hello"];

let paymentDetails = {
  firstname: "Clinton Madhu",
  email: "clinton@example.com",
  nameOnCard: "Clinton",
  address: "542 W. 15th Street",
  cardNumber: "1111-2222-3333-4444",
  city: "New York",
  expMonth: "September",
  state: "NY",
  zip: "10001",
  expYear: "2022",
  cvv: "352",
};

describe("My Login application", () => {
  it("Page Load Successfully", async () => {
    await landingPage.loadUrl();
    await landingPage
      .$header()
      .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await landingPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });
  it("should handle multiple tabs successfully", async () => {
    for (let i = 0; i < 3; i++) {
      await landingPage.$contactUs().click();
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[0]);
      //   await browser.pause(2000);
    }
    console.log(await browser.getWindowHandles());
  });

  for (let j = 0; j < 3; j++) {
    it(`Enter details in the ${j + 1} contact tab`, async () => {
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[`${j + 1}`]);
      await contactPage.addDetails(
        `${fname[j]} ${lname[j]}`,
        `${email[j]}`,
        `${phone[j]}`,
        `${message[j]}`
      );
      await expect(browser).toHaveUrl(
        `https://demotmwebsite.github.io/thankyou.html?fname=${fname[j]}+${lname[j]}`
      );
      await thankYouPage.$thankYouHeader().waitForDisplayed({ timeout: 5000 });
      expect(await thankYouPage.$thankYouHeader().isDisplayed())
        .withContext("First details not entered")
        .toBeTrue();
    });
  }
  it("Validate the yellow colors of the small circles on the homepage", async () => {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);
    await landingPage.clickIndicator();
    expect(await landingPage.$activeIndicator().isDisplayed())
      .withContext("Active indicator is not displayed")
      .toBeTrue();
  });

  it(`Click on user button`, async () => {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);
    await landingPage.clickUser();
    await userPage
      .$header()
      .waitForDisplayed({ timeout: 5000, timeoutMsg: "User page not loaded" });
  });

  it(`Enter details in the user tab`, async () => {
    await userPage.addDetails(
      paymentDetails.firstname,
      paymentDetails.email,
      paymentDetails.nameOnCard,
      paymentDetails.address,
      paymentDetails.city,
      paymentDetails.state,
      paymentDetails.zip,
      paymentDetails.cardNumber,
      paymentDetails.expMonth,
      paymentDetails.expYear,
      paymentDetails.cvv
    );
    await expect(browser).toHaveUrlContaining(`${paymentDetails.expMonth}`);
    await thankYouPage.$thankYouHeader().waitForDisplayed({ timeout: 5000 });
    expect(await thankYouPage.$thankYouHeader().isDisplayed())
      .withContext("First details not entered")
      .toBeTrue();
  });

  
});
