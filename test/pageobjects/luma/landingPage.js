import CommonPage from "./commonPage.js";

export class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$menIcon=()=>$(`//a[@id="ui-id-5"]`);
        this.$topsOption=()=>$(`//a[@id="ui-id-17"]`);
        this.$jacketsOption=()=>$(`//a[@id="ui-id-19"]`);
    }
    /**
     * Hovering over the 'Men' icon to view the dropdown.
     */
    async hoverMenIcon(){
        await this.$menIcon().moveTo();
        await this.$topsOption().waitForDisplayed({timeout:5000,timeoutMsg:"Option not yet displayed."})
    }
    /**
     * Selecting 'Jackets' from the dropdown after hovering 'Tops' option.
     */
    async selectJackets(){
        await this.$topsOption().moveTo();
        await this.$jacketsOption().waitForClickable({timeout:5000,timeoutMsg:"Option still not clicked."});
        await this.$jacketsOption().click();
    }
}
export default new LandingPage();