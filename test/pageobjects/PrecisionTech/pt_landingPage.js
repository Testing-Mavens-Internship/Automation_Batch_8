import Common from "./pt_commonPage.js";

class Landing extends Common{
    constructor(){
        super()
        this.$solution=() =>$(`//span[normalize-space()='SOLUTIONS']`)
        this.$$SolutionOption=() =>$$(`//ul[@id='HeaderMenu-MenuList-1']/li/a`)
        this.$ClickStock =() =>$(`//a[@id='HeaderMenu-solutions-stock-profiling-and-analysis-services']`);




    }

    async clickSolution(){
        await this.$solution().click();

    }
    async dropDown(){
        await this.$$SolutionOption();
    }
    async storingOptions(){
        let array=[];
        let items=await this.$$SolutionOption();
        for(let item of items){
            await item.waitForDisplayed(3000);
            array.push((await item.getText()).trim());
        }
        return array;

    }

    async clickOption(){
        await this.$ClickStock().click();

    }

}
export default new Landing();