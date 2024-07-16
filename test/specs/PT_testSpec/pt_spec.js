import pt_landingpage from "../../pageobjects/PrecisionTech/pt_landingpage.js";
import pt_stockPage from "../../pageobjects/PrecisionTech/pt_stockPage.js";
import pt_contact from "../../pageobjects/PrecisionTech/pt_contact.js";
import pt_cartpage from "../../pageobjects/PrecisionTech/pt_cartpage.js";
import pt_product from "../../pageobjects/PrecisionTech/pt_product.js";
describe('Validating PrecisionTech webpage',() =>{
    it('Launch the url',async()=>{
        await pt_landingpage.loadUrl();
        expect(await pt_landingpage.$ptheader().isDisplayed()).withContext('Expexct header to be displayed').toBeTrue();
    })
    it('Click on solution option',async()=>{
        await pt_landingpage.clickSolution();
        await  pt_landingpage.dropDown();
        let items=await pt_landingpage.storingOptions();
        expect(items[0]).toEqual("Stock Profiling and Analysis Services");
        expect(items[1]).toEqual("Vendor Managed Inventory Solutions");
        expect(items[2]).toEqual("Stores Design And Installation");
    })
    it('Clicking on STOCK PROFILING AND ANALYSIS SERVICES option',async()=>{
        await pt_landingpage.clickOption();
    })

    it('Checking the header in stock page',async()=>{
        await pt_stockPage.checkHeader();
        expect(await pt_stockPage.$sheader().isDisplayed()).withContext('Expect header to be displayed').toBeTrue();
    })
    it('Click on make an enquiry button',async()=>{
        await pt_stockPage.clickEnquiry();
    })

    it('Checking the header of enguiry page',async()=>{
        await pt_contact.Hcontact();
            expect(await pt_contact.$cHeader().isDisplayed()).withContext('Expect header to be displayed in contact page').toBeTrue();     
    })

    it('Clicking on cart icon',async()=>{
        await pt_contact.clickCart();
    })

    it('Checking header on the cart page',async()=>{
        await pt_cartpage.cartHeader();
        expect(await pt_cartpage.$xheader().isDisplayed()).withContext('Expect the header to be displayed as your cart is empty').toBeTrue();
    })
    it('Clicking on contine button',async()=>{
        await pt_cartpage.clickContinueButton();
    })

    it('Checking the header on the product page',async()=>{
        await pt_product.checkProductHeader();
        expect(await pt_product.$productHeader().isDisplayed()).withContext('Expect the header to be displayed on the product page').toBeTrue();
    })

    it('Clicking on the sort by dropdown',async()=>{
        await pt_product.clickOnSortBy();
    })
})


