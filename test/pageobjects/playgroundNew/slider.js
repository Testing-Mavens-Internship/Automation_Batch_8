import Common from "./common.js";
import components from "./components.js";

class Slider extends Common
{
    constructor()
    {
        super()
        this.$learnmore=()=>$(`//h2[text()='Slider Component']/parent::div/p/following::a[1]`)
        this.$sliderheader=()=>$('//span[@class="text-gray-600"]')
        this.$slider=()=>$('//input[@type="range"]')
        this.$slider0=()=>$(`//input[@value="0"]`)
        this.$slider100=()=>$(`//input[@value="100"]`)
    }

    /**
     * Move to slider component
     */
    async gotoSlider()
    {
        await components.$component().click()
        await this.$learnmore().waitForDisplayed({timeout:8000})
        await this.$learnmore().click()
    }

    /**
     * Set slider value from 50 to 0
     */
    async slidetoZero()
    {
        let size= await this.$slider().getSize()
        await this.$slider().dragAndDrop({x:-size.width,y:0})

    }
    
    /**
     * Set slider value from 0 to 100
     */
    async slidetoFull()
    {
        let size= await this.$slider().getSize()
        await this.$slider().dragAndDrop({x:size.width,y:0})
    }
}
export default new Slider()