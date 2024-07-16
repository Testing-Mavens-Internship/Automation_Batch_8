import CommonPage from "./lt_commonPage.js";

export class ProductPage extends CommonPage{
    constructor(){
        super();
        this.$filterHeader=()=>$(`//div[@class="card-header"]`);
        this.$minPrice=()=>$(`(//input[@name="mz_fp[min]"])[2]`);
        this.$maxPrice=()=>$(`(//input[@name="mz_fp[max]"])[2]`);
        this.$sortByHeader=()=>$(`(//span[text()="Sort By:"])[1]`);
        this.$sortByOption=()=>$(`//select[@id="input-sort-212403"]`);
        this.$lowToHigh=()=>$(`//select[@id="input-sort-212403"]/option[text()="Price (Low > High)"]`);
        this.$$priceCount=()=>$(`//span[@class="price-new"]`);
        this.$exactPrice=(index)=>$(`//span[@class="price-new"][${index}]`);
        this.$clearFilter=()=>$(`//span[@class="mz-filter-reset"]`);
        this.$defaultPrice=()=>$(`(//input[@min="98"])[2]`);
        this.$availability=()=>$(`//div[@data-target="#mz-filter-panel-0-5"]`)
        this.$inStock=()=>$(`//label[@for="mz-fss-0--1"]`);
        this.$clearAvailabilityFilter=()=>$(`(//a[@class="mz-filter-reset"])[2]`);
        this.$manufacturer=()=>$(`//div[@class="mz-filter-group manufacturer"]`);
        this.$brandApple=()=>$(`//img[@alt="Apple"]`);
        this.$aToZ=()=>$(`//select[@id="input-sort-212403"]/option[text()="Name (Z - A)"]`);
        this.$$productlist=()=>$$('(//a[@class="text-ellipsis-2"])')
        this.$product=(index)=>$(`(//a[@class="text-ellipsis-2"])[${index}]`)
        this.$addtoCart=()=>$(`//span[normalize-space()="Add to Cart"])[1]/parent::button`)
        this.$productHover=()=>$(`//div[@class="product-thumb-top"])[1]`)
        this.$notifyHeader=()=>$(`//div[@class="toast-body"]`)
        this.$cartIcon=()=>$(`//div[@id="entry_217825"]`)
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
        
                    for(let i=1;i<=await this.$$priceCount().length;i++){
                    let price= await this.$exactPrice(i).getText();
                    let removeDollar = price.replace('$', '');
                    let pricee= parseFloat(removeDollar);
                    prices.push(pricee);
                }
        
                return prices;       
    }
    async clearPriceFilter(){
        await this.$clearFilter().waitForClickable({timeout:5000,timeoutMsg:"Option still not clicked."});
        await this.$clearFilter().click();
    }
    async inStock(){
        await this.$availability().waitForClickable({timeout:5000,timeoutMsg:"Filter not clicked."});
        await this.$availability().click();
       // await this.$inStock().waitForClickable({timeout:5000,timeoutMsg:"still not clicked"});
        await this.$inStock().click();
    }
    async sortBrand(){
        await this.$manufacturer().waitForClickable({timeout:5000,timeoutMsg:"Filter not yet clicked."});
        await this.$manufacturer().click();
        await this.$brandApple().waitForClickable({timeout:5000,timeoutMsg:"Option not clicked."});
        await this.$brandApple().click();
        await this.$sortByOption().click();
        //await this.$aToZ().waitForClickable({timeout:5000,timeoutMsg:"option not clicked."});
        await this.$aToZ().click();
    }
    async validateSort(){

        let text=[];
        let tot=await this.$$productlist().length;
        let returns=0;
        for(let i=1;i<=tot;i++)
        {
            let txt=await this.$product(i).getText();
            text.push(txt);
            if(text.includes("Apple")||text.includes("iMac")||text.includes("iPhone"))
            {
                returns=0;
            }
            else
            {
                returns=1;
                return false;
            }
        }
        return true;
    
    }
    async hoverOnProduct(){
        const product = await this.$productHover();
        await product.moveTo();
       }
    
       async clickAddToCart(){
        await this.$addtoCart().click();
       }
    
       async clickCart(){
        await this.$cartIcon().click();
        }
    
    }
        

    

export default new ProductPage();