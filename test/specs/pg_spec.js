import loginPage from '../pageobjects/playgroundAssignment/login.js';
import landPage from '../pageobjects/playgroundAssignment/landingPage.js';
import userLogin from '../pageobjects/playgroundAssignment/userLogin.js';
import homePage from '../pageobjects/playgroundAssignment/homePage.js';
import productsPage from '../pageobjects/playgroundAssignment/products.js';
import cartPage from '../pageobjects/playgroundAssignment/cartPage.js';

describe('Playground',()=>{
    it('Should load URL', async ()=>{
        await loginPage.loadUrl();
        expect(await loginPage.$header().isDisplayed())
                .withContext('Expected login page should be loaded')
                .toBeTrue() 

    })
       
    it('Should enter username and password', async () =>{
            await loginPage.login('playground','playground@TM');
            expect(await landPage.$landHeader().isDisplayed())
                    .withContext('Homepage should be loaded')
                    .toBeTrue()
        })

    it('Select on user icon', async () => {
        await landPage.clickUserIcon();
        expect(await landPage.$userLogin().isDisplayed())
                     .withContext('Playground icon is visible')
                     .toBeTrue();
     })

    it('click login option from dropdown', async () => {
        await landPage.clickUserLogin();
        await userLogin.$loginHeader().waitForDisplayed({timeout:3000, timeoutMsg: 'Login page is not displayed'});
        expect(await userLogin.$loginHeader().isDisplayed())
                     .withContext('Login option is visible')
                     .toBeTrue();
     })
    
    it('Should enter email and password', async () => {
        await userLogin.userLogin('aleenashaji987@gmail.com','Aleena@playground123');
        expect(await homePage.$userIcon().isDisplayed())
                .withContext('User is logged in')
                .toBeTrue();

    })

    it('Click on Shop by Category', async () => {
        await homePage.clickShopCategory();
        expect(await homePage.$selectMobiles().isDisplayed())
                .withContext('Mobiles category is selected')
                .toBeTrue();
    })

    it('Click on Mobiles category', async () => {
        await homePage.clickMobiles();
        expect(await productsPage.$productsHeader().isDisplayed())
                .withContext('Products page is loaded')
                .toBeTrue();
    })

    it('Add 3 products to the cart', async () => {
        let count= await productsPage.addProduct();
        let productsCount = await productsPage.$buyNowCount().getText();
        expect(count).toBe(parseInt(productsCount));
           
    })

    it('Click on buy now icon', async () => {
        await productsPage.clickBuyNow();
        expect(await cartPage.$cartHeader().isDisplayed())
                .withContext('Carts page is loaded')
                .toBeTrue();
    })

    it('Add quantity of products', async () => {
        await cartPage.addProductNumber();
        let totalPrice= await cartPage.getTotPrice();
        let finalPrice= parseInt((await cartPage.$totPrice().getText()).replace("$", ""));
        expect(totalPrice).toBe(parseInt(finalPrice));
    })

    it('Reset cart page', async () => {
        await cartPage.clickReset();
        await cartPage.$cartIsEmpty().waitForDisplayed({timeout:5000,timeoutMsg:'Cart empty message is not displayed'})
        expect(await cartPage.$cartIsEmpty().isDisplayed())
                .withContext('Cart is Empty')
                .toBeTrue();
               
    });

    it('click on user icon for logout', async () =>{
        await cartPage.$clickUserIcon();   
    })


})