export default class Common
{
    constructor()
    {
        this.$header=()=>$('//span[text()="PLAYGROUND"]')
        this.$components=()=>$('//a[text()="Components"]')
        this.$$totalitem=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"])')
        this.$$totaldesc=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]/following-sibling::td)')
        this.$eachitem=(item)=>$(`(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"])[${item}]`)
        this.$eachdesc=(desc)=>(`(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]/following-sibling::td)[${desc}]`)
       
    
    }

    /**
     * Load URL
     */
    async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/")
        await browser.pause(3000)
    }       
}
