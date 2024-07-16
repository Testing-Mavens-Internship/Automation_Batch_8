export default class commonloc
{
    constructor()
    {
        
        this.$hdr=()=>$('(//slogan[text()="Innovation Inspired Automation!!"])[1]')
    }
   async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://selectorshub.com/xpath-practice-page/")
    }
}