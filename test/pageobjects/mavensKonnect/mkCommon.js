export default class mkcommon
{
    constructor()
    {
        this.$landheader=()=>$('//a[text()="Contact Us"]')
     
    }
    async loadurl()
    {
        await browser.maximizeWindow()
        await browser.url("https://demotmwebsite.github.io/")
    }
}