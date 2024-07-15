import contact from "../../pageobjects/precisiontech/contact.js";
import landingPage from "../../pageobjects/precisiontech/landingPage.js";
import stockProfiling from "../../pageobjects/precisiontech/stockProfiling.js";
import cart from "../../pageobjects/precisiontech/cartPage.js";
import productPage from "../../pageobjects/precisiontech/productPage.js";

describe("Verifing sorting functionality of the products", () => {
  it("Launch the url", async () => {
    await landingPage.launchUrl();
    await landingPage.$header().waitForDisplayed({
      timeout: 1000,
      timeoutMsg: "waiting for header to be displayed",
    });
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expected header not displayed")
      .toBeTrue();
  });

  it("Select 'SOLUTION' menu from the navbar and three options are displayed", async () => {
    await landingPage.selectSolution();
    let items = await landingPage.dropDownSelection();
    let dropDownSelectionItems = [
      "Stock Profiling and Analysis Services",
      "Vendor Managed Inventory Solutions",
      "Stores Design And Installation",
    ];
    for (let item of items) {
      expect(dropDownSelectionItems).toContain(item);
    }
  });

  it("Select first option from the 'SOLUTION' dropdown list", async () => {
    await landingPage.firstDropDownOption();
    await landingPage.cookieAccept();
    await stockProfiling.$stockHeader().waitForDisplayed({
      timeout: 1000,
      timeoutMsg: "header is still not displayed",
    });
    expect(await stockProfiling.$stockHeader().isDisplayed())
      .withContext("Header not displayed")
      .toBeTrue();
  });

  it("Select 'MAKE AN ENQUIRY' option", async () => {
    await stockProfiling.makeAnEnquiryOption();
    await contact
      .$contactHeader()
      .waitForDisplayed({
        timeout: 1000,
        timeoutMsg: "contact header is not still displayed",
      });
    expect(await contact.$contactHeader().isDisplayed())
      .withContext("Header not displayed")
      .toBeTrue();
  });

  it("Select cart icon", async () => {
    await contact.cartIconClick();
    expect(await cart.$cartEmpty().isDisplayed())
      .withContext("'cart empty' is not displayed")
      .toBeTrue();
  });

  it("Click on 'continue browsing' button", async () => {
    await cart.continueShoppingClick();
    await productPage
      .$productHeader()
      .waitForDisplayed({
        timeout: 3000,
        timeoutMsg: "product name still not displayed"
      });
    expect(await productPage.$productHeader().isDisplayed())
      .withContext("Header not displayed")
      .toBeTrue();
  });

  it("sort products by (z-A)",async()=>{
    await productPage.sortProducts();
    await browser.pause(30000)
  })
});
