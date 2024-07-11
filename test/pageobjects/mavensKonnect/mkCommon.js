export default class mkcommon
{
    constructor()
    {
        this.$header=()=>this.$header('//span[contains(text(),"MavenKonnect")]')
    }
    async loadurl()
    {
        await browser.maximizeWindow()
        await browser.url("https://demotmwebsite.github.io/")
        await this.$header().waitForDisplayed({timeout:5000})
    }
}