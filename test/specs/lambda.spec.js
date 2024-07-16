import landingpage from "../pageobjects/lambda/landingPage.js"
import homepage from "../pageobjects/lambda/homePage.js";
import register from "../pageobjects/lambda/register.js";
import confirm from "../pageobjects/lambda/confirmationPage.js";
import account from "../pageobjects/lambda/accountPage.js";
import edit from "../pageobjects/lambda/editPage.js";
import desktopPage from "../pageobjects/lambda/desktopPage.js";
import product from "../pageobjects/lambda/product.js";
import cartPage from "../pageobjects/lambda/cartPage.js";
import checkoutPage from "../pageobjects/lambda/checkoutPage.js";
import confirmOrder from "../pageobjects/lambda/confirmOrder.js";
import successOrder from "../pageobjects/lambda/successOrder.js";
import orderHistory from "../pageobjects/lambda/orderHistory.js";

//let email= register.randomEmail();
describe('End to end flow of lambdaTest',()=>{
    it('Launch URl',async()=>{
        await landingpage.loadURL();
        expect(await (await landingpage.$homeHeader()).isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })
    
    it('Hover over My account',async()=>{
        await landingpage.hoverAccount();
        expect(await landingpage.$register().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('Click on register option',async()=>{
        await landingpage.clickRegister();
        expect(await (await register.$registerHeader()).isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('Enter valid details',async()=>{
        
        await register.enterDetails('tia','tom9','tia2345@gmail.com',919878758732,'bhhbhbj123','bhhbhbj123');
        expect (await confirm.$confirm().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('Click continue option in the confirmation page',async()=>{
        await confirm.clickContinue();
        expect (await account.$accountHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue()
    })

    it('Edit your account information',async()=>{
        await account.clickEdit();
        expect (await edit.$editHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue()
    })

    it('Change the last name',async()=>{
        await edit.changeLastName('hello');
        expect (await account.$success().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue()
    })

    it('Click on the home icon',async()=>{
        await account.clickHome();
        expect (await homepage.$homeHeader().isDisplayed())
        .withContext('header is displayed')
        .toBeTrue();
    })

    it('click on the first trending item',async()=>{
        await homepage.clickTrending();
        expect (await desktopPage.$desktopHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('Set minimum and maximum price',async()=>{
        await desktopPage.setPrice(1008,2000);
        expect (await desktopPage.$reset().isDisplayed())
        .withContext('button is displayed')
        .toBeTrue();
    })
    it("sort the prices of the products from low to high and validate it.", async () => {
        await desktopPage.sortPrice();
        let prices = await desktopPage.sortPrice();
        let sortedPrices =prices.sort((a, b) => a - b);
        await expect(prices).toEqual(sortedPrices);
    
      });

    
    it('Clear price',async()=>{
        await desktopPage.clickReset(98,2000);
        expect (await this.$drag().isDisplayed())
        .withContext('is displayed')
        .toBeTrue();
    })

    it('select products instock',async()=>{
       await desktopPage.clickAvaliability();
       expect (await desktopPage.$inStock().isSelected())
    })

    it('select apple',async()=>{
        await desktopPage.clickApple();
        expect (await desktopPage.$apple().isSelected())
        // expect (await desktopPage.$resetApple().isDisplayed())
        // .withContext('Button is displayed')
        // .toBeTrue();
    })

    it('sort products in A-Z order',async()=>{
        await desktopPage.appleSort();
        const isValid = await desktopPage.checkAppleProducts();
        expect(isValid).toBeTrue();
        // let name = await desktopPage.appleSort();
        // let sortedProducts =name.sort();
        // await expect(name).toEqual(sortedProducts);
        
    })

    // it('check if the products are of apple',async()=>{
    //     await desktopPage.checkAppleProducts();
    //     const isValid = await desktopPage.checkAppleProducts();
    //     expect(isValid).toBeTrue();
    // })

    it('Hover over the first product',async()=>{
        await desktopPage.moveHover();
        expect (await desktopPage.$hoverMenu().isDisplayed())
        .withContext('Menu is displayed')
        .toBeTrue();
    })

    it('click on Add to cart option',async()=>{
        await desktopPage.addToCart();
        expect (await desktopPage.$addtoCart().isSelected());
    })

    it('Select Size',async()=>{
        await product.selectSize();
        expect (await desktopPage.$notification().isDisplayed())
        .withContext('Notification displayed')
        .toBeTrue()
//expect(await product.$addCart().isEnabled())
    })

    it('Click on view cart',async()=>{
        await desktopPage.clickViewCart();
        expect (await cartPage.$productInCart().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('Click continue',async()=>{
        await cartPage.clickContinue();
        expect (await checkoutPage.$checkoutHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('enter details',async()=>{
        await checkoutPage.enterDetails('tia','toman','kakanadb678','ernakulam',786577,'India','Kerala')
        
    })

    
    
})