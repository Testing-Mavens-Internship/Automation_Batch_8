import land from "../../pageobjects/precisionTech/landingPage.js";
import stock from "../../pageobjects/precisionTech/stockPage.js";
import ct from "../../pageobjects/precisionTech/contactPage.js";
import cart from "../../pageobjects/precisionTech/cartPage.js";
import pd from "../../pageobjects/precisionTech/productsPage.js"
describe("Shop an item", () => {
    it("Launch URL",async()=>{
        await land.loadurl();
        expect(await land.$header().isDisplayed()).toBeTrue();
    })
it("Click on solution dropdown and check for option", async()=>{
    await land.clkdropdown();
    let items = await land.takeoptn();
    let actualItems=["Stock Profiling and Analysis Services","Vendor Managed Inventory Solutions","Stores Design And Installation"]
    for(let i=0;i<items.length;i++)
            {
               expect(items[i]).toEqual(actualItems[i])
            }
})            
it("Select first option",async()=>{
    await land.clkoptn();
    expect(await stock.$stockheader().waitForDisplayed({timeout:5000})).toBeTrue();
})    
it("Click on Contact Us",async()=>{
    await stock.enqclk();
    expect(await stock.$enqhdr().isDisplayed()).toBeTrue();
})   
it("Click on Cart and validate it is empty",async()=>{
    await ct.cartclk();
    expect(await cart.$carttxt().isDisplayed()).toBeTrue();
}) 
it("Click on continue shopping",async()=>{
    await cart.continueclk();
    expect(await pd.$prodheader().isDisplayed()).toBeTrue();
})
it("Click on sort by Z-A",async()=>{
    await pd.sortdropclk();
    await pd.takeproduct();

})
})