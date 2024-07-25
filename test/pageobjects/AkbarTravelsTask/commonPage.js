export default class CommonPage {
 
    constructor()
    {
        this.$akbarTravelsHeader = () => $('//*[local-name()="svg" and @class="ng-tns-c7-2"]')
        this.$okButton = () => $('//button[text()="Later"]')
    }
 
    /**
     * Launch the url of the website
     */
    async loadUrl()
    {
        await browser.url('https://www.akbartravels.com/in/flight?lan=en')
        browser.maximizeWindow();

        if(await this.$okButton().isDisplayed())
        {
            await this.$okButton().click();
        }
    } 
}
