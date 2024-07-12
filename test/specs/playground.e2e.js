import basicLogin from "../pageobjects/playGround/basicLogin.js"
import landingPage from "../pageobjects/playGround/landingPage.js"
import mainLogin from "../pageobjects/playGround/mainLogin.js"
import homePage from "../pageobjects/playGround/homePage.js"
import shopPage from "../pageobjects/playGround/shopPage.js"
import cartPage from "../pageobjects/playGround/cartPage.js"


describe('Playground Application', () => {
    it('Load the page successfully', async () => {

        await basicLogin.loadUrl()
        await basicLogin.$header().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
      
        })


    it('Login with valid credentials', async () => {
        await basicLogin.login()
        await landingPage.$header().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
    })

    it('Click on the user icon', async () => {
        await landingPage.clickUser()
        await landingPage.$loginIcon().waitForDisplayed({timeout: 10000, timeoutMsg: 'login icon is not visible'})
    })

    it('Click on the login button', async () => {

        await landingPage.clickLogin()
        await mainLogin.$header().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
    })

    it('Login with valid credentials', async () => {

        await mainLogin.login()

        await homePage.clickUser()
        await homePage.$logoutButton().waitForDisplayed({timeout: 10000, timeoutMsg: 'Logut button is not visible'})
    })

    it('Click on the Shop button', async () => {
        await homePage.clickShop()
        await shopPage.$header().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
    })

    it('Click on shop by category', async () => {

        await shopPage.clickShopCategory()
        await shopPage.$mobileCatregory().waitForDisplayed({timeout: 10000, timeoutMsg: 'Catagory is not visible'})})

    it('Click on mobile category', async () => {
        await shopPage.clickMobileCategory()
        await shopPage.$xiaomi14().waitForDisplayed({timeout:10000, timeoutMsg:'Mobile phones are not displayed'})
    })
    

    it('Add product to cart', async () => {
        let count=await shopPage.clickaddCart()
        let buyNum=parseInt(await shopPage.$cartNum().getText());
        expect(count).toBe((buyNum))
        
    })
    

    it('Click on Buy Now button', async () => {
        await shopPage.clickBuyNow()
         

    })
    it('Check the total price', async () => {
        let total=await cartPage.prizeCheck()
        let displayedTot=await cartPage.$totalPrice().getText();
        let remDol=displayedTot.replace('$','')
        let displayedTotal=parseFloat(remDol)
        
        expect(displayedTotal).toBe(total)
    })

    it('Click on increment button', async () => {

        await cartPage.clickIncrement()
        for(let i in cartPage.$$quantity()){
           expect (await cartPage.$$quantity()[i].getText()).toEqual('2').waitForDisplayed({timeout: 10000, timeoutMsg: 'increament button ia not working'})
        }
        await browser.pause(3000)
    })
    it('Check the total price', async () => {
        let total=await cartPage.prizeCheck()
        let displayedTot=await cartPage.$totalPrice().getText();
        let remDol=displayedTot.replace('$','')
        let displayedTotal=parseFloat(remDol)
        
        expect(displayedTotal).toBe(total)
    })

    it('Click on reset button', async () => {

        await cartPage.clickReset()
        await cartPage.$emptyCartHeader().waitForDisplayed({timeout: 10000, timeoutMsg: 'Reset button is not working'})
        
    })

    
     it("Successfull logout from the application",async()=>{
        await cartPage.logout();
        await cartPage.$logoutMessage().waitForDisplayed({timeout:5000,timeoutMsg:"Logout successfull message is still displayed"});
        expect(await cartPage.$logoutMessage().isDisplayed()).withContext("Logout successfull message is not displayed").toBeTrue();
        });
        

    })

