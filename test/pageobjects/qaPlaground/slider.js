import Common from '../qaPlaground/common.js'
class Slider extends Common
{
    constructor()
    {
        super();
        this.$sliderHeader=()=>$(`//span[@class="gradient-text"]`)
        this.$slider=()=>$(`//input[@type="range"]`)
        this.$progressbar=()=>$(`//div[@class="progress-bar"]`)
        this.$thumb=()=>$(`//div[@class="thumb"]`)
        this.$button=()=>$(`//button[@id="feedback"]`)
        this.$sliderValidater=()=>$(`//p[text()="Thank you for your feedback!"]`)
    }

    /**
     * sliding operation
     */
    async slide()
    {
    const btn=await this.$button()
     const bar = await this.$progressbar()
     const point = await this.$thumb()
     await browser.execute((el,attr,val)=>{
        el.setAttribute(attr,val)
     },bar,'style','width: 42%;')
     await browser.execute((el,attr,val)=>{
        el.setAttribute(attr,val)
     },point,'style','left: 42%;')
     await browser.execute((el,attr,val)=>{
        el.setAttribute(attr,val)
     },btn,'style','display: block;')
     btn.click();
                           
       
    }
}
export default new Slider()