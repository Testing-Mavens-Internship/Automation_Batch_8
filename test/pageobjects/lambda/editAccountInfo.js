import Common from "./common.js";

class EditAccountInformation extends Common {
    constructor(){
        super();
        this.$infoHeader=()=>$(`//h1[text()="My Account Information"]`);
        this.$lastName=()=>$(`//input[@id="input-lastname"]`);
        this.$continueButton=()=>$(`//input[@value="Continue"]`);
    }

    async editInfo(lname){
        await this.$lastName().setValue(lname);
        await this.$continueButton().click();
    }
}
export default new EditAccountInformation()