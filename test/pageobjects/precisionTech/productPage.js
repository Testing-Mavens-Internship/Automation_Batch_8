import CommonPage from "./commonPage.js";

class ProductPage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$('//h1[text()="Products"]');
        this.$sort=()=>$('//select[@id="SortBy"]/option[@value="title-descending"]');
        this.$$product=()=>$$('//h3[@class="card__heading h5"]/a');
    }
    async clickSort(){
       await this.$sort().waitForDisplayed({timeout:60000,timeoutMsg:"Not displayed"})
        await this.$sort().click();
    }
    async productSort(){
        let array=[];
        let items=await this.$$product();
        for (let item of items){
            await item.waitForDisplayed({timeout:30000,timeoutMsg:"Dropdown items still not displayed"})
            array.push(await item.getText());
        }
        return array;
    }

}
export default new ProductPage();