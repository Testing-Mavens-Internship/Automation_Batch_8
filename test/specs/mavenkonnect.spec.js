import contactus from "../pageobjects/mavenKonnect/contactus.js";
import homepage from "../pageobjects/mavenKonnect/homePage.js";
import landing from "../pageobjects/mavenKonnect/landingPage.js";
import payment from "../pageobjects/mavenKonnect/paymentPage.js";

const fullname = ["Aswin", "Solomon", "Nikhil"];
const email = ["aswin@gmail.com", "solomon@gmail.com", "nikhil@gmail.com"];
const phoneno = [8678987685, 8987876567, 8987675345];
const message = [
  "Testing mavens testing website for demo and training purposes !!!(1)",
  "Testing mavens testing website for demo and training purposes !!!(2)",
  "Testing mavens testing website for demo and training purposes !!!(3)",
];
const i = 0;
const paymentdetails = {
    'name':'Clinton Madhu',
    'nameoncard': 'Clinton',
    'email':'clinton@example.com',
    'address':'542 W. 15th Street',
    'creditcardnumber':'1111-2222-3333-4444',
    'city':'New York',
    'expmonth':'September',
    'state':'NY',
    'zip':10001,
    'expyear':2022,
    'cvv':352
};

describe("MavenKonnect End to End Flow", () => {
  it("Launch URL", async () => {
    await landing.launchUrl();
    expect(await landing.$mavenkonnectlogo().isDisplayed())
      .withContext("Expect Logo to be displayed")
      .toBeTrue();
  });
  it("click on Contact Us button and enter details", async () => {
    for (let i = 0; i < 3; i++) {
      await landing.clickOnContactus();
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[0]);
      await browser.pause(2000);
    }
    console.log(await browser.getWindowHandles());
  });
  for (let j = 0; j < fullname.length; j++) {
    it(`Enter Details in the Tab ${j + 1}`, async () => {
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[j + 1]);
      console.log(fullname[j]);
      await contactus.contactdetails(
        fullname[j],
        email[j],
        phoneno[j],
        message[j]
      );
      await expect(browser).toHaveUrl(
        `https://demotmwebsite.github.io/thankyou.html?fname=${fullname[j]}`
      );
    });
  }
  it("click on home from the navigation bar", async () => {
    await contactus.loadhomepage();
  });
  it("validate the corousel indicators",async()=>{
    await homepage.clickIndicator();
    expect(await homepage.$activeIndicator().isDisplayed()).withContext("Active indicator is not displayed").toBeTrue();
  });
  it('Click User icon',async()=>{
    await homepage.clickuserIcon();
    await browser.pause(10000)
  })
  it('Enter payment details in payment page', async()=>{
    await payment.enterDetails(paymentdetails.name,paymentdetails.email,paymentdetails.nameoncard,paymentdetails.address,paymentdetails.creditcardnumber,paymentdetails.city,paymentdetails.expmonth,paymentdetails.state,paymentdetails.zip,paymentdetails.expyear,paymentdetails.cvv);
  })
  
});
