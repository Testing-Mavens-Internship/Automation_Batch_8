// Precision tech

import pt_landingpage from "../pageobjects/precisiontech/pt_landingpage.js"
import pt_enquirypage from "../pageobjects/precisiontech/pt_enquirypage.js"
import pt_contactpage from "../pageobjects/precisiontech/pt_contactpage.js"
import pt_cartpage from "../pageobjects/precisiontech/pt_cartpage.js"
import pt_productspage from "../pageobjects/precisiontech/pt_productspage.js"

describe('Verify if we can launch the website and perform some actions like make an enquiry,checking if cart is empty and sort products from (Z-A)',()=>{
    it('Launch the URL',async()=>{
        await pt_landingpage.launchURL()
        // await browser.pause(10000)
        await await pt_landingpage.$header().waitForDisplayed({timeout:5000})
        expect(await pt_landingpage.$header().isDisplayed())
        .withContext('Precision tech header to be displayed')
        .toBeTrue()
    })
    it('Select Solutions dropdown',async()=>{
        await pt_landingpage.selectSolutionsDropdown()
        let items=await pt_landingpage.fetchValues()
        let values=['Stock Profiling and Analysis Services','Vendor Managed Inventory Solutions','Stores Design And Installation']

        for(let i=0;i<items.length;i++)
        {
            expect(items[i]).toEqual(values[i])
        }
        // expect(items[0].toEqual('Stock Profiling and Analysis Services')).toBeTrue()
        // await browser.pause(10000)   
    })
    it('Select Stock profile option and check for stock header in enquiry page',async()=>{
        await pt_landingpage.selectStock()
        expect(await pt_enquirypage.$stockheader().isDisplayed())
        .withContext('Stock header is displayed on enquiry page')
        .toBeTrue()
    })

    it('Click on Make an enquiry button and check if header of contact page is displayed',async()=>{
        await pt_landingpage.accept()
        await pt_enquirypage.selectEnquiry()
        expect(await pt_contactpage.$contactheader().isDisplayed())
        .withContext('Contact header is displayed on contact page')
        .toBeTrue()
        
    })
    it('Click on cart and check if it is empty',async()=>{
        await pt_contactpage.cartClick()
        expect(await pt_cartpage.$cart_header().isDisplayed())
        .withContext('Cart is empty is displayed on cart page')
        .toBeTrue()
    })
    it('Click on Continue shopping button',async()=>{
        await pt_cartpage.continueShopping()
        expect(await pt_productspage.$pdtheader().isDisplayed())
        .withContext('Product header is displayed')
        .toBeTrue()
    })
    it('Click on Sort by dropdown and check if it is sorted from Z-A',async()=>{
        await pt_productspage.clickSort()
        await browser.pause(5000)
        expect(await pt_productspage.$alphabetsortoption().isDisplayed())
        .withContext('Sorted from Z-A')
        .toBeTrue()
    })
    it('check',async()=>{
        pt_productspage.getProducts()
    })
})