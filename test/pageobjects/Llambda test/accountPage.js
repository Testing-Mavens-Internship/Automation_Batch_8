import common from "./commonPage.js";
class Account extends common{
    constructor(){
        super();
        this.$editaccountinfo=()=>$(`//a[text()=" Edit your account information"]/i`);
        this.$editinfoheader=()=>$(`//h1[text()="My Account Information"]`);
        this.$successmessagepopup=()=>$(`//div[@class="alert alert-success alert-dismissible"]`);
        this.$homemenu=()=>$(`//span[@class="title" and contains(text(), "Home")]`);
    }
    async ClickonEditInfo(){
        await this.$editaccountinfo().click();
    }
    async ClickonHome(){
        await this.$homemenu().click();
    }

    
}export default new Account();