import landingPage from "../../pageobjects/lambda/landingPage.js";
import registerPage from "../../pageobjects/lambda/registerPage.js";
import registerSuccess from "../../pageobjects/lambda/registerSuccess.js";

let registerDetails = {
    fname: "Honey",
    lname: "Sebastian",
    email: "honey@gamil.com",
    phone: "444444444444",
    password: "22222",
  };

describe("Lambda Testing", () => {
    it("Launch the URL in the browser", async () => {
      await landingPage.launchUrl();
      await landingPage
        .$header()
        .waitForDisplayed({
          timeout: 10000,
          timeoutMsg: "Header is still not visible",
        });
      expect(await landingPage.$header().isDisplayed())
        .withContext("header is not visible")
        .toBeTrue();
    });
    it("Hover on 'My Account' ", async () => {
        await landingPage.hoverMyAccount();
        await landingPage
          .$loginButton()
          .waitForDisplayed({
            timeout: 10000,
            timeoutMsg: "Header is not visible",
          });
        expect(await landingPage.$loginButton().isDisplayed())
          .withContext("header should be visible")
          .toBeTrue();
      });
      it("Click on the register button",async()=>{
        await landingPage.clickRegister();
        await registerPage.$header().waitForDisplayed({timeout:10000,timeoutMsg:"Header is still not displayed"});
        expect (await registerPage.$header().isDisplayed()).withContext("Header is not displayed").toBeTrue();

      })
      it("Enter the details in the register page",async()=>{
        await registerPage.register(
            registerDetails.fname,
            registerDetails.lname,
            registerDetails.email,
            registerDetails.phone,
            registerDetails.password,
            registerDetails.password
        );
        await registerSuccess.$header().waitForDisplayed({timeout:10000,timeoutMsg:"Header is still not displayed"});
        expect (await registerSuccess.$header().isDisplayed()).withContext("Header is not displayed").toBeTrue();
      });

      it("Click on Continue button",async()=>{

      });
});