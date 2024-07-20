class slider
{
    constructor()
    {
        this.$sliderheader=()=>$('//span[@class="gradient-text"]')
        this.$slider=()=>$('//input[@type="range"]')
        this.$progressbar=()=>$('//div[@class="progress-bar"]')
        this.$thumb=()=>$('//div[@class="thumb"]')
        this.$button=()=>$('//button[@id="feedback"]')
        this.$slidervalidater=()=>$('//p[text()="Thank you for your feedback!"]')
    }


    /**
     * load url
     */
    async loadurl()
    {
        await browser.maximizeWindow()
        await browser.url("https://qaplayground.dev/apps/range-slider/")

    }

    /**
     * slider
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
export default new slider()