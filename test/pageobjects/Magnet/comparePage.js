import commonPage from "./commonPage.js";

class comparePage extends commonPage{
    constructor(){
        super();
        this.$compareHeader=()=>$(`//span[text()="Compare Products"]`)
        this.$$itemNamesCount=()=>$$(`//strong[@class="product-item-name"]`)
        this.$$skuValuesCount=()=>$$(`//span[normalize-space()="SKU"]/ancestor::tr//div[@class="attribute value"]`)
        this.$$descriptionsCount=()=>$$(`//span[normalize-space()="Description"]/ancestor::tr//div[@class="attribute value"]`)
        this.$itemNames=(index)=>$(`//strong[@class="product-item-name"][${index}]`)
        this.$skuValues=(index)=>$(`(//span[normalize-space()="SKU"]/ancestor::tr//div[@class="attribute value"])[${index}]`)
        this.$descriptions=(index)=>$(`(//span[normalize-space()="Description"]/ancestor::tr//div[@class="attribute value"])[${index}]`)
        this.$checkoutCart=()=>$(`//button[@id="top-cart-btn-checkout"]`)
        this.$cartIcon=()=>$(`//a[@data-bind="scope: 'minicart_content'"]`)
    }
    async compareNames(){
        let itemNameCount=await this.$$itemNamesCount().length
        let itemNames=[]
        for(let i=1;i<=itemNameCount;i++){
            let itemName=await this.$itemNames(i).getText()
            itemNames.push(itemName)

        }
        return itemNames
    }

    async compareSku(){
        let skuCount=await this.$$skuValuesCount().length
        let skuValues=[]
        for(let i=1;i<=skuCount;i++){
            let skuValue=await this.$skuValues(i).getText()
            skuValues.push(skuValue)
        }
        return skuValues
    }

    
    async compareDescription(){
        let descriptionCount=await this.$$descriptionsCount().length
        let descriptions=[]
        for(let i=1;i<=descriptionCount;i++){
        let description=await this.$descriptions(i).getText()
        descriptions.push(description)
        }
        return descriptions
    }  
}
   





export default new comparePage()