import landobj from '../../pageobjects/precisiontech/pt_landingPage.js';
import stockobj from'../../pageobjects/precisiontech/pt_stockPage.js';
import cartobj from'../../pageobjects/precisiontech/pt_cartPage.js';
import productobj from'../../pageobjects/precisiontech/pt_produtPage.js';


describe('PrecisionTech end to end flow.',()=>{
    it('Launch the URL.',async()=>{
        await landobj.loadurl();
        expect(await landobj.$logolocator().isDisplayed()).toBeTrue();

    })
    it('Click on the Solution : Dropdown.',async()=>{
        await landobj.clickSolution();
        let items=await landobj.dropDownOption();
        expect(items[0]).toEqual("Stock Profiling and Analysis Services");
        expect(items[1]).toEqual("Vendor Managed Inventory Solutions");
        expect(items[2]).toEqual("Stores Design And Installation");

    })
    it("Click on Stock profiling option.",async()=>{
        await landobj.selectStock();
        
        
    })
    it("Validate the Stock profiling header.",async()=>{
       await stockobj.stockProfileHeader();
       expect(await stockobj.$stockheader().isDisplayed()).toBeTrue();
    })
    it("Click on Make an Enquiry button.",async()=>{
        await stockobj.makeEnquiry();
    
    })
    it("Click on the cart icon.",async()=>{
        await stockobj.clickCart();
        expect(await stockobj.$carticon().isDisplayed()).toBeTrue();
    })
    it("Validate that the cart is empty.",async()=>{
        await cartobj.cart();
        expect(await cartobj.$cartMsg().isDisplayed()).toBeTrue();

    })
    it("Click on Continue shopping button.",async()=>{
    await cartobj.continueShopping();
})
it("Validate that the product header is present.",async()=>{
    await productobj.productsHeader();
    expect(await productobj.$productHeader().isDisplayed()).toBeTrue();
})
})