class slider {
    constructor(){
        this.$range=()=>$('//input[@type="range"]');
        this.$feedback=()=>$('//button[@id="feedback"]');
    }
    async loadUrl(){
        await browser.url('https://qaplayground.dev/apps/range-slider/');
        await browser.pause(3000);
    }
    async setRange(){
        await this.$range().click();
        await this.$range().setValue(40);
        await this.$feedback().waitForDisplayed({timeout:5000,timeoutMsg:'Header not displayed'})
    }
 
    async clickFeedback(){
 
        await this.$feedback().click()
    }
}
export default new slider();