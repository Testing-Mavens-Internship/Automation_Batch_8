import Common from "./common.js";

class Homepage extends Common{
    constructor(){
        super();
        this.$moreTab=()=>$(`(//h3[text()="More"])[2]`);
        this.$holidayHeader=()=>$(`//h1[contains(text(),"Book Domestic")]`);
        this.$car=()=>$(`//a[text()="Car "]`);
    }
    async clickingCar(){
        await this.$moreTab().moveTo();
        await this.$moreTab().click();
        await this.$car().moveTo();
        await this.$car().click();
    }
}
export default new Homepage();
