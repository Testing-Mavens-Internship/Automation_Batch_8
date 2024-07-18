import Common from "./playgroundCommon.js";

class Animation extends Common
{
    constructor()
    {
        super()
        this.$animatenavigator=()=>$('//a[@href="/components/loading-animation"]')
        this.$animation=()=>$('//div[@class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"]')
        this.$animationheader=()=>$('//h1[text()="Content Loaded!"]')
    
    }

    /**
     * Navigate to animation component
     */
    async gotoanimate()
    {
        await this.$components().click()
        await this.$animatenavigator().click()
        await this.$animation().waitForDisplayed({reverse:true})
        // await this.$animationheader().waitForDisplayed({timeout:3000})
        
    }
}
export default new Animation()