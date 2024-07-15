class ProductPage{
    constructor(){
        this.$productHeader=()=>$(`//h1[text()="Products"]`);
        this.$sortBy=()=>$(`//select[@id="SortBy"]`);
        this.$alphabeticallySort=()=>$(`//select[@class="facet-filters__sort select__select caption-large"]//option[@value="title-descending"]`);
        this.$$sortedProducts=()=>$$(`//div[@class="card__information"]//h3[@class="card__heading"]/a`)
    }
    async sortProducts(){
        await this.$sortBy().waitForDisplayed({timeout:1000,timeoutMsg:"sort by not clicked"})
        await this.$sortBy().click();
        await this.$alphabeticallySort().waitForDisplayed({timeout:1000,timeoutMsg:"alphabetically Z-A not clicked"})
        await this.$alphabeticallySort().click();
    }
    async filter(){
        let sortedProducts=[];
        let products= await this.$$sortedProducts();
    }
}
export default new ProductPage()