import Common from "./common.js";

class Homepage extends Common{
    constructor(){
        super();
        this.$holidayTab=()=>$(`//main-menu//h3[text()="Holidays"]`);
        this.$holidayHeader=()=>$(`//h1[contains(text(),"Book Domestic")]`);
    }
    async clickOnHolidayTab(){
        await this.$holidayTab().click();
    }
}
export default new Homepage();