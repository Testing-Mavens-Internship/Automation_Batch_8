import cartPage from "../../pageobjects/saucedemo/cartPage.js";
import checkoutOverviewPage from "../../pageobjects/saucedemo/checkoutOverviewPage.js";
import checkoutPage from "../../pageobjects/saucedemo/checkoutPage.js";
import inventoryPage from "../../pageobjects/saucedemo/inventoryPage.js";
import landingPage from "../../pageobjects/saucedemo/landingPage.js";

describe("'Swags labs' application end to end flow for purchasing an item", () => {
  it("Launch the url in the browser", async () => {
    await landingPage.launchUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Header is not displayed")
      .toBeTrue();
  });

  it("Login using valid credentials", async () => {
    await landingPage.Login();
    expect(await inventoryPage.$header().isDisplayed())
      .withContext("Header is not displayed")
      .toBeTrue();
  });

  it("Sort products by price high to low and validate", async () => {
    let price = await inventoryPage.sortProductsByPriceHighToLow();
    let sortedPrice = price.sort((a, b) => b - a);
    await expect(price).toEqual(sortedPrice);
  });

  it("Click on 'add to cart' button and verify the 'Remove' button should be red color", async () => {
    await inventoryPage.validateRemoveButtonColor();
    expect(await inventoryPage.$removeButton().isDisplayed())
      .withContext("Remove button is not displayed")
      .toBeTrue();
  });

  it("Click on cart icon and validate the checkout button is displayed on the cart page", async () => {
    await inventoryPage.clickCartIcon();
    expect(await cartPage.$checkoutButton().isDisplayed())
      .withContext("Checkout button is not displayed")
      .toBeTrue();
  });

  it("click on checkout and validate header", async () => {
    await cartPage.clickCheckoutButton();
    expect(await checkoutPage.$checkoutHeader().isDisplayed())
      .withContext("Header is not displayed")
      .toBeTrue();
  });

  it("Enter the checkout details", async () => {
    await checkoutPage.setCheckoutDetails("Honey", "Sebastian", 686536);
    expect(await checkoutPage.$continueButton().isEnabled()).withContext(
      "continue button is not enabled"
    );
  });

  it("click on continue and validate header", async () => {
    await checkoutPage.clickContinueButton();
    expect(
      await checkoutOverviewPage.$overviewHeader().isDisplayed()
    ).withContext("Header is not displayed");
  });

  it("Click on the finish button and validate thankyou header",async()=>{
    await checkoutOverviewPage.clickFinishButton();
    expect (await checkoutOverviewPage.$thankyouHeader().isDisplayed()).withContext("thankyou header is not displayed")
  });
});
