import Common from "./common.js";
import components from "./components.js";

class LoadingAnimation extends Common
{
    constructor()
    {
        super()
        this.$learnmore=()=>$(`//h2[text()='Loading Animation Component']/parent::div/p/following::a[1]`)
        this.$animation_loader=()=>$(`//div[@class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"]`)
        this.$animation_content=()=>$(`//h1[text()='Content Loaded!']`)
    }
    async loadAnimation()
    {
        await components.$component().click()
        await this.$learnmore().waitForDisplayed({timeout:8000})
        await this.$learnmore().click()
        await this.$animation_loader().waitForDisplayed({reverse:true})
    }
}
export default new LoadingAnimation()