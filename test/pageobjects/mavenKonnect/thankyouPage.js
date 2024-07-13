
import CommonPage from "./commonPage.js";

export class ThankyouPage extends CommonPage{
    constructor(){
        super();
        this.$thankYouHeader=()=>$(`//h1[text()="THANK YOU!"]`);
    }

}
export default new ThankyouPage();
