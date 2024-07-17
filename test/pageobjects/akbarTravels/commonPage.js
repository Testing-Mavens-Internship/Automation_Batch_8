export default class CommonPage{
    constructor(){
        
    }
    /**
     * Launching AkbarTravels website
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://www.akbartravels.com/in/flight?lan=en');
    }
}