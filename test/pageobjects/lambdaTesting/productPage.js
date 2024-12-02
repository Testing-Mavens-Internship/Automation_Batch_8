import commonPage from "./commonPage.js";

class productPage extends commonPage {
    constructor() {
        super();
        this.$header=()=> $(`//h3[normalize-space()="Filter"]`)
        this.$minPrice=()=>$(`//div[@class="content"]//input[@name="mz_fp[min]"]`)
        this.$maxPrice=()=>$(`//div[@class="content"]//input[@name="mz_fp[max]"]`)
        this.$sort=()=>$(`//select[@id="input-sort-212403"]`)
        this.$lowToHigh=()=>$(`//div[@id="entry_212403"]//option[normalize-space()="Price (Low > High)"]`)
        this.$filterClear=()=>$(`//span[@class="mz-filter-reset"]`)
        this.$$priceCount=()=>$(`//span[@class="price-new"]`);
        this.$exactPrice=(index)=>$(`//span[@class="price-new"][${index}]`)
        this.$sortByOption=()=>$(`//select[@id="input-sort-212403"]`);
        this.$instockButton=()=>$(`//input[@id="mz-fss-0--1"]/parent::div[@class="custom-control custom-checkbox"]`)
        this.$apple=()=>$(`//div[@id="product-category"]//label[normalize-space()="Apple"]`)
        this.$atoZ=()=>$(`//div[@id="entry_212403"]//option[normalize-space()="Name (A - Z)"]`)
        this.$$appleItems=()=>$$(`//a[@class="text-ellipsis-2"]`)
        this.$addtoCart=()=>$(`(//span[normalize-space()="Add to Cart"])[1]/parent::button`)
        this.$productHover=()=>$(`(//div[@class="product-thumb-top"])[1]`)
        this.$notifyHeader=()=>$(`//div[@class="toast-body"]`)
        this.$closenotify=()=>$(`//span[text()="×"]/parent::button`)
        this.$cartIcon=()=>$(`//div[@id="entry_217825"]//a[@href="#cart-total-drawer"]`)

    }

    async filterByPrice(min, max) {
        await this.$minPrice().setValue(min);
        await this.$maxPrice().setValue(max);
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
    async clearFilter() {
        await this.$filterClear().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
        await this.$filterClear().click();
    }

    async inStock() {
        await this.$instockButton().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
        await this.$instockButton().click();
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

    async validateAppleItems() {
        let items= await this.$$appleItems().length;
        let count=0;
        for(let i=1;i<=items;i++){
            let item=await this.$appleItems(i).getText();
            if(item.startsWith("Apple")||item.startsWith("iPhone")||item.startsWith("iPad")||item.startsWith("MacBook")){
                count=0;
            }
            else{
                count=1;
                return false;
            }
        }
        return true;
    }
    
   async hoverOnProduct(){
    await this.$productHover().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
    const product = await this.$productHover();
    await product.moveTo();
   }

   async clickAddToCart(){
    await this.$addtoCart().waitForClickable({timeout:5000,timeoutMsg:"Option not present"});
    await this.$addtoCart().click();
   }

   async clickCart(){
    await this.$cartIcon().waitForClickable({timeout:30000,timeoutMsg:"Option not present"});
    await this.$cartIcon().click();
    await this.$notifyHeader()
    .waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Header is not visible",
      });
    expect(await productPage.$notifyHeader().isDisplayed())
      .withContext("header should be visible")
      .toBeTrue();

    await this.$closenotify().click();
    }

}

export default new productPage()
