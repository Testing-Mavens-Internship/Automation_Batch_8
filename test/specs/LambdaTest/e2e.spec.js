import account from "../../pageobjects/LambdaTest/account.js";
import homepage from "../../pageobjects/LambdaTest/homepage.js"
import register from "../../pageobjects/LambdaTest/register.js";
import success from "../../pageobjects/LambdaTest/success.js";
import product from "../../pageobjects/LambdaTest/product.js";

describe('End to End flow of LambdaTest website for the given flow.', () => {
    it('Navigate to url of the webpage', async () => {
        await homepage.loadUrl();
        await homepage.$homepageHeadder().waitForDisplayed({timeout:4000,timoutMsg:"Homepage is not loaded"});
        expect(await homepage.$homepageHeadder().isDisplayed()).toBeTrue();
        //.withContext(`Header is not present`)
     })

   //   it(`Hover over the my account and selecting the register button`,async()=>{
   //      await homepage.clickRegister();
   //      await register.$registerHeader().waitForDisplayed({timeout:4000,timoutMsg:"Register page is not loaded."});
   //      expect(await register.$registerHeader().isDisplayed()).toBeTrue();
   //   })

   //   it(`Entering the details to the registeration page`,async()=>{
   //      await register.registration();
   //      await success.$created().waitForDisplayed({timeout:5000,timoutMsg:"Account is not created"});
   //      expect(await success.$created().isDisplayed()).toBeTrue();
   //      await success.$continuebtn().click();
   //   })

   //   it(`Editing the user account info.`,async()=>{
   //    await account.editingAccount();
   //    expect(await account.$successMsg().isDisplayed()).toBeTrue();
   //   })

     it(`Returning to Home page.`,async()=>{
      await account.retutningToHomepage();
      expect(await account.$trending().isDisplayed()).toBeTrue();
     })

     it(`Scrolling into trending categories in the Home page.`,async()=>{
      await homepage.scrollIntoView();
      let firstItem=await homepage.$firstItem().getText();
      await homepage.selectItem();
      let itemHeader=await product.$itemHeader().getText();
      expect(firstItem).toEqual(itemHeader);
     })

     it("Set the minimum and maximum price of the product from the filter option present in the products page.",async()=>{
      await product
      .filterPrice();
      await product
      .$sortByHeader()
      .waitForDisplayed({timeout:5000,timeoutMsg:"Header not displayed."});
      expect(await product.$sortByHeader().isDisplayed()).toBeTrue();
     })

     it("sort the prices of the products from low to high and validate it.", async () => {
      await product.sortPrice();
      let prices = await product.sortPrice();
      let sortedPrices =prices.sort((a, b) => a - b);
      await expect(prices).toEqual(sortedPrices);
   });

   it(`clearing the price option.`,async()=>{
      await product.clearFilter();
   //    let min=await product.$minPrice().getText();
   //    let minprice=parseInt(min);
   //    expect(min).toBe('98');
   //  await browser.pause(5000)
     })

     it(`Click on the in-stock filter so that the products in stock will only be listed.`,async()=>{
      await product
      .inStock();
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
    })
  
    it("Click on A-Z button", async () => {
      await productPage.sortAtoZ();
      await productPage
      .$header()
      .waitForDisplayed({timeout: 10000,timeoutMsg: "Header is not visible"});
      expect(await productPage.$header().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();
   })
})