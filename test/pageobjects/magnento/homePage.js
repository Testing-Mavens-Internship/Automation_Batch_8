import CommonPage from "./commonPage.js";
class HomePage extends CommonPage{
    constructor(){
        super();
        this.$lumaHeader=()=>$('//a[@class="logo"]');
    }
}
export default new HomePage();