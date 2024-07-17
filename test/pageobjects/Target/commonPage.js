export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//div[@id="@web/component-header"]/div/div/a[1]')
        this.$allHeaders=(n)=>$(`//a[text()='${n}']`)
        this.$searchBar=()=> $('//input[@placeholder="What can we help you find?"]')
        this.$searchButton=()=> $('//button[text()="search"]')
    }

    async loadUrl()
    {
        await browser.url('https://www.target.com/')
        await browser.maximizeWindow()
    }
}
