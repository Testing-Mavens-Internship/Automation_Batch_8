export default class CommonPage{
    constructor() {
        this.$header=()=>$(`(//*[local-name()="svg" and @viewBox="0 0 246 56"])[2]`)
        

}
/**
 * This function is for load the URL
 */
    async loadUrl() {
        await browser.url('https://www.akbartravels.com/in/flight')
        await browser.maximizeWindow()
        await this.$header().waitForDisplayed({timeout: 2000})
    }

}