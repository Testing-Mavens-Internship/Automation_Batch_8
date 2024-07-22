class slider {
    constructor(){
        this.$emoji=()=>$('//li[@class="slide-emoji"]')
        this.$range=()=>$('//input[@type="range"]');
        this.$feedback=()=>$('//button[@id="feedback"]');
        this.$msgFeedback=()=>$('//p[@id="ty-msg"]');
    }
    /**
     * launch the url
     */
    async loadUrl(){
        await browser.url('https://qaplayground.dev/apps/range-slider/');
        await browser.pause(3000);
    }
    /**
     * set slider value
     */
    async setRange(){
        await this.$range().click();
        await this.$range().setValue(50);
        await this.$feedback().waitForDisplayed({timeout:5000,timeoutMsg:'Header not displayed'})
    }
    /**
     * click on the send feedback button
     */
    async clickFeedback(){

        await this.$feedback().click()
    }
}
export default new slider();

//this.$message=()=>$(')
// async func(){
//     await this.$progressbar().click();
//     while(!this.$redirect('block').isDisplayed(){
//     await browser.keys(ArrowRight)
//     }
//     }
//     //div[@style=display:${...}]
     
//     import keys from webdriverIO(webdriver)
//