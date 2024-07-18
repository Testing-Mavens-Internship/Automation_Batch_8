class StartStop {

    constructor()
    {
        this.$header=()=> $('//a[text()="UITAP"]')
        this.$start=()=> $('//button[@id="startButton"]')
        this.$stop=()=> $('//button[@id="stopButton"]')
        this.$slider=()=> $('//div[text()="75%"]')
        //this.$progressBar=()=> $('//div[@id="progressBar"]')
        this.$result=()=> $('//p[text()="Result: 0, duration: 17603"]')
    }

    async loadUrl()
    {
        await browser.url('http://uitestingplayground.com/progressbar')
        await browser.maximizeWindow()
    }

    async progressBarValidation()
    {
        await this.$start().click()
        const progressBar = await $('#progressBar')

        let progressValue = 0
        while (progressValue < 75) 
        {
            progressValue = await progressBar.getAttribute('aria-valuenow');
            progressValue = parseInt(progressValue);
            console.log(`Current progress: ${progressValue}%`);
        }
        await this.$stop().click()
        await browser.pause(3000); 
    }
}

export default new StartStop()
