export default class Common{
    constructor(){


    }
    /**
     * Launch the url in the browser
     */
    async launchUrl(){
        await browser.url("https://www.akbartravels.com/in/flight?lan=en");
        await browser.maximizeWindow();
    }
}