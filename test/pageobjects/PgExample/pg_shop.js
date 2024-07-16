import Common from "./pg_commonpage.js";
class ShopPage extends Common{
    constructor(){
        super()
        this.$selectColor=() =>$(`//*[name()='svg' and  @viewBox='0 0 20 20']`)
        this.$selectBlue=() =>$(`//input[@id='Blue']`)
    }

    async clickShopColor(){
        await this.$selectColor().click();
    }

    async clickBlue(){
        await this.$selectBlue().click();

    }

}
export default new ShopPage();