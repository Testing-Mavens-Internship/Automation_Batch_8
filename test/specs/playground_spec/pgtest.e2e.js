import pg_homepage from "../../pageobjects/new_playground/pg_homepage.js"
import pg_landingpage from "../../pageobjects/new_playground/pg_landingpage.js"
import pg_mainlogin from "../../pageobjects/new_playground/pg_mainlogin.js"
import pg_sublogin from "../../pageobjects/new_playground/pg_sublogin.js"
import pg_productpage from "../../pageobjects/new_playground/pg_productpage.js"
import pg_cart from "../../pageobjects/new_playground/pg_cart.js"

describe('End to End flow of Playground website starting from login and then to add products to cart,reset the cart and then logout',()=>{
    it('Launch the URL',async()=>{
        await pg_mainlogin.launchURL()
        expect(await pg_mainlogin.$mainlogin_header().isDisplayed())
        .withContext('Playground header is displayed')
        .toBeTrue()
    })
    it('Enter valid credentials for login functionality in main login page',async()=>{
        await pg_mainlogin.mainLoginfunction()
        expect(await pg_landingpage.$pg_header().isDisplayed())
        .withContext('Playground logo displayed on landing page')
        .toBeTrue()
        // await browser.pause(10000)
    })
    it('Select Login option',async()=>{
        await pg_landingpage.selectLogin()
        console.log('-----------Handles',await browser.getWindowHandle())
        expect(await pg_sublogin.$sublogin_header().isDisplayed())
        .withContext('Sub login header "Welcome Back" is displayed')
        .toBeTrue()
    })
    it('Enter valid credentials for login functionality in sublogin page',async()=>{
        await pg_sublogin.subLoginfunction()
        await browser.pause(10000)
        await pg_homepage.checkLogoutdisplayed()
        expect(await pg_homepage.$logout_header().waitForDisplayed({timeout:20000}))
        .withContext('Logout option is displayed on homepage')
        .toBeTrue()    
    })
    it('Select "Mobile" category from Shop by category dropdown',async()=>{
        await pg_homepage.selectCategory()
        expect(await pg_productpage.$pdtheader().waitForDisplayed({timeout:20000}))
        .withContext('Product header is displayed')
        .toBeTrue()
        // await browser.pause(5000)
    })
    it('Add 3 products to cart and click on Buy now option',async()=>{ 
        let count = await pg_productpage.addtoCart()
        expect(count).withContext('Number of products added to cart').toBe(3)
        await pg_productpage.clickbuynow()
        await pg_productpage.increaseQty()
        await browser.pause(5000)
    })
    it('Compare price with total price',async()=>{
        let price = await pg_cart.getPrice()
        let tprice = await pg_cart.getTotalPrice()
        expect(price).withContext('Price of product').toBe(tprice)
    })
    it('Reset cart and continue shopping',async()=>{
        await pg_cart.resetCart()
        await browser.pause(5000)
        expect(await pg_cart.$cartmsg().isDisplayed()).withContext('Cart empty message not displayed').toBeTrue()
        await pg_cart.continueShopping()
        expect(await pg_productpage.$pdtheader().isDisplayed()).toBeTrue()
    })
    it('Logout',async()=>{
        await pg_productpage.logOut()
        if(await browser.isAlertOpen())
        {
            await browser.acceptAlert()
        }
    })
})