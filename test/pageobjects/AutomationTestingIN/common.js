export default class Common{
    constructor(){

    }

    /**
     * Launch URL in the browser
     */
    async launchUrl(){
        await browser.url("https://demo.automationtesting.in/");
        await browser.maximizeWindow();
    }
    /**
     * randomly generate emails
     * @returns 
     */
    async generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 15);
        return `${randomString}@example.com`;
    }
    async fileDownloadUrl(){
        await browser.url("https://demo.automationtesting.in/FileDownload.html");
        await browser.maximizeWindow();
    }
}
