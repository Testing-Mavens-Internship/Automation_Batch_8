import CommonPage from "./commonPage.js";

class HomePage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$homeHeader=()=> $('//a[text()="My Account"]')
            this.$fishOption=()=> $('//img[@src="../images/sm_fish.gif"]')
            this.$dogOption=()=> $('//img[@src="../images/sm_dogs.gif"]')
        }
    }

    /**
     * Method to click on Fish option
     */
    async clickFishOption()
    {
        await this.$fishOption().click()
    }

    /**
     * Method to click on Dog option
     */
    async clickDogOption()
    {
        await this.$dogOption().click()
    }

}
export default new HomePage()
