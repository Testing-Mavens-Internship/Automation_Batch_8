import loginPageObj from "../pageobjects/sauceDemo/loginPage.js";
import homePageObj from "../pageobjects/sauceDemo/HomePage.js";
import cartPageObj from "../pageobjects/sauceDemo/cartPage.js";
import checkoutPageObj from "../pageobjects/sauceDemo/checkoutPage.js";

describe('Purchasing a product from the saucedemo website.', () => {
    it('Launch saucedemo website', async() => {
        await loginPageObj.loadUrl();
        await loginPageObj.extractUsernameAndPasswords();
        expect(await loginPageObj.$loginPageHeader().isDisplayed()).toBe(true);
    });

    it('Login into saucedemo website', async() => {
        await loginPageObj.doLogin();
        expect(await homePageObj.$homePageHeader().isDisplayed()).toBe(true);
    });

    it('Sort products from low to high', async() => {
        let priceAfterSort = await homePageObj.sortProducts();
        expect(priceAfterSort).toBe(true);
    });

    it('Add product to cart', async() => {
        let colorChanged = await homePageObj.clickAddToCart();
        expect(colorChanged).toBe(true);
    });
    it('Click on cart icon', async() => {
        await homePageObj.clickCartIcon();
        expect(await cartPageObj.$cartPageHeader().isDisplayed());
    })
    it('Click on checkout', async() => { 
        await cartPageObj.clickCheckout();
        expect(checkoutPageObj.$checkoutPageHeader().isDisplayed());
    })
    it('Fill checkout information form and click continue', async() => {
        await checkoutPageObj.fillCheckoutForm();
        expect(checkoutPageObj.$checkoutPageHeader().isDisplayed());
    })
    it('Click on finish button', async() => {
        await checkoutPageObj.clickFinishButton();
        expect(await checkoutPageObj.$orderPlacedMessage().isDisplayed());
    })
});
