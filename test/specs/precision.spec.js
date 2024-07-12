
import landingPage from "../pageobjects/precisionTech/landingPage.js";
import stockProfile from "../pageobjects/precisionTech/stockProfilePage.js";
import enquiryPage from "../pageobjects/precisionTech/enquiryPage.js";
import cartPage from "../pageobjects/precisionTech/cartPage.js";
import productPage from "../pageobjects/precisionTech/productPage.js";

describe('Verify the sorting functionality for the products',()=>{
    it('Launching page', async () => {
        await landingPage.loadUrl();
       expect(await landingPage.$header().isDisplayed())
       .withContext('Expect header is displayed')
       .toBeTrue();
     })

     it('Click on the solutions option', async()=>{
        await landingPage.clickSolutions();
        let items=await landingPage.dropDown();
        let dropDownSelection=[
       "Stock Profiling and Analysis Services",
        "Vendor Managed Inventory Solutions",
        "Stores Design And Installation",
        ]
        for(let item of items){
          expect(dropDownSelection).toContain(item);
        }
     })

     it('click on Stock Profiling and Analysis Services',async()=>{
     await landingPage.clickStock();
     expect(await stockProfile.$heading().isDisplayed())
     .withContext('Expect header is displayed')
     .toBeTrue();

    })

    it('click on make an enquiry',async()=>{
      await stockProfile.clickEnquiry();
      expect(await enquiryPage.$header().isDisplayed())
      .withContext('Expect header is displayed')
      .toBeTrue();
    })

    it('click on cart icon',async()=>{
      await enquiryPage.clickCart();
      expect(await cartPage.$header().isDisplayed())
      .withContext('Expect header is displayed')
      .toBeTrue();
    })

    it('click on continue shopping',async()=>{
      await cartPage.continueShopping();
      expect(await productPage.$header().isDisplayed())
      .withContext('Expect header is displayed')
      .toBeTrue();
    })
     
    it('Select alphabetically Z-A sort option',async()=>{
      await productPage.clickSort();
     
    })

})