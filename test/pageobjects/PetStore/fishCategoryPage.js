import CommonPage from "./commonPage.js";

class FishCategoryPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$fishHeader=()=> $('//h2[text()="Fish"]')
            this.$goldfish=()=> $('//a[@href="/actions/Catalog.action?viewProduct=&productId=FI-FW-02"]')
            this.$goldfishHeader=()=> $('//h2[text()="Goldfish"]')
            this.$addToCart=()=> $('(//a[text()="Add to Cart"])[1]') //male goldfish
        }
    }

    /**
     * Method to click on Goldfish category from Fish page
     */
    async clickOnGoldfish()
    {
        await this.$goldfish().click()
    }

    /**
     * Method to click on Add to Cart button from Fish page
     */
    async clickAddToCart()
    {
        await this.$addToCart().click()
    }

    /**
     * Method to store getText values in variables
     */  
    async storeValues()
    {
        const pidMaleGoldfish = $('(//td[text()="FI-FW-02"])[1]').getText()
        const descMaleGoldfish = $('//td[normalize-space()="Adult Male Goldfish"]').getText()
        const priceMaleGoldfish = $('//td[text()="$5.50"]').getText()
    }  

}
export default new FishCategoryPage()
