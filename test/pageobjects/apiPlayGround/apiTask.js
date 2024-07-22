class Apitask
{
    constructor()
    {
        this.$header=()=>$('//span[text()="QA Playground"]')
    }

    /**
     * Load url
     */
    async loadurl()
    {
        await browser.maximizeWindow()
        await browser.url("https://qaplayground.dev/")
    }

    /**
     * Validate api response
     */
    {
        
    }
}
export default new Apitask()