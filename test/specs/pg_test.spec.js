
import click from"../pageobjects/pg_landingpage.js"
import select from"../pageobjects/pg_loginpage.js"
import selectShop from"../pageobjects/pg_homepage.js"
import selectColor from"../pageobjects/pg_shop.js"
import ProductPage from"../pageobjects/pg_product.js"
import cProceed from"../pageobjects/pg_cart.js"
import payHeader from"../pageobjects/pg_paymentcheckout.js"

describe("logging into playground webpage",() =>{
    it('Launch the url', async() =>{
        await pg_landingpage.loadUrl();
        expect(await pg_landingpage.$header().isDisplayed()).withContext('Expect header to be displayed').toBeTrue()
});

    it('click on user icon', async() =>{
        await click.clickUser();
    })

    it('click login',async() =>{
        await select.ClickLogin();

    })

    it('logging into homepage',async() =>{
        await select.Login();
    })

    it('clicking on shop ',async()=>{
        await selectShop.clickShop()
    })

    it('select color',async()=>{
        await selectColor.clickShopColor();
    })

    it('selecting checkbox',async() =>{
        await selectColor.clickBlue()  
    })

    it('selecting a product',async() =>{
        await ProductPage.clickProduct()
    })

    it('adding to cart',async() =>{
        await ProductPage.clickAddToCart();
    })

    it('should click on buy now',async() =>{
        await ProductPage.clickBuyNow();
    })
    it('click on proceed',async() =>{
        await cProceed.clickProceed();
    })
    it('validate header',async()=>{
        await payHeader.checkHeader();
        expect(await payHeader.$payHeader().isDisplayed()).withContext('header to be displayed').toBeTrue();
    })


})