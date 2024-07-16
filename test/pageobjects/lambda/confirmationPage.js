import CommonPage from "./commonPage.js";
class Confirmation extends CommonPage{
    constructor(){
        super()
        this.$confirm=()=>$('//h1[@class="page-title my-3"]');
        this.$continue=()=>$('//a[text()="Continue"]')
    }
    /**
     * To confirm the successful registration and continue
     */
    async clickContinue(){
        (await this.$continue()).click();
    }
} 
export default new Confirmation();