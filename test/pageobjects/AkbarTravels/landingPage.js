import common from "../AkbarTravels/common.js";
class Landingpage extends common{
    constructor(){
        super()
        this.holidayIcon=()=>$(`(//span[@class="ak-holidays icon"]/following::h3[text()="Holidays"])[2]`)
        this.$holidayPageHeader=()=>$(`//div[@class="firstbox"]`)
        this.$clickDestination=()=>$(`a*=All Destinations`)
        this.$scrollHeader=()=>$(`//h2[strong[text()="Experience"]]`)
        this.$scrolldown=()=>$(`//div[@class="mouse"]/following::p[text()="Scroll to"]`)
        this.$food=()=>$(`//a[@href="theme/food-packages"]`)
        
        
        

    }
    /**
     * Method to click on holiday icon on landingpage
     */

    async clickOnHolidayIcon(){
        await this.holidayIcon().click();
     }

     /**
      * Method to click scrolldownbutton on holidaypage
      */

    async clickOnScrollButton(){
        await this.$scrolldown().click();
    }
    /**
     * Method to click on destination link on holidaypage
     */
    async ClickOnDestination(){
        await this.$clickDestination().click();
    }
    /**
     * Method to click on food options from all designation dropdown
     */
    async clickOnfood(){
        await this.$food().click();
    }
    


}
export default new Landingpage();