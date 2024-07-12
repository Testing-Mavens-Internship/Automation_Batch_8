import CommonPagePrecision from "./pr_Common.js";

class StockProfilingPage extends CommonPagePrecision {

        

    constructor()
    {
        super();
        this.$stockProfilingHeader = () =>$('//h2/strong[text()="STOCK PROFILING AND ANALYSIS SERVICES"]');
        this.$makeAnEnquireyButton = () =>$('//a[@class="button button--primary"]');
    }

    async makeAnEnquireyButtonclick() 
    {
        await this.$makeAnEnquireyButton().click(); 
    }
  
    }


export default new StockProfilingPage();
