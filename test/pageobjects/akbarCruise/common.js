export default class CommonPage{
    constructor(){

    }

    /**
     * To load url of the page
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url(`https://www.akbartravels.com/in/flight?lan=en`);
        // if(await $("#wzrk-confirm")){await $("#wzrk-confirm").click();}
    }
}