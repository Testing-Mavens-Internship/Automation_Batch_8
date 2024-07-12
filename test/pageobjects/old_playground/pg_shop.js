// import { $ } from '@wdio/globals'
import Common from "./pg_common.js";

class Shop extends Common{
    constructor(){
        super()
        this.$category=()=>$(`//span[text()='Shop by Color']/parent::div/*[name()='svg']`)
        this.$color=()=>$(`#Blue`)
        this.$pdt=()=>$(`//img[@alt='https://testingmavens-web.s3.eu-north-1.amazonaws.com/MavenStore/725979ee-6f29-4a2b-8ea7-31c0cdb08dcb-laptop5.webp']`)
    }
    selectShopbycolor()
    {

    }
    selectBlue()
    {

    }
    selectProduct()
    {
        
    }
}
export default new Shop()