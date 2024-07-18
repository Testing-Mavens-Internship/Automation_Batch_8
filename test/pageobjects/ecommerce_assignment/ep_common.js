import {browser} from "@wdio/globals"
export default class Common
{
    constructor()
    {

    }
    /**
     * Method to launch URL
     */
    async launchURL()
    {
        await browser.url('https://ecommerce-playground.lambdatest.io/')
        await browser.maximizeWindow()
    }
}