import {browser} from "@wdio/globals"

export default class Common
{
    constructor()
    {
        this.$header=()=>$(`(//*[name()='svg' and @viewBox="0 0 246 56"])[2]`)
        this.$notification=()=>$(`//button[@id="wzrk-cancel"]`)
    }
    /**
     * Method to launch URL of the website and maximize the window
     */
    async launchURL()
    {
        await browser.url('https://www.akbartravels.com/in/flight?lan=en')
        await browser.maximizeWindow()
        if(await this.$notification().isDisplayed())
        {
            await this.$notification().click()
        }
    }
}