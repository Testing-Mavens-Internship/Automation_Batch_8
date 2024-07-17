import Common from "./common.js";

class HomePage extends Common
{
    constructor()
    {
        super()
        this.$holiday=()=>$(`//ul[@class="mainmenu ng-star-inserted"]/li[4]`)
        this.$holiday_header=()=>$(`//h1[text()='Book Domestic and International Holiday Packages']`)    
    }

    async selectHoliday()
    {
        await this.$holiday().click()
        const handles=await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
    }
    // async notification()
    // {
    //     await this.$notification().click()
    // }
}
export default new HomePage()