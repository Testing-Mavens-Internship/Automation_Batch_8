import {browser} from "@wdio/globals"

export default class Common
{
    constructor()
    {

    }
    async launchURL()
    {
        await browser.url('https://demo.automationtesting.in/')
        await browser.maximizeWindow()
    }
    async newURL()
    {
        await browser.url('https://demo.automationtesting.in/FileDownload.html')
        await browser.maximizeWindow()
    }
}