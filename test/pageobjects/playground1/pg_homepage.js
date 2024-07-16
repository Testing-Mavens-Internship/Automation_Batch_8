import Page from "./pg_commonpage";

export class HomePage extends Page{
    constructor(){
        super();
        this.$selectShop=()=>$(`//a[text()="Shop"]`)

    }
    async selectShop(){
        await this.$selectShop().click(`${selectShop}`);
    }
}
export default new HomePage();