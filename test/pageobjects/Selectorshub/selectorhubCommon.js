export default class CommonSelectorhub{
    constructor(){
        this.$pageheader=()=>$(`//a[text()="Find out how to automate these controls without XPath"]`)

    }
    async Loadurl(){
        await browser.url("https://selectorshub.com/xpath-practice-page/")
        await browser.maximizeWindow();
    }
}