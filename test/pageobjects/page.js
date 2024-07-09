import { browser } from '@wdio/globals'

export default class Page {
    constructor(){
        this.$header=()=> $(`//div[@class="login_logo"]`);
        this.$loginHeader=()=> $(`//div[@class="app_logo"]`);
        this.$userName=()=> $(`//input[@id="user-name"]`);
        this.$password=()=> $(`//input[@id="password"]`);
        this.$submitButton=()=>$(`//input[@id="login-button"]`)
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.saucedemo.com/");
        //await browser.pause(3000);// can use waitforDisplayed();
    }
   
}
