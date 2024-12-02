import CommonClass from "./commonFile.js";

class BusPage extends CommonClass
{
    constructor()
    {
        super();
        this.$header = () => $(`//div[@id="hdrlogo"]`);
        this.$startPoint=()=>$(`//input[@name="FromStation"]`)
        this.$endPoint=()=>$(`//input[@name="ToStation"]`)
        // this.$month=(index)=>$(`//span[@class="ui-datepicker-month"][text()="${index}"]`)
        // this.$year=(index)=>$(`//span[@class="ui-datepicker-year"][text()="${index}"]`)
        // this.$day=(index)=>$(`//a[@class="ui-state-default"][text()="${index}"]/parent::td`)
        this.$date=()=>$(`//div[@id="ui-datepicker-div"]//following::table[2]/tbody/tr[3]/td[6]/a`)
        this.$searchButton=()=>$(`//a[@class="search-homebtn"]`)
        this.$calander=()=>$(`//input[@id="OnwardTravelDate"]`)
    }

    async setPoints(startPoint,endPoint){
        await this.$startPoint().setValue(startPoint)
        await this.$endPoint().setValue(endPoint)
    }


    async selectDate(day,month,year){
        
        // let months=["January","February","March","April","May","June","July","August","September","October","November","December"]

        // let monthNumber=months.indexOf(month)+1
        // let date= await this.$day(day)
        // date.setAttribute("data-month", monthNumber);
        // date.setAttribute("data-year", year);
        await this.$calander().click()
        await this.$date().click()
        await this.$searchButton().click()
    }
    


}

export default new BusPage()