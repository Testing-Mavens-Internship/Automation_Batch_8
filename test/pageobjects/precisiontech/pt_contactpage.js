import Common from "./pt_commonpage.js";

class Contact extends Common
{
    constructor()
    {
        super()
        this.$contactheader=()=>$(`//strong[text()='CONTACT US']`)
        this.$cart=()=>$(`//a[@id='cart-icon-bubble']/*[name()='svg']`)
    }
    cartClick()
    {
        this.$cart().waitForDisplayed({timeout:5000})
        this.$cart().click()
    }
}
export default new Contact()