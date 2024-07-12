import CommonPagePrecision from "./pr_Common.js";

class ProductsPage extends CommonPagePrecision {

        

    constructor()
    {
       super();
       this.$ProductsHeader= () => $('//h1[@class="collection-hero__title"][text()="Products"]');
       this.$sortByAZClick = () =>$('//select[@id="SortBy"]/option[@value="title-descending"]')
      
        
    }

    async sortByDescendingButtonClick() 
    {
        await this.$sortByAZClick().click(); 
    }



   
    

}  



export default new ProductsPage();
