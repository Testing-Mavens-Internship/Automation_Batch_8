import Common from "./playgroundCommon.js";

class Table extends Common
{
    constructor()
    {
        super()
        this.$tablenavigator=()=>$('//a[@href="/components/table"]')
        this.$tablewaiter=()=>$('//th[text()="ID"]')
        this.$tableheader=()=>$('//th[text()="Name"]')
        this.$$totalitem=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"])')
        this.$$totaldesc=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]/following-sibling::td)')
    }
    
    /**
     * Naviget to table component
     */
    async gototable()
    {
        await this.$tablenavigator().click()
        await this.$tablewaiter().waitForDisplayed({timeout:5000,timeoutMsg:"Header is not displayed"})
        
    }

    /**
     * Validate table data
     */
    async validatetable()
    {
        let totalitems=await this.$$totalitem().length;
        let totaldescs=await this.$$totalitem().length;
        
    }
}
export default new Table()
