import Common from "./playgroundCommon.js";

class Table extends Common
{
    constructor()
    {
        super()
        this.$tablenavigator=()=>$('//a[@href="/components/table"]')
        this.$tablewaiter=()=>$('//th[text()="ID"]')
        this.$tableheader=()=>$('//th[text()="Name"]')
        // this.$$totalitem=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"])')
        // this.$$totaldesc=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]/following-sibling::td)')
        
    
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
    // async validatetable()
    // {
    //     let arrayofitems=[]
    //     let arrayofdescs=[]
    //     let totalitems=await this.$$totalitem().length;
    //     let totaldescs=await this.$$totaldesc().length;
    //     for(let i=1;i<=totalitems;i++)
    //     {
    //         let item = await this.$eachitem(i).getText();
    //        arrayofitems.push(item)
    //     }
    //     // console.log("ddddddd",arrayofitems)
    //     for(let k=1;k<=totaldescs;k++)
    //     {
    //         let des=await this.$eachdesc(i).getText()
    //         arrayofdescs.push(des)
    //     }
    //     return arrayofitems;
        
    // }
}
export default new Table()
