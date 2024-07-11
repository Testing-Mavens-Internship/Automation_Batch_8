// import common from "../pageobjects/pg_commonpage.js";
// import landing from "../pageobjects/pg_landing.js";
// import logs from "../pageobjects/pg_Login.js";
// import browse from "../pageobjects/pg_Browsing.js"
// import shop from "../pageobjects/pg_Shop.js"
// import addtocart from "../pageobjects/pg_Addtocart.js"
// import paytext from "../pageobjects/pg_Payment.js"
// describe("Shop an item", ()=>{
//    it("Launch the url",async()=>{
//     await landing.loadurls();
//     expect(await landing.$txt().isDisplayed())
//             .withContext("Expected result is not matching").toBeTrue();
//    })
//     it("Click on user icon", async()=>{
//     await landing.usericonclick();
//    })
//    it("Click on login text ", async()=>{
//     await landing.logintextclick();
//    })
//    it("Enter credentials and login ", async()=>{
//     await logs.loginwithcredentials();
//    })
//    it("Click on shop", async()=>{
//     await browse.shopsclk();
//    })
//    it("Click on dropdown and select blue color", async()=>{
//     await shop.setclr();
//    })
//    it("Click on add to cart", async()=>{
//     await shop.addclk();
//    })
//    it("Click on cart icon to navigate to cart page", async()=>{
//       await shop.cartclk();
//      })
//    it("Click on Buy Now", async()=>{
//     await addtocart.buyclk();
//    })
//    it("Check for Payment Page is displayed", async()=>{
//       await paytext.checkpaymenttext();
//      })
// })