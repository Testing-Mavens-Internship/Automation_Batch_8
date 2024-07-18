import pg_landingpage from "../pageobjects/playground/pg_landingpage.js";
import pg_homepage from "../pageobjects/playground/pg_homepage.js";
import pg_login from "../pageobjects/playground/pg_login.js";
import pg_product from "../pageobjects/playground/pg_product.js";
import pg_shop from "../pageobjects/playground/pg_shop.js";
import pg_cart from "../pageobjects/playground/pg_cart.js";

describe('Verify if the user can navigate from Landing page to Payment gateway',()=>{
    it('Launch the URL', async() => {
        await pg_landingpage.launchURL()
        await browser.pause(10000)
    })
    it('Click on user icon',async()=>{
        await pg_landingpage.clickUsericon()
    })
    it('Select Login option',async()=>{
        await pg_landingpage.clickLogin()
    })
    it('Enter valid credentials',async()=>{
        await pg_login.validateLogin()
    })
    it('Select Shop tab on the navigation bar of homepage',async()=>{
        await pg_homepage.selectShop()
    })
    it('Select Shop by color option',async()=>{
        await pg_shop.selectShopbycolor()
    })
    it('Select on blue color checkbox',async()=>{
        await pg_shop.selectBlue()
    })
    it('Select product',async()=>{
        await pg_shop.selectProduct()
    })
    it('Click on Add to Cart button',async()=>{
        await pg_product.addtoCart()
    })
    it('Select Buy now option',async()=>{
        await pg_product.buyNow()
    })
    it('Click on Proceed to checkout button',async()=>{
        await pg_cart.proceedtoCheckout()
    })
})