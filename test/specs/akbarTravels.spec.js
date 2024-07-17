import landingPage from "../pageobjects/AkbarTravels/landingPage.js"
import holidaysPage from "../pageobjects/AkbarTravels/holidaysPage.js"
import foodPage from "../pageobjects/AkbarTravels/foodPage.js"
import firstOptionPage from '../pageobjects/AkbarTravels/firstOptionPage.js'

describe('To verify workflow of Akbar Travels website', () => {

    it('Launch URL in browser', async () => {
        await landingPage.loadUrl()
        await landingPage.$header().waitForDisplayed({ timeout: 10000 })
        expect(await landingPage.$header()
        .isDisplayed()).withContext('Expect header to be displayed in Landing page')
        .toBeTrue()
    })

    it('Click on Holidays tab', async () => {
        await landingPage.clickHolidays()
        await holidaysPage.$holidaysHeader().waitForDisplayed({ timeout: 10000 })
        expect(await holidaysPage.$holidaysHeader()
        .isDisplayed()).withContext('Expect header to be displayed in Holidays page')
        .toBeTrue()
    })

    it('Click on All Destination from Holidays page', async () => {
        await holidaysPage.clickAllDest()
        await holidaysPage.$food().waitForDisplayed({ timeout: 10000 })
        expect(await holidaysPage.$food()
        .isDisplayed()).withContext('Expect Food to be displayed under All Destination')
        .toBeTrue()
    })

    it('Click on Food option', async () => {
        await holidaysPage.clickOnFood()
        await foodPage.$foodHeader().waitForDisplayed({ timeout: 10000 })
        expect(await foodPage.$foodHeader()
        .isDisplayed()).withContext('Expect header to be displayed in Food page')
        .toBeTrue()
    })

    it('Click on Recommended option', async () => {
        await foodPage.clickOnRecommended()
        await foodPage.$reset().waitForDisplayed({ timeout: 10000 })
        expect(await foodPage.$reset()
        .isDisplayed()).withContext('Expect Reset option to be displayed in Holidays page')
        .toBeTrue()
    })

    it('Click View Details button of first option after setting Recommended option', async () => {
        await foodPage.clickFirstOne()
        await firstOptionPage.$firstOptionHeader().waitForDisplayed({ timeout: 10000 })
        expect(await firstOptionPage.$firstOptionHeader()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Click on Download Package button', async () => {
        await firstOptionPage.clickDownloadPackage()
        await firstOptionPage.$downloadPackageHeader().waitForDisplayed({ timeout: 10000 })
        expect(await firstOptionPage.$downloadPackageHeader()
        .isDisplayed()).withContext('Expect Download Package header to be displayed')
        .toBeTrue()
    })

    it('Fill details in Download Package and download package', async () => {
        await firstOptionPage.enterDetails('Athira', 'athira1998@gmail.com', '9876543210')
        await firstOptionPage.$successMsg().waitForDisplayed({ timeout: 10000 })
        expect(await firstOptionPage.$successMsg()
        .isDisplayed()).withContext('Expect success message to be displayed')
        .toBeTrue()
    })
})
