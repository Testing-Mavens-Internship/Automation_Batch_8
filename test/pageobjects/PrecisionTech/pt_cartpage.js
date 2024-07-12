import Common from "./pt_commonPage.js";

class Cart extends Common{
    constructor(){
        super()
        this.$xheader=()=>$(`//h1[normalize-space()='Your cart is empty']`)
        this.$cButton=()=>$(`//a[@class='button']`)
        
    }
    async cartHeader(){
        await this.$xheader();
    }

    async clickContinueButton(){
        await this.$cButton().click();
    }

}
export default new Cart();