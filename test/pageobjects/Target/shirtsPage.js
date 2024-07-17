import CommonPage from "./commonPage.js";

class ShirtsPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$shirtsValidation=()=> $('//span[text()="for “shirts”"]')
            this.$patternButton=()=> $('(//button[text()="Pattern"])[1]')
            this.$patternHeader=()=> $('//h2[text()="Pattern"]')
            this.$floralButton=()=> $('//button[text()="Floral"]')
            this.$applyButton=()=> $('//button[text()="Apply"]')
            this.$floralFilter=()=> $('//div[text()="Floral"]')
            //Filter - 1
            //Pattern - 1
            this.$prod1Name=()=> $('(//a[@class="sc-676073c3-0 sc-e1ae665c-1 fLytdP bRxnjG h-display-block h-text-bold h-text-bs"])[1]')
            this.$prod1Price=()=> $('//span[text()="$26.39"]')
            this.$prod1AddToCart=()=> $('(//button[text()="Add to cart"])[1]')
        }
    }

    async enterShirtsInSearch()
    {
        await this.$searchBar().setValue("shirts")
        await this.$searchButton().click()
    }

    async clickPattern()
    {
        await this.$patternButton().click()
    }

    async clickFloral()
    {
        await this.$floralButton().click()
        await this.$applyButton().click()
    }

    async clickAddToCart()
    {
        await this.prod1AddToCart().click()
    }

}

export default new ShirtsPage()
