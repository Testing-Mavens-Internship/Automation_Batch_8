export default class DemoCommon{
    constructor(){
        this.$header=()=>(`//img[@id="logo"]`)

    }
    async Loadurl(){
        await browser.url("https://demo.automationtesting.in/")
        await browser.maximizeWindow();
    }

    async loadUrlForFileDownload(){
        await browser.url("https://demo.automationtesting.in/FileDownload.html")
        await browser.maximizeWindow();
    }
}