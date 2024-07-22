import Common from '../playground/common.js';

class Table extends Common
{
    constructor()
    {
        super()
        this.$tableNavigator=()=>$('//a[@href="/components/table"]')
        this.$tableWaiter=()=>$('//th[text()="ID"]')
        this.$tableHeader=()=>$('//th[text()="Name"]')
        this.$$totalItem=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"])')
        this.$$totalDesc=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]/following-sibling::td)')
    }
    
    /**
     * Naviget to table component
     */
    async goToTable()
    {
        await this.$tableNavigator().click()
        await this.$tableWaiter().waitForDisplayed({timeout:5000,timeoutMsg:"Header is not displayed"})
        
    }

    /**
     * Validate table data
     */
    async validateTable()
    {
        let totalitems=await this.$$totalItem().length;
        let totaldescs=await this.$$totalItem().length;
        
    }
}
export default new Table()
