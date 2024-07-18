import ep_register from "../../pageobjects/ecommerce_assignment/ep_register.js";
import ep_productmodal from "../../pageobjects/ecommerce_assignment/ep_productmodal.js";
import ep_product from "../../pageobjects/ecommerce_assignment/ep_product.js";
import ep_orderhistory from "../../pageobjects/ecommerce_assignment/ep_orderhistory.js";
import ep_order from "../../pageobjects/ecommerce_assignment/ep_order.js";
import ep_logout from "../../pageobjects/ecommerce_assignment/ep_logout.js";
import ep_homepage from "../../pageobjects/ecommerce_assignment/ep_homepage.js";
import ep_editaccount from "../../pageobjects/ecommerce_assignment/ep_editaccount.js";
import ep_confirmorder from "../../pageobjects/ecommerce_assignment/ep_confirmorder.js";
import ep_checkout from "../../pageobjects/ecommerce_assignment/ep_checkout.js";

describe('End to End flow of Ecommerce Playground website',()=>{
    it('Launch URL',async()=>{
        await ep_homepage.launchURL()
        expect(await ep_homepage.$logo().isDisplayed()).withContext('Logo not displayed').toBeTrue()      
    })
    it('Click on register option in My account',async()=>{
        await ep_homepage.clickonRegister()
        expect(await ep_register.$register_header().isDisplayed()).withContext('Register header not displayed').toBeTrue()
    })
    it('Enter registeration details and validate successful registeration',async()=>{
        await ep_register.register()
        expect(await ep_register.$success().isDisplayed()).withContext('Account not created').toBeTrue()
        await ep_register.continue()
        expect(await ep_register.$myact().isDisplayed()).withContext('My account header not displayed').toBeTrue()
    })
    it('Select Edit account information option and edit the last name and validate success message',async()=>{
        await ep_editaccount.selectEditIcon()
        await ep_editaccount.editinfo()
        expect(await ep_editaccount.$success().isDisplayed()).withContext('Success message not displayed').toBeTrue()
    })
    it('Click on Home option on navbar',async()=>{
        await ep_editaccount.selectHome()
        expect(await ep_homepage.$header().isDisplayed()).withContext('Homepage header not displayed').toBeTrue()
    })
    it('Select first category in top trending products',async()=>{
        await ep_homepage.selectcatgeory()
        expect(await ep_product.$header().isDisplayed()).withContext('Desktop header not displayed').toBeTrue()
    })
    it('Set minium and maximum price',async()=>{
        await ep_product.setPrice()
        expect(await ep_product.$cross2().waitForDisplayed({timeout:10000}))
        await browser.pause(5000)
    })
    it('Sort low to high and validate',async()=>{
        await ep_product.sort()
        expect(await ep_product.sortvalidate()).toBeTrue()
    })
    it('Clear price filter and validate',async()=>{
        await ep_product.clearprice()
        //expect
        await browser.pause(5000)
    })
    it('Select Availability in stock',async()=>{
        await ep_product.selectAvailability()
        expect(await ep_product.$availablecross().isDisplayed()).toBeTrue()
        await browser.pause(5000)
    })
    it('Select Apple',async()=>{
        await ep_product.selectApple()
        expect(await ep_product.$manufacturecross().isDisplayed()).toBeTrue()
        await browser.pause(5000)
    })
    it('Sort A-Z',async()=>{
        await ep_product.sortAZ()
        expect(await ep_product.productvalidate()).toBeTrue()
    })
    it('Hover over first product and validate hover menu',async()=>{
        await ep_productmodal.hoverOverproduct()
        expect(await ep_productmodal.$shoppingcart().isDisplayed()).toBeTrue()
        expect(await ep_productmodal.$favorite().isDisplayed()).toBeTrue()
        expect(await ep_productmodal.$eye().isDisplayed()).toBeTrue()
        expect(await ep_productmodal.$compare().isDisplayed()).toBeTrue()
    })
    it('Click buy button from hover menu',async()=>{
        await ep_productmodal.buy()
        expect(await ep_productmodal.$buyvalidate().waitForDisplayed({timeout:3000})).toBeTrue()
    })
    it('Select size',async()=>{
        await ep_productmodal.selectSize()
        expect(await ep_productmodal.$sizevalidate().waitForDisplayed({timeout:3000})).toBeTrue()
        await browser.pause(5000)
    })
    it('Click add to cart and validate popup',async()=>{
        await ep_productmodal.addtoCart()
        expect(await ep_productmodal.$toastmsg().waitForDisplayed({timeout:10000})).toBeTrue()
    })
    it('Go to cart and validate the products in the cart',async()=>{
        await ep_productmodal.gotoCart()
        //expect
    })
    it('Click on checkout button and fill details',async()=>{
        await ep_checkout.checkoutfunction()
        expect(await ep_checkout.$confirmorder().isDisplayed()).toBeTrue()
    })
})