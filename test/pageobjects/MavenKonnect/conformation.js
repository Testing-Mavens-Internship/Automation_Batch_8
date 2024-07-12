import Common from "./common.js";

class Confirmation extends Common{
    constructor(){
        super();
        this.$thankyou=()=>$(`//h1[contains(text(),"THANK YOU")]`);
    }
}
export default new Confirmation();