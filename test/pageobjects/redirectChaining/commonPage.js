export default class Common{

    constructor(){
        
    }

    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://qaplayground.dev")
        await this.$rateSlider().scrollIntoView();
        await this.$rateSlider().waitForDisplayed({ timeout: 5000 });
    }
}