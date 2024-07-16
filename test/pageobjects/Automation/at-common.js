export default class commonauto
{
    constructor()
    {

    }
    async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://demo.automationtesting.in/")
        
    }
    async loadurltwo()
    {
        await browser.maximizeWindow()
        await browser.url("https://demo.automationtesting.in/FileDownload.html")
    }
}