import commonpage from "./commonPages.js";
class carts extends commonpage
{
    constructor()
    {
        super()
        this.$carttxt=()=>$('//h1[text()="Your cart is empty"]');
        this.$continuebtn=()=>$('//a[@class="button"]');
    }
    async continueclk()
    {
        // await this.$continuebtn().waitForDisplayed({timeout:10000})
        await this.$continuebtn().click();
    }
}
export default new carts();