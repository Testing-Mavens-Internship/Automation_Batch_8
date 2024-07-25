import landingPage from "../pageobjects/AkbarTravelsTask/landingPage.js"
import cruisePage from "../pageobjects/AkbarTravelsTask/cruisePage.js"

describe('To verify AkbarTravels Cruise workflow', () => {

    it('Launch URL in browser', async () => {
        await landingPage.loadUrl()
        await landingPage.$akbarTravelsHeader().waitForDisplayed({ timeout: 5000 ,timeoutMsg:'header not displayed'});
        expect(await landingPage.$akbarTravelsHeader()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Click on "Cruise" option and validate header', async () => {
        await landingPage.clickCruise();
        await browser.switchWindow('https://www.akbartravels.com/cruises');
         expect(await cruisePage.$cruiseHeader().isDisplayed())
        .withContext('The Header on cruise Page is not displayed')
        .toBeTrue();
    })

    it("Fill details in cruise page", async () => {
        await cruisePage.chooseCruise('Lakshadweep'); 
    })

    
})
