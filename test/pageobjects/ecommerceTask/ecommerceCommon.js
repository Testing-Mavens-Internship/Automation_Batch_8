export default class Common
{
    constructor()
    {
        
    }

    /**
     * To launch url
     */
    async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://www.target.com/")
    }
}