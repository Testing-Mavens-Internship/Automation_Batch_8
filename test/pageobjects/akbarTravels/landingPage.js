import Common from "./common.js";

class LandingPage extends Common{
    constructor(){
        super();
        this.$flightButton=()=>$(`//ul[@class="mainmenu ng-star-inserted"]/li[@class="active"]`);
        this.$fromLabel=()=>$(`//label[text()="FROM"]`);
        this.$fromOption=()=>$(`//label[text()="FROM"]//parent::div[@class="ng-tns-c8-3"]`);
        this.$fromDestination=()=>$(`(//span[text()="Indira Gandhi International"])[last()]`);
        this.$toDestination=()=>$(`(//span[text()="Sardar Vallabhbhai Patel International Airport"])[last()]`);
        this.$depart=()=>$(`(//div[@class="monthouter"]//div[@class="ng-star-inserted" and normalize-space()="7"])[1]`);
        this.$return=()=>$(`(//div[@class="monthouter"]//div[@class="ng-star-inserted" and normalize-space()="12"])[1]`);
        this.$contentLoader=()=>$(`//span[contains(@class,"ng-trigger-contentLoader")]`);
        this.$searchFlightButton=()=>$(`(//button//span[text()="Search Flights"])[1]`);

        //div[normalize-space()="21"]
    }

    /**
     * click on flight button from the top list
     */
    async clickFlightButton(){
        await this.$flightButton().click();
        await this.$fromLabel().waitForDisplayed({timeout:5000,timeoutMsg:"FROM label is not displayed"})
    }
    /**
     * Select destinations from the 'from' and 'to' option, departure date and click on 'search button'
     */
    async searchFlight(){
        await this.$fromOption().click();
        await this.$fromDestination().click();
        await this.$toDestination().click();
        await this.$depart().click();
        await this.$searchFlightButton().click();
    }
}
export default new LandingPage();