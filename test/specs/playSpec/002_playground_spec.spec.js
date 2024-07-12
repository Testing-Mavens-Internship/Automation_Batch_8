import cartPage from "../../pageobjects/playground/cartPage.js";
import homePage from "../../pageobjects/playground/homePage.js";
import landingPage from "../../pageobjects/playground/landing_page.js";
import mainLogin from "../../pageobjects/playground/login_page.js";
import mobileCategory from "../../pageobjects/playground/mobileCategory.js" ;
import userSignIn from "../../pageobjects/playground/userSignin.js";


describe("Verifying the functionality of end to end flow of 'Playground' application",()=>{
  it("Launch the url in the browser",async()=>{
      await mainLogin.launchUrl();
      console.log(await browser.getWindowHandles());        
      await mainLogin.$header().waitForDisplayed({timeout:5000,timeoutMsg:"'Playground' header is still not displayed"});
      expect (await mainLogin.$header().isDisplayed()).withContext("header is not displayed").toBeTrue();
  });

  it("Login using valid credentials",async()=>{
      await mainLogin.mainLogin("playground","playground@TM");
      await landingPage.$dropDownIcon().waitForDisplayed({timeout:5000,timeoutMsg:"Dropdown icon is still not displayed"});
      expect (await landingPage.$dropDownIcon().isDisplayed()).withContext("Dropdown icon is not displayed").toBeTrue();
  });

  it("Click on the user dropdown list",async()=>{
      await landingPage.$dropDownIcon().click();
      await landingPage.$login().waitForDisplayed({timeout:5000,timeoutMsg:"Login option is not displayed"});
      expect(await landingPage.$login().isDisplayed()).withContext("Login option is not displayed").toBeTrue();
  });

  it("Select 'Login' option from the dropdown list",async()=>{
      await landingPage.loginSelction();
      (await userSignIn.$loginAccountHeader()).waitForDisplayed({timeout:5000,timeoutMsg:"'Login to your account'is not displayed"});
      expect (await userSignIn.$loginAccountHeader().isDisplayed()).withContext("'Login to your account'is not displayed").toBeTrue();
  });

  it("Successful signin using valid credentials", async () => {
      await userSignIn.signIn("honeysebastian1815@gmail.com","2000@Junehoney");
      await homePage.$shopByCategoryLabel().waitForDisplayed({timeout:5000,timeoutMsg:"'Shop by category' label is still not displayed"});
      expect (await homePage.$shopByCategoryLabel().isDisplayed()).withContext("'Shop by category' label is still not displayed").toBeTrue();
    });

  it("verify 'Logout' option is present in the dropdown list on the homepage",async()=>{
      await homePage.checkLogoutOption();
      await homePage.$logoutOption().waitForDisplayed({timeout:5000,timeoutMsg:"Logout option is still not displayed"});
      expect(await homePage.$logoutOption().isDisplayed()).withContext("Logout option is not displyed").toBeTrue();
    });

    it("Click on Shop by category",async()=>{
      await homePage.clickShopByCategory();
      await homePage.$mobiles().waitForDisplayed({timeout:5000,timeoutMsg:"Mobiles option is still not displayed"});
      expect (await homePage.$mobiles().isDisplayed()).withContext("Mobiles options is not displayed").toBeTrue();
    });

    it("Select the 'Mobiles' option from the dropdown list",async()=>{
      await homePage.selectMobile();
      await mobileCategory.$shop().waitForDisplayed({timeout:5000,timeoutMsg:"shop label is still not displayed"});
      expect (await mobileCategory.$shop().isDisplayed()).withContext("shop label is not displayed").toBeTrue();
    });

    it("Add three products and verify buy now count is 3",async()=>{
      let count=await mobileCategory.clickAddToCart();
      await mobileCategory.$buyNowCount().waitForDisplayed({timeout:60000,timeoutMsg:"Count is not displayed"});
      let initialCount=await mobileCategory.$buyNowCount().getText();
      expect (parseInt(initialCount)).toBe(count);
    });

    it("Validate total of subtotal price with summary subtotal",async()=>{
      await mobileCategory.clickBuyNowButton();
      let subTotalSum= await cartPage.getPriceTotal();
      let totalProductPriceSum=await cartPage.getSubTotal();
      expect (subTotalSum).toBe(totalProductPriceSum);
    });

    it("Reset the cart",async()=>{
      await cartPage.resetCart();
      (await cartPage.$cartEmptyText()).waitForDisplayed({timeout:5000,timeoutMsg:"'Your Cart feels lonely' is still not displayed"});
      expect (await cartPage.$cartEmptyText().isDisplayed()).withContext("'Your Cart feels lonely' is not displayed")
    });

    it("Successfull logout from the application",async()=>{
      await cartPage.logout();
      await cartPage.$logoutMessage().waitForDisplayed({timeout:5000,timeoutMsg:"Logout successfull message is still displayed"});
      expect(await cartPage.$logoutMessage().isDisplayed()).withContext("Logout successfull message is not displayed").toBeTrue();
    });
})