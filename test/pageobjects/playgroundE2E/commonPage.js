import { browser } from '@wdio/globals'
export default class CommonPage {
    constructor(){
        
    }

    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://www.playground.testingmavens.tools/');
    }
}