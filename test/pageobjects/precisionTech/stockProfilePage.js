import CommonPage from "./commonPage.js";

class StockProfilePage extends CommonPage{
    constructor(){
        super();
        this.$heading=()=>$('//strong[text()="STOCK PROFILING AND ANALYSIS SERVICES"]')
        this.$enquiry=()=>$('//a[normalize-space()="MAKE AN ENQUIRY"]')
    }
    async clickEnquiry(){
        await  this.$enquiry().waitForDisplayed({timeout:30000,timeoutMsg:"Not displayed"})
        await this.$enquiry().click();
    }
}
export default new StockProfilePage();