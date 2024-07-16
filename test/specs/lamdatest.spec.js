import landingPage from '../pageobjects/lamdatest/landingpage.js';
import registerPage from '../pageobjects/lamdatest/registerPage.js';
import successMsg from '../pageobjects/lamdatest/successPage.js';
import editAccount from '../pageobjects/lamdatest/editPage.js';
import editLastName from '../pageobjects/lamdatest/editInformation.js';
import homePage from '../pageobjects/lamdatest/homePage.js';
import productsPage from '../pageobjects/lamdatest/productPage.js';
import checkoutPage from '../pageobjects/lamdatest/checkOutPage.js';

let registerDetails={
    "fname":"Aleena",
    "lname":"Shaji",
    "email":"aleena1007@gmail.com",
    "telephone":"1234598890",
    "password":"aleena@123",
    "confirmPassword":"aleena@123"
}

describe(`Lamdatest`, ()=> {
    it('Should load URL', async ()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$myAccountHeader().isDisplayed())
                .withContext(`MyAccount header should be displayed`)
                .toBeTrue();
    })

    it('Hover over My Account and view Register option', async ()=>{
        await landingPage.myAccount();
        expect(await landingPage.$register().isDisplayed())
                .withContext('MyAccout option is hovered and displays Register ')
                .toBeTrue();
    })

    it('Click on register option', async ()=>{
        await landingPage.clickRegister();
        expect(await registerPage.$registerHeader().isDisplayed())
                .withContext('User is navigated to the Register page')
                .toBeTrue();
    })

    it('Enter deatils to register and continue', async ()=>{
        await registerPage.enterDetails(registerDetails.fname, 
                                        registerDetails.lname, 
                                        registerDetails.email, 
                                        registerDetails.telephone, 
                                        registerDetails.password,
                                        registerDetails.confirmPassword);
        await successMsg.$successMsg().waitForDisplayed({timeout: 5000, timeoutMsg: 'Registration is not successful'});
        expect(await successMsg.$successMsg().isDisplayed())
                .withContext('User is registered')
                .toBeTrue();
    })

    it('Click on continue button on the successfull registration page', async ()=>{
        await successMsg.clickContinue();
        expect(await editAccount.$editAccount().isDisplayed())
                .withContext('User is navigated to edit information page')
                .toBeTrue();

    })

    it('Click on edit account and edit lastname of the user', async ()=>{
        await editAccount.clickEditAccount();
        await editLastName.lastName(`Thomas`);
        expect(await editLastName.$editLastname().isDisplayed())
                .withContext('Last name is edited')
                .toBeTrue();

    })

    it('Click on continue button and validate the success message', async ()=>{
        await editLastName.ClickContinueButton();
        await editLastName.$successfulUpdate().waitForDisplayed({timeout: 5000, timeoutMsg: 'Success message is not displayed'});
        expect(await editLastName.$successfulUpdate().isDisplayed())
                .withContext('User is registered successfully')
                .toBeTrue();
    })

    it('Click on Home option from the navigation bar', async ()=>{
        await editLastName.clickHomeButton();
        expect(await homePage.$firstItem().isDisplayed())
                .withContext('User can select First trending product from the Home page')
                .toBeTrue();
    })

    it('Click on the first trending product on the homePage', async ()=>{
        await homePage.clickFirstItem();
        expect(await productsPage.$filterOption().isDisplayed())
                .withContext('Filter option should be present on the homepage')
                .toBeTrue();
    })

    it('Filter the price from minimum to maximum', async ()=>{
        await productsPage.filterPrice(1008,2000);
        expect(await productsPage.$sortBy().isDisplayed())
                .withContext('Filter the price and click on the sortBy option')
                .toBeTrue();
    })

    it('Click on sortBy low to high', async ()=>{
        await productsPage.clickSortBy();
        expect(await productsPage.checkSortedProducts())
                .withContext('Products are sorted by price low to high')
                .toBeTrue();
       
    })

    it('Select clear price option and validate change in Price', async ()=>{
        await productsPage.clickClearPrice();
        const currentPrices = await productsPage.checkPricesAfterClear();
        const sortedPrices = await productsPage.checkSortedProducts();
        expect(currentPrices).not.toEqual(sortedPrices);
    })

    it('Click on availiability in-stock', async ()=>{
        await productsPage.clickInstock();
        await productsPage.$appleProducts().waitForDisplayed({timeout: 5000})
        expect(await productsPage.$appleProducts().isDisplayed())
                .withContext('Apple products option is displayed')
                .toBeTrue();
        
    })

    it(`click apple products and sort name from A to Z`, async ()=>{
        await productsPage.clickAppleProducts();
        const isValid = await productsPage.checkAppleProducts();
        expect(isValid).toBeTrue();
    
    })

    it('Hover over first product and validate hover menu', async ()=>{
        await productsPage.firstProduct();
        await productsPage.$hoverMenu().waitForDisplayed({timeout: 5000, timeoutMsg: 'Hovermenu is not displayed'})
        expect(await productsPage.$hoverMenu().isDisplayed({timeout: 5000}))
                .withContext('Hover menu is displayed')
                .toBeTrue();
    })
    
    it('Click on add to cart from hover menu, select medium size then add to cart', async ()=>{
        await productsPage.clickAddToCart();
        expect(await productsPage.$popup().isDisplayed())
                .withContext('Popup for add to cart is displayed ')
                .toBeTrue();

    })

    it('Click on add to cart icon and validate the product added is same', async ()=>{
        await productsPage.clickCart();
        const isProductNameValid = await productsPage.validateCartProduct();
        expect(isProductNameValid).toBe(true);
    })

    it('Click Checkout and fill details', async ()=>{
        await productsPage.checkoutButton();
        await checkoutPage.enterPaymentDetails(
            "Aleena", 
            "Shaji", 
            "Thayamkariyil", 
            "Kerala", 
            "685505"
        );
        

    })
   

})