import CommonPagePrecision from "./pr_Common.js";

class LandingPage extends CommonPagePrecision {

        

    constructor()
    {
        super();

        this.$logolocator = () =>$('//div[@class="header__heading-logo-wrapper"]/img[@class="header__heading-logo motion-reduce"]');
        this.$$dropOptions = () =>$$('//ul[@id="HeaderMenu-MenuList-1"]/li/a');
        this.$dropDownClick =() =>$('//summary[@id="HeaderMenu-solutions"]');
        // this.$stockProfilingHeader = () =>$('//h2/strong[text()="STOCK PROFILING AND ANALYSIS SERVICES"]');
        this.$stockProfilingClick = () =>$('//a[@id="HeaderMenu-solutions-stock-profiling-and-analysis-services"]');
    }

    async dropDownClick()
    {
      await this.$dropDownClick().click(); 
    }

    async stockProfileClick()
    {
     await this.$stockProfilingClick().click();
    }

    async fetchSolutionDropdownItems()
    {
        let array=[];

        let items=await this.$$dropOptions();

        for(let item of items)

        {
            await item.waitForDisplayed({ timeout: 2000, timeoutMsg:"timeout" });
            array.push((await item.getText()).trim());
        }
        return array;

        
    }

   

    




}

export default new LandingPage();
