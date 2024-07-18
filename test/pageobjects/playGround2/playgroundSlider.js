import Common from "./playgroundCommon.js";

class Slider extends Common
{
    constructor()
    {
        super()
        this.$slidernavigator=()=>$('//a[@href="/components/slider"]')
        this.$sliderheader=()=>$('//span[@class="text-gray-600"]')
        this.$slider=()=>$('//input[@type="range"]')

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
    // async slidetozero() {
    //     const slide = await this.$slider();
    //     await browser.execute((element) => {
    //         element.value = 0;
    //         // Create and dispatch the 'input' event
    //         const inputEvent = new Event('input', { bubbles: true });
    //         element.dispatchEvent(inputEvent);
    //     }, slide);
    // }
    
    /**
     * Set slider 0 to 100
     */
    async slidetofull()
    {
        const slide=await this.$slider()
        await slide.dragAndDrop(slide.setAttribute('value',100))
        await browser.pause(3000)
    }
}
export default new Slider()