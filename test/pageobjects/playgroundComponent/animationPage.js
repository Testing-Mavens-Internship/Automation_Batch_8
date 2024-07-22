import CommonPage from "./commonPage.js";
class AnimationPage extends CommonPage{
    constructor(){
        super();
        this.$animation=()=>$('//div[@class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"]')
        this.$contentLoaded=()=>$('//h1[text()="Content Loaded!"]')
    }
    /**
     * validating animation
     */
    async animationComponent(){
        await this.$animation().waitForDisplayed({timeout:5000, timeoutMsg: "Header hoodies is not visible", reverse:true})
    }
}
export default new AnimationPage();