import signin from "../pageobjects/playgroundE2E/signinPage.js";
import landingPage from "../pageobjects/playgroundE2E/landingPage.js";
import loginPage from "../pageobjects/playgroundE2E/loginPage.js";
import homePage from "../pageobjects/playgroundE2E/homePage.js";
import productPage from "../pageobjects/playgroundE2E/productPage.js";
import cartPage from "../pageobjects/playgroundE2E/cartPage.js"


describe('End to end flow of playground website',()=>{
    it('Launch url',async()=>{
        await signin.loadUrl();
        expect(await signin.$header().isDisplayed())
       .withContext('Expect header is displayed')
       .toBeTrue();
    })

    it('should signIn with valid credentials', async () => {
        await signin.validLogin();
        expect(await landingPage.$header().isDisplayed())
       .withContext('Expect header is displayed')
       .toBeTrue();
    })
    
    it('click on user icon',async()=>{
        await landingPage.clickUserIcon();
        expect(await landingPage.$login().isDisplayed())
        .withContext('Expect header is displayed')
        .toBeTrue();
    })
    it(' click on login option', async () => {
        await landingPage.ClickLogin();
        expect(await loginPage.$header().isDisplayed())
        .withContext('Expect header is displayed')
        .toBeTrue();
       
    })
   
    it('should login with valid credentials', async () => {
       await loginPage.enterCredentials();
       expect(await loginPage.$header().isDisplayed())
       .withContext('Expect header is displayed')
       .toBeTrue();
    })

    it('click user icon and check logout option is present', async()=>{
        
        await homePage.clickUser();
        await homePage.$header().waitForDisplayed({timeout:6000,timeoutMsg:"Not displayed"})
        expect(await homePage.$logout().isDisplayed())
        .withContext('Expect header is displayed')
        .toBeTrue();
    })

    it('click on shop by category',async()=>{
        await homePage.clickShopCategory();
        expect(await homePage.$clickMobile().isDisplayed())
        .withContext('Expect header is displayed')
        .toBeTrue();
    })

    it('click on mobile category',async()=>{
        await homePage.clickMobile();
        expect(await productPage.$header().isDisplayed())
        .withContext('Expect header is displayed')
        .toBeTrue();
    
    })

    it('click on add to cart',async()=>{
        let count= await productPage.clickAddtoCart();
        let num=parseInt(await productPage.$count().getText());
        expect(count).toBe((num));
  
    })

    it('Click on buy now',async()=>{
        await productPage.clickBuyNow();
        expect(await cartPage.$header().isDisplayed())
        .withContext('Expect header is displayed')
        .toBeTrue();
    })
    
    it('Check the total price',async()=>{
       let num = await cartPage.totalPrice();
        let price= await cartPage.$total().getText()
        let a=price.replace("$","")
        let total=parseFloat(a)
        expect(num).toBe(total);
        

    })

    it('Click on increment button', async () => {

        await cartPage.clickIncrement()
        for(let i in cartPage.$$quantity()){
           expect (await cartPage.$$quantity()[i].getText()).toEqual('2')
           .waitForDisplayed({timeout: 10000, timeoutMsg: 'increament button ia not working'})
        }
        await browser.pause(3000)
    })
     it('Check the total price again',async()=>{
        let num = await cartPage.totalPrice();
         let price= await cartPage.$total().getText()
         let a=price.replace("$","")
         let total=parseFloat(a)
         expect(num).toBe(total);
    
    })
    it('Click on reset button', async () => {
    await cartPage.clickReset()
    await cartPage.$emptyCart().waitForDisplayed({timeout: 10000, timeoutMsg: 'Reset button is not working'})
            
    })
   
    it("logout from the application",async()=>{
        await cartPage.clickLogout();
        await cartPage.$logoutMessage().waitForDisplayed({timeout:10000,timeoutMsg:"Logout successfull message is still displayed"});
        expect(await cartPage.$logoutMessage().isDisplayed())
        .withContext("Logout successfull message is not displayed")
        .toBeTrue();
        });
        
})

    
    