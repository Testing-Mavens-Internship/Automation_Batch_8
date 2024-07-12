import Common from "./pt_commonpage.js";

class Enquiry extends Common
{
    constructor()
    {
        super()
        this.$stockheader=()=>$(`//strong[text()='STOCK PROFILING AND ANALYSIS SERVICES']`)
        this.$enquiry=()=>$(`//a[normalize-space()='MAKE AN ENQUIRY']`)
    }
    
    async selectEnquiry()
    {
        await this.$enquiry().waitForDisplayed({timeout:3000})
        await this.$enquiry().click()
    }
}
export default new Enquiry()