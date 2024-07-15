import { expect } from '@wdio/globals'
import landing from "../pageobjects/LambdaTest/landing.js";
import register from "../pageobjects/LambdaTest/register.js";
import accountCreated from '../pageobjects/LambdaTest/accountCreated.js';
import myAccount from '../pageobjects/LambdaTest/myAccount.js';
import editMyAccountInfo from '../pageobjects/LambdaTest/editMyAccountInfo.js';
import home from '../pageobjects/LambdaTest/home.js';
import firstOption from '../pageobjects/LambdaTest/firstOption.js';

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
        await register.$regHeader().waitForDisplayed({ timeout: 5000 })
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

    it('Set min and max price filter', async () => {
        await firstOption.sort1()
        await firstOption.$clearPrice().waitForDisplayed({ timeout: 5000 })
        expect(await firstOption.$clearPrice().isDisplayed())
        .withContext('Expect clear filter icon to be displayed')
        .toBeTrue()
    })

})
