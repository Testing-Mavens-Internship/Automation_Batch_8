import Common from "./common.js";

class FoodPackage extends Common
{
    constructor()
    {
        super()
        this.$foodheader=()=>$(`//h1[text()='Food Packages']`)
        this.$akbar_recommended=()=>$(`//label[text()='Akbar Recommended']`)
        this.$family_with_kids=()=>$(`//label[text()='Family with Kids']`)
        this.$recommendvalidate=()=>$(`(//div[@class="heading"]/h5)[1]`)
        this.$place=(p)=>$(`//h3[text()="${p}"]`)
        this.$view=()=>$(`(//h3[text()='Classic Vietnam']/following::button[text()='View Details'])[1]`)
    }
    /**
     * Select 'Akbar recommended' and 'Family with kids' options from Recommended
     */
    async selectRecommended()
    {
        await this.$akbar_recommended().click()
        await this.$family_with_kids().click()
    }
    /**
     * Select 'Classic Vietnam' package and click on View details button
     */
    async selectPackage()
    {
        await this.$place('Classic Vietnam')
        await this.$view().waitForDisplayed({timeout:8000})
        await this.$view().click()
    }
}
export default new FoodPackage()