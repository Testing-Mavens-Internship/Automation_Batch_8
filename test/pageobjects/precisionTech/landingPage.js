import basePage from "./common.js";

class LandingPage extends basePage {
    constructor() {
        super()
        this.$header=()=>$(`//img[@alt="PRECISIONTECH"]`);
        this.$solution=()=>$('#HeaderMenu-solutions');
        this.$$dropItems=()=>$$('#HeaderMenu-MenuList-1 li a');
        this.$stockItem=()=>$('#HeaderMenu-solutions-stock-profiling-and-analysis-services')
        // this.$header=()=>$('//strong[normalize-space()="STOCK PROFILING AND ANALYSIS SERVICES"]')
    
    }

    async clickSolution(){
        await this.$solution().click()
        


    }
    async dropDownSelection(){
        let dropDownItems=[];
        let dropItems=await this.$$dropItems()
        for (let item of dropItems){
            await item.waitForDisplayed({timeout:1000,timeoutMsg:"Dropdown items still not displayed"})
            dropDownItems.push(await item.getText());
        }
        return dropDownItems
    }
    async clickStock(){
        
        await this.$stockItem().click()

    }
        
    }

    export default new LandingPage()