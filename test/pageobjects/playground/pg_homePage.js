import CommonPage from "./pg_commonPage.js";
class Homepage extends CommonPage{
    constructor(){
        super();
        this.$shop=()=>$(`//a[text()="Shop"]`)
    }
    clickShopicon(){

    }

}
export default new Homepage();