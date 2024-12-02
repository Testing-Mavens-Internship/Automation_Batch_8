import landingPage from "../pageobjects/lambdaTesting/landingPage.js";
import registerPage from "../pageobjects/lambdaTesting/registerPage.js";
import regsuccessPage from "../pageobjects/lambdaTesting/regsuccessPage.js";
import accountPage from "../pageobjects/lambdaTesting/accountPage.js";
import editPage from "../pageobjects/lambdaTesting/editPage.js";
import productPage from "../pageobjects/lambdaTesting/productPage.js";
import productDetail from "../pageobjects/lambdaTesting/productDetail.js";

function randEmail(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

let regDetails = {
  fname: "Tony",
  lname: "Stark",
  email: randEmail(5)+"@email.com",
  phone: "1234567890",
  password: "12345",
};
let filterByPrice = {
  min: "1008",
  max: "20000",
};
// let appleProducts=['Apple','Mac','iPhone','iPad'];

describe("Lambda Testing", () => {
  it("Load the page successfully", async () => {
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

  it("Hover on My Account", async () => {
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

  it("Click on Register", async () => {
    await landingPage.clickRegister();
    await registerPage
      .$header()
      .waitForDisplayed({
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
    await regsuccessPage.$header()
      .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await regsuccessPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it("Click on Continue", async () => {
    await regsuccessPage.clickContinue();
    await accountPage
      .$header()
      .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await accountPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  });

  it ("Click on Edit Account", async () => {
    await accountPage.clickEditAccount();
    await editPage
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await editPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  })

  it("Change Last Name", async () => {
    await editPage.changeLastName();
    await editPage
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await editPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  })

  it("click on continue", async () => {
    await editPage.clickContinue();
    await accountPage
    .$successAlert()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await accountPage.$successAlert().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  })

  it("Click on Home Icon", async () => {
    await accountPage.clickHomeIcon();
    await landingPage
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await landingPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  })

  it("Click in the first product from Top Trending Product", async () => {
    await landingPage.clsickOnFirstTresndingProduct();
    await productPage
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  })

  it("Filter by Price", async () => {
    await productPage.filterByPrice(filterByPrice.min, filterByPrice.max);
    await productPage
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    // await browser.pause(30000)
  })

  it("sort the prices of the products from low to high and validate it.", async () => {
    await productPage.sortPrice();


    let prices = await productPage.sortPrice();
    let sortedPrices =prices.sort((a, b) => a - b);
    await expect(prices).toEqual(sortedPrices);

  });

  it("Clear filter", async () => {
    await productPage.clearFilter();
    await productPage
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    // await browser.pause(30000)
  })

  it("Click on instock button", async () => {
    await productPage.inStock();
    await productPage
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    // await browser.pause(30000)
  })

  it("Click on the Apple button", async () => {
    await productPage.clickApple();
    await productPage
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    await browser.pause(3000)
  })

  it("Click on A-Z and check all products are apple products", async () => {
    await productPage.sortAtoZ();
    expect (await productPage.validateAppleItems()).toBeTrue()
  }
  )
  it("Hover on the product and Click on Add to cart", async () => {
    await productPage.hoverOnProduct();
    await productPage
    .$addtoCart()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productPage.$addtoCart().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    await productPage.clickAddToCart();
    await productDetail
    .$header()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productDetail.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
    
  })

  it("Select the size select size and add to cart", async () => {
    await productDetail.selectSize();
    await productDetail.addToCart();
    await productPage
    .$notifyHeader()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productPage.$notifyHeader().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
  })

  it("Click on cart icon", async () => {
    await productPage.clickCart();})

})



