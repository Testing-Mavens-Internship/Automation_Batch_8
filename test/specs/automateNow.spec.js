import brokenLinks from "../pageobjects/AutomateNow/brokenLinks.js";
import calendars from "../pageobjects/AutomateNow/calendars.js";

describe('AutomateNow website tasks', () => {

    it('Launch URL in browser', async () => {
        await brokenLinks.loadUrl()
        expect(await brokenLinks.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Click on "Broken Links" option and validate the header', async () => {
        await brokenLinks.clickBrokenLinkOption()
        expect(await brokenLinks.$brokenLinkHeader()
        .isDisplayed()).withContext('Expect "Broken Links" header to be displayed')
        .toBeTrue()
    })

    it('Click on "This page has a broken link." from Broken Links page', async () => {
        await brokenLinks.clickBrokenLink()
        expect(await brokenLinks.$oops()
        .isDisplayed()).withContext('Expect "Oops" to be displayed')
        .toBeTrue()
    })

    it('Validate API response code is 404', async () => {
        let res=await brokenLinks.validateResponseCode()
        console.log(res,"<,<>><><><><><>,>")
        expect(res.status).toBe(404)
    })

    it('Go back to Home page', async () => {
        await brokenLinks.clickHome()
        expect(await brokenLinks.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Click on "Calendars" option and validate the header', async () => {
        await calendars.clickCalendarOption()
        expect(await calendars.$calendarHeader()
        .isDisplayed()).withContext('Expect "Calendars" header to be displayed')
        .toBeTrue()
    })

    it('Pass a date and validate passed date is getting selected in calendar', async () => {
        await calendars.selectDate('2025-10-25')
        expect(await calendars.$dateSelected()
        .isDisplayed()).withContext('Expect selected date to be displayed')
        .toBeTrue()
    })

})
