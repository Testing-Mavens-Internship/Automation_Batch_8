import landingPage from '../pageobjects/akbarCruise/landing.js';
import bookingPage from '../pageobjects/akbarCruise/booking.js';
import ticketPage from '../pageobjects/akbarCruise/ticket.js';

let city = "Kochi";
let cruise ="Holland America Line / KONINGSDAM";
let nights= "7 Nights";

describe("A user wants to book a cruise ticket for a journey", ()=>{
    it("Should load URL of the page", async ()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$pageHeader().isDisplayed())
            .withContext("Page is not loaded")
            .toBeTrue();
    })

    it('Should click on cruise icon', async ()=>{
        await landingPage.clickCruiseIcon();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await bookingPage.bookHeader();
        expect(await bookingPage.$bookingHeader().isDisplayed())
            .withContext("Cruise icon is not clickable")
            .toBeTrue();
    })

    it('Should enter details for booking cruise trip', async ()=>{
        await bookingPage.enterDetails(city);
        expect(await bookingPage.$loader().isDisplayed())
        await bookingPage.$loader().waitForDisplayed({ reverse: true, timeout: 3000 });
    })

    it("Should validate the cruise name and duration", async ()=>{
        await ticketPage.validateCruise(cruise,nights);
      
    })

    it('Should click on book now', async ()=>{
        await ticketPage.clickBookNow();
        expect(await ticketPage.$loader().isDisplayed())
        await ticketPage.$loader().waitForDisplayed({reverse: true, timeout: 10000});
        await ticketPage.validateNotification('Rates are not available for Selected Cabin, Try another Cabin');
          
    })

    it('Should click on book now', async ()=>{
        await ticketPage.clickBookNowFinal();
    })
})