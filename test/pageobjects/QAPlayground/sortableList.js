import CommonPage from "./commonPage.js";

class SortableList extends CommonPage {

    constructor()
    {
        super()
        this.$sortListOption=()=> $('//h3[text()="Sortable List"]')
        this.$richPeopleHeader=()=> $('//h1[text()="10 Richest People"]')
        this.$index=(pos)=>$(`//li[@data-index="${pos}"]`)
        this.$$allperson=()=>$$('(//p[@class="person-name"])')
        this.$person=(name)=>$(`(//p[@class="person-name"])[${name}]`)
        this.$name=(nm)=>$(`//p[text()="${nm}"]`)
        this.$checkOrder=()=> $('//button[@id="check"]')
    }

    async selectSortListOption()
    {
        await this.$sortListOption().click()
        await this.$richPeopleHeader().waitForDisplayed({ timeout: 5000 })
    }

    async sort()
    {
        const targetOrder = [
            'Jeff Bezos',
            'Bill Gates',
            'Warren Buffett',
            'Bernard Arnault',
            'Carlos Slim Helu',
            'Amancio Ortega',
            'Larry Ellison',
            'Mark Zuckerberg',
            'Michael Bloomberg',
            'Larry Page'
        ]

        for(let i=0; i<await this.$$allperson().length; i++)
            {
                const source=await this.$name(targetOrder[i])
                const target=await this.$index(i)
                source.dragAndDrop(target, {duration:3000})
            }
            await this.$checkOrder().click()
            await browser.pause(2000)
        }
    }
    
    export default new SortableList()
