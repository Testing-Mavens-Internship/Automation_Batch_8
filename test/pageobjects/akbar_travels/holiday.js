import Common from "./common.js";

class Holiday extends Common
{
    constructor()
    {
        super()
        this.$alldestination=()=>$(`(//a[text()='All Destinations'])[1]`)
        this.$alldestinationvalidate=()=>$(`(//div[@class="textblock"]/h4)[1]`)
        this.$food=()=>$(`//ul[@class="destinationlist"]/a[4]/descendant::h4`)
    }
    /**
     * Select 'All destinations' tab
     */
    async selectAllDestinations()
    {
        // await this.$alldestination().scrollIntoView()
        await this.$alldestination().click()
    }

    /**
     * Select Food package option from 'All destinations' tab
     */
    async selectFoodPackage()
    {
        await this.$food().click()
    }
}
export default new Holiday()