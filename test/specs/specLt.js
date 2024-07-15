import { expect } from '@wdio/globals'
import landing from "../pageobjects/LambdaTest/landing.js";
import register from "../pageobjects/LambdaTest/register.js";
import accountCreated from '../pageobjects/LambdaTest/accountCreated.js';
import myAccount from '../pageobjects/LambdaTest/myAccount.js';
import editMyAccountInfo from '../pageobjects/LambdaTest/editMyAccountInfo.js';
import home from '../pageobjects/LambdaTest/home.js';
import firstOption from '../pageobjects/LambdaTest/firstOption.js';
import checkout from '../pageobjects/LambdaTest/checkout.js';
import confirmOrder from '../pageobjects/LambdaTest/confirmOrder.js';


describe('To verify workflow of LAMBDATEST website', () => {

    it('Launch URL in browser', async () => {
        await landing.loadUrl()
        await landing.$header().waitForDisplayed({ timeout: 5000 })
        expect(await landing.$header().isDisplayed())
        .withContext('Expect LAMBDATEST logo to be displayed in the Landing page')
        .toBeTrue()
    })

    it('Hover over My account and click Register', async () => {
        await landing.hoverMyAccount()
        await register.$regHeader().waitForDisplayed({ timeout: 8000 })
        expect(await register.$regHeader().isDisplayed())
        .withContext('Expect Register Account header to be displayed')
        .toBeTrue()
    })

    it('Enter details in Register page', async () => {
        await register.enterDetails()
        await accountCreated.$accCreated().waitForDisplayed({ timeout: 5000 })
        expect(await accountCreated.$accCreated().isDisplayed())
        .withContext('Expect Your Account Has Been Created! to be displayed')
        .toBeTrue()
    })

    it('Click Continue from AccountCreated page', async () => {
        await accountCreated.clickContinue()
        await myAccount.$myAccHeader().waitForDisplayed({ timeout: 5000 })
        expect(await myAccount.$myAccHeader().isDisplayed())
        .withContext('Expect My Account header to be displayed')
        .toBeTrue()
    })

    it('Navigate to Edit Account Information page', async () => {
        await myAccount.clickEditAccInfo()
        await editMyAccountInfo.$editPageHeader().waitForDisplayed({ timeout: 5000 })
        expect(await editMyAccountInfo.$editPageHeader().isDisplayed())
        .withContext('Expect My Account Information header to be displayed')
        .toBeTrue()
    })

    it('Edit Lastname of user', async () => {
        await editMyAccountInfo.editLastname()
        await myAccount.$successMsg().waitForDisplayed({ timeout: 5000 })
        expect(await myAccount.$successMsg().isDisplayed())
        .withContext('Expect Success message to be displayed')
        .toBeTrue()
    })

    it('Click on Home', async () => {
        await myAccount.clickHome()
        await home.$homeHeader().waitForDisplayed({ timeout: 5000 })
        expect(await home.$homeHeader().isDisplayed())
        .withContext('Expect TOP TRENDING CATEGORIES header to be displayed')
        .toBeTrue()
    })

    it('Click on first category from TOP TRENDING CATEGORIES', async () => {
        await home.clickFirstOption()
        await firstOption.$filter().waitForDisplayed({ timeout: 5000 })
        expect(await firstOption.$filter().isDisplayed())
        .withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Set min and max price filter', async () => {
        await firstOption.setPrice()
        await firstOption.$clearPrice().waitForDisplayed({ timeout: 5000 })
        expect(await firstOption.$clearPrice().isDisplayed())
        .withContext('Expect clear filter icon to be displayed')
        .toBeTrue()
    })

    it('Sort the prices of the products from low to high and validate it', async () => {
        await firstOption.sortPrice()
        let prices = await firstOption.sortPrice()
        let sortedPrices =prices.sort((a, b) => a - b)
        await expect(prices).toEqual(sortedPrices)
    })
     
    // it('Clear filter', async () => {
    //     await firstOption.resetPrice()
    //     await firstOption.$minPriceReset().waitForDisplayed({timeout: 5000})
    //     expect(await firstOption.$minPriceReset().isDisplayed())
    //     .withContext('Expect minimum price 98 to be displayed')
    //     .toBeTrue()
    //     // await firstOption.$maxPriceReset().waitForDisplayed({timeout: 5000})
    //     // expect(await firstOption.$maxPriceReset().isDisplayed())
    //     // .withContext('Expect maximum price 2000 to be displayed')
    //     // .toBeTrue()
    //   })

    it('Select availability - In stock and select Apple', async () => {
        await firstOption.availabilityInStock()
        
    })

    it('Sort Apple product from A-Z', async () => {
        await firstOption.sortAppleProd()
        //validate items displayed based on sort order
    })

    it('Hover over first product & validate hover menu', async () => {
        await firstOption.hoverAppleFirstProd()
        await firstOption.$shoppingCart().waitForDisplayed({ timeout: 8000 })
        expect(await firstOption.$shoppingCart().isDisplayed())
        .withContext('Expect menu icons to be displayed')
        .toBeTrue()
    })

    it('Click Cart button from hover menu', async () => {
        //await firstOption.$shoppingCart().waitForDisplayed({ timeout: 5000 })
        await firstOption.$shoppingCart().click()
        await browser.pause(5000)
        expect(await firstOption.$goToCartBtn().isDisplayed())
        .withContext('Expect pop-up to be displayed')
        .toBeTrue()
    })

    it('Click Checkout', async () => {
        await firstOption.$checkout().click()
        await checkout.$checkoutHeader().waitForDisplayed({ timeout: 10000 })
        expect(await checkout.$checkoutHeader()().isDisplayed())
        .withContext('Expect header to be displayed in Checkout page')
        .toBeTrue()
    })

    it('Fill details in Checkout page', async () => {
        await checkout.fillDetails()
        await confirmOrder.$confirmPageHeader().waitForDisplayed({ timeout: 5000 })
        expect(await confirmOrder.$confirmPageHeader().isDisplayed())
        .withContext('Expect header to be displayed in Confirm Order page')
        .toBeTrue()
    })

})
