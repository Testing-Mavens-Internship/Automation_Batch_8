class SliderRange
{
    constructor()
    {
        this.$sliderheader=()=>$('//span[@class="gradient-text"]')
        this.$slider=()=>$('//input[@type="range"]')
        this.$progressbar=()=>$('//div[@class="progress-bar"]')
        this.$slideButton=()=>$('//div[@class="thumb"]')
        this.$button=()=>$('//button[@id="feedback"]')
        this.$slidervalidater=()=>$('//p[text()="Thank you for your feedback!"]')
    }
 
    async loadUrl()
    {
        await browser.maximizeWindow()
        await browser.url("https://qaplayground.dev/apps/range-slider/")
 
    }
 
    async slide()
    {
    const btn=await this.$button()
     const bar = await this.$progressbar()
     const point = await this.$slideButton()
     await browser.execute((el,attr,val)=>{
        el.setAttribute(attr,val)
     },bar,'style','width: 42%;')
     await browser.execute((el,attr,val)=>{
        el.setAttribute(attr,val)
     },point,'style','left: 42%;')
     await browser.execute((el,attr,val)=>{
        el.setAttribute(attr,val)
     },btn,'style','display: block;')
     await browser.pause(5000)
     btn.click();
                           
       
    }
}
export default new SliderRange()