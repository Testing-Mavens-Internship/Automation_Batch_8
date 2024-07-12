import Common from "./common.js";

export class Cart extends Common{
   constructor(){
    super();
    this.$cart=()=>$('//h1[text()="Your cart is empty"]');
    this.$continueShop=()=>$('//a[@class="button"][normalize-space()="Continue shopping"]');
   }

   async continueShopping(){
    await this.$continueShop().click();
   }

}
export default new Cart();