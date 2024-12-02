class emojiSlider{
    constructor(){
        this.$slider=()=>$(`//input[@type="range"]`)
        this.$button=()=>$(`//button[@id="feedback"]`)
    }

    async loadUrl(){
        await browser.maximizeWindow()
        await browser.url("https://qaplayground.dev/apps/range-slider/")
    }

    async slide(){
        await 

}
export default new emojiSlider()