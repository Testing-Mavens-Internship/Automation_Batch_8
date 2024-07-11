export default class Common{
    constructor(){
        this.$lHeader=()=>$(`//img[@class="header__heading-logo motion-reduce"]`);
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://precisiontech.uk/");
    }
}