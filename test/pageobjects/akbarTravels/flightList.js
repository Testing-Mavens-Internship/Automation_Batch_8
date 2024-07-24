import Common from "./common.js";

class FlightList extends Common{
    constructor(){
        super();
        this.$stopLabel=()=>$(`//div[text()="Stops"]`);
        this.$filterAirIndia=()=>$(`//input[@id="mat-checkbox-2-input"]`);
    }

    async filterByAirIndia(){
        await this.$filterAirIndia().click();
    }
}
export default new FlightList()