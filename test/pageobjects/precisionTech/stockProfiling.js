class StockProfiling{
    constructor(){
        this.$stockHeader=()=>$(`//strong[text()="STOCK PROFILING AND ANALYSIS SERVICES"]`);
        this.$makeAnEnquiry=()=>$(`//a[normalize-space()="MAKE AN ENQUIRY"]`);
    }
    async makeAnEnquiryOption(){
        await this.$makeAnEnquiry().waitForDisplayed({timeout:1000,timeoutMsg:"make an enquiry still not dispalyed"})
        await this.$makeAnEnquiry().click();
    }
}
export default new StockProfiling()