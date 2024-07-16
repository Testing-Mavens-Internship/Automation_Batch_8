import CommonPage from "./commonPage.js";
class Desktops extends CommonPage{
    constructor(){
        super();
        this.$desktopHeader=()=>$('//li[@class="breadcrumb-item active"]');
        this.$minPrice=()=>$('(//input[@name="mz_fp[min]"])[2]');
        this.$mazPrice=()=>$('(//input[@name="mz_fp[max]"])[2]');
        this.$reset=()=>$('(//div[contains(text()," Price")]/a/i)[2]')
        this.$sortMinMaz=()=>$('(//option[text()="Price (Low > High)"])[1]');
        this.$inStock=()=>$('(//label[text()="In stock"])[2]')
        this.$resetAvaliability=()=>$('(//div[normalize-space()="Availability"]//a[@data-mz-reset="check"])[2]');
        this.$$price=()=>$$('//span[@class="price-new"]'); 
        this.$apple=()=>$(`//img[@alt="Apple"]`);
        this.$resetApple=()=>$('(//div[normalize-space()="Manufacturer"]//a[@data-mz-reset="check"])[2]');
        this.$appleSort=()=>$('//option[text()="Name (A - Z)"][1]');
        this.$firstApple=()=>$('(//img[@title="Apple Cinema 30&quot;"])[1]');
        this.$hoverMenu=()=>$('(//div[@class="product-action"])[1]');
       // (//img[@class="lazy-load img-thumbnail"])[1]
       this.$addtoCart=()=>$('(//button[@title="Add to Cart"])[1]')
       this.$slide=()=>$('(//div[@class="ui-slider-range ui-corner-all ui-widget-header"])[2]')
       this.$notification=()=>$('//div[@id="notification-box-top"]')
       this.$viewCart=()=>$('//a[normalize-space()="View Cart"]')
       this.$$priceCount=()=>$('//span[@class="price-new"]');
       this.$exactPrice=(index)=>$(`//span[@class="price-new"][${index}]`)
       this.$sortByOption=()=>$('//select[@id="input-sort-212403"]');
       this.$drag=()=>$('//span[@style="left: 0%;"]')
       this.$$productHead=()=>$$('//h4[@class="title"]')
       this.$product=(index)=>$(`//h4[@class="title"][${index}]`)
    }
    /**
     * Set minimum and mazimum price
     * @param {number} min 
     * @param {number} maz 
     */
    async setPrice(min,maz){
        await this.$minPrice().setValue(min);
        await this.$mazPrice().setValue(maz);
    }
        /**
         * sort the products based price low to high
         * @returns prices
         */
    async sortPrice(){
        await this.$sortByOption().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
        await this.$sortByOption().click();
        await this.$sortMinMaz().click();

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
  
    /**
     * To reset the price
     * @param {number} price 
     */ 
    async clickReset(minPrice,mazPrice){
        await this.$minPrice().setValue(minPrice);
        await this.$mazPrice().setValue(mazPrice);
    }
    /**
     * Select the in-stock products
     */
    async clickAvaliability(){
        await this.$inStock().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
        await this.$inStock().click();
    }
    /**
     * click on apple category
     */
    async clickApple(){
        await this.$apple().waitForDisplayed({timeout: 30000, timeoutMsg: 'Header is not visible'})
        await this.$apple().click();
    }
    
    async appleSort(){
        await this.$appleSort().waitForDisplayed({timeout: 30000, timeoutMsg: 'Header is not visible'})
        await this.$appleSort().click()
        // let nameArr = [];
        // let Elements = await this.$$productHead().length;
        //     for(let i=1;i<=Elements;i++){
        //     let name= await this.$product(i).getText();
           
        //     nameArr.push(name)
        // }

        // return nameArr;

    }
    

    async checkAppleProducts(){
        const productElements = await this.$$productHead();
        const appleProducts = [];
   
        for (let productElement of productElements) {
            const productText = await productElement.getText();
            appleProducts.push(productText);
        }
   
        return appleProducts.every(product =>
           product.includes('MacBook') || product.includes('Apple') || product.includes('iMac') || product.includes('iPhone')
        );
    }
    async moveHover(){
        await this.$firstApple().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
        const product = await this.$firstApple();
        await product.moveTo();

    }
    async addToCart(){
        await this.$addtoCart().click();
    }
    async clickViewCart(){
        await this.$viewCart().click()
    }
}
export default new Desktops();