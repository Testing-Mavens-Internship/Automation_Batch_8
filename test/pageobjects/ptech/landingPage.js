import CommonPage from "../ptech/commonPage.js";
class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$(`//div[@class="header__heading-logo-wrapper"]`);
        this.$dropdown=()=>$(`//span[text()="SOLUTIONS"]`)
        this.$$ddoptions=()=>$$(`//ul[@id="HeaderMenu-MenuList-1"]/li/a`);
        this.$selectprofileoption=()=>$(`//a[@id="HeaderMenu-solutions-stock-profiling-and-analysis-services"]`);
    }
    async clickDropdown(){
        await this.$dropdown().click();
        let options = [];
        for(let item of await this.$$ddoptions()){
            await item.waitForDisplayed({timeout:4000,timeoutMsg:'Drop down items still not displayed'});
            await options.push((await item.getText()).trim());
        }
        return options;
    }
    async selectSolutionddoption(){
        // for(let item of await this.$$ddoptions()){
        //     await item.waitForDisplayed({timeout:4000,timeoutMsg:'Drop down items still not displayed'});
        //     if(await item.getText() === "Stock Profiling and Analysis Services"){
        //         await item.click();
        //     }
        await this.$selectprofileoption().click();
        }
    
    }
    


export default new LandingPage();