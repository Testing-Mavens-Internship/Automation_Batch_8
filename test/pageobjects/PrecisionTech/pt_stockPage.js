import Common from "./pt_commonPage.js";
class Enquiry extends Common{
    constructor(){
        super()
        this.$sheader=()=>$(`//h2[normalize-space()='STOCK PROFILING AND ANALYSIS SERVICES']`);
        this.$cEnquriy=()=>$(`//a[normalize-space()='MAKE AN ENQUIRY']`);
    }
    async checkHeader(){
        await this.$sheader();
    }


    async clickEnquiry(){
        await this.$cEnquriy().waitForDisplayed({timeout:3000,timeoutmessage:'not displayed'})
        await this.$cEnquriy().click();
        
    }
}
export default new Enquiry();


