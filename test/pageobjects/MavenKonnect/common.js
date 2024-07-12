export default class MavenCommon{
    constructor(){
        
    }
    async loadUrl(){
        await browser.url('https://demotmwebsite.github.io/')
        await browser.maximizeWindow();
    }


}