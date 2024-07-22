export default class CommonPage{
    constructor(){
        this.$playgroundLogo=()=>$(`//span[text()="PLAYGROUND"]`)
        this.$playgroundHeader=()=>$(`//div[text()="PlayGround"]`);
        this.$componentsHeader=()=>$(`//a[text()="Components"]`)
    }
    async launchUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/");
        await this.$playgroundLogo().waitForDisplayed({timeout:9000,timeoutMsg:"option still not displayed"});

    }
    async clickComponent(){
        await this.$componentsHeader().click();
}
}
