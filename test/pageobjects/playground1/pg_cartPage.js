import Page from "./pg_commonpage";
export class CartPage extends Page{
    constructor(){
        super();
        this.$checkingout=()=>$(`//button[text()="Proceed to Checkout"]`)

    }
    async checkOut(){
        await this.$checkingout().click(`${checkingout}`);
    }
}
export default new CartPage();