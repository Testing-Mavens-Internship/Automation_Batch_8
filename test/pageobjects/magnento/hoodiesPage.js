import CommonPage from "./commonPage.js";
import productPage from "./productPage.js";
class Hoodies extends CommonPage{
    constructor(){
        super();
        this.$hoodiesHeader=()=>$('(//span[text()="Hoodies & Sweatshirts"])[3]');
        this.$lastHoodie=()=>$('(//li[@class="item product product-item"])[last()]');
        this.$firstHoodie=()=>$('(//li[@class="item product product-item"])[1]');
        
    }
    /**
     * choose the last product from product page
     */
    async chooseLastHoodie(){
        await this.$lastHoodie().click();
        await productPage.$sku().waitForDisplayed({timeout:5000, timeoutMsg: "Header hoodies is not visible"});

    }
    /**
     * choose the first product from product page
     */
    async chooseFirstHoodie(){
        await this.$firstHoodie().click();
        await productPage.$sku().waitForDisplayed({timeout:5000, timeoutMsg: "Header hoodies is not visible"});

    }


}
export default new Hoodies();