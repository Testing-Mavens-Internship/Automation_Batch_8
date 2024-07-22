import Common from "./commonPage.js";
class RedirectChain extends Common{
    constructor(){
        super();
        this.$redirectChain = () => $(`//h3[text()="Redirect Chain"]`);
        
    }
    async clickRedirectChain(){
        await this.$redirectChain().click();
    }
}export default new RedirectChain()