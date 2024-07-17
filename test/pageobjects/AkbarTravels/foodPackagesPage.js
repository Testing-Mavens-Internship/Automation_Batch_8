import common from "./commonPage.js";

class FoodPackages extends common {
    constructor() {
        super();
        this.$foodPackagesHeader = () => $(`//div[@class="top"]/h1`);
        this.$akbarRecommended = () => $(`//li[@class="themes39"]//div[@class="checkbox"]`);
        this.$familyWithKids = () => $(`//li[@class="themes40"]//div[@class="checkbox"]`);
        // this.$viewDetails = (city) => $(`//h3[text()="${city}"]/parent::div/following-sibling::div//button[@class="book"]`);
        this.$viewDetails = (city) => $(`//h3[normalize-space()="${city}"]//ancestor::div[@class="wrapper "]//button`);
        // this.$viewDetails = () => $(`//*[@id="itin2"]/div[3]/div[2]/div[1]/div[2]/a/button`);
    }
async checkAkbarRecommended(){
    await this.$akbarRecommended().click();
    await this.$familyWithKids().click();
}
async clickOnFirstFoodPackageViewDetails(){
    let cityname = "Classic Vietnam";
    await this.$viewDetails(cityname).click();
}
}
export default new FoodPackages();
