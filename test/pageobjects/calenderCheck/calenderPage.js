import CommonClass from "./commonPage.js";

class CalenderPage extends CommonClass {
    constructor() {
        super();
        this.$header=()=>$(`//h1[text()="Calendars"]`)
        this.$calenderTextBar=()=>$(`//input[@id="g1065-selectorenteradate"]`)
        this.$calendar=()=>$(`//table[@class="ui-datepicker-calendar"]`)
        this.$montPicker=()=>$(`//span[@class="ui-datepicker-month"]`)
        this.$yearPicker=()=>$(`//span[@class="ui-datepicker-year"]`)
        this.$$datePicker=()=>$$(`//a[@class="ui-state-default"]/parent::td`)
        this.$date=(index)=>$( `//a[@data-date="${index}"]`)
        this.$previous=()=>$(`//a[@title="Previous"]`)
        this.$next=()=>$(`//a[@title="Next"]`)
    }
/**
 * Load the url
 */
    async loadUrl() {
        await browser.url('https://practice-automation.com/calendars/')
        await browser.maximizeWindow()
        // await this.$header().waitForDisplayed({timeout: 2000, timeoutMsg: "Header is not visible"})
        
    }

    async selectDate(date, month, year) {

        let months=["January","February","March","April","May","June","July","August","September","October","November","December"]

        await this.$calenderTextBar().click()
        await this.$calendar().waitForDisplayed({timeout: 2000, timeoutMsg: "Calendar is not visible"})

        let currentMonth=await this.$montPicker().getText()
        let currentYear=await this.$yearPicker().getText()
        let currentMonthNumber=months.indexOf(currentMonth)+1

        while(currentYear !=year){
            if(currentYear<year){
                await this.$next().click()
                currentYear=await this.$yearPicker().getText()
            }
            else{
                await this.$previous().click()
                currentYear=await this.$yearPicker().getText()
            }
        }
        while(currentMonthNumber !=month){
            if(currentMonthNumber<month){
                await this.$next().click()
                currentMonthNumber=months.indexOf(await this.$montPicker().getText())
            }
            else{
                await this.$previous().click()
                currentMonthNumber=months.indexOf(await this.$montPicker().getText())
            }
        }
        await this.$$datePicker()[date].click()
        }
    }



export default new CalenderPage()