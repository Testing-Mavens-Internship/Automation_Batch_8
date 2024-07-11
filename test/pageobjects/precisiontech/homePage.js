import Common from "./common.js";
class HomePage extends Common{
    constructor(){
        super();
        this.$solution=()=>$(`//summary[@id="HeaderMenu-solutions"]/*[local-name()="svg"]`);
        this.$$item=()=>$$(`//ul[@id="HeaderMenu-MenuList-1"]/li/a`); 
        this.$itemSelect=()=>$(`//a[@id="HeaderMenu-solutions-stock-profiling-and-analysis-services"]`);
        this.$cookie=()=>$(`//button[text()="Accept"]`);
    }
    async cookie(){
        await this.$cookie().click();
    }
    async clickSolution(){
        await this.$solution().click();
        let selectItem=[];
        for(let item of await this.$$item()){
            await item.waitForDisplayed({timeout:4000,timeoutMsg:"Item fetching"})
            selectItem.push(await item.getText());
        }
        return selectItem;
    }
    async clickData(){
        await this.$itemSelect().click();
    }
}
export default new HomePage();