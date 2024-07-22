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

    // /**
    //  * Navigate to slider component
    //  */
    async gotoslider()
    {
        await this.$components().click()
        await this.$slidernavigator().click()
    }

    // /**
    //  * Set slider 50 to 0
    //  */
    // async slidetozero() {
    //     const slide = await this.$slider();
    //     await browser.execute((element) => {
    //         element.value = 0;
    //         // Create and dispatch the 'input' event
    //         const inputEvent = new Event('input', { bubbles: true });
    //         element.dispatchEvent(inputEvent);
    //     }, slide);
    // }
    
    // /**
    //  * Set slider 0 to 100
    //  */
    // async slidetofull()
    // {
    //     const slide=await this.$slider()
    //     await browser.execute((element)=>{
    //         element.value=100;
    //     },slide)
        
    // }
    async slidetozero() {
        await this.gotoslider();
        const slide = await this.$slider();
        const slidersize=await slide.getSize();
        await slide.dragAndDrop({x: -slidersize.width,y:0})
        await browser.pause(5000)
    }

    async slidetoHundred() {
        await this.gotoslider();
        const slide = await this.$slider();
        const slidersize=await slide.getSize();
        await slide.dragAndDrop({x: slidersize.width,y:0})
        await browser.pause(5000)
    }
}
export default new Slider()