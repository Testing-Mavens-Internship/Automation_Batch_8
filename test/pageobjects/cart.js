import Common from "./common.js";

class cart extends Common{
    constructor(){
        super();
        this.$checkout=()=>$(`//button[text()="Proceed to Checkout"]`);
    }
    async checkout(){
        await this.$checkout().click();
    }
}
export default new cart();