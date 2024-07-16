import CommonPage from "./commonPage.js";
class SuccessOrder extends CommonPage{
    constructor(){
        super();
        this.$successHeader=()=>$('//p[text()="Your order has been successfully processed!"]');
        this.$account=()=>$('(//span[normalize-space()="My account"])[2]');
        this.$myOrder=()=>$(' //span[normalize-space()="My order"]')
    }
    async hoverAccount(){

        await this.$account().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
        const account = await this.$account();
        await account.moveTo();
    }
    async clickMyOrder(){
        await this.$myOrder().click()
    }
}
export default new SuccessOrder();