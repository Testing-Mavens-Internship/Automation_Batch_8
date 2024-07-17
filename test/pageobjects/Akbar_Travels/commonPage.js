export default class CommonPage{

    constructor()
    {
       
        this.$akbatTravelsHeader = () => $('//*[local-name()="svg" and @class="ng-tns-c7-2"]')
        this.$clickOkButton = () => $('//button[@id="wzrk-confirm"]')
    }

    /**
     * Launch the url of the website
     */
    async LaunchUrl()
    {
        await browser.url('https://www.akbartravels.com/in/flight?lan=en')
        browser.maximizeWindow();
       

    }
    
}