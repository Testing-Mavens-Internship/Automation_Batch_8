import landPage from "../../pageobjects/mavenKonnect/mk_landingPage.js";
import contactUs from "../../pageobjects/mavenKonnect/mk_contactUsPage.js";
import checkOutPage from "../../pageobjects/mavenKonnect/mk_checkOutPage.js";

let fName = ["Krishna", "Aleena", "Honey"];
let lName = ["K", "Shaji", "Bee"];
let email = ["krishna@gmail.com", "aleena@gmail.com", "honey@gmail.com"];
let phoneNo = ["9494839473", "9463869362", "9067453748"];
let msg = ["Hello1", "Hello2", "Hello3"];


let paymentDetails={
    "firstname":"Clinton Madhu",
    "email":"clinton@example.com",
    "nameOnCard":"Clinton",
    "address":"542 W. 15th Street",
    "cardNumber":"1111-2222-3333-4444",
    "city":"New York",
    "expMonth":"September",
    "state":"NY",
    "zip":"10001",
    "expYear":"2022",
    "cvv":"352",

}

describe("Verifying the end to end flow of the MavenKonnect web application.", () => {
  it("Launch the URL of the web application.", async () => {
    await landPage.loadUrl();
    await landPage
      .$mavenKonnectHeader()
      .waitForDisplayed({ timeout: 9000, timeoutMsg: "Header not Displayed." });
    expect(await landPage.$mavenKonnectHeader().isDisplayed()).toBeTrue();
  });

  it("Contact us button opening new tabs.", async () => {
    for (let i = 0; i < 3; i++) {
      await landPage.clickContactUs();
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[0]);
      await browser.pause(2000);
    }
    console.log(await browser.getWindowHandles());
  });

  for (let i = 0; i < 3; i++) {
    it(`Enter details in tab ${i + 1}`, async () => {
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[i + 1]);
      await browser.pause(2000);
      await contactUs.enterDetails(
        `${fName[i]} ${lName[i]}`,
        email[i],
        phoneNo[i],
        msg[i]
      );
      expect(await contactUs.$thankYouMsg().isDisplayed()).toBeTrue();
      await expect(browser).toHaveUrl(`https://demotmwebsite.github.io/thankyou.html?fname=${fName[i]}+${lName[i]}`);
    });
}

      it("Validate the yellow colors of the small circles on the homepage",async()=>{
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        await landPage.clickDots();
        expect(await landPage.$yellowDot().isDisplayed()).withContext("Active indicator is not displayed").toBeTrue();
      });

    })
    it("Click on the user icon.",async()=>{
        await landPage.clickUserIcon();
        await checkOutPage.$checkOutHeader().waitForDisplayed({timeout:6000,timeoutMsg:"Header not displayed."})
        expect(await checkOutPage.$checkOutHeader().isDisplayed()).toBeTrue();

    })
    
    it("Enter the details and Checkout.",async()=>{
            await checkOutPage.addDetails(
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
    })


