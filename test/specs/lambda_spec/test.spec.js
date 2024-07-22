import editAccountInfo from "../../pageobjects/lambda/editAccountInfo.js";
import homePage from "../../pageobjects/lambda/homePage.js";
import landingPage from "../../pageobjects/lambda/landingPage.js";
import myAccount from "../../pageobjects/lambda/myAccount.js";
import productCategory from "../../pageobjects/lambda/productCategory.js";
import registerPage from "../../pageobjects/lambda/registerPage.js";
import registerSuccess from "../../pageobjects/lambda/registerSuccess.js";

let registerDetails = {
  fname: "Honey",
  lname: "Sebastian",
  phone: "444444444444",
  password: "22222",
};

describe("Lambda Testing", () => {
  it("Launch the URL in the browser", async () => {
    await landingPage.launchUrl();
    await landingPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is still not visible",
    });
    expect(await landingPage.$header().isDisplayed())
      .withContext("header is not visible")
      .toBeTrue();
  });

  it("Hover on 'My Account' ", async () => {
    await landingPage.hoverMyAccount();
    await landingPage.$loginButton().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await landingPage.$loginButton().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Click on the register button", async () => {
    await landingPage.clickRegister();
    await registerPage
      .$header()
      .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is still not displayed",
      });
    expect(await registerPage.$header().isDisplayed())
      .withContext("Header is not displayed")
      .toBeTrue();
  });

  it("Enter the details in the register page", async () => {
    let email = await landingPage.generateRandomEmail();
    await registerPage.register(
      registerDetails.fname,
      registerDetails.lname,
      email,
      registerDetails.phone,
      registerDetails.password,
      registerDetails.password
    );
    await registerSuccess
      .$header()
      .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is still not displayed",
      });
    expect(await registerSuccess.$header().isDisplayed())
      .withContext("Header is not displayed")
      .toBeTrue();
  });

  it("Click on Continue button", async () => {
    await registerSuccess.clickContinue();
    await myAccount
      .$editAccount()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg: "Edit account information label is still not displayed",
      });
    expect(await myAccount.$editAccount().isDisplayed())
      .withContext("Edit account information label is not displayed")
      .toBeTrue();
  });

  it("Click on 'Edit your account information' option", async () => {
    await myAccount.clickEditInfo();
    await editAccountInfo
      .$infoHeader()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg: "'My Account information' is still not displayed",
      });
    expect(await editAccountInfo.$infoHeader().isDisplayed())
      .withContext("'My Account information' is still not displayed")
      .toBeTrue();
  });

  it("Edit the last name ", async () => {
    await editAccountInfo.editInfo("Joseph");
    await myAccount
      .$successfullEditMessage()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg:
          " 'Success: Your account has been successfully updated.' is still not displayed",
      });
    expect(await myAccount.$successfullEditMessage().isDisplayed()).withContext(
      "'Success: Your account has been successfully updated.' is not displayed"
    );
  });

  it("Click on 'Home' option in the top of the page", async () => {
    await myAccount.clickHome();
    await homePage
      .$homepageHeader()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg: "'Top trending Categories' is still not displayed",
      });
    expect(await homePage.$homepageHeader().isDisplayed()).withContext(
      "'Top trending Categories' is still not displayed"
    );
  });

  it("Click on the first option under the 'top trending categories'", async () => {
    await homePage.clickFirstItem();
    await productCategory
      .$priceLabel()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg: "Price label is still not displayed",
      });
    expect(await productCategory.$priceLabel().isDisplayed())
      .withContext("Price label is not displayed")
      .toBeTrue();
  });

  it("Set minimum and maximum price range", async () => {
    await productCategory.setMinMax(1008, 2000);
    await productCategory
      .$sortOption()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg: "'Sort By' option is still not displayed",
      });
    expect(await productCategory.$sortOption().isDisplayed()).withContext(
      "'Sort By' option is not displayed"
    );
  });

  it("Sort products by price low to high", async () => {
    await productCategory.sortPriceLowToHigh();

    let prices = await productPage.sortPrice();
    let sortedPrices = prices.sort((a, b) => a - b);
    await expect(prices).toEqual(sortedPrices);
  });
});
