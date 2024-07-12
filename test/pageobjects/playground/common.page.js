 class CommonPage {
    constructor(){
        
    }

    async loadUrl(){
        await browser.url('https://www.playground.testingmavens.tools/');
        
    }
   
}
export default new CommonPage();