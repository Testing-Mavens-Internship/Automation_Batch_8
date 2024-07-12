import Common from '../precision/common.js'
export class Homepage extends Common{
    constructor(){
       super();
       this.$solution=()=> $('//summary[@id="HeaderMenu-solutions"]');
       this.$$items=()=> $$('//ul[@id="HeaderMenu-MenuList-1"]/li');
       this.$selectsolution=()=> $('//ul[@id="HeaderMenu-MenuList-1"]//a[contains(text(),"Stock Profiling")]');
    }
    async clickSolution(){
      await this.$solution().click();
      let dropDownItems=[];
      for (let item of await this.$$items()){
        await item.waitForDisplayed({timeout: 3000});
         dropDownItems.push(await item.getText());
      }
      return dropDownItems;
    }
    async selectSolution(){
        await this.$selectsolution().click();
    }
}
export default new Homepage();
