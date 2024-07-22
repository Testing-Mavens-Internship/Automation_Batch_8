export class ProgressBar{
    constructor(){
        this.$startButton=()=>$(`//button[@onclick="Start()"]`);
        this.$stopButton=()=>$(`//button[@onclick="Stop()"]`);
        this.$progressBar=()=>$(`//div[@id="progressBar"]`);
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("http://uitestingplayground.com/progressbar")
    }
    async loadProgressBar(){
        await this.$startButton().click()
        const progress=await this.$progressBar();
        await browser.waitUntil(async()=> {
         const progressPercentage=await progress.getAttribute('aria-valuenow')
         return progressPercentage.includes('75')
            
        }, {
            timeout: 50000,
        });
        await this.$stopButton().click();
            
      
       await browser.pause(5000);
    }
}
export default new ProgressBar();