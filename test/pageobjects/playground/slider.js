import Common from '../playground/common.js';

class Slider extends Common
{
    constructor()
    {
        super()
        this.$sliderNavigator=()=>$('//a[@href="/components/slider"]')
        this.$sliderHeader=()=>$('//span[@class="text-gray-600"]')
        this.$slider=()=>$('//input[@type="range"]')

    }

    /**
     * Navigate to slider component
     */
    async goToSlider()
    {
        await this.$components().click()
        await this.$sliderNavigator().click()
        // const value=await this.$sliderheader().getText()
        // console.log("ddddddddddd",this.$sliderheader())
    }
     /**
     * Set slider 50 to 0
     */
     async slideToZero() {
        const slideSize=(await this.$slider()).getSize();
        await this.$slider().dragAndDrop({ x: -(await slideSize).width, y: 0 })
    }
   
    /**
     * Set slider 0 to 100
     */
    async slideToFull()
    {
        const slideSize=(await this.$slider()).getSize();
        await this.$slider().dragAndDrop({ x: (await slideSize).width, y: 0 })
       
    }
}
export default new Slider()