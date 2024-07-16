import account from "./account.js";
import Common from "./common.js";

class Homepage extends Common{
    constructor(){
        super();
        this.$homepageHeadder=()=>$(`//a[@title="Poco Electro"]`);
        this.$myAccount=()=>$(`//li[contains(@class,"dropdown")]/a/div/span[contains(text()," My account")]`);
        this.$registerbtn=()=>$(`//span[contains(text()," Register")]`);
        this.$topCategories=()=>$(`(//figure[@class="figure img-top"])[1]`);
        this.$firstItem=()=>$(`(//div[@class="figure-caption"]/h4)[1]`);
    }
    async clickRegister(){
        let myAccount=await this.$myAccount();
        myAccount.moveTo();
        await this.$registerbtn().click();
    }
    /**
     * method to scroll to a location.
     */
    async scrollIntoView(){
        await account.$trending().scrollIntoView();
    }
    async selectItem(){
        await this.$topCategories().click();
    }
}
export default new Homepage();