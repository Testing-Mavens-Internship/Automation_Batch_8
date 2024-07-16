import CommonPage from "./commonPage.js";
class OderHistory extends CommonPage{
    constructor(){
        super();
        this.$eye=()=>$('//i[@class="fa fa-eye"]')
    }
    async clickEye(){
        (await this.$eye()).click();
    }
}
export default new OderHistory();