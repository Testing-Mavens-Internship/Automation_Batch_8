import LandingPage from "../pageobjects/precisionTech/landingPage.js"
import stockPage from "../pageobjects/precisionTech/stockPage.js"
import enquiryPage from "../pageobjects/precisionTech/enquiryPage.js"
import cartPage from "../pageobjects/precisionTech/cartPage.js"
import productsPage from "../pageobjects/precisionTech/productsPage.js"

describe ('Precision Tech',()=>{
    it('Load the page SUccessfully', async()=>{
    await LandingPage.loadUrl();
    expect(await LandingPage.$header().isDisplayed())
    .withContext('header should be visible')
    .toBeTrue();
    })

    it("Select 'SOLUTION' menu from the navbar", async () => {
        await LandingPage.clickSolution();
        let items = await LandingPage.dropDownSelection();
        let dropDownSelectionItems = [
            "Stock Profiling and Analysis Services",
            "Vendor Managed Inventory Solutions",
            "Stores Design And Installation",
          ];
        for (let item of items) {
          expect(dropDownSelectionItems)
            .toContain(item);
        }
      });

      it("Click on the 'Stock Profiling and Analysis Services' item", async () => {
        await LandingPage.clickStock();
        expect(await stockPage.$header().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
      });

      it("Click on the enquiry button", async () => {
        await stockPage.clickEnquiry();
        expect(await enquiryPage.$header().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
    })
    it("Click on the cart button", async () => {
        await enquiryPage.clickCart();
        expect(await cartPage.$header().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
    })
    it("Click on the continue shopping button", async () => {
        await cartPage.clickCheckout();
        expect(await productsPage.$header().isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
    })

    it("Sort elements in Z-A order", async () => {
      await productsPage.clickSortZA();
      await browser.pause(15000); 

    })

    })


