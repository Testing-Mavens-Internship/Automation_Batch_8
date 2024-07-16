import landingPage from "../../pageobjects/lambdaTest_pg/lt_landingPage.js";
import registerPage from"../../pageobjects/lambdaTest_pg/lt_registerPage.js";
import accountSuccessPage from "../../pageobjects/lambdaTest_pg/lt_accSuccessPage.js";
import accountPage from "../../pageobjects/lambdaTest_pg/lt_myAccountPage.js";
import editInfo from "../../pageobjects/lambdaTest_pg/lt_editInfoPage.js";
import homePage from "../../pageobjects/lambdaTest_pg/lt_homePage.js";
import products from "../../pageobjects/lambdaTest_pg/lt_productPage.js";
import productDetail from "../../pageobjects/lambdaTest_pg/lt_productDetailPage.js";



describe("End to end flow of Lambdatest ecommerce website.",()=>{
    it("Launch the URL of the website.",async()=>{
        await landingPage.loadUrl();
        await landingPage.$landingPageHeader().waitForDisplayed({timeout:50000,timeoutMsg:"Header not displayed."});
        expect(await landingPage.$landingPageHeader().isDisplayed()).toBeTrue();
    })
    it("Hover on 'My Account' and click on 'Register' option from the dropdown.", async ()=>{
        await landingPage.newRegister()
        await registerPage.$registerHeader().waitForDisplayed({timeout:5000,timeoutMsg:"Header not displayed."});
        expect(await registerPage.$registerHeader().isDisplayed()).toBeTrue();

    
    })
    it("Enter the details and create the account.",async()=>{
        await registerPage.createAccount();
        await accountSuccessPage.$accCreatedMsg().waitForDisplayed({timeout:5000,timeoutMsg:"The message is not displayed."});
        expect(await accountSuccessPage.$accCreatedMsg().isDisplayed()).toBeTrue();

    })
    it("Click continue and gets directed to the Account page.",async()=>{
        await accountSuccessPage.clickContinue();
        await accountPage.$accountHeader().waitForDisplayed({timeout:5000,timeoutMsg:"Header not displayed."});
        expect(await accountPage.$accountHeader().isDisplayed()).toBeTrue();
    })
    it("Click on edit account information.",async()=>{
        await accountPage.clickEdit();
    })
    it("Edit the last name and validate the updation.",async()=>{
        await editInfo.editLastName();
        await accountPage.$successMsg().waitForDisplayed({timeout:5000,timeoutMsg:"Success message is not displayed."});
        expect(await accountPage.$successMsg().isDisplayed()).toBeTrue();
    })
    it("Click on Home option present in the navigation bar.",async()=>{
        await accountPage.clickHome();
        await homePage.$topTrendingHeader().waitForDisplayed({timeout:5000,timeoutMsg:"Header not displayed."});
        expect(await homePage.$topTrendingHeader().isDisplayed()).toBeTrue();
    })
    it("Select the first item from the 'Top trending categories'.",async()=>{
        await homePage.selectFirstItem();
        await products.$filterHeader().waitForDisplayed({timeout:5000,timeoutMsg:"Header no displayed."});
        expect(await products.$filterHeader().isDisplayed()).toBeTrue();

    })
    it("Set the minimum and maximum price of the product from the filter option present in the products page.",async()=>{
        await products.filterPrice();
        await products.$sortByHeader().waitForDisplayed({timeout:5000,timeoutMsg:"Header not displayed."});
        expect(await products.$sortByHeader().isDisplayed()).toBeTrue();
    })
    it("sort the prices of the products from low to high and validate it.", async () => {
        await products.sortPrice();
        let prices = await products.sortPrice();
        let sortedPrices =prices.sort((a, b) => a - b);
        await expect(prices).toEqual(sortedPrices);
    });
    it("Clear the price filter and validate that it is cleared.",async()=>{
        await products.clearPriceFilter();
        await products.$defaultPrice().waitForDisplayed({timeout:5000,timeoutMsg:"Filter not cleared."});
        expect(await products.$defaultPrice().isDisplayed()).toBeTrue();
    })
    it("Filter the products in stock using availability option.",async()=>{
        await products.inStock();
        await products.$clearAvailabilityFilter().waitForDisplayed({timeout:9000,timeoutMsg:"Clear option not present."});
        expect(await products.$clearAvailabilityFilter().isDisplayed()).toBeTrue();
    })
    it("Select a brand from the 'Manufacturer' option and sort its products in ascending order.",async()=>{
        await products.sortBrand();
    })
    it("validate that the products are sorted in ascending order.",async()=>{
        await products.validateSort();
        expect(await products.validateSort()).toBeTrue()
    })
    it("Hover on the product and Click on Add to cart", async () => {
        await products.hoverOnProduct();
         await products .$addtoCart().waitForDisplayed({timeout: 10000,timeoutMsg: "Header is not visible",
         });
        expect(await productPage.$addtoCart().isDisplayed()).withContext("header should be visible").toBeTrue();
})
    it("Click on add to cart.",async()=>{
        await products.clickAddToCart();
        await productDetail.$header().waitForDisplayed({timeout: 10000,timeoutMsg: "Header is not visible",
       });
        expect(await productDetail.$header().isDisplayed()).withContext("header should be visible").toBeTrue();
    })
    it("Select the size select size and add to cart", async () => {
        await productDetail.selectSize();
        await productDetail.addToCart();
        await products.$notifyHeader().waitForDisplayed({timeout: 10000,timeoutMsg: "Header is not visible",

        });
        expect(await productPage.$notifyHeader().isDisplayed()).withContext("header should be visible").toBeTrue();
      })
    
      it("click on the cart icon", async () => {
        await productPage.clickCart();
      })
    })