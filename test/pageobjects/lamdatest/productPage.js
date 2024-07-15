import Common from '../lamdatest/common.js';

export class Products extends Common {
    constructor(){
        super();
            this.$filterOption=()=>$(`//h3[text()="Filter"]`);
            this.$minimumPrice=()=>$(`(//input[@name="mz_fp[min]"])[2]`);
            this.$maximumPrice=()=>$(`(//input[@name="mz_fp[max]"])[2]`);
            this.$sortBy=()=>$(`//select[@id="input-sort-212403"]`);
            this.$lowToHigh=()=>$(`(//option[text()="Price (Low > High)"])[1]`);
            this.$$sortedProducts=()=>$$(`//div[@class="price"]/span`);
            this.$clearPrice=()=>$(`(//div[contains(text()," Price")]/a/i)[2]`);
            this.$$priceClearedProducts=()=>$$(`//div[@class="price"]`);
            this.$clickAvailiabity=()=>$(`(//div[@class="custom-control custom-checkbox"]/label[text()="In stock"])[2]`);
            this.$appleProducts=()=>$(`(//label[normalize-space()="Apple"])[2]`);
            this.$sortName=()=>$(`//select[@id="input-sort-212403"]`);
            this.$nameAtoZ=()=>$(`(//option[text()="Name (A - Z)"])[1]`);
            this.$$sortedAppleProducts=()=>$$(`//h4[@class="title"]`);
          
            this.$hoverProduct=()=>$(`((//img[@class="lazy-load"])[1]`);
            this.$hoverMenu=()=>$(`(//div[@class="product-action"])[1]`);
            this.$addToCart=()=>$(`(//button[@title="Add to Cart"])[1]`);
            this.$selectSize=()=>$(`//div[@class="modal-content"]//select[@id="input-option231-212958"]`);
            this.$selectMedium=()=>$(`//option[@value="35"]`);
            this.$clickAddtoCart=()=>$(`//button[text()="Add to Cart"]`);
            this.$popup=()=>$(`//div[@class="d-flex mb-3 align-items-start"]/p[text()="Success: You have added "]`);
            this.$productName=()=>$(`(//a[text()='Apple Cinema 30"'])[1]`);
            
            this.$clickAddToCart=()=>$(`(//div[@class="cart-icon"])[1]`);
            this.$cartProductName=()=>$(`//a[text()="Apple Cinema 30..."]`);
            this.$checkOut=()=>$(`//div[@id="entry_217851"]//a[normalize-space()="Checkout"]`);
            // this.$validateAddress=()=>$(`(//div[@class="card-body"])[1]`);
    }

    /**
     * 
     * @param {number} min 
     * @param {number} max 
     */
    async filterPrice(min,max){
            await this.$minimumPrice().setValue(`${min}`);
            await this.$maximumPrice().setValue(`${max}`);

    }

/**
 * click on sort by icon
 */
    async clickSortBy(){
            await this.$sortBy().waitForClickable({timeout: 3000});
            await this.$sortBy().click();
            await this.$lowToHigh().waitForDisplayed({timeout: 3000})
            await this.$lowToHigh().click();
    }

/**
 * 
 * @returns boolean
 */
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
                return false;
            }
        }
    
        return true;
    }

    /**
     * 
     */
    async clickClearPrice(){
            await this.$clearPrice().waitForClickable({timeout: 6000});
            await this.$clearPrice().click();

    }
    
    /**
     * 
     * @param {number} prices 
     * @returns 
     */
    async checkPricesAfterClear(prices) {
        const afterFilterproducts = await this.$$priceClearedProducts(); 
        const newPrices = [];
    
        for (let i = 0; i < this.$$sortedProducts().length; i++) {
            const priceTexts = await afterFilterproducts[i].getText();
            let priceNumbers = priceTexts.replace('$', ''); 
            let priceIntegers = parseInt(priceNumbers);
            newPrices.push(priceIntegers);
        }
        
        const pricesChanged = newPrices.some((price, index) => price !== prices[index]);
        
        return pricesChanged;
    }

    async clickInstock(){
            await this.$clickAvailiabity().waitForClickable({timeout: 5000});
            await this.$clickAvailiabity().click();
    }

    
    async clickAppleProducts() {
            await this.$appleProducts().waitForClickable({timeout: 5000});
            await this.$appleProducts().click();
            await this.$sortName().scrollIntoView();
            await this.$sortName().waitForClickable({timeout: 5000});
            await this.$sortName().click();
            await this.$nameAtoZ().waitForDisplayed({timeout: 5000});
            await this.$nameAtoZ().click();
            await browser.pause(6000);
    }
    
    async checkAppleProducts(){
        const productElements = await this.$$sortedAppleProducts(); 
        const appleProducts = [];
    
        for (let productElement of productElements) {
            const productText = await productElement.getText();
            appleProducts.push(productText);
        }
    
        return appleProducts.every(product =>
           product.includes('MacBook') || product.includes('Apple') || product.includes('iMac') || product.includes('iPhone')
        );
    }

    async firstProduct(){
            await this.$hoverProduct().moveTo();
    }

    async clickAddToCart() {
            await this.$addToCart().waitForClickable({timeout: 3000});
            await this.$addToCart().click();
            await this.$selectSize().click();
            await this.$selectMedium().click();
            await this.$clickAddtoCart().click();
    }
    
    async clickCart() {
            await this.$clickAddToCart().scrollIntoView();
            await this.$clickAddToCart().click();
    }
    
    async validateCartProduct() {
        const name = await this.$productName().getText();
        const cartProduct = await this.$cartProductName().getText();
        return name === cartProduct;
    }

    async checkoutButton(){
            await this.$checkOut().click();
    }
    
          
}

export default new Products();