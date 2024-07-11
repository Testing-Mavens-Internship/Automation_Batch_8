import Common from "./common.js";

class ProductDetails extends Common{
    constructor(){
        super();
        this.$prodHeader=()=>$(`//strong[contains(text(),"STOCK PROFILING")]`);
        this.$makeAnEnquiry=()=>$(`//a[contains(text(),"MAKE AN ENQUIRY")]`);
        this.$prodct=()=>$(`//h1[text()="Products"]`);
        this.$sort=()=>$(`//select[@name="sort_by"]`);
        this.$filter=()=>$(`//select[@id="SortBy"]/option[@value="title-descending"]`);
       // this.$descendingSelected = () => $(`//select[@id="SortBy"]/option[@value="title-descending" and @selected="selected"]`)
        this.$$filteredProducts=()=>$$(`//h3[@class="card__heading h5"]/a`);
    }
    async Enquiry(){
        await this.$makeAnEnquiry().click();
    }
    async sorting(){
        // await this.$sort().waitForDisplayed({timeout:5000});
        await this.$sort().selectByAttribute("value","title-descending");
        await this.$sort().waitForDisplayed({timeout:5000});
        let filteredItem=[];
        await browser.pause(3000);
        for(let item of await this.$$filteredProducts()){
            await item.waitForDisplayed({timeout:4000,timeoutMsg:"Item fetching"})
            await filteredItem.push(await item.getText());
        }
        return filteredItem;
    }
}
export default new ProductDetails();