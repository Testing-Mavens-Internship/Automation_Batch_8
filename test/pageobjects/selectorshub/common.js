import {browser} from "@wdio/globals"
export default class Common
{
    constructor()
    {
        this.$mainheading=()=>$(`//a[text()='Find out how to automate these controls without XPath']`)
    }
    async launchURL()
    {
        await browser.url('https://selectorshub.com/xpath-practice-page/')
        await browser.maximizeWindow()
    }
}