 class Progress{
    constructor(){
        this.$startButton=()=>$(`//button[@id="startButton"]`);
        this.$progressBar=()=>$(`//div[@id="progressBar"]`);
        this.$stopButton=()=>$(`//button[@id="stopButton"]`);
    }
    /**
     * To load Url of the page
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('http://uitestingplayground.com/progressbar');
    }
    /**
     * To click start button
     */
    async clickStartButton(){
        await this.$startButton().click();
    }
    /**
     * To click stop button
     */
    async clickStopButton(){
        await this.$stopButton().click();
    }
    /**
     * 
     * @returns integer
     */
    async getProgressBarValue() {
            const progressBarText = await this.$progressBar().getText();
            return parseInt(progressBarText.replace('%', ''));
    }
    
    async waitForProgressBarToReach(value) {
        await browser.waitUntil(async () => {
            const progressValue = await this.getProgressBarValue();
            if (progressValue >= value) {
                await this.clickStopButton();
                return true;
            }
            return false;
        }, {
            timeout: 60000,
            timeoutMsg: `Progress bar did not reach in time`
        });

    }
}
export default new Progress();