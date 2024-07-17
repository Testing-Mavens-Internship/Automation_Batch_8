export default class Commonakbartravels
{
    constructor()
    {
        this.$popupdisplayed=()=>$('//div[@class="wzrk-alert wiz-show-animate"]')
        this.$landingpagepopuclose=()=>$('//button[@id="wzrk-cancel"]');
        this.$landingpageheader=()=>$('//div[@class="logo"]/*[local-name()="svg" and @viewBox="0 0 246 56"]')
    }
    /**
     * To load url and close the popup
     */
    async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://www.akbartravels.com/in/flight?lan=en");
        // if(this.$popupdisplayed().isDisplayed())
        // {
        // await this.$landingpagepopuclose().click();
        // }
    }
}
