import landingPageObj from "../pageobjects/Luma/landingPage.js"
import productsPageObj from "../pageobjects/Luma/productsPage.js";
import productDetailsPageObj from "../pageobjects/Luma/productDetailsPage.js";
const cartIconCount = 0;
describe('End to end flow of luma test=>', () => {
    it('Launch the luma website',async ()=>{
        await landingPageObj.loadUrl();
        expect(await landingPageObj.$logo().isDisplayed()).toBe(true);
    })
    it('select jackets from men category',async ()=>{
        await landingPageObj.selectCategory();
        expect(await productsPageObj.$productsHeader().isDisplayed()).toBe(true);
    })
    it('select the last item from the resulting list',async ()=>{
        await productsPageObj.selectLastProduct();
        expect(await productsPageObj.$productLabel().isDisplayed())
    })
    it('add the selected item to cart',async ()=>{
        await productDetailsPageObj.addToCartLastProduct();
        expect(await productDetailsPageObj.$successPopup().isDisplayed());
    })
    it('add the selected item to compare',async ()=>{
        await productDetailsPageObj.addToCompare();
        expect(await productDetailsPageObj.$successPopup().isDisplayed());
    })
    it('go back to landing page and select mens jacket',async ()=>{
        await productDetailsPageObj.selectjacket();
        expect(await landingPageObj.$logo().isDisplayed()).toBe(true);
    })
    it('Select the first item from the resulting list',async ()=>{
        await productsPageObj.selectFirstProduct();
        expect(await productsPageObj.$productLabel().isDisplayed())
    })
    it('Click on submit button without selecting size and color',async ()=>{
        await productDetailsPageObj.addToCartFirstProductWithoutfilters();
        expect(await productDetailsPageObj.$requiredFieldErrorMsg(1).isDisplayed());
    })
})