import CommonPage from "./commonPage.js";

class DogCategoryPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$dogHeader=()=> $('//h2[text()="Dogs"]')
            this.$dalmation=()=> $('//a[@href="/actions/Catalog.action?viewProduct=&productId=K9-DL-01"]')
            this.$dalmationHeader=()=> $('//h2[text()="Dalmation"]')
            this.$addToCart=()=> $('(//a[text()="Add to Cart"])[1]')
        }
    }

    /**
     * Method to click on Dalmation category from Dogs page
     */
    async clickOnDalmation()
    {
        await this.$dalmation().click()
    }

    /**
     * Method to click on Add to Cart button from Dogs page
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
        const pidDalmationPuppy = $('(//td[text()="K9-DL-01"])[1]').getText()
        const descDalmationPuppy = $('//td[normalize-space()="Spotless Male Puppy Dalmation"]').getText()
        const priceDalmationPuppy = $('(//td[text()="$18.50"])[1]').getText()
    } 

}
export default new DogCategoryPage()
