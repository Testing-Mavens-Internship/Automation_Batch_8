class Progress {
    constructor() {
        this.$progressBar = () => $('#progressBar'); 
        this.$landingPageHeader = () => $('//h3[text()="Progress Bar"]');
        this.$startButton = () => $('//button[@id="startButton"]');
        this.$stopButton = () => $('//button[@id="stopButton"]');
    }

    async loadUrl() {
        await browser.maximizeWindow();
        await browser.url("http://uitestingplayground.com/progressbar");
    }

    async StartAndStop() {
        await this.$startButton().click();
        await this.$progressBar().waitUntil(async function() {
            const movement = parseInt(await this.getAttribute('aria-valuenow'), 10);
            return (movement >= 75 && movement < 76);
        }, {
            timeout: 50000,
            timeoutMsg: "Failed waiting for progressBar to reach 75%"
        });
        await this.$stopButton().click();
        await browser.pause(10000);
    }
}

export default new Progress();
