import Common from "../pg_commonpage.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$selectShop =() =>$(`//a[text()='Shop']`)
    }
    async clickShop(){
        await this.$selectShop().click();

    }

}
export default new HomePage();