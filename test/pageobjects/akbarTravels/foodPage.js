import CommonPage from "./commonPage.js";

class FoodPage extends CommonPage{
    constructor(){
        super();
        this.$foodHeader=()=>$('//h1[text()="Food Packages"]')
        this.$akbarRecommended=()=>$('//label[@for="webcheckbox_139"]')
        this.$familyWithKids=()=>$('//label[@for="webcheckbox_140"]')
        this.$sortHeader=()=>$('//li[normalize-space()="Akbar Choice"]')
        this.$viewDetails=(name)=>$(`//h3[normalize-space()="${name}"]//ancestor::div[@class="wrapper "]//button[@class="book"]`)
    }
    /**
     * to select akbar recommended and family with kids from recommended for section
     */
    async selectRecommend(){
        await this.$akbarRecommended().waitForDisplayed({timeout:10000,timeoutMsg: 'page is not visible'});
        await this.$akbarRecommended().click();
        await this.$familyWithKids().click();
    }
    /**
     * to view details of the package
     * @returns packageName
     */
    async viewDetails(){
        await this.$viewDetails().waitForDisplayed({timeout:10000,timeoutMsg: 'page is not visible'});
        let packageName='Classic Vietnam';
        await this.$viewDetails(packageName).click()
        return packageName;
    }

    
}
export default new FoodPage();