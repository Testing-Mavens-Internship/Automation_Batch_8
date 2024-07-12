import CommonPage from "./commonPage.js";
class LandingPage extends CommonPage {
    constructor(){
        super();
        this.$header=()=>$('//img[@alt="PRECISIONTECH"]'); 
        this.$solutions=()=>$('//span[text()="SOLUTIONS"]')
        this.$$dropDownItems=()=>$$('//ul[@id="HeaderMenu-MenuList-1"]/li/a')
        this.$stockProfile=()=>$('//a[@id="HeaderMenu-solutions-stock-profiling-and-analysis-services"]')
    }
    async clickSolutions(){
         await this.$solutions().waitForDisplayed({timeout:30000,timeoutMsg:"Not displayed"})
        await this.$solutions().click();
    }
    async dropDown(){
        let arr=[];
        let items=await this.$$dropDownItems();
        for (let item of items){
            await item.waitForDisplayed({timeout:1000,timeoutMsg:"Dropdown items still not displayed"})
            arr.push(await item.getText());
        }
        return arr;

    }
    async clickStock(){
        await this.$stockProfile().waitForDisplayed({timeout:30000,timeoutMsg:"Not displayed"})
        await this.$stockProfile().click();
    }
 
}

export default new LandingPage();