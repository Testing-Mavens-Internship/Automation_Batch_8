import Common from "./common.js";
import components from "./components.js";

let col1=['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6','Item 7','Item 8','Item 9','Item 10']
let col2=['Description of Item 1','Description of Item 2','Description of Item 3','Description of Item 4','Description of Item 5','Description of Item 6','Description of Item 7','Description of Item 8','Description of Item 9','Description of Item 10']

class Table extends Common
{
    constructor()
    {
        super()
        this.$learnmore=()=>$(`//h2[text()='Table Component']/parent::div/p/following::a[1]`)
        this.$$col1_count=()=>$$(`//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]`) //10
        this.$$col2_count=()=>$$(`//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]/following-sibling::td`) //10
        this.$col1=(index)=>$(`(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"])[${index}]`)
        this.$col2=(index)=>$(`(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]/following-sibling::td)[${index}]`)
        this.$table_header=()=>$(`//thead[@class="bg-gray-50"]`)
    }

    /**
     * To check if the values in columns item and description of the table is in order
     */
    async validateTable()
    {
        await components.$component().click()
        await this.$learnmore().waitForDisplayed({timeout:8000})
        await this.$learnmore().click()
        let x=await this.$$col1_count().length
        let y=await this.$$col2_count().length
        let a=[],b=[]
        for(let i=1;i<=x;i++)
        {
            let m = await this.$col1(i).getText()
            a.push(m)
        }
        for(let j=1;j<=y;j++)
        {
            let n = await this.$col2(j).getText()
            b.push(n)
        }
        console.log(a,"---<><><><><><>-----A")
        console.log(b,"-----<><><><><><><>-----B")
        if(JSON.stringify(a)==col1 && JSON.stringify(b)==col2)
        {
            return true
        }
        else
        {
            return false
        }
    }
}
export default new Table()