import commonPage from "./common.js";

class productPage extends commonPage {
    constructor() {
        super();
        this.$header=()=> $('//h3[normalize-space()="Filter"]')
        this.$minPrice=()=>$('//div[@class="content"]//input[@name="mz_fp[min]"]')
        this.$maxPrice=()=>$('//div[@class="content"]//input[@name="mz_fp[max]"]')
        this.$sort=()=>$('//select[@id="input-sort-212403"]')
        this.$lowToHigh=()=>$('//div[@id="entry_212403"]//option[normalize-space()="Price (Low > High)"]')
        this.$filterClear=()=>$('//a[@class="mz-filter-reset"]')
        this.$$products=()=>this.$$products('//a[@class="text-ellipsis-2"]')

    }

    async filterByPrice(min, max) {
        await this.$minPrice().setValue(min);
        await this.$maxPrice().setValue(max);
    }

    async sortLowToHigh() {
        await this.$sort().click();
        await this.$lowToHigh().click();
    }
    async clearFilter() {
        await this.$filterClear().click();
    }
    
}

export default new productPage()