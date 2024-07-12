export default class CommonPage{
    constructor(){
        this.$header =()=> $('')
    }
    async launchUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/");
    }
    
}