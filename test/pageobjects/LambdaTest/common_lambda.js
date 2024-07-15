export default class CommmonLambda{
    constructor(){
        this.$header=()=>$(`//div[@id="entry_217821"]//a/img`)
        
    }
    async loadUrl(){
        await browser.url("https://ecommerce-playground.lambdatest.io/index.php?route=common/home")
        await browser.maximizeWindow();

    }
}