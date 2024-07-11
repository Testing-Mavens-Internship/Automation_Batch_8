export default class pgcommon
{
    constructor()
    {
        this.$header=()=>$('//span[text()="PLAYGROUND"]')
    }
    async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/login");
    }
}