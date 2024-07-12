import Common from "../pg_commonpage.js";
class PaymentPage extends Common{
    constructor(){
        super();
        this.$payHeader=() =>this.$header(`//h1[@class='text-5xl text-primeColor font-titleFont font-bold']`)
       
    }
    async checkHeader(){
        await this.$payHeader().isDisplayed();
    }
    

    

}
export default new PaymentPage