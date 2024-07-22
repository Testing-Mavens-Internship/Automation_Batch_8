export default class Common{
    constructor(){

    }
    /**
     * To load url
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url(`https://demo.automationtesting.in/`);
    }
   /**
    * To load file downloading page
    */
    async loadUrlPage(){
        await browser.maximizeWindow();
        await browser.url(`https://demo.automationtesting.in/FileDownload.html`);
    }
}