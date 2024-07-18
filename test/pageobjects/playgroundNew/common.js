import {browser} from "@wdio/globals"
export default class Common
{
    constructor()
    {
        this.$header=()=>$(`//span[text()='PLAYGROUND']`)
        this.$mainheader=()=>$(`//div[text()='PlayGround']`)
    }
    async launchURL()
    {
        await browser.url('https://www.playground.testingmavens.tools')
        await browser.maximizeWindow()
    }
}