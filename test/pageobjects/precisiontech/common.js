import { browser } from "@wdio/globals";
export default class Common{
    constructor(){

    }
    async launchUrl(){
        await browser.url("https://precisiontech.uk/");
        await browser.maximizeWindow()
    }
}