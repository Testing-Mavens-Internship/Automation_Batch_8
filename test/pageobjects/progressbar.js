import {browser} from "@wdio/globals"

class ProgressBar
{
    constructor()
    {
        this.$header=()=>$(`//h3[text()='Progress Bar']`)
        this.$start=()=>$(`//button[@id="startButton"]`)
        this.$stop=()=>$(`//button[@id="stopButton"]`)
        this.$progress=()=>$(`//div[@id="progressBar"]`)
        this.$result=()=>$(`p#result`)
    }
    async launchURL()
    {
        await browser.url('http://uitestingplayground.com/progressbar')
        await browser.maximizeWindow()
    }
    async progressFunction()
    {
        await this.$start().click()
        const progresstext= await this.$progress().getText()
        const p=parseInt(progresstext.replace('%',''))

        await browser.waitUntil(async()=>{
            if(p>=75)
            {
                await this.$stop().click()
                return true
            }
           return false

        },{timeout:8000,timeoutMsg:'Progress bar didnt reach on time'})
    }
}
export default new ProgressBar()