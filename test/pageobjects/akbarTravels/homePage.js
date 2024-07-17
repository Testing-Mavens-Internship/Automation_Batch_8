import CommonPage from "./commonPage.js";

export class HomePage extends CommonPage{
    constructor(){
        super();
        this.$mainHeader=()=>$('//div[@class="logo"]');
        this.$holidaysOption=()=>$(`//main-menu//h3[text()="Holidays"]`)
    }
    /**
     * To click the holiday option on the nav bar.
     */
    async clickHolidays(){
        await this.$holidaysOption().click();
        await this.$holidaysOption().waitForClickable({timeout:5000,timeoutMsg:"Option still not clicked."})
    }
}
export default new HomePage();