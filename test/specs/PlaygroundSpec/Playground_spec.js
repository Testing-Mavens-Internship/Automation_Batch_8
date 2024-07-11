import signin from "../../pageobjects/Play_Ground/pl_signin.js";
import landingpage from "../../pageobjects/Play_Ground/pl_landingpage.js";
import loginpage from "../../pageobjects/Play_Ground/pl_loginpage.js";
import homepage from "../../pageobjects/Play_Ground/pl_homepage.js";
import productlistpage from "../../pageobjects/Play_Ground/pl_productlistpage.js";
import pl_cartpage from "../../pageobjects/Play_Ground/pl_cartpage.js";
describe('Checking the functionality of PlayGround webpage',() =>{

    it('Launch the url',async()=>{
        await signin.loadurl()
        await signin.$headerSign().waitForDisplayed({timeout:3000,timeoutMsg:"login header is not displayed"})
        expect (await signin.$headerSign().isDisplayed()).withContext(`Expect login header should be displayed`).toBeTrue();
    })

    it('Signin into landingpage',async()=>{
        await signin.firstSign();

        await signin.$username().isDisplayed();

       
    })

    it("clicking on user icon",async()=>{
    await landingpage.clickOnUserIcon()
    })
   
    it("click on the login",async()=>{
        await landingpage.clickOnLogin();
    })

    it("Logging into homepage using valid credentials",async()=>{
        await loginpage.LoggingIn();
        await loginpage.$loginheader().isDisplayed();

    })
    
    it("clicking on usericon",async()=>{
        await homepage.clickOnUserIcon();
    })

    it("Validate logout link is displayed in the homepage",async()=>{
       await homepage.$logout().waitForDisplayed()
        expect (await homepage.$logout().isDisplayed()).toBeTrue();   
     })

    it('clicking on the shoplink displayed in the homepage',async()=>{
        await homepage.clickOnShop();
        expect (await homepage.$userIcon().isDisplayed()).toBeTrue();   
    })
        
    

    it('click on the shop by category link',async()=>{
        await productlistpage.clickShopByCategory();
        
        
    })

    it('Selecting Mobile from category list',async()=>{
        await productlistpage.selectMobile();
    })

    it('Adding product to the cart',async()=>{
      let count= await productlistpage.addingProductsToCart();
      let Num=parseInt(await productlistpage.$cartNum().getText());
      expect(count).toBe((Num));
       await productlistpage.$addingToCart().isDisplayed(10000)
    })
    
    it('Clicking on Buy now link',async()=>{
        await productlistpage.clickBuyNow();
        await productlistpage.$clickCart().isDisplayed();
    })
    
    it('incrementing product by clicking plus button',async()=>{
        await pl_cartpage.clickIncrement();
   
       })

    it('validating the price',async()=>{
        let price=await pl_cartpage.calculatePrice();
        let displayedT=await pl_cartpage.$total().getText();
        let rem=displayedT.replace('$','')
        let displayedTotal=parseInt(rem)
        expect(displayedTotal).toBe(price);
        

    })
    it('Clicking on the Reset button',async()=>{
        await pl_cartpage.clickOnReset();
        await browser.execute(() => {
            window.scrollTo(0, 0);
        });

        await pl_cartpage.$header().isDisplayed();
    })


})