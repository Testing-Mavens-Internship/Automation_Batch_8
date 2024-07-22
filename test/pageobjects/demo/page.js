import { browser } from '@wdio/globals';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    constructor() {
        this.$header =()=> $('//div[text()="Swag Labs"]')
        
    }

    async loadUrl() {
        await browser.maximizeWindow();
        await browser.url("https://www.saucedemo.com/");
        // await browser.pause(3000);
    }

   
}