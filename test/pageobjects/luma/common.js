import {browser} from "@wdio/globals"
export default class Common
{
    constructor()
    {
        this.$logo=()=>$(`//a[@aria-label="store logo"]`)
        this.$sku1=()=>$(`//div[text()='MJ01']`)
        this.$details1=()=>$(`//div[@class="product attribute description"]/div/p[1]`)
        this.$sku2=()=>$(`//div[text()='MJ12']`)
        this.$details2=()=>$(`//div[@class="product attribute description"]/div/p[1]`)

        this.$men=()=>$(`//a[@id="ui-id-5"]`)
        this.$top=()=>$(`//a[@id="ui-id-17"]`)
        this.$jacket=()=>$(`//a[@id="ui-id-19"]`)
        this.$jacket_header=()=>$(`//span[text()='Jackets' and @data-ui-id="page-title-wrapper"]`)
    }
    async launchURL()
    {
        await browser.url('https://magento.softwaretestingboard.com/')
        await browser.maximizeWindow()
    }
}