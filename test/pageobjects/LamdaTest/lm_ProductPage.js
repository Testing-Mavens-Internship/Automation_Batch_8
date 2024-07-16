import CommonPage from "./lm_CommonPage.js";

class ProductPage extends CommonPage{

        constructor(){
            super();
            this.$desktopHeader=()=>$('//li[@class="breadcrumb-item active"]');
            this.$minPrice=()=>$('(//input[@name="mz_fp[min]"])[2]');
            this.$mazPrice=()=>$('(//input[@name="mz_fp[max]"])[2]');
            this.$reset=()=>$('//a[@class="mz-filter-reset"]/i[@class="fas fa-times"]')
            this.$lowToHigh=()=>$('(//option[text()="Price (Low > High)"])[1]');
            this.$inStock=()=>$('(//label[text()="In stock"])[2]')
            this.$resetAvaliability=()=>$('(//div[normalize-space()="Availability"]//a[@data-mz-reset="check"])[2]');
            this.$$price=()=>$$('//span[@class="price-new"]');
            this.$apple=()=>$('//label[@for="mz-fm-0-8"]');
            this.$resetApple=()=>$('(//div[normalize-space()="Manufacturer"]//a[@data-mz-reset="check"])[2]');
            this.$appleSort=()=>$('//option[text()="Name (A - Z)"][1]');
            this.$firstApple=()=>$('(//img[@title="Apple Cinema 30&quot;"])[1]');
            this.$hoverMenu=()=>$('(//div[@class="product-action"])[1]');
            this.$addtoCart=()=>$('(//button[@title="Add to Cart"])[1]')
            this.$slide=()=>$('(//div[@class="ui-slider-range ui-corner-all ui-widget-header"])[2]')
            this.$notification=()=>$('//div[@id="notification-box-top"]')
            this.$viewCart=()=>$('//a[@class="btn btn-primary btn-block"]')
            this.$$priceCount=()=>$('//span[@class="price-new"]');
            this.$exactPrice=(index)=>$(`//span[@class="price-new"][${index}])`);
            this.$sortByOption=()=>$('//select[@id="input-sort-212403"]');
            this.$addToCartOnTop=()=>$('(//div[@class="cart-icon"])[1]')

        }
    
        /**
         * 
         * @param {number} min 
         * @param {number} maz 
         */
        async setPrice(min,maz){
            await this.$minPrice().setValue(min);
            await this.$mazPrice().setValue(maz);
        }


        async sortPrice(){
            await this.$sortByOption().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
            await this.$sortByOption().click();
           // await this.$lowToHigh().waitForClickable({timeout:1000,timeoutMsg:" Sort Option not present"});
            await this.$lowToHigh().click();
     
            let prices = [];
                    let priceElements = await this.$$priceCount().length;
                        for(let i=1;i<=await this.$$priceCount().length;i++){
                        let price= await this.$exactPrice(i).getText();
                        let removeDollar = price.replace('$', '');
                        let pricee= parseFloat(removeDollar);
                        prices.push(pricee);
                    }
                    return prices;
                }
       
        async clickReset(min,max){
            await this.$minPrice().setValue(min);
            await this.$mazPrice().setValue(max);
            // await this.$reset().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
            // await this.$reset().click();
        }

        
        async checkAvaliability(){
            await this.$inStock().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
            await this.$inStock().click();
        }
        async clickApple(){
            await this.$apple().waitForDisplayed({timeout: 30000, timeoutMsg: 'Header is not visible'})
            await this.$apple().click();
        }
        async appleSort(){
            await this.$appleSort().waitForDisplayed({timeout: 30000, timeoutMsg: 'Header is not visible'})
            await this.$appleSort().click()
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
            await this.$viewCart().click();
        }

        async clickAddToCartOnNav(){
            await this.$addToCartOnTop().click();
        }

    
    
    

    




}


export default new ProductPage();