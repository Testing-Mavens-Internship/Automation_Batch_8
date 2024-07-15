import CommmonLambda from "./common_lambda.js";
class CartPage extends CommmonLambda{
    constructor(){
        super()
        this.$cartIcon=()=>$(`//div[@id="entry_217825"]/a`)
        this.$Appleproduct=()=>$(`//a[normalize-space()="Apple Cinema 30..."]`)
        this.$checkkout=()=>$(`//a[@class="icon-right both btn btn-secondary btn-lg btn-block"]`)
        this.$billingHeader=()=>$(`//h4[normalize-space()="Billing Address"]`)
        this.$total=()=>$(`(//strong[normalize-space()="$194.40"])[1]`)
        
    }
    async ClickOncartIcon(){
        await this.$cartIcon().click();
    }
    

    async ClickOnCheckOut(){
        await this.$checkkout().click();
    }
}
export default new CartPage();