import basePage from "./common.js";

class enquiryPage extends basePage {
    constructor() {
        super()
        this.$header=()=>$('//h2[normalize-space()="CONTACT US"]')
        this.$cartButton=()=>$('//a[@class="header__icon header__icon--cart link focus-inset"]')
    }

    async clickCart() {
        await this.$cartButton().click()
    
    }
    as


}
export default new enquiryPage()