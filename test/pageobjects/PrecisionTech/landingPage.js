import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        this.$dropDrown=()=> $('//span[text()="SOLUTIONS"]')
        this.$$dropdownValues=()=> $$('//ul[@id="HeaderMenu-MenuList-1"]/li/a')
        this.$stockOption=()=> $('//a[@id="HeaderMenu-solutions-stock-profiling-and-analysis-services"]')
    }

    async solutionDropdown()
    {
        await this.$dropDrown().waitForDisplayed({timeout:5000})
        await this.$dropDrown().click()
    }

    async fetchValues()
    {
        let dropdownItems=[]
        let items=await this.$$dropdownValues()
        for(let item of items)
        {
            await item.waitForDisplayed({timeout:5000})
            dropdownItems.push(await item.getText())
        }
        return dropdownItems
    }

    async clickFirstOption()
        {
            await this.$stockOption().click()
        }
}

export default new LandingPage()
