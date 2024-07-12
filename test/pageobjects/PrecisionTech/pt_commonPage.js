export default class Common{
    constructor(){
        this.$ptheader=() =>$(`//h1[@class='header__heading']`)

        }
    
async loadUrl(){
     await browser.url('https://precisiontech.uk/')
     await browser.maximizeWindow();

}
}