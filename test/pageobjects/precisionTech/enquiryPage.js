import CommonPage from "./commonPage.js";

class EnquiryPage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$('//strong[text()="CONTACT US"]');
        this.$cart=()=>$('//*[local-name()="svg" and @viewBox="0 0 40 40"]');
    
    }
    async clickCart(){
        await this.$cart().waitForDisplayed({timeout:30000,timeoutMsg:"Not displayed"})
        await this.$cart().click();
    }
}
export default new EnquiryPage();