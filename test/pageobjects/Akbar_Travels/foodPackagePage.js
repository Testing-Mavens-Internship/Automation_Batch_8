
import CommonPage from "./commonPage.js";
class FoodPackagePage extends CommonPage {

    constructor()
    {
        super();
        
       this.$foodPackageHeader = () => $('//h1[text()="Food Packages"]')
       this.$akbarRecommendCheckbox = () => $('//label[@for="webcheckbox_139"]')
       this.$FamilyWithKidsCheckbox = () => $('//label[@for="webcheckbox_140"]')
       this.$classicVietnam = () => $('//div[@class="headings"]/h2[text()="Classic Vietnam"]')
       this.$viewDetailsButton = (placeName) => $(`//h3[contains(text(), '${placeName}')]//ancestor::div[@class="right clickable-card"]//button[@class="book"]`);
    }

    /**
     * Check the checkboxes of the recommended packages.
     *  
     */

    async checkRecommended(){
        
        await this.$FamilyWithKidsCheckbox().waitForClickable({ timeout: 10000 });
        await this.$FamilyWithKidsCheckbox().click();
        await this.$akbarRecommendCheckbox().click();
      
      
    }
/**click on the view details button
 * 
 */
    async ClickOnViewDetailsButton() {
        
        await this.$viewDetailsButton('Classic Vietnam').click();
    }
    
    
}

export default new FoodPackagePage();