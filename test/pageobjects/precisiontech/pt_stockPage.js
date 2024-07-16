import CommonPage from "./pt_commonPage.js";

class StockProfilePage extends CommonPage{
    constructor(){
       super();
     this.$stockheader=()=>$(`//h2/strong[text()="STOCK PROFILING AND ANALYSIS SERVICES"]`);
     this.$enquiry=()=>$(`//a[@class="button button--primary"]`);
     this.$carticon=()=>$(`//*[local-name()='svg'and @viewBox="0 0 40 40"]`);
    }
    async stockProfileHeader(){
        await this.$stockheader().waitForDisplayed({timeout:6000});
        await this.$stockheader().isDisplayed();
    }

    async makeEnquiry(){
       await this.$enquiry().waitForDisplayed({timeout:3000})
        await this.$enquiry().click();
    }
    async clickCart(){
        await this.$carticon().waitForDisplayed({timeout:1000})
        await this.$carticon().click();
    }
}
export default new StockProfilePage();