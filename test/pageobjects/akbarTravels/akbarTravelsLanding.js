import Commonakbartravels from "./akbarTravelsCommon.js";

class Landingakbartravels extends Commonakbartravels
{
    constructor()
    {
        super()
        this.$holidaylabel=()=>$('//main-menu[@class="main-menu"]//h3[text()="Holidays"]');
        this.$holidaypageheader=()=>$('//h1[text()="Book Domestic and International Holiday Packages"]')
        // this.$pagedisplayedvalidator=()=>$('//button[@class="search-btn"]')

    }
    /**
     * To click on holiday label and switch to another rwindow
     */
    async holidayclicker()
    {
        await this.$holidaylabel().click();
        // await this.$pagedisplayedvalidator().waitForClickable({timeout:3000})

    }
}
export default new Landingakbartravels()