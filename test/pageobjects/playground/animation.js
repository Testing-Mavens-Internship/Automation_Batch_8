import Common from '../playground/common.js';

class Animation extends Common
{
    constructor()
    {
        super()
        this.$animateNavigator=()=>$('//a[@href="/components/loading-animation"]')
        this.$animation=()=>$('//div[@class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"]')
        this.$animationHeader=()=>$('//h1[text()="Content Loaded!"]')
    
    }

    /**
     * Navigate to animation component
     */
    async goToAnimate()
    {
        await this.$components().click()
        await this.$animateNavigator().click()
        await this.$animation().waitForDisplayed({reverse:true})
        // await this.$animationheader().waitForDisplayed({timeout:3000})
        
    }
}
export default new Animation()