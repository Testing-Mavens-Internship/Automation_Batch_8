import Common from "./PgExample/pg_commonpage.js";
class Cart extends Common{
    constructor(){
     super();
     this.$cProceed=() =>$(`//button[text()='Proceed to Checkout']`)
    }
    async clickProceed(){
        await this.$cProceed().click();   
}
}
export default new Cart();