import common from "./commonPage.js";
class Editinfo extends common{
    constructor(){
        super();
        this.$editinfoheader=()=>$(`//h1[text()="My Account Information"]`);
        this.$lastnamefield=()=>$(`//input[@id="input-lastname"]`);
        this.$continuebutton=()=>$(`//input[@value="Continue"]`);
    }
    async EditInfo(){
        await this.$lastnamefield().setValue('krish');
        await this.$continuebutton().click();
    }

    
}export default new Editinfo();