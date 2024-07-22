import CommonPage from "./commonPage.js";
class ComparePage extends CommonPage{
    constructor(){
        super();
        this.$compareHeader=()=>$('//span[text()="Compare Products"]');
        this.$$totalProductName=()=>$$('//strong[@class="product-item-name"]');
        this.$productNames=(index)=>$(`//strong[@class="product-item-name"][${index}]`);
        this.$$totalSku=()=>$$(`//span[normalize-space()="SKU"]/ancestor::tr//div[@class="attribute value"]`);
        this.$skuValues=(index)=>$(`(//span[normalize-space()="SKU"]/ancestor::tr//div[@class="attribute value"])[${index}]`)
        this.$cartCount=()=>$(`//span[@class="counter-number"]`)
    }
    /**
     * get the names of product in the comparison list
     */
    async productsCompare(){
        let NameCount=await this.$$totalProductName().length
        let itemNames=[]
        for(let i=1;i<=NameCount;i++){
            let itemName=await this.$productNames(i).getText()
            itemNames.push(itemName)

        }
        return itemNames
    }
    /**
     * Comparing sku of products
     */
    async compareSku(){
        // let skuCount=await this.$$totalSku().length
        // let skuValues=[]
        // for(let i=1;i<=skuCount;i++){
        //     let skuValue=await this.$skuValues(i).getText()
        //     skuValues.push(skuValue)
        // }
        // return skuValues
    }
    async cartNum(){
        let cartCount=parseInt(await this.$cartCount().getText())
        return cartCount
    }
    }
    export default new ComparePage();
