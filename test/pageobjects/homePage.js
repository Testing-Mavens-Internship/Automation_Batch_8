import Common from "./common.js";
class HomePage extends Common{
    constructor(){
        super();
        this.$shopTab=()=>$(`//a[text()="Shop"]`);
        this.$shopHeader=()=>$(`//h1[text()="Products"]`);
        this.$filter=()=>$(`//span[text()="Shop by Color"]`);
        this.$color=()=>$(`//input[@id="Blue"]`);
        this.$item=()=>$(`//h2[text()="Xiaomi Mi 12"]`);
        
        
    }
    async clickShop(){
        await this.$shopTab().click();
        await this.$filter().waitForDisplayed({timeout:3000,timeoutMsg:"filter is not appearing."});
    }
    async clickFilter(){
        await this.$filter().click();
        await this.$color().waitForDisplayed({timeout:3000,timeoutMsg:"color is not appearing."});
        await this.$color().click();
        await this.$item().waitForDisplayed({timeout:3000,timeoutMsg:"item is not appearing."});
    }
    async itemClick(){
        await this.$item().click();
    }
}
export default new HomePage();