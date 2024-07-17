import{expect} from "@wdio/globals";
import landingPage from "../../pageobjects/play-ground/landingPage.js";
import loginPlayground from "../../pageobjects/play-ground/loginPlayground.js";
import homePagePlayground from "../../pageobjects/play-ground/homePagePlayground.js";
import productList from "../../pageobjects/play-ground/productList";
import productDetailsPage from "../../pageobjects/play-ground/productDetails.js";
import cart from "../../pageobjects/play-ground/cartPage.js";
import login_page from "../../pageobjects/playground/login_page.js";



describe("Verifying user can login to the application and purchase a product", () => {
    it("Launch the URL in the browser", async () => {
      await landingPage.launchUrl();
      await login_page.$header().waitForDisplayed({timeout:1000,timeoutMsg:"waiting for header to be displayed"})
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expected header 'Playground' is displayed")
        .toBeTrue();
    });
   
    it("Click on the user dropdown list", async () => {
      await landingPage.clickUserIcon();
      expect(await landingPage.$login().isDisplayed())
        .withContext("Login option is displayed in the dropdown list")
        .toBeTrue();
    });
   
    it("Select 'Login' option from the dropdown list", async () => {
      await landingPage.loginSelection();
      expect(
        await loginPlayGround.$email().isDisplayed(),
        (await loginPlayGround.$password()).isDisplayed()
      ).withContext("'Email' input field is present"),
        toBeTrue();
    });
   
    it("Successful login using valid credentials", async () => {
      await loginPage.login("honeysebastian1815gmail.com", "2000@Junehoney");
      expect((await homePagePlayground.$shop()).isDisplayed())
        .withContext("'Shop' option is present on the navbar")
        .toBeTrue();
    });
   
    it("Click on the 'Shop' option",async ()=>{
      await homePagePlayground.shopOptionClick();
    });
   
    it("Click on the 'Shop by color' option", async ()=>{
      await productList.pickColor();
    });
   
    it("Select a product", async ()=>{
      await productList.selectProduct("Asus ZenBook 14");
    });
   
    it("Adding the selected product to cart",async()=>{
      await productDetailsPage.addToCart();
    });
   
    it("Click on 'Buy Now' button", async()=>{
      await productDetailsPage.buyNow();
    });
   
    it("Click on the 'Proceed to checkout' button", async ()=>{
      await cart.proceedToCheckout();
    });
  });
   