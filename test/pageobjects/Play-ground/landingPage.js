class LandingPage{
    constructor(){
        this.$dropDownIcon=()=>$(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`)
        this.$login = () => $(`//li[text()="Login"]`);
    }
    async clickDropDown(){
        await this.$dropDownIcon().waitForClickable({timeout:5000,timeoutMsg:"'Dropdown is not clicked"})
        await this.$dropDownIcon().click();
    }
    async loginSelction(){
        await this.$login().waitForClickable({timeout:5000,timeoutMsg:"Login option is not clicked"})
        await this.$login().click();
    }
}
export default new LandingPage()