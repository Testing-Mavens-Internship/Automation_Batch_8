import Common from "../mavenKonnect/common.js";

export class Thankyou extends Common{
    constructor(){
        super();
        this.$thankYouHeader=()=>$(`//h1[text()="THANK YOU!"]`);
    }

}
export default new Thankyou();