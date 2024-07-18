import Common from "./playgroundCommon.js";

class Slider extends Common
{
    constructor()
    {
        super()
        this.$slidernavigator=()=>$('//a[@href="/components/slider"]')
        this.$sliderheader=()=>$('//span[@class="text-gray-600"]')
        this.$slider=()=>$('//input[@type="range"]')
        this.$sliderzeroheader=()=>$('//input[@value="0"]')
        this.$sliderfullheader=()=>$('//input[@value="100"]')

    }

    /**
     * Navigate to slider component
     */
    async gotoslider()
    {
        await this.$components().click()
        await this.$slidernavigator().click()
        // const value=await this.$sliderheader().getText()
        // console.log("ddddddddddd",this.$sliderheader())
    }

    /**
     * Set slider 50 to 0
     */
    async slidetozero() {
        const slide = await this.$slider();
        const slidersize=await slide.getSize();
        await slide.dragAndDrop({x: -slidersize.width,y:0})
        await browser.pause(5000)
    }

    /**
     * Set slider 0 to 100
     */
    async slidetofull()
    {
            const slide = await this.$slider();
            const slidersize=await slide.getSize();
            await slide.dragAndDrop({x: slidersize.width,y:0})
            await browser.pause(5000)
        
    }
}
export default new Slider()