export default class Common{
    constructor(){
       this.$header=() => $('//div[@class="header__heading-logo-wrapper"]');
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://precisiontech.uk/');
        
    }
    }
    
