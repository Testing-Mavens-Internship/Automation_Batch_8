export default class common{
    constructor(){

    }
    async launchUrl(){
        await browser.url("https://demotmwebsite.github.io/");
    }
}