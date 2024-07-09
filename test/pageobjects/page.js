import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
   constructor()
   {
    // locators given inside constructor
    this.$header=()=>$("//div[@class='login_container']/div[@class='login_logo']")
    this.$pdtheader=()=>$("//div[text()='Swag Labs']")
   }

   async loadURL()
   {
    await browser.url('https://www.saucedemo.com/')
    await browser.maximizeWindow()
   }
}
