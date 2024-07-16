import Page from "./pg_commonpage";

export class ProductsPage extends Page{
    constructor(){
         this.$color=()=>$(`//span[text()="Shop by Color"]`)
         this.$blue=()=>$(`//input[@id="Blue"]`)
         this.$item=()=>$(`//div[@class="relative overflow-hidden 
            w-full h-96 flex items-center justify-center"]/img[@class="relative overflow-hidden w-full h-96 flex items-center justify-center"]`)
         this.$tocart=()=>$(`//button[text()="Add to Cart"]`)
         this.$buy=()=>$(`//p[text()="Buy Now"]`)
         


    }
    async selectColor(){
        await this.$color().click(`${color}`);

    }
    async clickBlue(){
        await this.$blue().click(`${click}`);
    }
    async selectProduct(){
        await this.$item().click(`${item}`);
    }
    async addProduct(){
        await this.$tocart().click(`${tocart}`);
    }
    async buynow(){
        await this.$buy().click(`${buy}`);
    }
}
export default new ProductsPage();