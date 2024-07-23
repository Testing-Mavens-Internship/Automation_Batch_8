import CommonPage from "./common.js";

export class HomePage extends CommonPage{
    constructor(){
        super();
            this.$homePageHeader=()=>$(`//div[text()="Swag Labs"]`);
            this.$clickFilterOption=()=>$(`//select[@class="product_sort_container"]`);
            this.$highToLow=()=>$(`//option[text()="Price (high to low)"]`);
            this.$$sortedProducts=()=>$$(`//div[@class="pricebar"]`);
            this.$addToCart=()=>$(`//button[@id="add-to-cart-sauce-labs-backpack"][text()="Add to cart"]`);
            this.$removeBtn=()=>$(`#remove-sauce-labs-backpack`);
            this.$cartIcon=()=>$(`//a[@class="shopping_cart_link"]`);
    }

    async setFilter(){
        await this.$clickFilterOption().click();
        await this.$highToLow().click();
    }

    async checkSortedProducts() {
        var products = await this.$$sortedProducts(); 
        const prices = [];
    
        for (let i = 0; i < products.length; i++) {
            const priceText = await products[i].getText();
            let priceNumber = priceText.replace('$', ''); 
            let priceInt = parseInt(priceNumber);
            prices.push(priceInt);
        }
    
        for (let i = 0; i < prices.length - 1; i++) { 
            if (prices[i] > prices[i + 1]) { 
                return true;
            }
        }
        return false;
    }

    async clickAddToProduct(){
        await this.$addToCart().click()
    }

    async clickingOnCartIcon(){
        await this.$cartIcon().click();
    }
}

export default new HomePage();