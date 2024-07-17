
import common from "./commonPage.js";

class Landing extends common{
    constructor(){
        super();
        this.$landingHeader = () =>$(`//h1[text()="Book Flight Tickets"]`);
        this.$holidays = () => $(`(//h3[text()="Holidays"])[last()]`);
        
    }
    async clickOnHolidays(){
        await this.$holidays().click();
        await this.$holidays().waitForClickable();
    }
}export default new Landing();