import CommonPage from "./pg_commonPage.js";
class Products extends CommonPage{
    constructor(){
        super();
        this.$shopByColor=()=>$(`//span[text()="Shop by Color"]/ancestor::div[@class="border-r border-gray-200"]`);
        this.$pickColor=()=>$(`//span[text()="Shop by Color"]/ancestor::div//label[text()="Blue"]/preceding::input[@id="Blue"]`);
        this.$singleProduct=()=>$(`//h2[text()="Asus ZenBook 14"]/ancestor::div[@class="w-full"]`);
    }
    filterBycolor(){

    }
    selectColor(){

    }
    selectProduct(){
        
    }
}
export default new Products();