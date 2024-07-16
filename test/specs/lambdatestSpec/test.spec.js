import landingPage from "../../pageobjects/lambdatest/landingPage.js";
import registerPage from "../../pageobjects/lambdatest/registerPage.js";
import regsuccessPage from "../../pageobjects/lambdatest/regsuccessPage.js";
import accountPage from "../../pageobjects/lambdatest/accountPage.js";
import Editinfo from "../../pageobjects/lambdatest/editPage.js";
import productPage from "../../pageobjects/lambdatest/productPage.js";

let regDetails = {
  fname: "Tony",
  lname: "Stark",
  email: "aassasa@a2111asaa.com",
  phone: "1234567890",
  password: "12345",
};
let filterByPrice = {
  min: "1008",
  max: "20000",
};

describe("Lambda Testing", () => {
  it("Load the page successfully", async () => {
    await landingPage.loadUrl();
    await landingPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await landingPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Hover on My Account", async () => {
    await landingPage.hoverMyAccount();
    await landingPage.$loginButton().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await landingPage.$loginButton().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Click on Register", async () => {
    await landingPage.clickRegister();
    await registerPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await registerPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Enter registration details", async () => {
    await registerPage.register(
      regDetails.fname,
      regDetails.lname,
      regDetails.email,
      regDetails.phone,
      regDetails.password,
      regDetails.password
    );
    await regsuccessPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await regsuccessPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Click on Continue", async () => {
    await regsuccessPage.clickContinue();
    await accountPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await accountPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Click on Edit Account", async () => {
    await accountPage.clickEditAccount();
    await Editinfo.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await Editinfo.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Change Last Name", async () => {
    await Editinfo.changeLastName();
    await Editinfo.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await Editinfo.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("click on continue", async () => {
    await Editinfo.clickContinue();
    await accountPage.$successAlert().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await accountPage.$successAlert().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Click on Home Icon", async () => {
    await accountPage.clickHomeIcon();
    await landingPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await landingPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Click in the first product from Top Trending Product", async () => {
    await landingPage.clsickOnFirstTresndingProduct();
    await productPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Filter by Price", async () => {
    await productPage.filterByPrice(filterByPrice.min, filterByPrice.max);
    await productPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    await browser.pause(30000);
  });

  it("Sort elements in Z-A order", async () => {
    await productPage.sortLowToHigh();
    await productPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    await browser.pause(30000);
  });

  it("Clear filter", async () => {
    await productPage.clearFilter();
    await productPage.$header().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    await browser.pause(30000);
  });
});
it("Click on instock button", async () => {
  await productPage.inStock();
  await productPage.$header().waitForDisplayed({
    timeout: 10000,
    timeoutMsg: "Header is not visible",
  });
  expect(await productPage.$header().isDisplayed())
    .withContext("header should be visible")
    .toBeTrue();
  // await browser.pause(30000)
});

it("Click on the Apple button", async () => {
  await productPage.clickApple();
  await productPage.$header().waitForDisplayed({
    timeout: 10000,
    timeoutMsg: "Header is not visible",
  });
  expect(await productPage.$header().isDisplayed())
    .withContext("header should be visible")
    .toBeTrue();
  await browser.pause(3000);
});

it("Click on A-Z button", async () => {
  await productPage.sortAtoZ();
  await productPage.$header().waitForDisplayed({
    timeout: 10000,
    timeoutMsg: "Header is not visible",
  });
  expect(await productPage.$header().isDisplayed())
    .withContext("header should be visible")
    .toBeTrue();
  await browser.pause(3000);
});

it("Hover on the product and Click on Add to cart", async () => {
  await productPage.hoverOnProduct();

  await productPage.clickAddToCart();
});

it("Select the size select size and add to cart", async () => {
  await productDetail.selectSize();
  await productDetail.addToCart();
  await productPage().isDisplayed();
});

// it("click on the cart icon", async () => {
//   await productPage.clickCart();
