export default class Common {

    constructor()
    {
        this.$header=()=> $('(//*[local-name()="svg" and @viewBox="0 0 246 56"])[2]')
        //this.$firstOneName=()=> $('(//div[@class="right clickable-card"]/div/div/h3[1])[1]')
    }

    /**
     * funtion to load the URL on the browser
     */
    async loadUrl()
    {
        await browser.url('https://www.akbartravels.com/in/flight?lan=en')
        await browser.maximizeWindow()
        await this.$header().waitForDisplayed({timeout:2000})    }
}
