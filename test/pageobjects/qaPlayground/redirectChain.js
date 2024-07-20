import tests from "../../test-data/testone.json" assert{type:'json'}
class Chain
{
    constructor()
    {
        this.$redirectbutton=()=>$('//a[@id="redirect"]')
        this.$chainheader=()=>$('//a[text()="Start Redirection chain"]')
        this.$pages=(Text)=>$(`//p[text()="${Text}"]`)
        // this.$thirdpage=()=>$('//p[text()="Welcome to Third Page"]')
        // this.$fourthpage=()=>$('//p[text()="Welcome to Fourth Page"]')
        this.$chainvalidater=()=>$('//a[@class="btn btn-green"]')
        this.$page=(url)=>$(`https://qaplayground.dev/apps/redirect/["${url}"]`)
        this.$lastpage=()=>$('//p[text()="Welcome to the Last Page"]')
    }

    /**
     * load url
     */
    async loadurl()
    {
        await browser.maximizeWindow()
        await browser.url("https://qaplayground.dev/apps/redirect/")
    }

        /**
         * redirect to the page
         */
    async chainredirect()
    {
        await this.$redirectbutton().click();
        for(let pg of tests.Pages)
            {
                await this.$pages(pg).waitForDisplayed({reverse:true,timeout:5000})
            }

    }
}
export default new Chain()
