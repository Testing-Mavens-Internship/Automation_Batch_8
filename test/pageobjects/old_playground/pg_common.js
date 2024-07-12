// import { browser } from '@wdio/globals'
export default class Common{
    constructor(){

    }
    async launchURL()
    {
        await browser.maximizeWindow()
        await browser.url('https://www.playground.testingmavens.tools/')
    }
}