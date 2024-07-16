export default class CommonPage{
    constructor(){
        this.$logolocator=()=>$(`//span[text()="PLAYGROUND"]`)
    }
    async launchUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/");
        await this.$logolocator().waitForDisplayed({timeout:9000,timeoutMsg:"option still not displayed"});

    }
}
