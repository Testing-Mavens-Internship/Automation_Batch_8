import Common from "./common.js";

class InventoryPage extends Common{
    constructor(){
        super();
        this.$header=()=>$(`//div[text()="Swag Labs"]`);
        this.$sortOption=()=>$(`//select[@data-test="product-sort-container"]`);
        this.$priceHightToLow=()=>$(`//option[text()="Price (high to low)"]`);
        this.$addToCart=()=>$(`(//button[text()="Add to cart"])[1]`);
        this.$$priceCount=()=>$$(`//div[@data-test="inventory-item-price"]`);
        this.$singleItemPrice=()=>$(`(//div[@data-test="inventory-item-price"])[1]`)
        this.$removeButton=()=>$(`//div[@class="inventory_item_description"]//child::button[text()="Remove"]`);
        this.$cartIcon=()=>$(`//a[@data-test="shopping-cart-link"]`)
    }
    async  sortProductsByPriceHighToLow(){
        await this.$sortOption().click();
        await this.$priceHightToLow().waitForDisplayed({timeout:5000,timeoutMsg:"Price high to low is not displayed"})
        await this.$priceHightToLow().click();

        let prices=[]
        let priceTotalCount=await this.$$priceCount();
        for(let i=1;i<=priceTotalCount;i++){
            let removePriceDollar=await this.$singleItemPrice(i).getText().replace("$","");
            let price=parseFloat(removePriceDollar);
            prices.push(price);
        }
        return prices
    }
    async validateRemoveButtonColor(){
        await this.$addToCart().click();
        await this.$removeButton().waitForDisplayed({timeout:5000,timeoutMsg:"Remove button is still not displayed"});
    }
    async clickCartIcon(){
        await this.$cartIcon().waitForDisplayed({timeout:5000,timeoutMsg:"Cart icon is still not displayed"})
        await this.$cartIcon().click();
    }
}
export default new InventoryPage()