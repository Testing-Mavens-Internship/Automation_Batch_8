import pg_landing from "../pageobjects/pG/pg_landing.js";
import pg_home from "../pageobjects/pG/pg_home.js";
import loginPage from "../pageobjects/pG/pg_login.js";
import pg_product from "../pageobjects/pG/pg_product.js";
import pg_cart from "../pageobjects/pG/pg_cart.js";
import pg_gateway from "../pageobjects/pG/pg_gateway.js";
import pg_shop from "../pageobjects/pG/pg_shop.js";
import productsPage from "../pageobjects/precisionTech/productsPage.js";

describe('My Login application', () => {
    it('Load the page successfully', async () => {
        await pg_landing.loadUrl();
        expect((await pg_home.$header()).isDisplayed())
        .withContext('header should be visible')
        .toBeTrue();
    });

    it("Click on the user button", async () => {
        await pg_landing.clickUser();
    });

    it("Click on the login button", async () => {
        await pg_home.clickLogin();
    });

    it("Login with valid credentials", async () => {
        await loginPage.login();
    });

    it("Click on the shop button", async () => {
        await pg_home.clickShop();
    });

    it("Click on the product button", async () => {
        await pg_shop.clickProduct();
    });

    it("Click on the cart button", async () => {
        await pg_product.clickCart();
    });

    it("Click on the buy button", async () => {
        await pg_product.clickBuy();
    });

    it("Click on the checkout button", async () => {
        await pg_cart.clickCheckout();
    });

    it("Click on the gateway button", async () => { 
        await pg_gateway.clickGateway();
    });

    it("Sort elements in Z-A order", async () => {
        await productsPage.clickSortZA();
        // const isSortedCorrectly = await productsPage.checkSort();
        // expect(isSortedCorrectly).toBeTrue();
    });
});
