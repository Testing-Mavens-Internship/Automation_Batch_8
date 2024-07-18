import cart from "../pageobjects/luma/cart.js";
import homepage from "../pageobjects/luma/homepage.js";
import product from "../pageobjects/luma/product.js";

describe('Luma website',()=>{
    it('Launch URL',async()=>{
        await homepage.launchURL()
        expect(await homepage.$logo().isDisplayed()).withContext('Logo not displayed').toBeTrue()
        await browser.pause(5000)
    })
    it('Hover over category Men and go to Tops and select Jacket',async()=>{
        await homepage.hoverCategory()
        expect(await homepage.$jacket_header().isDisplayed()).withContext('Jacket header not displayed').toBeTrue()
    })
    it('Select last product displayed on the page',async()=>{
        await product.selectlastProduct()
        expect(await product.$lastpdtvalidate().isDisplayed()).withContext('Jacket name not displayed').toBeTrue()
    })
    it('Add product to cart and validate success message',async()=>{
        await product.addtoCart()
        await product.$success().waitForDisplayed({timeout:5000})
        expect(await product.$success().isDisplayed()).withContext('Added to cart popup not displayed').toBeTrue()
        let check2=await product.cartCount()
        expect(check2).toBe('2')
    })
    it('Select Add to compare option and validate success message',async()=>{
        await product.addtoCompare()
        expect(await product.$comparesuccess().isDisplayed()).withContext('Added product to compare popup not displayed').toBeTrue()
    })
    it('Again hover over category Men and go to Tops and select Jacket',async()=>{
        await homepage.hoverCategory()
        expect(await homepage.$jacket_header().isDisplayed()).withContext('Jacket header not displayed').toBeTrue()
        await browser.pause(5000)
    })
    it('Select first product',async()=>{
        await product.selectfirstProduct()
        expect(await product.$firstpdtvalidate().isDisplayed()).withContext('Jacket header not displayed').toBeTrue()
    })
    it('Add to cart directly and validate error message',async()=>{
        await product.addtoCartDirectly()
        expect(await product.$error1().isDisplayed()).withContext('Size validation failed').toBeTrue()
        expect(await product.$error2().isDisplayed()).withContext('Color validation failed').toBeTrue()
        await browser.pause(5000)
    })
    it('Set size,color and quantity and add to cart',async()=>{
        await product.addtoCart2()
        await product.$success().waitForDisplayed({timeout:5000})
        expect(await product.$success().isDisplayed()).withContext('Added to cart popup not displayed').toBeTrue()
    })
    it('Select Add to compare option again',async()=>{
        await product.addtoCompare()
        expect(await product.$comparesuccess().isDisplayed()).withContext('Added product to compare popup not displayed').toBeTrue()
    })
    it('Click on Compare product option and validate product',async()=>{
        await product.compareProduct()
        expect(await product.compareProduct()).withContext('Products are not same').toBeTrue()
    })
    it('Click on cart icon and select proceed to checkout button',async()=>{
        await cart.checkout()
        await browser.pause(5000)
    })
})