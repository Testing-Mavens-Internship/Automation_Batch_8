import landingPage from "../pageobjects/Llambda test/landingPage.js";
import registerationPage from "../pageobjects/Llambda test/registerationPage.js";
import account from "../pageobjects/Llambda test/accountPage.js";
import edit from "../pageobjects/Llambda test/editInfoPage.js";
import home from "../pageobjects/Llambda test/homePage.js";
import products from "../pageobjects/Llambda test/productsPage.js";
import cart from "../pageobjects/Llambda test/cartPage.js";
import checkoutPage from "../pageobjects/Llambda test/checkoutPage.js";

describe("End to end flow of lambda test=>", () => {
  it("Launch url", async () => {
    await landingPage.launchUrl();
    expect(await landingPage.$landingpageheader().isDisplayed());
  });

  it("Hover My Account and click on register", async () => {
    await landingPage.clickRegister();
    expect(await registerationPage.$registrationheader().isDisplayed());
  });

  it("fill registration details and click continue button", async () => {
    await registerationPage.registrationDetails();
    await registerationPage.successcontinueclick();
    expect(await registerationPage.$successmessage().isDisplayed());
  });

  it("Click on edit account information", async () => {
    await account.ClickonEditInfo();
    expect(await account.$editinfoheader().isDisplayed());
  });

  it("update the last name & click on continue button.", async () => {
    await edit.EditInfo();
    expect(await account.$successmessagepopup().waitForDisplayed());
  });

  it("Click on Home menu.", async () => {
    await account.ClickonHome();
    expect(await home.$trendingheader().isDisplayed());
  });

  it("Click on Trendibg Category.", async () => {
    await home.ClickTrendingCategory();
    expect(await products.$filterheader().isDisplayed());
  });

  it("filter the products by price 1080 to 2000 and sort the listed products by price low to high.", async () => {
    let sortedprice = await products.FilterProducts();
    let isAscending = true;
    for (let i = 0; i < sortedprice.length - 1; i++) {
      if (sortedprice[i] > sortedprice[i + 1]) {
        isAscending = false;
        break;
      }
    }
    expect(isAscending).toBe(true);
  });

  it("clear min and max field.", async () => {
    await products.clearbutton();
    let currentprice = await products.$minpricefield().getText();
    console.log("current------...---" + currentprice);
    let initprice = "";
    expect(currentprice).toBe(initprice);
  });

  it("filter products by availability instock.", async () => {
    await products.clickinstock();
  });

  it("filter products by brand - apple.", async () => {
    await products.clickapple();
  });

  it("Sort products by name A-Z.", async () => {
    const expectedAppleProducts = [
      'Apple Cinema 30"',
      "iMac",
      "iPhone",
      "iPod Classic",
      "iPod Nano",
      "iPod Shuffle",
      "iPod Touch",
      "MacBook",
      "MacBook Air",
      "MacBook Pro",
    ];

    const filteredProducts = await products.sortbyatoz();
    filteredProducts.forEach((product) => {
      expect(expectedAppleProducts.includes(product)).toBe(true);
    });
  });

  it("Add to cart the first product.", async () => {
    await products.addtocartfirstproduct();
  });

  it("Filter product by size and add to cart.", async () => {
    await products.filterbysize();
  });

  it("click on cart.", async () => {
    await products.clickcarticon();
  });

  //   it("Click on checkout.", async () => {
  //     let total = await cart.clickoncheckout();
  //   });

  it("fill details in checkout page.", async () => {
    let total = await checkoutPage.enterPaymentDetails();
  });
  // it('click on continue in the checkout page.',async ()=>{
  //     let total = await cart.clickoncheckout();
  // })
});
