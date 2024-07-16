import Common from "./common.js";

class Product extends Common{
    constructor(){
        super();
        this.$itemHeader=()=>$(`//h1[@class="h4"]`);
        this.$minPrice=()=>$(`(//input[@name="mz_fp[min]"])[2]`);
        this.$maxPrice=()=>$(`(//input[@name="mz_fp[max]"])[2]`);
        this.$sortByOption=()=>$(`//select[@id="input-sort-212403"]`);
        this.$sortByHeader=()=>$(`(//span[text()="Sort By:"])[1]`);
        this.$clearFilter=()=>$(`(//div[contains(text()," Price")]/a/i)[2]`);
        this.$$priceCount=()=>$(`//span[@class="price-new"]`);
        this.$exactPrice=(index)=>$(`//span[@class="price-new"][${index}]`);
        this.$lowToHigh=()=>$(`//select[@id="input-sort-212403"]/option[text()="Price (Low > High)"]`);
        this.$inStock=()=>$(`//label[@for="mz-fss-0--1"and text()="In stock"]`);
        this.$apple=()=>$(`//div[@id="product-category"]//label[normalize-space()="Apple"]`)
        this.$atoZ=()=>$(`//div[@id="entry_212403"]//option[normalize-space()="Name(A-Z)"]`)
    }
    async filterPrice(){
        await this.$minPrice().waitForDisplayed({timeout:5000,timeoutMsg:"option not present."});
        await this.$minPrice().setValue("1008");
        await this.$maxPrice().waitForDisplayed({timeout:5000,timeoutMsg:"option not present."});
        await this.$maxPrice().setValue("20000");
    }
    async sortPrice(){
        await this.$sortByOption().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
        await this.$sortByOption().click();
       // await this.$lowToHigh().waitForClickable({timeout:1000,timeoutMsg:" Sort Option not present"});
        await this.$lowToHigh().click();

        let prices = [];
        let priceElements = await this.$$priceCount().length;
            for(let i=1;i<=priceElements;i++){
            let price= await this.$exactPrice(i).getText();
            let removeDollar = price.replace('$', '');
            let pricee= parseFloat(removeDollar);
            prices.push(pricee);
        }
        
            return prices;
    }
    async clearFilter(){
        await this.$clearFilter().click();
    }
    async inStock(){
        await this.$inStock().click();
    }
    async clickApple() {
        await this.$apple().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
        await this.$apple().click();
    }
    async sortAtoZ() {
        await this.$sort().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
        await this.$sort().click();
        await this.$atoZ().click();
    }
}
export default new Product();