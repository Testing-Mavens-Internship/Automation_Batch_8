import Common from "./playgroundCommon.js";

class Slider extends Common
{
    constructor()
    {
        super()
        this.$slidernavigator=()=>$('//a[@href="/components/slider"]')
        this.$sliderheader=()=>$('//span[@class="text-gray-600"]')
        this.$slider=()=>$('//input[@type="range"]')
        this.$value=()=>$('//span[contains(text(),"Value:")]')

    }

    /**
     * Navigate to slider component
     */
    async gotoslider()
    {
        await this.$components().click()
        await this.$slidernavigator().click()
    }

    /**
     * Set slider 50 to 0
     */
    async slidetozero() {
        const slideSize=(await this.$slider()).getSize();
        await this.$slider().dragAndDrop({ x: -(await slideSize).width, y: 0 })
    }
    
    /**
     * Set slider 0 to 100
     */
    async slidetofull()
    {
        const slideSize=(await this.$slider()).getSize();
        await this.$slider().dragAndDrop({ x: (await slideSize).width, y: 0 })
        
    }
}
export default new Slider()