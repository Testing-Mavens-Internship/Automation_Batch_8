import cartpage from "../pageobjects/maven_konnect/cartpage.js";
import contactpage from "../pageobjects/maven_konnect/contactpage.js";
import homepage from "../pageobjects/maven_konnect/homepage.js";

let fname = ["aaa", "bbb", "ccc"];
let lname = ["ppp", "qqq", "rrr"];
let email = ["a@gmail.com", "b@gmail.com", "c@gmail.com"];
let phone = ["7867810221", "8970120110", "9801219001"];
let message = ["hi", "hello", "welcome"];

let paymentDetails={
    "fullname":"Clinton Madhu",
    "email":"clinton@example.com",
    "address":"542 W. 15th Street",
    "city":"New York",
    "state":"NY",
    "zip":"10001",
    "cardNumber":"1111-2222-3333-4444",
    "cardName":"Clinton",
    "expmonth":"September",
    "expyear":"2022",
    "cvv":"352"
}

describe("Fill contact us form using window handler and check other functionalities", () => {
  it("Launch URL", async () => {
    await homepage.launchURL();
    expect(await homepage.$header().isDisplayed())
      .withContext("Header is not displayed")
      .toBeTrue();
  });
  it("Switch windows using windowHandler", async () => {
    for (let i = 0; i < 3; i++) {
      await homepage.clickBtn();
      const handles = await browser.getWindowHandles();
      console.log(handles);
      await browser.switchToWindow(handles[0]);
      await browser.pause(2000);
    }
  });
  for (let j = 0; j < 3; j++) {
    it(`Enter values in tab ${j + 1}`, async () => {
      const handles = await browser.getWindowHandles();
      console.log(handles);
      await browser.switchToWindow(handles[`${j + 1}`]);
      await contactpage.enterDetails(
        `${fname[j]} ${lname[j]}`,
        `${email[j]}`,
        `${phone[j]}`,
        `${message[j]}`
      );
      await expect(browser).toHaveUrl(
        `https://demotmwebsite.github.io/thankyou.html?fname=${fname[j]}+${lname[j]}`
      );
      expect(await contactpage.$thankyou().isDisplayed())
        .withContext("Thank you message is not displayed")
        .toBeTrue();
    });
  }
  it("Validate the yellow colors of the small circles on the homepage",async()=>{
    const handles = await browser.getWindowHandles();
    console.log(handles);
    await browser.switchToWindow(handles[0]);
    await homepage.validatecolor()
    expect(await homepage.$activecircle().isDisplayed()).withContext('Active indicator not displayed').toBeTrue()
  });

  it("Click on user icon in parent window", async () => {
    // const handles = await browser.getWindowHandles();
    // console.log(handles);
    // await browser.switchToWindow(handles[0]);
    await homepage.clickUserIcon();
    expect(await cartpage.$cartheader().isDisplayed())
      .withContext("Cart header not diplayed")
      .toBeTrue();
  });

  it("Perform checkout", async () => {
    await cartpage.checkoutinfo(paymentDetails.fullname,paymentDetails.email,paymentDetails.address,paymentDetails.city,paymentDetails.state,paymentDetails.zip,paymentDetails.cardName,paymentDetails.cardName,paymentDetails.expmonth,paymentDetails.expyear,paymentDetails.cvv)
    if(await browser.isAlertOpen())
    {
        await browser.acceptAlert()
    }
    await expect(browser).toHaveUrl(expect.stringContaining(`${paymentDetails.expmonth}`))
    expect(await contactpage.$thankyou().isDisplayed()).toBeTrue()
});
});
