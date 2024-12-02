export default class Common
{
    constructor()
    {
        this.$header=()=>$('//span[text()="PLAYGROUND"]')
        this.$components=()=>$('//a[text()="Components"]')
    }

    /**
     * Load URL
     */
    async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/")
        await browser.pause(3000)
    }       
}
