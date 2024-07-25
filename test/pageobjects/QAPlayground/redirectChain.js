import CommonPage from "./commonPage.js";

class RedirectChain extends CommonPage {

    constructor()
    {
        super()
        this.$redirectChainOption=()=> $('//h3[text()="Redirect Chain"]')
        this.$button=()=> $('//a[text()="Start Redirection chain"]')
        this.$goBack=()=> $('//a[text()="Go Back"]')
        this.$pages=(Text)=>$(`//p[text()="${Text}"]`)
    }

    async selectRedirectChainOption()
    {
        await this.$redirectChainOption().click()
        await this.$button().waitForDisplayed({ timeout: 5000 })
    }

    async chain()
    {
        await this.$button().click()
        const pages = ["Welcome to Second Page","Welcome to Third Page","Welcome to Fourth Page",
            "Welcome to Fifth Page","Welcome to Sixth Page"]

        //using for of loop
        for(let pg of pages)
            {
                await this.$pages(pg).waitForDisplayed({timeout:5000, reverse:true})
            }
            await browser.pause(5000)

        //using for each loop  
        // pages.forEach((item) => {
            //     redirectChain.$pages(item).waitForDisplayed({timeout:5000, reverse:true})
            // })
    }
}

export default new RedirectChain()
