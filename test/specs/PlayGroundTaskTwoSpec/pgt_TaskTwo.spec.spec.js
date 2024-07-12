import logOneObj from "../../pageobjects/playGroudTaskTwo/pgt_LoginPageOne.js";
import logTwoObj from "../../pageobjects/playGroudTaskTwo/pgt_LoginPageTwo.js";
import homeObj from "../../pageobjects/playGroudTaskTwo/pgt_HomePage.js";
import productObj from "../../pageobjects/playGroudTaskTwo/pgt_ProductPage.js";
import cartObj from "../../pageobjects/playGroudTaskTwo/pgt_CartPage.js";


describe('Playground  End-to-End Flow', () => {

  
    it('Launch URL', async () => {
     
        await logOneObj.LaunchUrl();
        console.log(await browser.getWindowHandles())
        await logOneObj.$pgLogolocator().waitForDisplayed({ timeout: 5000 });
        expect(await  logOneObj.$pgLogolocator().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue();
    
    })

    it('Enter Credentials : Login Page One', async () =>{

        await logOneObj.enterCredentials();
        await logTwoObj.$pgheader().waitForDisplayed({ timeout: 5000 });
        expect(await  logTwoObj.$pgheader().isDisplayed())
        .withContext('Expect playground Logo to be displayed')
        .toBeTrue();
    })

    it('Enter Credentials : Login Page Two', async () =>{

        await logTwoObj.enterCredentialsTwo();
        await logTwoObj.$pgheader().waitForDisplayed({ timeout: 5000 });
        expect(await  logTwoObj.$pgheader().isDisplayed())
        .withContext('Expect playground Logo to be displayed')
        .toBeTrue();

    })
    it('Verify presence of Logout Button in Homepage', async () =>{

        await homeObj.LogOutButtonCheck();
        await homeObj.$logoutIcon().waitForDisplayed({ timeout: 5000 });
        expect(await  homeObj.$logoutIcon().isDisplayed())
        .withContext('Expect playground Logo to be displayed')
        .toBeTrue();

    })
    it('Selecting Category : Mobile', async () =>{

        await homeObj.clickOnShopByCategory();
        await logTwoObj.$pgheader().waitForDisplayed({ timeout: 5000 });
        expect(await  logTwoObj.$pgheader().isDisplayed())
        .withContext('Expect playground Logo to be displayed')
        .toBeTrue();
        

    })
    it('Adding First Three Products to Cart and Verify the BuyNow Increment', async () => {
        let initialCount ;
    
        initialCount = await productObj.addProductToCart();
        expect(await productObj.$buyNowIncrementIcon().getText()).toContain(initialCount)

    
    });

    
    it('View Cart after adding pproducts to cart', async () =>{

        await cartObj.ClickToSeeCart();
        await browser.pause(1000);
        await logTwoObj.$pgheader().waitForDisplayed({ timeout: 5000 });
        expect(await  logTwoObj.$pgheader().isDisplayed())
        .withContext('Expect playground Logo to be displayed')
        .toBeTrue();
    })

    it("Verify that the Displayed Total and Actal Total amount are the same",async()=>{
        let displayedTotal=await cartObj.totalpriceValidation();
        let actualTotal=await cartObj.DisplayedTotal();
        expect(displayedTotal).toBe(actualTotal)
    })


    it("Reset the Cart and check the 'YOUR CART FEELS LONELY' Header.",async()=>{

        await cartObj.clickResetCart();
        await cartObj.$emptyCartHeader().waitForDisplayed({ timeout: 5000 });
        expect(await  cartObj.$emptyCartHeader().isDisplayed())
        .withContext('Expect playground Logo to be displayed')
        .toBeTrue();  
      
    })
    // it("Click on Logout",async()=>{

        
    //     //await cartObj.userIconClick();
    //     //await cartObj.$logoutIcon().waitForClickable({timeout:12000})
    //     await cartObj.clickOnLogout();
    //     await cartObj.$emptyCartHeader().waitForDisplayed({ timeout: 5000 });
    //     expect(await  cartObj.$emptyCartHeader().isDisplayed())
    //     .withContext('Expect playground header to be displayed')
    //     .toBeTrue();  
      
    // })



    
    
})    