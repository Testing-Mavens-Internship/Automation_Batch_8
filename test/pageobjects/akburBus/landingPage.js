import CommonClass from "./commonFile.js";

class landingPage extends CommonClass
{
    constructor()
    {
        super();
        this.$header=()=>$(`(//*[local-name()="svg" and @viewBox="0 0 246 56"])[2]`)
        this.$busMenu = () =>$(`(//h3[normalize-space()="Bus"]/ancestor::a/parent::li)[2]`);
        this.$laterNotification = () => $(`#wzrk-cancel`);
    }

    async loadUrl(){
        await browser.url('https://www.akbartravels.com/in/flight?lan=en')
        await browser.maximizeWindow()
        await this.$header().waitForDisplayed({
            timeout: 2000,
            timeoutMsg: "Header is not visible"
        })
        
    }

    async clickBus() {
        if (await this.$laterNotification().isDisplayed()) {
          await this.$laterNotification().click();
        }
        await this.$busMenu().click();
        await this.$header().waitForDisplayed({
            timeout: 2000,
            timeoutMsg: "Header is not visible"
          })  
    }
}

export default new landingPage()