import landingPage from "../pageobjects/precision/landing.js";
import homePage from "../pageobjects/precision/homepage.js"; 
import stockProfile from "../pageobjects/precision/stockProfile.js";
import contactUs from "../pageobjects/precision/contactUs.js";
import cart from "../pageobjects/precision/cart.js";
import productHead from "../pageobjects/precision/productsLanding.js"


describe('Preciontech', () => {
    it('Should load url', async () => {
       await landingPage.loadUrl();
       expect(await landingPage.$header().isDisplayed())
                .withContext('Expected landing page should be loaded')
                .toBeTrue();
    })
    
    it('Click solutions dropwown', async () => {
      let items=await homePage.clickSolution(); 
       let selectSolutions =['Stock Profiling and Analysis Services','Vendor Managed Inventory Solutions','Stores Design And Installation'];
       for(let solution of selectSolutions){
        expect(items).toContain(solution);
       }
     })

     it('Click a solution', async () => {
        await homePage.selectSolution();
        expect(await stockProfile.$stockProfile().isDisplayed())
                .withContext('Expected Stockprofile page should be loaded')
                .toBeTrue();
     })

     it('Click make an enquiry', async () => {
        await contactUs.cookie();
        await stockProfile.makeAnEnquiry();
        expect(await contactUs.$contactUs().isDisplayed())
                .withContext('Expected ContactUs page should be loaded')
                .toBeTrue();
     })

     it('Click on cart', async () => {
        await contactUs.cartPage();
        expect(await cart.$cart().isDisplayed() )
                .withContext('Expected page should be loaded')
                .toBeTrue();
     })

     it('Click on Continue Shopping', async () => {
        await cart.continueShopping();
        expect(await productHead.$products().isDisplayed() )
                .withContext('Expected products page should be loaded')
                .toBeTrue();
     })

     it('Click on sort by', async () => {
        await productHead.clickSort();
        expect(await productHead.$clickSort().isDisplayed())
                .withContext('Expected sorting option should be diplayed')
                .toBeTrue();

        
     })

    //  it('Sort by ascending order', async () => {
        
    //  })


})