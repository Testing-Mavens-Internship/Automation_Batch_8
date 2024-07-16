import commonPage from "../lambdatest/common.js";
class Editinfo extends commonPage{
    constructor(){
        super();
        this.$editinfoheader=()=>$(`//h1[text()="My Account Information"]`);
        this.$lastnamefield=()=>$(`//input[@id="input-lastname"]`);
        this.$continuebutton=()=>$(`//input[@value="Continue"]`);
    }
    async changeLastName(){
        await this.$lastnamefield().setValue('krishna');
        await this.$continuebutton().click();
    }
 
   
}export default new Editinfo();