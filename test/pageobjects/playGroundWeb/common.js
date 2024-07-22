export default class Common{
    constructor(){
        this.$loginHeader=()=>$(`//span[text()="PLAYGROUND"]`);
        this.$homepageHeader=()=>$(`//div[text()="PlayGround"]`);
        this.$UserName=()=>$(`//input[@name="username"]`);
        this.$Password=()=>$(`//input[@name="password"]`);
        this.$submitButton=()=>$(`//button[@type="submit"]`);
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/");
    }
    async firstLogin(){
        await this.$UserName().setValue("playground");
        await this.$Password().setValue("playground@TM");
        await this.$submitButton().click();
    }
}