import tests from "../../test-data/testone.json" assert {type:'json'}
class sort
{
    constructor()
    {
        this.$sortnavigator=()=>$('//h3[text()="Sortable List"]')
        this.$header=()=>$('//h1[text()="10 Richest People"]')
        this.$index=(pos)=>$(`//li[@data-index="${pos}"]`)
        this.$$allperson=()=>$$('(//p[@class="person-name"])')
        this.$person=(name)=>$(`(//p[@class="person-name"])[${name}]`)
        this.$button=()=>$('//button[@id="check"]')
        this.$name=(nm)=>$(`//p[text()="${nm}"]`)
    }

    async loadurl()
    {
     await browser.maximizeWindow()
     await browser.url("https://qaplayground.dev/")
     await this.$sortnavigator().click() 
    }

    async sort()
    {
        
        // for(let i=1;i<=await this.$$allperson().length;i++)
        // {
        //     let item=await this.$person(i).getText();
        //     tests.Name.push(item)
        // }
        // console.log("bbbbbbb",tests.Name)
        for(let i=0;i<await this.$$allperson().length;i++)
        {
        const source=await this.$name(tests.Name[i])
        const target=await this.$person(i+1)
        source.dragAndDrop(target,{duration:5000})
        // await this.$button().waitForDisplayed({timeout:2000})
        }
        await this.$button().click()
        await browser.pause(5000)
}
}
export default new sort()