export default class Common{
    constructor(){

    }

    async launchUrl() {
        await browser.maximizeWindow();
        await browser.url('https://demo.automationtesting.in/')
    }

    async launchdownloadUrl() {
        await browser.maximizeWindow();
        await browser.url('https://demo.automationtesting.in/FileDownload.html')
    }
    
}