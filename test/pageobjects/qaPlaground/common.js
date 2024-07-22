export default class Common{
    constructor(){

    }

    /**
     * Should load url
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://qaplayground.dev/');
    }

    
}

