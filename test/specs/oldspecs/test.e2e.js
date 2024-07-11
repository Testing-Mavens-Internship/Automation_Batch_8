// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'
// import loginPage from '../pageobjects/login.page.js'

// describe('My Login application', () => {
//     it('should open the url', async () => {
       
//        await LoginPage.loadurl();
//        expect(await LoginPage.$header().isDisplayed())
//             .withContext("Expected result is not matching").toBeTrue();
//             // await browser.pause(5000);
//     })
//     it('should login with valid credentials', async () => {
//         await LoginPage.login();
//         expect(await LoginPage.$header().isDisplayed())
//              .withContext("Expected result is not matching").toBeTrue();
//      })
// })
import landing from "../../pageobjects/old/pg_Landing.js";
import logs from "../../pageobjects/old/pg_Login.js";
import browse from "../../pageobjects/old/pg_Browsing.js"
import shop from "../../pageobjects/old/pg_Shop.js"
import addtocart from "../../pageobjects/old/pg_Addtocart.js"
import paytext from "../../pageobjects/old/pg_Payment.js"
describe("Shop an item", ()=>{
   it("Launch the url",async()=>{
    await landing.loadurls();
    await browser.pause(5000);
   })
    it("Click on user icon", async()=>{
    await landing.usericonclick();
   })
   it("Click on login text ", async()=>{
    await landing.logintextclick();
   })
   it("Enter credentials and login ", async()=>{
    await logs.loginwithcredentials();
   })
   it("Click on shop", async()=>{
    await browse.shopsclk();
   })
   it("Click on dropdown and select blue color", async()=>{
    await shop.setclr();
   })
   it("Click on add to cart", async()=>{
    await shop.addclk();
   })
   it("Click on cart icon to navigate to cart page", async()=>{
      await shop.cartclk();
     })
   it("Click on Buy Now", async()=>{
    await addtocart.buyclk();
   })
   it("Check for Payment Page is displayed", async()=>{
      await paytext.checkpaymenttext();
     })
})
