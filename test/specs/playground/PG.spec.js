import signInPage from '../../pageobjects/PLAYGROUND/mainLogin.js';
import landPage from'../../pageobjects/PLAYGROUND/landingPage.js';
import loginPage from '../../pageobjects/PLAYGROUND/loginPage.js';
import homePage from '../../pageobjects/PLAYGROUND/homePage.js';
import shopPage from '../../pageobjects/PLAYGROUND/shopPage.js';
import cartPage from '../../pageobjects/PLAYGROUND/cart.js';

describe("To verify the end to end flow of the Playground web application.",()=>{
it("Launch the URL in the browser",async()=>{
    await signInPage.launchUrl();
    expect(await loginPage.$logolocator().isDisplayed()).withContext("Expected header not displayed").toBeTrue();
})
it("Login with valid username and password.",async()=>{
    await signInPage.signIn();
    await landPage.$logo().waitForDisplayed({timeout:6000,timeoutMsg: "waiting for header to be displayed"});
    expect(await landPage.$logo().isDisplayed()).withContext("Expected header not displayed").toBeTrue();

})
it("Click on the usericon and select login from the dropdown.",async()=>{
    await landPage.clickLogin();
    await loginPage.$header().waitForDisplayed({timeout:6000,timeoutMsg:"Waiting for header to be displayed."});
    expect(await loginPage.$header().isDisplayed()).withContext("Expected header not displayed.").toBeTrue();

})
it("Login with valid email and password.",async()=>{
    await loginPage.login();
    await homePage.$wishList().waitForDisplayed({timeout:6000,timeoutMsg:"Waiting for header to be displayed."});
    expect(await homePage.$wishList().isDisplayed()).withContext("expected header not displayed.");

})
it("Verify that the 'Logout' option is present in the usericon dropdown.",async()=>{
    await homePage.validate();
    await homePage.$logOut().waitForDisplayed({timeout:6000,timeoutMsg:"Waiting for header to be displayed."});
    expect(await homePage.$logOut().isDisplayed()).withContext("expected header not displayed.").toBeTrue();
})
it("Click on the 'Shop' option present in the navigation bar of the home page.",async()=>{
    await homePage.clickShopOption();
    await shopPage.$profile().waitForDisplayed({timeout:6000,timeoutMsg:"Waiting for header to be displayed."})
    expect(await shopPage.$profile().isDisplayed()).withContext("expected header not displayed.").toBeTrue();
})
it("Select 'Mobiles' from the 'Shop by Category' dropdown.",async()=>{
    await shopPage.shopByCategory();
    await shopPage.$item().waitForDisplayed({timeout:6000,timeoutMsg:"Waiting for header to be displayed."});
    await shopPage.$product().waitForDisplayed({timeout:6000,timeoutMsg:"Waitong for header"});
    expect(await shopPage.$product().isDisplayed()).withContext("expected header not displayed.").toBeTrue();


})
it("Add three products to the cart.",async()=>{
    let count=await shopPage.addToCart();
    let num=parseInt(await shopPage.$buyNowNum().getText());
    expect(count).toBe(num);
})
it("Click on the 'Buy Now' icon and navigate to the Cart page.",async()=>{
    await shopPage.clickBuyNow();
    await shopPage.$buyNowNum().waitForDisplayed({timeout:6000,timeoutMsg:"waiting to be displayed."})
    expect(await cartPage.$cartHeader().isDisplayed()).withContext("expected header not displayed.").toBeTrue();
})
it("Increase the quantity of the first two products in the cart.",async()=>{
    await cartPage.increaseQuantity();
    for(let i in cartPage.$$increment())
    expect(await cartPage.$$increment()[i].getText()).toEqual('2').waitForDisplayed({timeout:6000,timeoutMsg:"waiting to be displayed."})
})
it("Compare the sum of the subtotals with the cart totals in the cart.",async()=>{
    let total=await cartPage.compareSum()
    let displayedTot=await cartPage.$totalPrice().getText();
    let remDol=displayedTot.replace('$','')
    let displayedTotal=parseFloat(remDol)
   
    expect(displayedTotal).toBe(total);
})
it("Reset the Cart",async()=>{
    await cartPage.resetCart();
    await cartPage.$cartEmpty().waitForDisplayed({timeout:10000,timeoutMsg:"Waiting for header to be displayed."});
    expect(await cartPage.$cartEmpty().isDisplayed()).withContext("expected header not displayed.").toBeTrue();

})
it("Logout from the web application.",async()=>{
    await cartPage.logOut();
    await cartPage.$userIcon().waitForDisplayed({timeout:10000,timeoutMsg:"Waiting for header to be displayed."});
    await cartPage.$logoutOpt().waitForDisplayed({timeout:10000,timeoutMsg:"Waiting for header to be displayed."});
    
})
})