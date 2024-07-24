import flightList from "../../pageobjects/akbarTravels/flightList.js";
import landingPage from "../../pageobjects/akbarTravels/landingPage.js"

describe("End to end flow for book a flight in 'Akbar Travels' application",()=>{
    it("Launch the URL in the browser",async()=>{
        await landingPage.launchUrl();
        expect(await landingPage.$flightButton().isDisplayed()).withContext("Flight button is not displayed");
    });

    it("Click the 'Flight' button",async()=>{
        await landingPage.clickFlightButton();
        expect (await landingPage.$fromLabel().isDisplayed()).withContext("From label is not displayed");
    });

    it("Select the from and to destination and click on search flight button",async()=>{
        await landingPage.searchFlight();
        await landingPage.$contentLoader().waitForDisplayed({timeout:5000,timeoutMsg:"Stop label is not displayed",reverse:true});
        await flightList.$stopLabel().waitForDisplayed({timeout:5000,timeoutMsg:"Stop label is still not displayed"})
        expect (await flightList.$stopLabel().isDisplayed()).withContext("Stop label is not displayed").toBeTrue();
    });

    it("Select 'Air India' from Airlines option and validate",async()=>{

    });

    it("Click on Book now button of the first flight",async()=>{

    });

})