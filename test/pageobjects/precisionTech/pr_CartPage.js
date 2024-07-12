import CommonPagePrecision from "./pr_Common.js";

class CartPage extends CommonPagePrecision {

        

    constructor()
    {
        super();
        this.$cartEmptyHeader= () => $('//h1[@class="cart__empty-text"]');
       this.$continueShoppingButton= () => $('//a[@class="button"]');
        
    }

    async continueShoppingButtonClick()
    {
      await this.$continueShoppingButton().click(); 
    }
    

}  



export default new CartPage();
