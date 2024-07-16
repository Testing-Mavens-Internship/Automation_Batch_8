export default class Page{
    constructor(){
    this.$logolocator=()=>$(`//div[text()="PlayGround"]`) 
    }
    async loadurl()
    {
        await browser.url("https://www.playground.testingmavens.tools/");
        browser.maximizeWindow()
    }

}
