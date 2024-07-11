import homePage from "../../pageobjects/precisiontech/homePage.js";
import productDetails from "../../pageobjects/precisiontech/productDetails.js";
import contactPage from "../../pageobjects/precisiontech/contactPage.js"
import cart from "../../pageobjects/precisiontech/cart.js";
describe('login to the account, filter products, add to cart and purchase the product', () => {
    it('Loading Url', async () => {
        await homePage.loadUrl();
        await homePage.$lHeader().waitForDisplayed({timeout:3000,timeoutMsg:"Page is not loaded"});
        expect(await homePage.$lHeader().isDisplayed()).toBeTrue();
    })
    it('Click Solution', async()=>{
        await homePage.cookie();
        let list= await homePage.clickSolution();
        let itemArray=['Stock Profiling and Analysis Services','Vendor Managed Inventory Solutions','Stores Design And Installation'];
        for(let no of list){
            await expect(itemArray).toContain(no);
        }
    })
   it(`Select Stock Profile`,async()=>{
        await homePage.clickData();
        await productDetails.$prodHeader().waitForDisplayed({timeout:4000,timeoutMsg:"Product page loading"});
        expect(await productDetails.$prodHeader().isDisplayed()).toBeTrue();
   })
   it(`Clicking on Make an Enquiry Button`,async()=>{
        await productDetails.Enquiry();
        await contactPage.$contact().waitForDisplayed({timeout:4000,timeoutMsg:"contact page"})
        expect(await contactPage.$contact().isDisplayed()).toBeTrue();
   })
   it(`Clicking on cart icon`,async()=>{
    await contactPage.clickCart();
    await cart.$emptycart().waitForDisplayed({timeout:4000,timeoutMsg:"contact page"})
    expect(await cart.$emptycart().isDisplayed()).toBeTrue();
   })
   it(`Continue Shopping`,async()=>{
    await cart.continueShopping();
    await productDetails.$prodct().waitForDisplayed({timeout:4000,timeoutMsg:"contact page"})
    expect(await productDetails.$prodct().isDisplayed()).toBeTrue();
   })
   it(`sort`,async()=>{
    await browser.pause(5000)
    await productDetails.sorting();
})
});