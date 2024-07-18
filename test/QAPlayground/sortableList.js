import CommonPage from "./commonPage.js";

class SortableList extends CommonPage {

    constructor()
    {
        super()
        this.$sortListOption=()=> $('//h3[text()="Sortable List"]')
        this.$richPeopleHeader=()=> $('//h1[text()="10 Richest People"]')
        this.$checkOrder=()=> $('//button[@id="check"]')

        this.$index=(pos)=>$(`//li[@data-index="${pos}"]`)
        this.$$allperson=()=>$$('(//p[@class="person-name"])')
        this.$person=(name)=>$(`(//p[@class="person-name"])[${name}]`)
        this.$name=(nm)=>$(`//p[text()="${nm}"]`)
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
            await browser.pause(5000)
        }
    }
    
    export default new SortableList()

        // const source1 = await $('//p[text()="Jeff Bezos"]');
        // const target1 = await $('//li[@data-index="0"]');
        // await source1.dragAndDrop(target1, { duration: 2000 });

        // const source2 = await $('//p[text()="Bill Gates"]');
        // const target2 = await $('//li[@data-index="1"]');
        // await source2.dragAndDrop(target2, { duration: 2000 });

        // const source3 = await $('//p[text()="Warren Buffett"]');
        // const target3 = await $('//li[@data-index="2"]');
        // await source3.dragAndDrop(target3, { duration: 2000 });

        // const source4 = await $('//p[text()="Bernard Arnault"]');
        // const target4 = await $('//li[@data-index="3"]');
        // await source4.dragAndDrop(target4, { duration: 2000 });

        // const source5 = await $('//p[text()="Carlos Slim Helu"]');
        // const target5 = await $('//li[@data-index="4"]');
        // await source5.dragAndDrop(target5, { duration: 2000 });

        // const source6 = await $('//p[text()="Amancio Ortega"]');
        // const target6 = await $('//li[@data-index="5"]');
        // await source6.dragAndDrop(target6, { duration: 2000 });

        // const source7 = await $('//p[text()="Larry Ellison"]');
        // const target7 = await $('//li[@data-index="6"]');
        // await source7.dragAndDrop(target7, { duration: 2000 });

        // const source8 = await $('//p[text()="Mark Zuckerberg"]');
        // const target8 = await $('//li[@data-index="7"]');
        // await source8.dragAndDrop(target8, { duration: 2000 });

        // const source9 = await $('//p[text()="Michael Bloomberg"]');
        // const target9 = await $('//li[@data-index="8"]');
        // await source9.dragAndDrop(target9, { duration: 2000 });

        // const source10 = await $('//p[text()="Larry Page"]');
        // const target10 = await $('//li[@data-index="9"]');
        // await source10.dragAndDrop(target10, { duration: 2000 });

        // await this.$checkOrder().click()
        