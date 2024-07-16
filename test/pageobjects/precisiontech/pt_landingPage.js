import CommonPage from "./pt_commonPage.js";
export class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$solution=()=>$(`//span[text()="SOLUTIONS"]`);
        this.$$dropdown=()=>$$(`//ul[@id="HeaderMenu-MenuList-1"]/li/a`);
        this.$stockProfile=()=>$('//a[@id="HeaderMenu-solutions-stock-profiling-and-analysis-services"]');


    }
    async clickSolution(){
        await this.$solution().waitForDisplayed({timeout:6000})
        await this.$solution().click();
    }
    async dropDownOption(){
        let arr=[];
        let items= await this.$$dropdown();
        for(let item of items)
        {
            await item.waitForDisplayed({timeout:6000});
            arr.push((await item.getText()).trim())
        }
        return arr;
    }
    async selectStock(){
        await this.$stockProfile().waitForDisplayed({timeout:1000,timeoutMsg:"option still not displayed"});
        await this.$stockProfile().click();
        
    }


    
    }
export default new LandingPage();