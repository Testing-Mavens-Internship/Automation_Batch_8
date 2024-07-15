import checkOut from "../../pageobjects/MavenKonnect/checkOut.js";
import contact from "../../pageobjects/MavenKonnect/contact.js";
import homepageMaven from "../../pageobjects/MavenKonnect/homepageMaven.js";
import thankyouPage from "../../pageobjects/MavenKonnect/thankyouPage.js";

let fname=["Honey","Molgy","Treesa"];
let lname=["sebastian","sebastian","sebastian"]
let email=["honey@gmail.com","molgy@gmail.com","treesa@gmail.com"];
let phoneNumber=["66467676","66443673","64643646"];
let message=["hello","hello","hi"];

describe("Verifying the functionality of end to end flow of 'Mavenkonnect' application", () => {

  it("Launch the url in the browser", async () => {
    await homepageMaven.launchUrl();
    var handles = await browser.getWindowHandles();
    console.log(handles);
    await homepageMaven.$homepageContactUsHeader().waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Contact us button is still not displayed in the caurosel",
    });
    expect(await homepageMaven.$homepageContactUsHeader().isDisplayed())
      .withContext("Contact us button is not displayed in the caurosel")
      .toBeTrue();
  });

  it("Window handles for multiple tabs", async () => {
    for (let i = 0; i < 3; i++) {
      await homepageMaven.contactButtonClick();
      const handles = await browser.getWindowHandles();
      await browser.switchToWindow(handles[0]);
    }
  });

  for(let j=0;j<3;j++){
    it(`Enter details in the ${j+1} contact tab`, async () => {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[`${j+1}`]);
        await contact.fillContactData(`${fname[j]} ${lname[j]}`,`${email[j]}`,`${phoneNumber[j]}`,`${message[j]}`);
        await expect(browser).toHaveUrl(
          `https://demotmwebsite.github.io/thankyou.html?fname=${fname[j]}+${lname[j]}`
        );
        await thankyouPage.$thankyouHeader().waitForDisplayed({ timeout: 5000 });
        expect(await thankyouPage.$thankyouHeader().isDisplayed()).withContext("First details not entered").toBeTrue();
      });
  }

  it("Switch to the parent tab after fill the third contact details",async()=>{
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);
    await homepageMaven.$userIcon().waitForDisplayed({timeout:5000,timeoutMsg:"User iocn is still not displayed"});
    expect (await homepageMaven.$userIcon().isDisplayed()).withContext("User iocn is not displayed").toBeTrue();
  });

  it("Validate the yellow colors of the small circles on the homepage",async()=>{
    await homepageMaven.clickIndicator();
    expect(await homepageMaven.$activeIndicator().isDisplayed()).withContext("Active indicator is not displayed").toBeTrue();
  });

  it("Click the user Icon on the homepage",async()=>{
    await homepageMaven.clickUserIcon();
    await checkOut.$checkoutHeader().waitForDisplayed({timeout:5000,timeoutMsg:"checkout header is still not displayed"});
    expect(await checkOut.$checkoutHeader().isDisplayed()).withContext("checkout header is not displayed").toBeTrue();
  });

  it("Enter the details in the checkout page and validate Thankyou URL",async()=>{
    await checkOut.fillCheckoutDetails("Clinton Madhu","clinton@example.com","542 W. 15th Street","New York","NY",10001,"Clinton","1111-2222-3333-4444","September",2022,352);
    await thankyouPage.$thankyouHeader().waitForDisplayed({timeout:5000,timeoutMsg:"thankyou header is still not displayed"});
    await expect(browser).toHaveUrl(
        `https://demotmwebsite.github.io/thankyou.html?firstname=Clinton+Madhu&email=clinton%40example.com&address=542+W.+15th+Street&city=New+York&state=NY&zip=10001&cardname=Clinton&cardnumber=1111-2222-3333-4444&expmonth=September&expyear=2022&cvv=352&sameadr=on`
      );
    await thankyouPage.$thankyouHeader().waitForDisplayed({ timeout: 5000 });
    expect (await thankyouPage.$thankyouHeader().isDisplayed()).withContext("thankyou header not displayed").toBeTrue();
  });

});
