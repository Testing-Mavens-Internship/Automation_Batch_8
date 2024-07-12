import {browser} from "@wdio/globals"
export default class Common
{
    constructor()
    {

    }
    async launchURL()
    {
        await browser.url('https://demotmwebsite.github.io/')
        await browser.maximizeWindow()
    }
}