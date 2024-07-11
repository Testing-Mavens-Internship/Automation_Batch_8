export default class commonpage
{
    constructor()
    {

    }
    async loadurl()
    {
       await browser.maximizeWindow(); 
       await browser.url("https://precisiontech.uk/"); 
       await this.$header().waitForDisplayed({timeout:5000,timeoutMsg:"Header Displayed"})}
    
    }