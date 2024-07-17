import Commonakbartravels from "./akbarTravelsCommon.js";

class Holidaysakbartravels extends Commonakbartravels
{
    constructor()
    {
        super()
        this.$alldestinationslabel=()=>$('(//a[text()="All Destinations"])[1]')
        this.$foodpackage=()=>$('//a[@href="theme/food-packages"]')
        this.$foodpackageheader=()=>$('//h1[text()="Food Packages"]')
        this.$clickeasyness=()=>$('(//div[@class="img-container"])[3]')
    
    }
    /**
     * To select package
     */
    async packageselect()
    {
        await this.$alldestinationslabel().scrollIntoView();
        await this.$alldestinationslabel().waitForClickable({timeout:4000})
        await this.$alldestinationslabel().click();
        await this.$foodpackage().waitForDisplayed({timeout:5000})
        // await this.$foodpackage().scrollIntoView()//to scroll to reach food option for clicking
        await this.$foodpackage().click();
    }
}
export default new Holidaysakbartravels()