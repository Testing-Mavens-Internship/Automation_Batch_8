import {browser} from "@wdio/globals"

export default class Common
{
    constructor()
    {
        this.$logo=()=>$(`//a[@class="sc-676073c3-0 sc-7d77c0d1-0 fCfUJD cRBlGM"]`)
    }
    async launchURL()
    {
        await browser.url('https://www.target.com/')
        await browser.maximizeWindow()
    }
}
