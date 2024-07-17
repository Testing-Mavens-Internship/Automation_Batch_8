import Common from "./common.js"

class HolidaysPage extends Common {

    constructor()
    {
        super()
        this.$holidaysHeader=()=> $('//h1[normalize-space()="Book Domestic and International Holiday Packages"]')
        this.$scroll=()=> $('//p[text()="Scroll to"]')
        this.$allDestinations=()=> $('(//li[@data-filter="AllDestinations"]/a[text()="All Destinations"])[1]')
        this.$food=()=> $('//img[@data-src="https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/holiday_browse_by_exp1588615983rsz_food.jpg"]')
    }

    /**
     * Click on 'All Destination' option
     */
    async clickAllDest()
    {
        // await this.$scroll().click()
        //await this.$allDestinations().waitForDisplayed({ timeout: 5000 })
        await this.$allDestinations().scrollIntoView()
        await this.$allDestinations().click()
    }

    /**
     * Click on the 'Food' option from the 'All Destination'
     */
    async clickOnFood()
    {
        await this.$food().scrollIntoView()
        await this.$food().click()
    }
}

export default new HolidaysPage()
