class timerPage {
   

    constructor() {
        super();
        this.$startButton = () => $(`//button[@id="startButton"]`);
        this.$stopButton = () => $(`//button[@id="stopButton"]`);
        this.$progressBar = () => $(`//div[@id="progressBar"]`);
    }

    async loadUrl() {
        await browser.url(`http://uitestingplayground.com/progressbar`);
        await browser.maximizeWindow();
        await this.$progressBar().waitForDisplayed({
            timeout: 2000,
            timeoutMsg: "ProgressBar is not visible",
        });
    }

    async clickStart() {
        await this.$startButton().click();
    }

    async clickStopAt75() {
        await browser.waitUntil(
            async () => {
                const progressBar = await this.$progressBar();
                const width = await progressBar.getAttribute('style');
                const progressValue = parseInt(width.match(/width: (\d+)%/)[1], 10);
                return progressValue >= 75;
            },
            {
                timeout: 10000,
                timeoutMsg: "Progress bar did not reach 75% in time",
                interval: 100,
            }
        );
        await this.$stopButton().click();
    }

    async getProgressBarValue() {
        const progressBar = await this.$progressBar();
        const width = await progressBar.getAttribute('style');
        return parseInt(width.match(/width: (\d+)%/)[1], 10);
    }
}

export default new timerPage();