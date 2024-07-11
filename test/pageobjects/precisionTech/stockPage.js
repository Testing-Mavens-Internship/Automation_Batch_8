import commonpage from "./commonPages.js";
class stocks extends commonpage
{
    constructor()
    {
        super()
        this.$stockheader=()=>$('//strong[text()="STOCK PROFILING AND ANALYSIS SERVICES"]');
        this.$enq=()=>$('//span[text()="CONTACT US"]');
        this.$enqhdr=()=>$('//strong[text()="CONTACT US"]');
    }
    async enqclk()
    {
        await this.$enq().click();
    }
    
}
export default new stocks();