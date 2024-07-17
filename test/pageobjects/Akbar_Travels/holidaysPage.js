import CommonPage from "./commonPage.js";

class HolidaysPage extends CommonPage {

    constructor()
    {
        super();
        
       this.$clickOnFood = () => $('//a[@href="theme/food-packages/international-tour-packages"]')

    }

    /**
     * click on the  Food icon on the holiday page.
     */

    async clickOnFood()
    {
        
        await this.$clickOnFood().click();
    }

    
    
}

export default new HolidaysPage();