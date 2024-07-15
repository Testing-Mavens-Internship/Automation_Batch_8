import { expect } from '@wdio/globals'
import landingPage from '../pageobjects/PrecisionTech/landingPage.js'
import stockPage from '../pageobjects/PrecisionTech/stockPage.js'
import contactPage from '../pageobjects/PrecisionTech/contactPage.js'
import cartPage from '../pageobjects/PrecisionTech/cartPage.js'
import productPage from '../pageobjects/PrecisionTech/productPage.js'


describe('To verify that user is able to sort products from PrecisionTech website', () => {
    it('Launch URL in browser', async () => {
        await landingPage.loadUrl()
        expect(await landingPage.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Click on Solutions dropdown and validate 3 options', async () => {
        await landingPage.solutionDropdown()

        await landingPage.fetchValues()
        let items = await landingPage.fetchValues();        
        let dropDownSelectionItems = [
        "Stock Profiling and Analysis Services",
        "Vendor Managed Inventory Solutions",
        "Stores Design And Installation",
      ];

    for (let item of items) {
      expect(dropDownSelectionItems).toContain(item);
    }

    await landingPage.clickFirstOption()
    expect(await stockPage.$stockHeader()
    .isDisplayed()).withContext('Expect header to be displayed in Stock page')
        .toBeTrue()
  })

  it('Make an Enquiry', async () => {
    await stockPage.clickOnEnquiry()
    expect(await contactPage.$contactHeader()
    .isDisplayed()).withContext('Expect header to be displayed in Contacts page')
    .toBeTrue()
  })

  it('Click cart from Contacts page', async () => {
    await contactPage.cartClick()
    expect(await cartPage.$cartEmpty().isDisplayed())
    .withContext('Expect empty cart')
    .toBeTrue()
  })

  it('Click on Continue Shopping button from Cart', async () => {
    await cartPage.clickContShop()
    expect(await productPage.$productHeader().isDisplayed())
    .withContext('Expect header to be displayed in Products page')
  })

  it('Sorting products in Products page', async () => {
    await productPage.sortProd()
    await browser.pause(10000)

  })

  
})
