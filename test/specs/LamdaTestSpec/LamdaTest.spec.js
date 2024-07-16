import landObj from  "../../pageobjects/LamdaTest/lm_LandingPage.js";
import regObj from "../../pageobjects/LamdaTest/lm_RegisterPage.js";
import accObj from "../../pageobjects/LamdaTest/lm_AccountCreatedPage.js";
import homeObj from "../../pageobjects/LamdaTest/lm_HomePage.js";
import prodObj from "../../pageobjects/LamdaTest/lm_ProductPage.js";


describe('LamdaTest End-to-End Flow',() => {


it("Launch URl", async () => {

    await landObj.LaunchUrl();
    await landObj.$lamdatestHeader().waitForDisplayed({ timeout: 5000 });
    expect(await landObj.$lamdatestHeader().isDisplayed())
    .withContext('Expect LamdaTest LOgo is displayed')
    .toBeTrue();
   
})

it('Click on the Register Button', async () => {

    await landObj.clickOnRegister();
    await browser.pause(5000);
    expect(await landObj.$lamdatestHeader().isDisplayed())
    .withContext('Expect LamdaTest LOgo is displayed')
    .toBeTrue();
    

})

it('The Registration Process and account creation verification', async () => {

    await regObj.Register();
    
    expect(await accObj.$accountCreatedHeader().isDisplayed())
    .withContext('The Account Created Header should be displayed')
    .toBeTrue();   

})

it('Edit Account Details : Edit Last Name', async () => {

    await accObj.changeLastName();
    //expect(await accObj.$successBanner().waitForDisplayedDisplayed({timeout: 5000})).
    // expect(await accObj.$successBanner().toBeDisplayed())
    // .withContext('The Sucessfully Updated Account Details should be displayed')
    // .toBeTrue();  
    expect(await landObj.$lamdatestHeader().isDisplayed())
    .withContext('Expect LamdaTest LOgo is displayed')
    .toBeTrue(); 

})

it('Click on home icon', async () => {

    await accObj.clickOnHome();
    expect(await landObj.$lamdatestHeader().isDisplayed())
    .withContext('Expect LamdaTest LOgo is displayed')
    .toBeTrue(); 

})



it('Click on first item of Top Trending Products', async () => {

    await homeObj.clickOnTopTrending();
    expect(await landObj.$lamdatestHeader().isDisplayed())
    .withContext('Expect LamdaTest LOgo is displayed')
    .toBeTrue(); 

})

it('Filter by maximum and minimum price range',async()=>{
    await prodObj.setPrice(1008,2000);
    expect (await prodObj.$reset().isDisplayed())
    .withContext('Close button is displayed')
    .toBeTrue();

})

it('Sort products Low To High',async()=>{
    await prodObj.sortPrice(1008,20000);
    expect (await prodObj.$reset().isDisplayed())
    .withContext('Close button is displayed')
    .toBeTrue();
})

it("sort the prices of the products from low to high and validate it.", async () => {
    await prodObj.sortPrice();
 
 
    let prices = await prodObj.sortPrice();
    let sortedPrices =prices.sort((a, b) => a - b);
    await expect(prices).toEqual(sortedPrices);
 
  });
 

it('Reset price ',async()=>{
    await prodObj.clickReset(98,2000);
    expect (await prodObj.$reset().isDisplayed())
    .withContext('Close button is displayed')
    .toBeTrue();

})

it('Check availability of the product-instock ',async()=>{
    await prodObj.checkAvaliability();
    expect (await prodObj.$resetAvaliability().isDisplayed())
    .withContext('Close button is displayed')
    .toBeTrue();

})

it('Click on apple products icon ',async()=>{
    await prodObj.clickApple();
    expect (await prodObj.$resetApple().isDisplayed())
    .withContext('Close button is displayed')
    .toBeTrue();

})

it('Sort by Apple Products A-Z', async () => {

    await prodObj.appleSort();
    expect (await prodObj.$resetApple().isDisplayed())
    .withContext('Close button is displayed')
    .toBeTrue();

})

it('Move Hover to first Product', async () => {

    await prodObj.moveHover();
    await browser.pause(10000);
    // expect (await prodObj.$resetApple().isDisplayed())
    // .withContext('Close button is displayed')
    // .toBeTrue();

})

it('Add to Cart product', async () => {

    await prodObj.addToCart();
    await browser.pause(50000);
    
})

// it('Click on Add to cart on the Navbar', async () => {

//     await prodObj.clickAddToCartOnNav();
//     await browser.pause(10000);
    
// })



// it('View the Cart', async () => {

//     await prodObj.clickViewCart();
    
// })



})


    
