import landObj from "../../pageobjects/precisionTech/pr_LandingPage.js";
import stockPageObj from "../../pageobjects/precisionTech/pr_StockProfilingPage.js";
import contactObj from "../../pageobjects/precisionTech/pr_ContactPage.js";
import cartObj from "../../pageobjects/precisionTech/pr_CartPage.js";
import productObj from "../../pageobjects/precisionTech/pr_ProductsPage.js";

describe('Precision Tech :End-to-End Flow', () => {
    
    it('Launch URL', async () => {
        await landObj.LaunchUrl()
        await landObj.$logolocator().waitForDisplayed({ timeout: 1000 });
        expect(await  landObj.$logolocator().isDisplayed())
        .withContext('Expect PrecisionTech Logo to be displayed')
        .toBeTrue();  
    
    })
    
    it('Click on Solutions : Drop Down', async () => {

        await landObj.dropDownClick()
        let items=await landObj.fetchSolutionDropdownItems(); 
        let dropDownSelectionItems = [
            "Stock Profiling and Analysis Services",
            "Vendor Managed Inventory Solutions",
            "Stores Design And Installation",
          ];

          for (let item of items) {
            expect(dropDownSelectionItems)
              .toContain(item);
          }
        // expect(items[0]).toEqual('Stock Profiling and Analysis Services')--using index of array
        // expect(items[1]).toEqual('Vendor Managed Inventory Solutions')
        // expect(items[2]).toEqual('Stores Design And Installation')
   

      });

    it('Stock Profiling Page : Stock Profiling header Validation',async () => {

        await landObj.stockProfileClick()
        await stockPageObj.$stockProfilingHeader().waitForDisplayed({ timeout: 1000 });
        expect(await  stockPageObj.$stockProfilingHeader().isDisplayed())
        .withContext('Stock Profiling Page header to be displayed')
        .toBeTrue(); 
    })

    it('Stock Profiling Page : Click on Enquirey Button',async () => {

        await stockPageObj.makeAnEnquireyButtonclick()
        expect(await  stockPageObj.$logolocator().isDisplayed())
        .withContext('Expect PrecisionTech Logo to be displayed')
        .toBeTrue();  
        // expect(await  stockPageObj.$makeAnEnquireyButton().isDisplayed())
        // .withContext('Stock Profiling Page : Click on Enquirey Button')
        // .toBeTrue(); 
    })

    it('Contact Page and cart page : Click on the Cart Button and Verify if the cart is empty',async () => {

        await contactObj.CartButtonclick()
        await cartObj.$cartEmptyHeader().waitForDisplayed({ timeout: 1000 });
        expect(await  cartObj.$cartEmptyHeader().isDisplayed())
        .withContext('Expect the empty cart header is displayed ')
        .toBeTrue();    
    })

    it(' Click on the Continue Shopping Button and verify the presence of the product header',async () => {

        await cartObj.continueShoppingButtonClick()
        await productObj.sortByDescendingButtonClick()
        await browser.pause(3000);
        await productObj.$ProductsHeader().waitForDisplayed({ timeout: 1000 });
        expect(await  productObj.$ProductsHeader().isDisplayed())
        .withContext('Expect the Products page header is displayed ')
        .toBeTrue();    
    })

    




    

   

})