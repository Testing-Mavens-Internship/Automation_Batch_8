import commonpage from "./commonPages.js";
class product extends commonpage
{
    constructor()
    {
        super()
        this.$prodheader=()=>$('//h1[text()="Products"]');
        this.$sortdropdown=()=>$('//select[@class="facet-filters__sort select__select caption-large"]');
        this.$sortclk=()=>$('//select[@class="facet-filters__sort select__select caption-large"]//option[@value="title-descending"]');
        this.$$productname=()=>$$('//h3[@class="card__heading h5"]/a');
    }
    async sortdropclk()
    {

        await this.$sortdropdown().click();
        await this.$sortclk().click();
        await this.$sortclk().waitForDisplayed({timeout:5000})
        await browser.pause(3000)

        
    }
    async takeproduct()
    {
        let proarray=[];
        for(let pdct of await this.$$productname())
        {
            // await pdct.waitForDisplayed({timeout:5000,timeoutMsg:"Fetched"});
           proarray.push(((await pdct.getText()).trim()))
            console.log(proarray)
        }

        return proarray;
    }
}
export default new product();