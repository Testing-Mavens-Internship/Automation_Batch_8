export default class CommonPage{
    constructor() {
        this.$MainHeader=()=>$(`(//*[local-name()="svg" and @viewBox="0 0 246 56"])[2]`)

}
    async loadUrl() {
        await browser.url('https://www.akbartravels.com/in/flight')
        await browser.maximizeWindow()
        await this.$MainHeader().waitForDisplayed({timeout: 2000})
    }

}
