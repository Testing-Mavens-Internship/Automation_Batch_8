import common from "./common.js";
class Food extends common{
    constructor(){
        super()
        this.$foodheader=()=>$(`//h1[normalize-space()="Food Packages"]`)
        this.$Akbarecommend=()=>$(`//label[normalize-space()="Akbar Recommended"]`)
        this.$familywithkids=()=>$(`//label[normalize-space()="Family with Kids"]`)
        this.$validateClassicVietanam=()=>$(`//h3[normalize-space()="Classic Vietnam"]`)
        this.$viewDetails=()=>$(`//a[@href="https://www.akbartravels.com/holidays/international-tour-packages/vietnam-tour-packages/classic-vietnam"]/button`)
        this.$packagePageHeader=()=>$(`//div[@class="header"]//following::h2[normalize-space()='Classic Vietnam']`)
        /**
         * Method to click on Akbarerecommended checkbox
         */
    }
    async clickOnAkbarRecommend(){
        await this.$Akbarecommend().click();
    }
    /**
     * Method to cick on Family with kids checkbox
     */
    async clickOnFamilyWithKids(){
        await this.$familywithkids().click();
    }

    /**
     * Method to click on view details 
     */

    async ClickOnViewDetails(){
        await this.$viewDetails().click();
    }
}
export default new Food();