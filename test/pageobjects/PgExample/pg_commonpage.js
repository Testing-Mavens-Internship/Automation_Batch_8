export default class Common{
    constructor(){
        this.$header =()=>$(`//div[text()='PlayGround']`)

    }
    async loadUrl(){
       await browser.url('https://www.playground.testingmavens.tools/')   
       await browser.maximizeWindow();

    }
}
