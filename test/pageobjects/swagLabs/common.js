export default class Common{
    constructor()
    {
        
    }
 
/**
 * Launch URL of the website
 */
    async loadUrl()
    {
        await browser.url('https://www.saucedemo.com/')
        browser.maximizeWindow()
    }   
}
