import Common from "./common.js";

class Success extends Common{
    constructor(){
        super();
        this.$created=()=>$(`//h1[contains(text(),"Created")]`);
        this.$continuebtn=()=>$(`//a[contains(text(),"Continue")]`);
    }
}
export default new Success();