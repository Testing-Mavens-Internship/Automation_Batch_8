import CommonClass from "./commonPage.js";

class Homepage extends CommonClass{
    constructor(){
        super();
        this.$homepageHeader=()=>$(`//div[@class="app_logo"]`);
        this.$$priceCount=()=>$$(`//div[@class="inventory_item_price"]`)
        this.$priceList=(index)=>$(`(//div[@class="inventory_item_price"])[${index}]`)
        this.$filter=()=>$(`//select[@class="product_sort_container"]`)
        this.$highToLow=()=>(`//option[@value="hilo"]`)
        this.$addToCart=()=>$(`//button[@id="add-to-cart-sauce-labs-fleece-jacket"]`);
        this.$addToCartRedButton=()=>$(`//button[@class="btn btn_secondary btn_small btn_inventory "]`);
        this.$cartIcon=()=>$(`//a[@class="shopping_cart_link"]`);
    }
    async clickSort() {
        await this.$filter().click();
        await this.$highToLow().click();
        let priceCount = await this.$$priceCount().length;
        let prices = [];
        for (let i = 1; i <= priceCount; i++) {
            let amount = await this.$priceList(i).getText();
            let removeDollarSign = amount.replace('$', '');
            let priceValue = parseFloat(removeDollarSign);
            prices.push(priceValue);
        }
        console.log(priceCount, prices);
        return prices;
    }
    async addingToCart(){
        await this.$addToCart().click();
    }
    async clickingOnCartIcon(){
        await this.$cartIcon().click();
    }

}
export default new Homepage();