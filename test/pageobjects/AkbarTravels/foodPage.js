import Common from "./common.js"

class FoodPage extends Common {

    constructor()
    {
        super()
        this.$foodHeader=()=> $('//h1[normalize-space()="Food Packages"]')
        this.$akbarRecom=()=> $('//label[text()="Akbar Recommended"]')
        this.$famWithKids=()=> $('//label[text()="Family with Kids"]')
        this.$reset=()=> $('(//a[text()="Reset"])[6]')
        this.$firstViewDet=()=> $('//div[@class="left-content"]/following::div[@class="fare slashed-price"]/a/button[text()="View Details"]')
    }

    /**
     * Select 'Akbar Recommended' and 'Family with Kids' option from Recommended filter
     */
    async clickOnRecommended()
    {
        await this.$akbarRecom().click()
        await this.$famWithKids().click()
    }

    /**
     * Click on the first option after applying previous filter
     */
    async clickFirstOne()
    {
        this.$firstViewDet().click()
    }
}

export default new FoodPage()
