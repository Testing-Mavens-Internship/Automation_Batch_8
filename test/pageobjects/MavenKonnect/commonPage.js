export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//span[normalize-space()="MavenKonnect"]')

    }

    async loadUrl()
    {
        await browser.url('https://demotmwebsite.github.io/')
        await browser.maximizeWindow()
    }
}
