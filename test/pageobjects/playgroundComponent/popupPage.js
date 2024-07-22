import CommonPage from "./commonPage.js";
class PopupPage extends CommonPage{
    constructor(){
        super();
        this.$popUpWindow = () => $('//button[text()="Open Pop Window"]');
        this.$popUpContent=()=>$('//div[@class="bg-white rounded-lg p-6"]//p');
        this.$close=()=>$('//button[text()="Close"]');
    }
    /**
     * validating the popup message
     */

    async clickPopup(){ 
        await this.$popUpWindow().click()
        await this.$close().click();
    }
}
export default new PopupPage();