import {browser} from '@wdio/globals'
export default class Common
{
    constructor()
    {
        this.$mainlogin_header=()=>$(`//span[text()='PLAYGROUND']`)
    }
    async launchURL()
    {
        await browser.url('https://www.playground.testingmavens.tools/login')
        await browser.maximizeWindow()
    }
}
