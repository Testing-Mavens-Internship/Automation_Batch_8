export default class CommonPl{
    constructor(){

    }
    async loadurl(){
        await browser.url('https://www.playground.testingmavens.tools/')
        await browser.maximizeWindow();

    }
}