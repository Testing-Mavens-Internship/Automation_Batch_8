export default class Common{
    constructor(){

    }
    async launchUrl() {
        await browser.maximizeWindow();
        await browser.url('https://demotmwebsite.github.io/')
    }
}