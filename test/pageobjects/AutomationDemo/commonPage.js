export default class CommonPage {

    constructor(){}

    async loadUrl()
    {
        await browser.url('https://demo.automationtesting.in/')
        await browser.maximizeWindow()
    }

    async randomEmail()
    {
        let a=Math.floor(Math.random()*11)
        return `athira${a}@gmail.com`
    }

    async launchUrl()
    {
        await browser.url('https://demo.automationtesting.in/FileDownload.html')
        await browser.maximizeWindow()
    }
}
