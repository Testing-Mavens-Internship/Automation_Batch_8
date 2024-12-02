import basePage from "./common.js";
class stockPage extends basePage {
    constructor() {
        super()
        this.$header=()=>$('//strong[normalize-space()="STOCK PROFILING AND ANALYSIS SERVICES"]')
        this.$enquiry=()=>$('//a[normalize-space()="MAKE AN ENQUIRY"]')
    }

    async clickEnquiry(){
        await this.$enquiry().click()
    }
}

export default new stockPage()