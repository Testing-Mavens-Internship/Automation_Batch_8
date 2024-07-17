import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super();
        this.$akbarTravelsHeader = () => $('//*[local-name()="svg" and @class="ng-tns-c7-2"]')
        this.$clickOnHolidays = () => $('(//a[@fxlayout="column" and .//span[contains(@class, "ak-holidays icon")]])[2]')
        this.$holidaysPageHeader = () => $('//h1[text()="Book Domestic and International Holiday Packages"]')

    }

    /**
     * click on the Holiday Packages icon on the Navigation bar
     */
    async clickOnHolidays(){
         
        //await this.$holidaysPageHeader().waitForDisplayed({ timeout: 5000 });
        await this.$clickOnHolidays().waitForClickable({ timeout: 10000 });
        await this.$clickOnHolidays().click();


    }

    
    
}

export default new LandingPage();