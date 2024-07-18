import CommonPage from "./commonPage.js";

class ComponentsPage extends CommonPage {

    constructor()
    {
        super()
        this.$compHeader=()=> $('//h1[text()="Explore Components"]')

        this.$popWinComp=()=> $('//a[@href="/components/pop-window"]')
        this.$openPopWin=()=> $('//button[text()="Open Pop Window"]')
        this.$popWinMsg=()=> $('//p[text()="This is the content of the Pop Window. You can put any content here."]')

        this.$tableComp=()=> $('//a[@href="/components/table"]')
        this.$tableID=()=>$('//th[text()="ID"]')
        this.$tableName=()=>$('//th[text()="Name"]')
        this.$$totalItem=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"])')
        this.$$totalDesc=()=>$$('(//td[@class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"]/following-sibling::td)')

        this.$loadAnimComp=()=> $('//a[@href="/components/loading-animation"]')
        this.$animation=()=>$('//div[@class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"]')
        this.$loadAnimMsg=()=> $('//h1[text()="Content Loaded!"]')

        this.$toolTipComp=()=> $('//a[@href="/components/tooltip"]')
        this.$hoverButton=()=> $('//button[text()="Hover me"]')
        this.$hoverMsg=()=> $('//div[text()="Tooltip text here"]')

        this.$sliderComp=()=> $('//a[@href="/components/slider"]')
        this.$slider=()=>$('//input[@type="range"]')
        this.$value0=()=> $('//input[@value="0"]')
        this.$value100=()=> $('//input[@value="100"]')

        this.$uploadComp=()=> $('//a[@href="/components/upload"]')
        this.$chooseFile=()=> $('//input[@type="file"]')
        this.$filename=()=>$(`//p[text()='Bug_ID#2.PNG']`)
    }

    /**
     * Clicking on Pop Window Component
     */
    async popWindowComponent()
    {
        await this.$popWinComp().click()
        await this.$openPopWin().waitForDisplayed({timeout:5000})
        await this.$openPopWin().click()
    }

    /**
     * Clicking on Table Component
     */
    async tableComponent()
    {
        await this.$components().click()
        await this.$tableComp().click()
        await this.$tableID().waitForDisplayed({timeout:5000})
        let totalItems=await this.$$totalItem().length;
        let totalDescs=await this.$$totalDesc().length;

    }

    /**
     * Clicking on Loading Animation Component
     */
    async loadingAnimationComponent()
    {
        await this.$components().click()
        await this.$loadAnimComp().click()
        await this.$animation().waitForDisplayed({reverse:true})
    }

    /**
     * Clicking on Tooltip Component
     */
    async tooltipComponent()
    {
        await this.$components().click()
        await this.$toolTipComp().click()
        await this.$hoverButton().waitForDisplayed({timeout: 5000})
        await this.$hoverButton().moveTo()
    }

    /**
     * Clicking on Slider Component
     */
    async sliderComponent()
    {
        await this.$components().click()
        await this.$sliderComp().click()
    }
    async slideToZero() 
    {
        const slide = await this.$slider();
        const slidersize=await slide.getSize();
        await slide.dragAndDrop({x: -slidersize.width,y:0})
        await browser.pause(1000)
    }
    async slideToFull()
    {
        const slide = await this.$slider();
        const slidersize=await slide.getSize();
        await slide.dragAndDrop({x: slidersize.width,y:0})
        await browser.pause(1000)
    }

    /**
     * Clicking on Upload Component
     */
    async uploadComponent()
    {
        await this.$components().click()
        await this.$uploadComp().click()
        const filePath='upload/Bug_ID#2.PNG'
        const remoteFilePath=await browser.uploadFile(filePath)
        await this.$chooseFile().setValue(remoteFilePath)

        let c=await this.$filename().getText()
        if(c==='Bug_ID#2.PNG')
        {
            return true
        }
        else
        {
            return false
        }
    }

}

export default new ComponentsPage()
