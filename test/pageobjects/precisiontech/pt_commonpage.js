import {browser} from '@wdio/globals'
export default class Common{
    constructor()
    {
        this.$accept=()=>$(`//button[text()='Accept']`)
    }
    async launchURL()
    {
        await browser.url('https://precisiontech.uk/')
        await browser.maximizeWindow()
    }
    async accept()
    {
        await this.$accept().click()
    }
}