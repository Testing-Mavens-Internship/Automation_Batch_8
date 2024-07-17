import Common from "./sh_Commonpage.js";
class Iframe extends Common{
    constructor(){
        super();
        this.$iframe=()=>$(`//iframe[@id="coming google"]`)
        this.$yesBtn=()=>$(`//span[contains(text(),"Yes")]`)
    }
    async accessIframe(){
        let frame = await this.$iframe();
        await this.$iframe().waitForDisplayed();
        await browser.switchToFrame(frame)
        await this.$yesBtn().click();
        await this.$yesBtn().waitForClickable();
        
    }
}export default new Iframe();