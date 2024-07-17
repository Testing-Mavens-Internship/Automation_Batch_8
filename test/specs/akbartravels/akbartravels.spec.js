import homepage from "../../pageobjects/akbar_travels/homepage.js"
import holiday from "../../pageobjects/akbar_travels/holiday.js"
import foodpackage from "../../pageobjects/akbar_travels/foodpackage.js"
import vietnam from "../../pageobjects/akbar_travels/vietnam.js"

describe('Test the flow for Akbar Travels website and download a package',()=>{
    it('Launch URL and validate header',async()=>{
        await homepage.launchURL()
        expect(await homepage.$header().isDisplayed()).withContext('Header not displayed').toBeTrue()
        // await homepage.notification()
        // expect(await homepage.$header().isDisplayed()).withContext('Header not displayed').toBeTrue()
    })
    it('Select Holiday option from navigation bar and validate header',async()=>{
        await homepage.selectHoliday()
        expect(await homepage.$holiday_header().isDisplayed()).withContext('Holiday header not displayed').toBeTrue()
    })
    it('Select All destinations tab',async()=>{
        await holiday.selectAllDestinations()
        expect(await holiday.$alldestinationvalidate().isDisplayed()).toBeTrue()
    })
    it('Select Food package and validate food header',async()=>{
        await holiday.selectFoodPackage()
        expect(await foodpackage.$foodheader().isDisplayed()).withContext('Food header not displayed').toBeTrue()
    })
    it('Select Akbar recommended and Family with kids checkbox from Recommended',async()=>{
        await foodpackage.selectRecommended()
        expect(await foodpackage.$recommendvalidate().isDisplayed()).toBeTrue()
    })
    it('Select first package and click on view details button',async()=>{
        await foodpackage.selectPackage()
        expect(await vietnam.$vietnam_header().isDisplayed()).withContext('Classic Vietnam header not displayed').toBeTrue()
        await browser.pause(8000)
    })
    it('Download the package',async()=>{
        await vietnam.download()
        expect(await vietnam.$vietnam_header().isDisplayed()).withContext('Download package header not displayed').toBeTrue()
    })
})

