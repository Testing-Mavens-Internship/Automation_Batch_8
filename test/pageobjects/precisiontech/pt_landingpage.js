import Common from "./pt_commonpage.js";

class LandingPage extends Common
{
    constructor()
    {
        super()
        this.$header=()=>$(`//img[@alt='PRECISIONTECH']`)
        this.$solution=()=>$(`//span[text()='SOLUTIONS']`)
        this.$$solutionsoptions=()=>$$(`//ul[@id='HeaderMenu-MenuList-1']/li/a`)  // we use $$ to return multiple items
        this.$stock=()=>$(`//a[@id='HeaderMenu-solutions-stock-profiling-and-analysis-services']`)
        this.$stockoption=()=>$(`//strong[text()='STOCK PROFILING AND ANALYSIS SERVICES']`)
    }
    async selectSolutionsDropdown()
    {
        await this.$solution().waitForDisplayed({timeout:2000})
        await this.$solution().click()
    }
    async fetchValues()
    {
        let dropdown_items=[]   // create an empty array to store the 3 option values in this
        for(let item of await this.$$solutionsoptions())
            {
                await item.waitForDisplayed({timeout:2000})
                dropdown_items.push(await item.getText())  // push the values into the empty array
            }
            return dropdown_items

    }
    async selectStock()
    {
        await this.$stock().click()
    }
}
export default new LandingPage()