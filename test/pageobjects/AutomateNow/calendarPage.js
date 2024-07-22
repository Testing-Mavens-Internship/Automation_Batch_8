import Common from "./common.js";

class Calendar extends Common{
    constructor(){
        super();
        this.$calendarInputField=()=>$(`#g1065-selectorenteradate`);
        this.$calendar=()=>$(`#ui-datepicker-div`);
        this.$calendarCurrentYear=()=>$(`//span[@class="ui-datepicker-year" and text()="2024"`);

        this.$calendarMonth=(selectedMonth)=>$(`//span[@class="ui-datepicker-month" and text()=${selectedMonth}]`);
        this.$calendarYear=(year)=>$(`//span[@class="ui-datepicker-year" and text()=${year}]`);
        this.$$calendarDay=()=>$(`//a[@class="ui-state-default"]//parent::td`);
        // this.$date=(index)=>$(`//a[@data-date=${index}]`)
        this.$previousButton=()=>$(`//a[@title="Previous"]`);
        this.$nextButton=()=>$(`//a[@title="Next"]`);
        this.$submitButton=()=>$(`//button[text()="Submit"][1]`)
    }
    /**
     * Click on the input field to select the date 
     */
    async clickCalendarInputField(){
        await this.$calendarInputField().waitForClickable({timeout:5000,timeoutMsg:"Calendar input field is still not clicked"});
        await this.$calendarInputField().click();
    }

    async setDate(day,month,year){
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

        let selectedMonth=months[month-1];
        let currentYear=await this.$calendarCurrentYear().getText();
        while(!await this.$calendarYear(year) || !await this.$calendarMonth(selectedMonth)){
            if(currentYear<year){
                await this.$nextButton().click();
            }else{
                await this.$previousButton().click();

            }

        }

        // let currentMonth=await this.$calendarMonth().getText();
        // let currentYear=await this.$calendarYear().getText();
        // let currentMonthNumber=months.indexOf(currentMonth)+1;

        // while(currentYear!=year){
        //     if(currentYear<year){
        //         await this.$previousButton().click();
        //         currentYear=await this.$calendarYear().getText();
        //     }else{
        //         await this.$nextButton().click();
        //         currentYear=await this.$calendarYear().getText();
        //     }
        // }

        // while(currentMonth!=month){
        //     if(currentMonthNumber<month){
        //         await this.$nextButton().click();
        //         currentMonth=months.indexOf(await this.$calendarMonth().getText())
        //     }else{
        //         await this.$previousButton().click();
        //         currentMonth=months.indexOf(await this.$calendarMonth().getText())
        //     }
        // }
        // await this.$$calendarDay()[day-1].click();
    }
}
export default new Calendar();