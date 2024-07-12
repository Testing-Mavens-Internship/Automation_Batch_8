import Common from '../precision/common.js'
export class Stockprofile extends Common{
    constructor(){
        super();
        this.$stockProfile=()=> $('//strong[contains(text(),"STOCK PROFILING")]');
        this.$makeEnquiry=()=> $('//a[normalize-space()="MAKE AN ENQUIRY"]');
    }

    async makeAnEnquiry(){
       await this.$makeEnquiry().click(); 
    }

    

}
export default new Stockprofile();