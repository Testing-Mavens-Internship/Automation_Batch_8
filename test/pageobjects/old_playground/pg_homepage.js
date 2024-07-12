// import { $ } from '@wdio/globals'
import Common from "./pg_common.js";

class Homepage extends Common{
    constructor(){
        super()
        this.$shop=()=>$(`//a[text()='Shop']`)
    }
    selectShop()
    {

    }
}
export default new Homepage()