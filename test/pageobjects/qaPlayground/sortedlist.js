import {browser} from "@wdio/globals"
import obj from "../../test_data/new.json" assert{type:'json'}    // in order to import json file

class SortedList
{
    constructor()
    {
        this.$header=()=>$(`//h1[text()='10 Richest People']`)
        this.$names=(index)=>$(`(//ul[@id="draggable-list"]/li/descendant::p)[${index}]`)
        this.$$total=()=>$$(`//ul[@id="draggable-list"]/li/descendant::p`) //10
        this.$checkout=()=>$(`//button[@id="check"]`)
        this.$person=(i)=>$(`//p[text()='${i}']`)
        this.$position=(i)=>$(`//li[@data-index="${i}"]`)

    }
    async launchURL()
    {
        await browser.url('https://qaplayground.dev/apps/sortable-list/')
        await browser.maximizeWindow()
    }
    async dragandDrop()
    {
        const c=await this.$$total().length
        for(let i=0;i<=c;i++)
        {
            const source1= await this.$person(obj.People[i])
            const target1= await this.$position(i)
            source1.dragAndDrop(target1,{duration:3000})
            await this.$checkout().click()
        }    
    }
}
export default new SortedList()