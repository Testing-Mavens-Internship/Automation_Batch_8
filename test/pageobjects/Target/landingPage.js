import commonPage from "./commonPage.js";

class LandingPage extends commonPage {

    constructor() {
        super();
        this.$header=()=> $(`//a[@class="sc-676073c3-0 sc-7d77c0d1-0 fCfUJD cRBlGM"]`)
        this.$$navItemsCount=()=>$$(`//div[@class="sc-ab4ee1d1-4 idfyjy"]`)
        this.$navItems=(index)=>$(`(//div[@class="sc-ab4ee1d1-4 idfyjy"])[${index}]`)
        this.$searchBox=()=>$(`#search`)
        
    }

    async loadUrl() {
        await browser.url('https://www.target.com/')
        await browser.maximizeWindow()

        await this.$header().waitForDisplayed({
            timeout: 2000,
            timeoutMsg: "Header is not visible"
        })

    }
    async validateNavBar() {
        let navArray=[]
        for (let i = 1; i <= await this.$$navItemsCount().length; i++) {
            let item=await this.$navItems(i).getText();
            navArray.push(item)  
            await this.$navItems(i).waitForDisplayed({timeout:5000,timeoutMsg:"Item is not visible"})  
            }
            return navArray
        }
    async clickSearch(item) {
        await this.$searchBox().waitForDisplayed({timeout:5000,timeoutMsg:"Search box is not visible"})
        await this.$searchBox().click()
        await this.$searchBox().setValue(item)
    }
                
}

export default new LandingPage()