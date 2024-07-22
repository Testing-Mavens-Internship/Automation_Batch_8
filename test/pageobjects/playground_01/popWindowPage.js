import CommonPage from "./commonPage.js";

export class PopUpPage extends CommonPage {
    constructor() {
      super()
      this.$openPopUpButton = () => $('//button[text()="Open Pop Window"]');
      this.$popWindowContent=()=>$('//p[normalize-space()="This is the content of the Pop Window. You can put any content here."]');
      this.$closeButton=()=>$('//button[text()="Close"]');
    }
    /**
     * To click the open pop up window button.
     */
    async clickPopUpButton(){
        await this.$openPopUpButton().click();
        await browser.pause(5000);
        await this.$popWindowContent().waitForDisplayed({timeout:5000,timeoutMsg:"Content not yet displayed."});
        await this.$closeButton().waitForClickable({timeout:5000,timeoutMsg:"Button not yet clicked."});
        await browser.pause(3000);
    }
    async closePopUpWindow(){
        await this.$closeButton().click();
        await this.$componentsHeader().waitForClickable({timeout:5000,timeoutMsg:"Header not yet clicked"});
    }
}
      export default new PopUpPage();